import React from "react";
import { json, redirect } from "react-router-dom";
import EventForm from "../EventForm";

const NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;

export async function newEventAction({ request, params }) {
  const formData = await request.formData();
  const newEvent = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    description: formData.get("description"),
  };
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEvent),
  });
  console.log(newEvent);
  if (!response.ok) {
    throw json({ message: "Could not send event data" }, { status: 500 });
  }
  return redirect("/events");
}
