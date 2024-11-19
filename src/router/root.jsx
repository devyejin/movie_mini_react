import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import MovieLayout from "../layouts/MovieLayout";
import MovieSamplePage from "../pages/movie/MovieSamplePage";
import MovieListPage from "../pages/movie/MovieListPage";
import MovieDetailPage from "../pages/movie/MovieDetailPage";
import LoginLayout from "../layouts/LoginLayout";
import LoginPage from "../pages/auth/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        // Home Directory에서도 맨 처음에 /movie가 보였으면 해서
        index: true,
        element: <MovieSamplePage />,
      },
      {
        path: "movie",
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
  {
    path: "/auth",
    element: <LoginLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
