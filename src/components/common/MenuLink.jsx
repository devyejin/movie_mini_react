import React from "react";
import { Link } from "react-router-dom";

export default function MenuLink({ children, path }) {
  // console.log(path, children);
  return (
    <>
      <div>
        <Link to={path}>{children}</Link>
      </div>
    </>
  );
}
