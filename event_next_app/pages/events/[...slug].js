import {useRouter} from "next/router"
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/EventList";
import ResultsTitle from "../../components/results-title/results-title"
import AlertBox from "../../components/AlertBox/AlertBox"

export default () => {

    const router = useRouter()

    const filterData = router.query.slug;

    if(!filterData){
        return <AlertBox>Loading...</AlertBox>
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
        return <AlertBox>Invalid fiter data!</AlertBox>
    }

    const filteredEvents = getFilteredEvents({year:filteredYear,month:filteredMonth})

    if(filteredEvents.length === 0) return <AlertBox>No events found!</AlertBox>

    const date = new Date(filteredYear,filteredMonth - 1)

    return (
        <>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </>
        
    )
}