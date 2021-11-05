import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  ROUTE_ADMIN_PROFILE,
  ROUTE_EMPLOYEES,
  ROUTE_EMPLOYEES_ID,
  ROUTE_FINISHEDTASKS,
  ROUTE_LOGIN,
  ROUTE_MACHINES,
  ROUTE_MACHINES_NAME,
} from "./routes/routes";

import AdminProfilePageContainer from "./pages/AdminProfilePage/AdminProfilePageContainer";
import AppInit from "./components/AppInit/AppInit";
import CreateTaskDialog from "./components/CreateTaskDialog/CreateTaskDialogContainer";
import EmployeePageContainer from "./pages/EmployeePage/EmployeePageContainer";
// pages
import EmployeesListPageContainer from "./pages/EmployeesListPage/EmployeesListPageContainer";
import FinishedTasksPageContainer from "./pages/FinishedTasksPage/FinishedTasksPageContainer";
// components
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import MachinePageContainer from "./pages/MachinePage/MachinePageContainer";
import MachinesHomePageContainer from "./pages/MachinesHomePage/MachinesHomePageContainer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { Provider } from "react-redux";
import SuperProtectedRoute from "./components/SuperProtectedRoute/SuperProtectedRoute";
import { Toaster } from "react-hot-toast";
import configureStore from "./redux/store/configureStore";
import { initialState } from "./redux/store/initialState";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={configureStore(initialState)}>
        <QueryClientProvider client={queryClient}>
          <AppInit />
          <BrowserRouter basename="/corobcat">
            <Switch>
              <Route path={ROUTE_LOGIN} exact>
                <LoginPage />
              </Route>
              <Layout>
                <ProtectedRoute
                  path={ROUTE_EMPLOYEES}
                  exact
                  component={EmployeesListPageContainer}
                />
                <ProtectedRoute
                  path={ROUTE_EMPLOYEES_ID}
                  component={EmployeePageContainer}
                />
                <ProtectedRoute
                  path={ROUTE_FINISHEDTASKS}
                  component={FinishedTasksPageContainer}
                />
                <ProtectedRoute
                  path={ROUTE_MACHINES}
                  exact
                  component={MachinesHomePageContainer}
                />
                <ProtectedRoute
                  path={ROUTE_MACHINES_NAME}
                  component={MachinePageContainer}
                />
                <SuperProtectedRoute
                  path={ROUTE_ADMIN_PROFILE}
                  component={AdminProfilePageContainer}
                />
              </Layout>
            </Switch>
          </BrowserRouter>

          <CreateTaskDialog />
        </QueryClientProvider>
        <Toaster
          toastOptions={{
            duration: 3000,
          }}
        />
      </Provider>
    </>
  );
}

export default App;
