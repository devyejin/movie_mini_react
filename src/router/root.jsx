import { createBrowserRouter } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout';
import MainPage from '../pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      // movie를 잡고 루트도 잡고?
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);

export default router;
