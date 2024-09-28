import { Link } from "react-router-dom";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { useAppSelector } from "../../redux/hook";
import { useCurrentId } from "../../redux/fearutes/Rooms/roomSlice";
import { useGetRoomsQuery } from "../../redux/fearutes/userManagmentApi/UsermanagmentApi";
import Loader from "../../component/Loader/Loader";
const RoomDetails = () => {
  const id = useAppSelector(useCurrentId);
  console.log("id", id);

  const { data: RoomData, isLoading } = useGetRoomsQuery([id]);
  console.log("RoomData", RoomData);

  if (isLoading) {
    return <Loader></Loader>;
  }
  const { pricePerSlot, floorNo, capacity, Image, name, roomNo, _id } =
    RoomData?.data;

  return (
    <div>
      <div>
        <div>
          <div className="mt-20 mb-20 lg:mr-14 md:mr-14 h-2/4 mr-3 ml-3   lg:h-96 card lg:card-side  justify-center">
            <figure>
              <div className=" lg:h-70 md:h-96 h-70  w-96  mb-7 ">
                <img src={Image} alt="" />
              </div>
            </figure>
            <div className="">
              <div className="flex ml-10 lg:mt-[-3rem] md:ml-10 lg:justify-end  md:justify-center">
                <div>
                  <h2 className="text-2xl font-style">{name}</h2>

                  <p className=" mb-1 mt-5">PricePerSlot: {pricePerSlot}</p>
                  <p className=" mb-1">FloorNo: {floorNo}</p>
                  <p className=" mb-1">Capacity: {capacity}</p>
                  {}
                  <div className="divider "></div>
                  <p className="text-blue-400 font-style mt-3 text-xl mb-4">
                    RoomNo: {roomNo}
                  </p>

                  <p>Inclusive of all taxes</p>
                  <div className="flex">
                    <p className="mr-2">Share:</p>
                    <Link
                      className="mr-2 "
                      to={`https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/allproduct/${_id}`}
                    >
                      <BiLogoFacebookCircle className="h-5 mt-1"></BiLogoFacebookCircle>
                    </Link>
                    <Link to="/" className="ml-2 mr-2">
                      <FaInstagram className="h-5 mt-1" />
                    </Link>
                    <Link to="/" className="mr-2">
                      <AiFillLinkedin className="h-5 mt-1" />
                    </Link>
                    <Link to="/" className="mr-2">
                      <AiOutlineTwitter className="h-5 mt-1" />
                    </Link>
                  </div>
                  <div className="mt-10">
                    <Link to={`/bookingform`}>
                      <button className="btn bg-yellow-500 rounded ml-3">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className=" divider "></div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
