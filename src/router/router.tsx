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
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import BookingForm from "../pages/BookingForm/BookingForm";
import Checkout from "../pages/Checkout/Checkout";
import MyBooking from "../pages/MyBooking/MyBooking";
import ProtectorRoute from "../component/layout/ProtectorRoute/ProtectorRoute";

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
      {
        path: "/createRoom",
        element: (
          <ProtectorRoute role="admin">
            <CreateRoom></CreateRoom>
          </ProtectorRoute>
        ),
      },
      {
        path: "/showRooms",
        element: (
          <ProtectorRoute role="admin">
            <ShowRooms></ShowRooms>
          </ProtectorRoute>
        ),
      },
      {
        path: "/createSlot",
        element: (
          <ProtectorRoute role="admin">
            <CreateSlot></CreateSlot>
          </ProtectorRoute>
        ),
      },
      {
        path: "/showSlotes",
        element: (
          <ProtectorRoute role="admin">
            <ShowSlot></ShowSlot>
          </ProtectorRoute>
        ),
      },
      {
        path: "/bookingRooms",
        element: (
          <ProtectorRoute role="admin">
            <ShowBooking></ShowBooking>
          </ProtectorRoute>
        ),
      },
      {
        path: "/roomDetails/:id",
        element: (
          <ProtectorRoute role="user">
            <RoomDetails></RoomDetails>
          </ProtectorRoute>
        ),
      },
      {
        path: "/bookingform",
        element: (
          <ProtectorRoute role="user">
            <BookingForm></BookingForm>
          </ProtectorRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <ProtectorRoute role="user">
            <Checkout></Checkout>
          </ProtectorRoute>
        ),
      },
      {
        path: "/myBookings",
        element: (
          <ProtectorRoute role="user">
            <MyBooking></MyBooking>
          </ProtectorRoute>
        ),
      },
    ],
  },

  { path: "*", element: <NotFound></NotFound> },
]);
