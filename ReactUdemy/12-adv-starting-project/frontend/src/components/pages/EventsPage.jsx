// import { useEffect, useState } from "react";
import { json, useLoaderData } from "react-router-dom";

import EventsList from "../EventsList";

function EventsPage() {
  const response = useLoaderData();

  return <EventsList events={response.events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json(
      { message: "Could not fetch events" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
