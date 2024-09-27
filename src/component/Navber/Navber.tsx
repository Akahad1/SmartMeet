import { Link } from "react-router-dom";
import logo from "../../../public/Imgage/Black White Yellow Simple Initial Name Logo.png";
import { veryfiyToken } from "../../utils/veryfiyToken";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  logOut,
  TUser,
  useCurrentToken,
} from "../../redux/fearutes/auth/authSlice";

const Navber = () => {
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();
  let user;
  if (token) {
    user = veryfiyToken(token);
  }
  return (
    <div>
      <div className="navbar bg-base-200 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-80 p-2 shadow"
            >
              <button className="lg:mr-14 lg:mt-0 mt-1 text-lg  ">
                <Link to="/">Home</Link>
              </button>
              <button className="lg:mr-10 lg:mt-0 mt-1 text-lg  ">
                <Link to="/meetingRooms">Meeting Rooms</Link>
              </button>

              <button className="lg:mr-10 lg:mt-0 mt-1 text-lg ">
                <Link to="/aboutUs">About Us</Link>
              </button>
              <button className="lg:mr-10 lg:mt-0 mt-1 text-lg  ">
                <Link to="/contactUs">Contact Us</Link>
              </button>
              {(user as TUser)?.role === "admin" ? (
                <details className="dropdown">
                  <summary className="  mt-1 ml-20  text-lg ">
                    Dashboard
                  </summary>
                  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li>
                      <details className="dropdown">
                        <summary className=" ">Room Management</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                          <li>
                            <Link to="/createRoom">Create Room</Link>
                          </li>
                          <li>
                            <Link to="/showRooms">Show Rooms</Link>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details className="dropdown">
                        <summary className=" ">Slots Management</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                          <li>
                            <Link to="/createSlot">Create Slot</Link>
                          </li>
                          <li>
                            <Link to="/showSlotes">Show Slot</Link>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details className="dropdown">
                        <summary className=" ">Booking Management</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                          <li>
                            <Link to="/bookingRooms">Booking Rooms</Link>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </details>
              ) : (
                <></>
              )}
              {(user as TUser)?.role === "user" ? (
                <button className="lg:mr-10 lg:mt-0 mt-1 text-lg  ">
                  <Link to="/MyBookings">My Bookings</Link>
                </button>
              ) : (
                <></>
              )}

              <button className="lg:mr-10 lg:mt-0 mt-1 text-lg  ">
                <Link to="/register">Register</Link>
              </button>
            </ul>
          </div>

          <div className="  lg:m-5 hidden lg:flex">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src={logo} />
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <button className="lg:mr-14 lg:mt-0 mt-1 text-lg  ">
              <Link to="/">Home</Link>
            </button>
            <button className="lg:mr-10 lg:mt-0 mt-1 text-lg  ">
              <Link to="/meetingRooms">Meeting Rooms</Link>
            </button>

            <button className="lg:mr-10 lg:mt-0 mt-1 text-lg ">
              <Link to="/aboutUs">About Us</Link>
            </button>
            <button className="lg:mr-10 lg:mt-0 mt-1 text-lg  ">
              <Link to="/contactUs">Contact Us</Link>
            </button>
            <button className="lg:mr-10 lg:mt-0 mt-1 text-lg  ">
              <Link to="/register">Register</Link>
            </button>
            {(user as TUser)?.role === "admin" ? (
              <details className="dropdown">
                <summary className="lg:mr-10 lg:mt-0 mt-1 text-lg ">
                  Dashboard
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li>
                    <details className="dropdown">
                      <summary className=" ">Room Management</summary>
                      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li>
                          <Link to="/createRoom">Create Room</Link>
                        </li>
                        <li>
                          <Link to="/showRooms">Show Rooms</Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details className="dropdown">
                      <summary className=" ">Slots Management</summary>
                      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li>
                          <Link to="/createSlot">Create Slot</Link>
                        </li>
                        <li>
                          <Link to="/showSlotes">Show Slot</Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details className="dropdown">
                      <summary className=" ">Booking Management</summary>
                      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li>
                          <Link to="/bookingRooms">Booking Rooms</Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            ) : (
              <></>
            )}
            {(user as TUser)?.role === "user" ? (
              <button className="lg:mr-10 lg:mt-0 mt-1 text-lg  ">
                <Link to="/MyBookings">My Bookings</Link>
              </button>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="navbar-end ">
          {(user as TUser)?.role == "admin" ? (
            <button className="hidden lg:flex">
              <p
                onClick={() => dispatch(logOut())}
                className="  lg:mr-16 mr-10"
              >
                Log Out
              </p>
            </button>
          ) : (
            <></>
          )}
          {(user as TUser)?.role == "user" ? (
            <button className="hidden lg:flex">
              <p
                onClick={() => dispatch(logOut())}
                className="  lg:mr-16 mr-10"
              >
                Log Out
              </p>
            </button>
          ) : (
            <></>
          )}
          <div className="avatar  lg:m-5 flex lg:hidden m-3">
            <div className="w-24 rounded-3xl">
              {" "}
              <img src={logo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
