import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { TInitialState } from "../../redux/store/initialState";

interface IProtectedRouteProps {
  path: string;
  component: any;
  exact: boolean;
  rest: any;
}

function ProtectedRoute(props: IProtectedRouteProps) {
  const { path, component: Compo, exact, ...rest } = props;
  const user = useSelector((state: TInitialState) => state.authReducer.user);

  let access = Object.keys(user).length > 0;

  return (
    <Route
      path={path}
      exact={exact}
      {...rest}
      children={(props) =>
        access ? <Compo {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default ProtectedRoute;
