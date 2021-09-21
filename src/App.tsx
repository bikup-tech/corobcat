import Layout from "./components/Layout/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MachinePageContainer from "./pages/MachinePage/MachinePageContainer";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import FinishedTasksPage from "./pages/FinishedTasksPage/FinishedTasksPage";
import FinishedTasksPageContainer from "./pages/FinishedTasksPage/FinishedTasksPageContainer";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/finishedTasks" exact>
                <FinishedTasksPageContainer />
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
