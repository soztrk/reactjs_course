import {useRouter} from "next/router"
import { getAllEvents } from "../../dummy-data"
import EventList from "../../components/EventList"
import EventSearch from "../../components/event-detail/EventSearch"
import AlertBox from "../../components/AlertBox/AlertBox"

export default () => {

    const router = useRouter()
    const events = getAllEvents()

    const findEventHandler = (year,month) => {
        router.push(`/events/${year}/${month}`) 
    }

    if(!events) return <AlertBox>No events found!</AlertBox>

    return(
        <>
            <EventSearch onSearch={findEventHandler} />
            <EventList items={events} />
        </>
        
    )
}