import { Home } from "../pages/home/Index";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate replace to="/home"/>
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export function MyRouter ():React.ReactElement{
  return (
    <RouterProvider router={router} />
  );
}