import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { TInitialState } from "../../redux/store/initialState";

interface IProtectedRouteProps {
  path: string;
  component: any;
  exact?: boolean;
}

function ProtectedRoute(props: IProtectedRouteProps) {
  const { path, component: Compo, exact, ...rest } = props;
  const user = useSelector((state: TInitialState) => state.authReducer.user);

  return (
    <Route
      path={path}
      exact={exact}
      {...rest}
      render={(props) => (user ? <Compo {...props} /> : <Redirect to="/" />)}
    />
  );
}

export default ProtectedRoute;
