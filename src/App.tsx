import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// pages
import EmployeesPageContainer from "./pages/EmployeesPage/EmployeesPageContainer";
import MachinePageContainer from "./pages/MachinePage/MachinePageContainer";

// components
import Layout from "./components/Layout/Layout";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/:machineName">
              <Route path="/employees" exact>
                <EmployeesPageContainer />
              </Route>
                <MachinePageContainer />
              </Route>
              <Route path="/" exact>
                <p>Not found</p>
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
