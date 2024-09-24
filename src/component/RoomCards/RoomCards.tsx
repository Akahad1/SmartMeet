import { Link } from "react-router-dom";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../Loader/Loader";
import { useGetAllRoomsQuery } from "../../redux/fearutes/randomApi/randomApi";
type TMeetingRoom = {
  _id: string;
  name: string;
  floorNo: number;
  roomNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
  isDeleted: boolean;
  Image: string;
};

const RoomCards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { data: AllRooms, isLoading } = useGetAllRoomsQuery(undefined);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20  lg:mt-10 lg:justify-evenly">
        {AllRooms?.data?.slice(0, 6)?.map((item: TMeetingRoom) => (
          <div key={item._id}>
            <div
              className="card bg-[#24283B]  lg:w-96 md:w-80 w-80 shadow-xl mb-10 lg:mr-10 lg:mb-10 m-auto"
              data-aos="flip-left"
            >
              <figure>
                <img
                  src={item.Image}
                  alt="Shoes"
                  className="lg:h-72 md:h-60 h-60"
                />
              </figure>
              <div className="card-body lg:h-auto h-auto">
                <h1 className="text-white text-xl mb-2">{item.name}</h1>
                <h1 className="text-white text-lg ">
                  <p className="inline mr-3">Price Per Slot : </p>
                  {item.pricePerSlot}
                </h1>
                <h1 className="text-white text-lg">
                  <p className="inline mr-3">Capacity :</p>
                  {item.capacity}
                </h1>

                <Link to={`/product`}>
                  <button className="btn mt-10 w-full">See Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomCards;
