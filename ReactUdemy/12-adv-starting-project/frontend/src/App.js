import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
import Root from "./components/layout/Root";
import EditEventPage from "./components/pages/EditEventPage";
import EventDetailPage, {
  loader as eventDetailLoader,
  deleteEventAction,
} from "./components/pages/EventDetailPage";
import EventsPage, {
  loader as eventsLoader,
} from "./components/pages/EventsPage";
import HomePage from "./components/pages/HomePage";
import NewEventPage, { newEventAction } from "./components/pages/NewEventPage";
import Event from "./components/layout/Event";
import ErrorPage from "./components/pages/ErrorPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <Event />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventsLoader,
              action: deleteEventAction,
            },
            {
              path: ":eventId",
              id: "event-detail",
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                },
                { path: "edit", element: <EditEventPage /> },
              ],
            },
            { path: "new", element: <NewEventPage />, action: newEventAction },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
