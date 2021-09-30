import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

interface IProtectedRouteProps {
  path: string;
  children: any;
  exact: boolean;
  rest: any;
}

function ProtectedRoute(props: IProtectedRouteProps) {
  const { path, children: Compo, exact, ...rest } = props;
  const access = useSelector((state: any) => state.authReducer?.user);

  return (
    <Route path={path} exact={exact} {...rest}>
      {access ? <Compo {...props} /> : <Redirect to="/" />}
    </Route>
  );
}

export default ProtectedRoute;
