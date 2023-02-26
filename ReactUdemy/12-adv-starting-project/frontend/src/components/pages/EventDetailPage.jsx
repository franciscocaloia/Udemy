import React from "react";
import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../EventItem";

const EventDetailPage = () => {
  const response = useRouteLoaderData("event-detail");
  return <EventItem event={response.event} />;
};

export default EventDetailPage;

export async function loader({ params }) {
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId
  );
  if (!response.ok) {
    throw json({ message: "Could not fetch event details" }, { status: 500 });
  } else {
    return response;
  }
}

export async function deleteEventAction({ request, params }) {
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId,
    { method: "DELETE" }
  );
  if (!response.ok) {
    throw json({ message: "Could not delete event" }, { status: 500 });
  } else {
    return redirect("/events");
  }
}
