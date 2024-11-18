import React from 'react';
import Header from '../components/common/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer';

//기본 레이아웃 : Hedaer, footer로 구성 + 가운데에 각각의 Page혹은 Layout이 교체
export default function BasicLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
