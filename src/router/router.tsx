import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import App from "../App";
import About from "../pages/AboutUs/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/aboutus", element: <About></About> },
    ],
  },
]);
