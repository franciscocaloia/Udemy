import React from "react";
import { Outlet } from "react-router-dom";
import EventsNavigation from "../EventsNavigation";

const Event = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default Event;
