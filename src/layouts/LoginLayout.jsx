import React from "react";
import LoginHeader from "../components/common/LoginHeader";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";

export default function LoginLayout() {
  return (
    <>
      <LoginHeader></LoginHeader>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
