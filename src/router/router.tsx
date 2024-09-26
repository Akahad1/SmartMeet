import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import App from "../App";
import About from "../pages/AboutUs/About";
import Contact from "../pages/ContactUs/Contact";
import NotFound from "../component/NotFound/NotFound";
import Singup from "../pages/SingUp/SingUp";
import LogIn from "../pages/Login/Login";
import MeetingRooms from "../pages/MeetingRooms/MeetingRooms";
import CreateRoom from "../pages/Deashboard/RoomManagment/CreateRoom/CreateRoom";
import ShowRooms from "../pages/Deashboard/RoomManagment/ShowRooms/ShowRooms";
import ShowSlot from "../pages/Deashboard/SlotsManagement/ShowSlot/ShowSlot";
import CreateSlot from "../pages/Deashboard/SlotsManagement/CreateSlot/CreateSlot";
import ShowBooking from "../pages/Deashboard/BookingManagement/ShowBooking/ShowBooking";

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
      { path: "/createRoom", element: <CreateRoom></CreateRoom> },
      { path: "/showRooms", element: <ShowRooms></ShowRooms> },
      { path: "/createSlot", element: <CreateSlot></CreateSlot> },
      { path: "/showSlotes", element: <ShowSlot></ShowSlot> },
      { path: "/bookingRooms", element: <ShowBooking></ShowBooking> },
    ],
  },

  { path: "*", element: <NotFound></NotFound> },
]);
