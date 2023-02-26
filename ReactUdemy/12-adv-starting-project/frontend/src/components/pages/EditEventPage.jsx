import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../EventForm";

const EditEventPage = () => {
  const response = useRouteLoaderData("event-detail");
  return <EventForm event={response.event} />;
};

export default EditEventPage;
