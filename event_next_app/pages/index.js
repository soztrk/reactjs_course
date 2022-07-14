import { getFeaturedEvents } from "../dummy-data"
import EventList from "../components/EventList"
import AlertBox from "../components/AlertBox/AlertBox"

export default () => {
  const featuredEvents = getFeaturedEvents()

  if(!featuredEvents) return <AlertBox>No events found!</AlertBox>

  return <EventList items={featuredEvents} />
}
