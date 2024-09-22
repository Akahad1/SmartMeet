import { Link } from "react-router-dom";
import logo from "../../../public/Imgage/Black White Yellow Simple Initial Name Logo.png";

const Navber = () => {
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
              <button className="lg:mr-10 lg:mt-0 mt-1 text-lg  ">
                <Link to="/dashboard">Dashboard</Link>
              </button>
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
              <Link to="/dashboard">Dashboard</Link>
            </button>
            <button className="lg:mr-10 lg:mt-0 mt-1 text-lg  ">
              <Link to="/register">Register</Link>
            </button>
          </ul>
        </div>
        <div className="navbar-end ">
          <button className="hidden lg:flex">
            <Link className="  lg:mr-16 mr-10" to="/logout">
              Log Out
            </Link>
          </button>
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
