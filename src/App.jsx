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
    let storage;
    const key = "isLoggedIn";

    try {
      storage = window["localStorage"];
      //해당 key값이 없이 null일 수도 있으니까 예외처리(js는 예외안나서 상관없나?)
      return storage.getItem(key);
    } catch (error) {}
  }

  const currentState = getIsLoggedIn();

  //2. 가져온 상태값을 auth slice에 반영하자
  // useEffect(() => dispatch(updateAuthState(currentState)), []);

  console.log("App 호출");

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
