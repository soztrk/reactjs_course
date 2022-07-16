import { getFeaturedEvents } from "../helpers/apiUtils"
import EventList from "../components/events/EventList"
import AlertBox from "../ui/AlertBox/AlertBox"

export default function HomePage(props){

  if(!props.events) return <AlertBox>No events found!</AlertBox>

  return <EventList items={props.events} />
}

export const getStaticProps = async () => {

  const featuredEvents = await getFeaturedEvents()

  return {
    props : {
      events:featuredEvents
    },
    revalidate:3600
  }
}
