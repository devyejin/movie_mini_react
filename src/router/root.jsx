import { createBrowserRouter, Navigate } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import MovieLayout from "../layouts/MovieLayout";
import MovieMainPage from "../pages/movie/MovieMainPage";
import MovieListPage from "../pages/movie/MovieListPage";
import MovieDetailPage from "../pages/movie/MovieDetailPage";
import LoginLayout from "../layouts/LoginLayout";
import LoginPage from "../pages/auth/LoginPage";
import MyProfileLayout from "../layouts/MyProfileLayout";
import PrivateRouter from "./PrivateRouter";
import MovieSearchResultPage from "../pages/movie/MovieSearchResultPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <MovieMainPage />,
      },
      {
        path: "movie",
        children: [
          {
            index: true,
            element: <Navigate to="/" replace />,
          },
          {
            path: ":category", // 동적 라우팅
            element: <MovieListPage />,
          },
          {
            path: "detail/:id", // 영화id값
            element: <MovieDetailPage />,
          },
          {
            path: "search",
            element: <MovieSearchResultPage />,
          },
        ],
      },
      {
        path: "my",
        element: (
          <PrivateRouter>
            <MyProfileLayout />
          </PrivateRouter>
        ),
        // loader 컴포넌트에 진입하기 전 실행(fetch 등..)
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
