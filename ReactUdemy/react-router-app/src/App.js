import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./components/welcome";
function App() {
  const router = createBrowserRouter([{ path: "/", element: <Welcome /> }]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
