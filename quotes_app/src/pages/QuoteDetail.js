import { useEffect } from "react"
import {useParams,Route,Link,useRouteMatch} from "react-router-dom"

import Comments from "../components/comments/Comments"
import HighlightedQuote from "../components/quotes/HighlightedQuote"
import useHttp from "../hooks/use-http"
import {getSingleQuote} from "../lib/api"
import NoQuotesFound from "../components/quotes/NoQuotesFound"
import LoadingSpinner from "../components/UI/LoadingSpinner"

const QuotesDetail = () => {

    const {sendRequest,status,data:loadedQuote,error} = useHttp(getSingleQuote,true)
    const match = useRouteMatch()
    const params = useParams()

    const {quoteId} = params

    useEffect(()=>{
        sendRequest(quoteId)
    },[sendRequest,quoteId])

    if(status === "pending") return <LoadingSpinner />

    if(status === "completed" && (!loadedQuote || loadedQuote.length === 0)) return <NoQuotesFound />

    if(error) return <p className="centered focused">{error}</p>

    return(
        <section>
            <HighlightedQuote 
                text={loadedQuote.text}
                author={loadedQuote.author}
            />
            <Route path={`${match.path}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments quoteId={loadedQuote.id} />
            </Route>
        </section>
    )
}

export default QuotesDetail