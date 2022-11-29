import { Home } from "../pages/home/Index";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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