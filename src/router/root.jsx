import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import MovieLayout from "../layouts/MovieLayout";
import MovieSamplePage from "../pages/MovieSamplePage";
import MovieListPage from "../pages/MovieListPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "movie", // 
        element: <MovieLayout />,
        children: [
          {
            index: true,
            element: <MovieSamplePage />,
          },
          {
            path: ":category", // : 이용해서 라우팅 가능 (/movie/top_rated)
            element: <MovieListPage />,
          },
          // {
          //   path : ":id", //동적 라우팅, 영화id값
          //   element : <MovieDetailPage>,
          // },
        ],
      },
    ],
  },
]);

export default router;
