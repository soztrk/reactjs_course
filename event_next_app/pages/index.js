import Head from "next/head"

import { getFeaturedEvents } from "../helpers/apiUtils"
import EventList from "../components/EventList"
import AlertBox from "../components/AlertBox/AlertBox"

export default (props) => {

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
