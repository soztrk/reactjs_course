import {useRouter} from "next/router"
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/EventList";
import ResultsTitle from "../../components/results-title/results-title"

export default () => {

    const router = useRouter()

    const filterData = router.query.slug;

    if(!filterData){
        return <p className="center">Loading...</p>
    }

    const filteredYear = Number(filterData[0])
    const filteredMonth = Number(filterData[1])

    if(
        isNaN(filteredYear) ||
        isNaN(filteredMonth) ||
        filteredYear > 2022 ||
        filteredYear < 2021 ||
        filteredMonth < 1 ||
        filteredMonth > 5
    ){
        return <p className="center">Invalid fiter data!</p>
    }

    const filteredEvents = getFilteredEvents({year:filteredYear,month:filteredMonth})

    if(filteredEvents.length === 0) return <p className="center">No events found!</p>

    const date = new Date(filteredYear,filteredMonth - 1)

    return (
        <>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </>
        
    )
}