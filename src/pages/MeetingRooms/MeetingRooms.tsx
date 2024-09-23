import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useGetAllRoomsQuery } from "../../redux/fearutes/baseApi";
import Loader from "../../component/Loader/Loader";
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

const MeetingRooms = () => {
  const [param, setParm] = useState({});
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { data: AllRooms, isLoading } = useGetAllRoomsQuery([param]);

  if (isLoading) {
    return <Loader></Loader>;
  }
  console.log(AllRooms.data);
  const handleClearFilters = () => {
    setParm({});
  };
  return (
    <div>
      <div>
        <div>
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Search Input */}
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Search by room name or keyword"
                onChange={(e) =>
                  setParm({ name: "Search", value: e.target.value })
                }
              />

              {/* Capacity Filter */}
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Minimum capacity"
                onChange={(e) =>
                  setParm({ name: "capacity", value: e.target.value })
                }
              />

              {/* Price Filters */}
              <div className="flex gap-2">
                <input
                  type="number"
                  className="input input-bordered w-full"
                  placeholder="Min Price"
                  onChange={(e) =>
                    setParm({ name: "minPrice", value: e.target.value })
                  }
                />
                <input
                  type="number"
                  className="input input-bordered w-full"
                  placeholder="Max Price"
                  onChange={(e) =>
                    setParm({ name: "maxPrice", value: e.target.value })
                  }
                />
              </div>

              {/* Sort Options */}
              <select
                className="select select-bordered w-full"
                onChange={(e) =>
                  setParm({ name: "sort", value: e.target.value })
                }
              >
                <option value="">Sort by Price</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>

              {/* Clear Filters Button */}
              <button
                className="btn btn-warning w-full"
                onClick={handleClearFilters}
              >
                Clear Filters
              </button>
            </div>

            {/* Room List */}
          </div>
        </div>
      </div>
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20  lg:mt-10 lg:justify-evenly">
          {AllRooms?.data?.map((item: TMeetingRoom) => (
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
    </div>
  );
};

export default MeetingRooms;
