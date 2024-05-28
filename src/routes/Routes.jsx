import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import MainLayouts from "../layouts/MainLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/test",
        element: <div>Testing....</div>,
      },
    ],
  },
]);

export default router;
