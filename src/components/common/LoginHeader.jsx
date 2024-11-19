import React from "react";
import MenuLink from "./MenuLink";

export default function LoginHeader() {
  return (
    <>
      <header>
        <div>
          <MenuLink path={"/"}>{"메인페이지"}</MenuLink>
        </div>
      </header>
    </>
  );
}
