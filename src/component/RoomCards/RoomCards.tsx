import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useGetAllRoomsQuery } from "../../redux/fearutes/randomApi/randomApi";
import { useAppDispatch } from "../../redux/hook";
import { addRoomId } from "../../redux/fearutes/Rooms/roomSlice";

export type TMeetingRoom = {
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
    return <p>Loading...</p>;
  }

  const useDispatch = useAppDispatch();

  return (
    <div className="mb-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
        {AllRooms?.data?.slice(0, 8)?.map((item: TMeetingRoom) => (
          <div key={item._id} className="m-auto">
            <div
              className="card dark:bg-[#1E293B] bg-base-300 w-72 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:scale-105 transition-transform"
              data-aos="fade-up"
            >
              <figure className="h-44 overflow-hidden">
                <img
                  src={item.Image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body p-5">
                <h1 className=" dark:text-white text-lg font-bold truncate">
                  {item.name}
                </h1>
                <p className=" dark:text-gray-300 text-sm mt-2">
                  Price:{" "}
                  <span className="text-gray-800 dark:text-white">
                    ${item.pricePerSlot}
                  </span>
                </p>
                <p className=" dark:text-gray-300 text-sm ">
                  Room Number:{" "}
                  <span className="text-gray-800 dark:text-white">
                    {item.roomNo}
                  </span>
                </p>
                <p className="0 dark:text-gray-300 text-sm">
                  Capacity:{" "}
                  <span className="text-gray-800 dark:text-white">
                    {item.capacity}
                  </span>
                </p>
                {/* <ul className="text-gray-600 dark:text-gray-300 text-xs mt-3 list-disc pl-5">
                  {item.amenities.slice(0, 3).map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                  {item.amenities.length > 3 && <li>and more...</li>}
                </ul> */}

                <Link to={`/roomDetails/${item._id}`} className="mt-5 block">
                  <button
                    className="btn btn-sm bg-indigo-600 hover:bg-indigo-500 w-full text-white py-2 rounded-md"
                    onClick={() => useDispatch(addRoomId({ id: item._id }))}
                  >
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <Link to="/meetingRooms">
          <button className="btn ">See All Rooms</button>
        </Link>
      </div>
    </div>
  );
};

export default RoomCards;
