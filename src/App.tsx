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
import CreateTaskDialog from "./components/CreateTaskDialog/CreateTaskDialog";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={configureStore(initialState)}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter basename="/corobcat">
            <Switch>
              <Route path="/" exact>
                <LoginPage />
              </Route>
              <Layout>
                <ProtectedRoute
                  path="/employees"
                  exact
                  component={EmployeesListPageContainer}
                />
                <ProtectedRoute
                  path="/employees/:employeeId"
                  component={EmployeePageContainer}
                />
                <ProtectedRoute
                  path="/finishedTasks"
                  component={FinishedTasksPageContainer}
                />
                <ProtectedRoute
                  path="/machines"
                  exact
                  component={MachinesHomePageContainer}
                />
                <ProtectedRoute
                  path="/machines/:machineName"
                  component={MachinePageContainer}
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
