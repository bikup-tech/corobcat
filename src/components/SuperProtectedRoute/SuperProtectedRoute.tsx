import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { TInitialState } from "../../redux/store/initialState";
import { ROUTE_LOGIN, ROUTE_MACHINES } from "../../routes/routes";

interface ISuperProtectedRouteProps {
  path: string;
  component: any;
  exact?: boolean;
}

function SuperProtectedRoute(props: ISuperProtectedRouteProps) {
  const { path, component: Compo, exact, ...rest } = props;
  const user = useSelector((state: TInitialState) => state.authReducer.user);

  return (
    <Route
      path={path}
      exact={exact}
      {...rest}
      render={(props) =>
        user ? (
          user.role === 0 ? (
            <Compo {...props} />
          ) : (
            <Redirect to={ROUTE_MACHINES} />
          )
        ) : (
          <Redirect to={ROUTE_LOGIN} />
        )
      }
    />
  );
}

export default SuperProtectedRoute;
