import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div className="">
      <div
        className="hero lg:min-h-[80vh] md:min-h-[50vh] min-h-[40vh]  "
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/pZZzBnN/room-used-official-event.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className=" lg:text-3xl text-2xl  text-center">
              Book Your Ideal Meeting Room with Ease
            </h1>
            <h3>
              Efficient, hassle-free room booking <br /> for all your meeting
              needs.
            </h3>
            <div className="mt-10">
              <Link to="/mettingrooms">
                <button className="btn  ">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
