import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import MovieLayout from "../layouts/MovieLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <MovieLayout />,
      },
    ],
  },
]);

export default router;
