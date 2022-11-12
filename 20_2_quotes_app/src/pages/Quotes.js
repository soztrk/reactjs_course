import { useEffect } from "react"

import QuoteList from "../components/quotes/QuoteList"
import LoadingSpinner from "../components/UI/LoadingSpinner"
import NoQuotesFound from "../components/quotes/NoQuotesFound"
import useHttp from "../hooks/use-http"
import {getAllQuotes} from "../lib/api"

const Quotes = () => {

    const {sendRequest,status,data:loadedQuotes,error} = useHttp(getAllQuotes,true)

    useEffect(()=>{
        sendRequest()
    },[sendRequest])

    if(status === "pending") return <LoadingSpinner />

    if(status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) return <NoQuotesFound />

    if(error) return <p className="centered focused">{error}</p>

    return(
        <QuoteList quotes={loadedQuotes} />
    )
}

export default Quotes