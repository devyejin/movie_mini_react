import MovieSamplePage from "../pages/movie/MovieSamplePage";
import { Outlet } from "react-router-dom";

export default function MovieLayout() {
  return (
    <>
      {/* Outlet으로 MovieSamplePage, MoveListPage를 갖는다. */}
      {/* <MovieSamplePage></MovieSamplePage> */}
      <Outlet></Outlet>
    </>
  );
}
