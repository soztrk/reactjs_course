import {Redirect, Route,Switch} from "react-router-dom"
import NewQuote from "./pages/NewQuote"
import QuotesDetail from "./pages/QuoteDetail"
import Quotes from "./pages/Quotes"
import Layout from "./components/layout/Layout"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuotesDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
