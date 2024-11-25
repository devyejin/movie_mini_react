import { createBrowserRouter, Navigate } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import MovieLayout from "../layouts/MovieLayout";
import MovieMainPage from "../pages/movie/MovieMainPage";
import MovieListPage from "../pages/movie/MovieListPage";
import MovieDetailPage from "../pages/movie/MovieDetailPage";
import LoginLayout from "../layouts/LoginLayout";
import LoginPage from "../pages/auth/LoginPage";
import MyProfileLayout from "../layouts/MyProfileLayout";
import PrivateRouter from "./PrivateRouter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <MovieMainPage />,
      },
      {
        path: "movie",
        children: [
          {
            // path: "movie",
            index: true,
            element: <Navigate to="/" replace />,
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
      // mypage는 auth랑은 별개임
      {
        path: "my",
        element: (
          <PrivateRouter>
            <MyProfileLayout />
          </PrivateRouter>
        ),
        // loader 컴포넌트에 진입하기 전 실행(fetch 등..)
        // children :
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
