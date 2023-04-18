import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Popular from "../Popular";
import Battle from "../Battle";
import Results from "../Battle/Results";
import Nav from "./Nav";

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/popular",
        element: <Popular />,
      },
      {
        path: "/battle",
        element: <Battle />,
      },
      {
        path: "battle/results",
        element: <Results />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
