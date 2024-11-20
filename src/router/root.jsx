import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import MovieLayout from "../layouts/MovieLayout";
import MovieSamplePage from "../pages/movie/MovieSamplePage";
import MovieListPage from "../pages/movie/MovieListPage";
import MovieDetailPage from "../pages/movie/MovieDetailPage";
import LoginLayout from "../layouts/LoginLayout";
import LoginPage from "../pages/auth/LoginPage";
import MyProfileLayout from "../layouts/MyProfileLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      // mypage는 auth랑은 별개임
      {
        path: "my",
        element: <MyProfileLayout />,
        // children :
      },
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
            path: ":category", // : 이용해서 라우팅 가능 (/movie/top_rated)
            element: <MovieListPage />,
          },
          {
            path: "detail/:id", //동적 라우팅, 영화id값 (숫자도 문자로 인식해서 위에)
            element: <MovieDetailPage />,
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
