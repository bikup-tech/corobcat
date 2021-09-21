import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// pages
import EmployersPageContainer from "./pages/EmployersPage/EmployersPageContainer";
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
              <Route path="/employees" exact>
                <EmployersPageContainer />
              </Route>
              <Route path="/:machineName">
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
