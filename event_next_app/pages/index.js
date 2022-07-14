import { getFeaturedEvents } from "../dummy-data"
import EventList from "../components/EventList"

export default () => {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}
