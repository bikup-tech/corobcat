import Layout from "./components/Layout/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/">
              <p>Hola</p>
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
