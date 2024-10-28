import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DriverStandingsPage } from "./pages/driver-standings";
import { HomePage } from "./pages/home";

const router = createBrowserRouter([
  {
    path: "",
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/driver-standings",
        element: <DriverStandingsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
