import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayouts from "../layouts/MainLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/test",
        element: <div>Testing....</div>,
      },
    ],
  },
]);

export default router;
