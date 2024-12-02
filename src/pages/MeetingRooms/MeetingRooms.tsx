import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../component/Loader/Loader";
import { useGetAllRoomsQuery } from "../../redux/fearutes/randomApi/randomApi";
import { useAppDispatch } from "../../redux/hook";
import { addRoomId } from "../../redux/fearutes/Rooms/roomSlice";

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
  const useDispatch = useAppDispatch();
  const [param, setParam] = useState({});
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { data: AllRooms, isLoading } = useGetAllRoomsQuery([param]);

  const handleClearFilters = () => {
    setParam({});
  };
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxPrice); // Ensure minPrice doesn't exceed maxPrice
    setMinPrice(value);
    setParam({ name: "minPrice", value: e.target.value });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minPrice); // Ensure maxPrice doesn't go below minPrice
    setMaxPrice(value);
    setParam({ name: "maxPrice", value: e.target.value });
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div>
        <p className="text-center text-3xl hidden lg:block mt-10 mb-10 ">
          Meeting Rooms
        </p>
        <div className="text-center mb-10 hidden lg:block">
          <p className="divider "></p>
        </div>
      </div>
      <div className="min-h-screen  bg-gray-100 dark:bg-gray-900 dark:text-white flex flex-col lg:flex-row p-4">
        {/* Sidebar for desktop */}
        <aside className="hidden lg:block w-1/4 bg-white dark:bg-slate-800 dark:text-white  p-4 mt-5 mr-5 sticky top-4 h-screen overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="space-y-4">
            {/* Search Input */}
            <input
              type="text"
              className="input input-bordered w-full dark:bg-gray-900 dark:text-white"
              placeholder="Search by room name or keyword"
              onChange={(e) =>
                setParam({ name: "Search", value: e.target.value })
              }
            />

            {/* Capacity Filter */}
            <input
              type="number"
              className="input input-bordered w-full dark:bg-gray-900 dark:text-white"
              placeholder="Minimum capacity"
              onChange={(e) =>
                setParam({ name: "capacity", value: e.target.value })
              }
            />

            {/* Price Filters */}
            <div className="flex gap-4 items-center">
              <div>
                <label
                  htmlFor="min-price"
                  className="block text-sm font-medium  dark:text-white"
                >
                  Min Price
                </label>
                <input
                  type="range"
                  id="min-price"
                  className="range range-primary  dark:text-white"
                  min={0}
                  max={1000}
                  value={minPrice}
                  onChange={handleMinChange}
                />
                <input
                  type="number"
                  className="input input-bordered w-full dark:bg-gray-900 dark:text-white mt-1"
                  value={minPrice}
                  onChange={handleMinChange}
                  min={0}
                  max={maxPrice}
                />
              </div>
              <div>
                <label
                  htmlFor="max-price"
                  className="block text-sm font-medium  dark:text-white"
                >
                  Max Price
                </label>
                <input
                  type="range"
                  id="max-price"
                  className="range range-primary dark:bg-gray-900 dark:text-white"
                  min={0}
                  max={1000}
                  value={maxPrice}
                  onChange={handleMaxChange}
                />
                <input
                  type="number"
                  className="input input-bordered w-full dark:bg-gray-900 dark:text-white mt-1"
                  value={maxPrice}
                  onChange={handleMaxChange}
                  min={minPrice}
                />
              </div>
            </div>

            {/* Sort Options */}
            <select
              className="select select-bordered w-full dark:bg-gray-900 dark:text-white"
              onChange={(e) =>
                setParam({ name: "sort", value: e.target.value })
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
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4">
          {/* Filters for mobile */}
          <div className="block lg:hidden">
            <div className="grid grid-cols-1 gap-4 mb-4">
              {/* Search Input */}
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Search by room name or keyword"
                onChange={(e) =>
                  setParam({ name: "Search", value: e.target.value })
                }
              />

              {/* Capacity Filter */}
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Minimum capacity"
                onChange={(e) =>
                  setParam({ name: "capacity", value: e.target.value })
                }
              />

              {/* Price Filters */}
              <div className="flex gap-2">
                <input
                  type="number"
                  className="input input-bordered w-full"
                  placeholder="Min Price"
                  onChange={(e) =>
                    setParam({ name: "minPrice", value: e.target.value })
                  }
                />
                <input
                  type="number"
                  className="input input-bordered w-full"
                  placeholder="Max Price"
                  onChange={(e) =>
                    setParam({ name: "maxPrice", value: e.target.value })
                  }
                />
              </div>

              {/* Sort Options */}
              <select
                className="select select-bordered w-full"
                onChange={(e) =>
                  setParam({ name: "sort", value: e.target.value })
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
          </div>

          {/* Room List */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {AllRooms?.data?.map((item: TMeetingRoom) => (
              <div key={item._id}>
                <div
                  className="card bg-[#24283B] shadow-xl"
                  data-aos="flip-left"
                >
                  <figure>
                    <img
                      src={item.Image}
                      alt={item.name}
                      className="lg:h-72 md:h-60 h-60 w-full object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-white text-xl">{item.name}</h2>
                    <p className="text-white">
                      Price Per Slot: {item.pricePerSlot}
                    </p>
                    <p className="text-white">Capacity: {item.capacity}</p>
                    <Link to={`/roomDetails/${item._id}`}>
                      <button
                        onClick={() => useDispatch(addRoomId({ id: item._id }))}
                        className="btn mt-4 w-full"
                      >
                        See Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MeetingRooms;
