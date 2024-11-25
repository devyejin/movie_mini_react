import { RouterProvider } from "react-router-dom";
import router from "./router/root";
import "./index.css";
import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { updateAuthState } from "./store/slices/authSlice";

/**
 * @todo 컴포넌트로 분리하기
 */
function App() {
  const dispatch = useDispatch();

  //1. localStorage에서 상태값을 가져오자
  function getIsLoggedIn() {
    const key = "isLoggedIn";
    console.log(typeof localStorage.getItem(key));

    // try {
    //   storage = window["localStorage"];
    //   //해당 key값이 없이 null일 수도 있으니까 예외처리(js는 예외안나서 상관없나?)
    //   console.log("tt", typeof JSON.parse(storage.getItem(key)));
    //   return JSON.parse(storage.getItem(key));
    // } catch (error) {}
  }

  const currentState = getIsLoggedIn();

  //2. 가져온 상태값을 auth slice에 반영하자
  useEffect(() => {
    console.log("auth store에 값 업데이트 호출");
    dispatch(updateAuthState(currentState));
  }, [currentState]);

  console.log("App 호출");

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
