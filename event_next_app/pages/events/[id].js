import {useRouter} from "next/router"

import { getEventById } from "../../dummy-data"
import EventSummary from "../../components/event-detail/event-summary"
import EventLogistics from "../../components/event-detail/event-logistics"
import EventContent from "../../components/event-detail/event-content"
import AlertBox from "../../components/AlertBox/AlertBox"

export default () => {

    const router = useRouter()

    const event = getEventById(router.query.id)

    if(!event) return <AlertBox>Event not found!</AlertBox>

    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics 
                date={event.date} 
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}