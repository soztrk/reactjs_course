import React,{Suspense} from "react"
import {Redirect, Route,Switch} from "react-router-dom"

import Layout from "./components/layout/Layout"
import LoadingSpinner from "./components/UI/LoadingSpinner"

const NewQuote = React.lazy(()=>import('./pages/NewQuote'))
const QuotesDetail = React.lazy(()=>import('./pages/QuoteDetail'))
const NotFound = React.lazy(()=>import('./pages/NotFound'))
const Quotes = React.lazy(()=>import('./pages/Quotes'))

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    </Layout>
  );
}

export default App;
