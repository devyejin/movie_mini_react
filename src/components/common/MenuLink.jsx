import React from "react";
import { Link } from "react-router-dom";

export default function MenuLink({ children, path }) {
  // console.log(path, children);
  return (
    <>
      <div className="font-bold text-3xl border-spacing-2">
        <Link to={path}>{children}</Link>
      </div>
    </>
  );
}
