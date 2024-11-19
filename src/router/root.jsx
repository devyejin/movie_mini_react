import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import MovieLayout from "../layouts/MovieLayout";
import MovieSamplePage from "../pages/MovieSamplePage";
import MovieListPage from "../pages/MovieListPage";
import MovieDetailPage from "../pages/MovieDetailPage";

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
            path: ":id", //동적 라우팅, 영화id값 (숫자도 문자로 인식해서 위에)
            element: <MovieDetailPage />,
          },
          {
            path: ":category", // : 이용해서 라우팅 가능 (/movie/top_rated)
            element: <MovieListPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
