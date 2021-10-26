import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import { initialState } from "./redux/store/initialState";

// pages
import EmployeesListPageContainer from "./pages/EmployeesListPage/EmployeesListPageContainer";
import MachinePageContainer from "./pages/MachinePage/MachinePageContainer";
import EmployeePageContainer from "./pages/EmployeePage/EmployeePageContainer";
import FinishedTasksPageContainer from "./pages/FinishedTasksPage/FinishedTasksPageContainer";
import LoginPage from "./pages/LoginPage/LoginPage";

// components
import Layout from "./components/Layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import MachinesHomePageContainer from "./pages/MachinesHomePage/MachinesHomePageContainer";
import CreateTaskDialog from "./components/CreateTaskDialog/CreateTaskDialogContainer";
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
import SuperProtectedRoute from "./components/SuperProtectedRoute/SuperProtectedRoute";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={configureStore(initialState)}>
        <QueryClientProvider client={queryClient}>
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
      </Provider>
    </>
  );
}

export default App;
