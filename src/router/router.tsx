import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import App from "../App";
import About from "../pages/AboutUs/About";
import Contact from "../pages/ContactUs/Contact";
import NotFound from "../component/NotFound/NotFound";
import Singup from "../pages/SingUp/SingUp";
import LogIn from "../pages/Login/Login";
import MeetingRooms from "../pages/MeetingRooms/MeetingRooms";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/aboutus", element: <About></About> },
      { path: "/contactUs", element: <Contact></Contact> },
      { path: "/register", element: <Singup></Singup> },
      { path: "/login", element: <LogIn></LogIn> },
      { path: "/meetingRooms", element: <MeetingRooms></MeetingRooms> },
    ],
  },
  { path: "*", element: <NotFound></NotFound> },
]);
