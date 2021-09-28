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

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={configureStore(initialState)}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Switch>
              <Route path="/login" exact>
                <LoginPage />
              </Route>
              <Layout>
                <ProtectedRoute path="/employees" exact>
                  <EmployeesListPageContainer />
                </ProtectedRoute>
                <Route path="/employees/:employeeId">
                  <EmployeePageContainer />
                </Route>
                <Route path="/finishedTasks" exact>
                  <FinishedTasksPageContainer />
                </Route>
                <Route path="/machines" exact>
                  <MachinesHomePageContainer />
                </Route>
                <Route path="/machines/:machineName">
                  <MachinePageContainer />
                </Route>
                <Route path="/" exact>
                  <p>Not found</p>
                </Route>
              </Layout>
            </Switch>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
