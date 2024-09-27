import { useState } from "react";
import { useCurrentId } from "../../redux/fearutes/Rooms/roomSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { TUser, useCurrentToken } from "../../redux/fearutes/auth/authSlice";
import { veryfiyToken } from "../../utils/veryfiyToken";
import {
  useGetQuerySloteQuery,
  useGetUserQuery,
} from "../../redux/fearutes/userManagmentApi/UsermanagmentApi";
import Loader from "../../component/Loader/Loader";
import { TSlote } from "../../types/gobal";
import { addbooking } from "../../redux/fearutes/booking/bookingSlice";

const BookingForm = () => {
  const id = useAppSelector(useCurrentId);

  const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrentToken) as string;
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const { data: SlotData, isLoading: SloteIsLoading } = useGetQuerySloteQuery([
    { name: "date", value: selectedDate },
    { name: "roomId", value: id },
  ]);
  const user = veryfiyToken(token) as TUser;

  const { data: userData, isLoading } = useGetUserQuery([user?.user]);
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (SloteIsLoading) {
    return <Loader></Loader>;
  }
  console.log("SlotData", SlotData);
  const { address, phone, email, name, _id } = userData?.data;
  const handleBooking = (item: TSlote) => {
    // Create the booking object
    const bookingObject = {
      id: item._id,
      roomName: item.room.name,
      date: item.date,
      startTime: item.startTime,
      endTime: item.endTime,
      pricePerSlot: item.room.pricePerSlot,
    };
    const bookingInformation = {
      slot: bookingObject,
      userinfo: {
        userid: _id,
        name,
        phone,
        email,
        address,
      },
    };
    dispatch(addbooking({ bookingInformation }));
    console.log("bookingInformation", bookingInformation);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value;
    setSelectedDate(dateValue);
    console.log("Selected Date:", dateValue); // This will give you the selected date in yyyy-mm-dd format
  };
  //   booking information

  return (
    <div className="mt-14 lg:grid lg:grid-cols-8 ">
      <div className="lg:col-span-4">
        <p className="text-xl mb-6">Select your preferred date</p>
        <div>
          <input
            type="date"
            onChange={handleDateChange}
            name="date"
            // id="datePicker"
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          {SlotData === undefined ? (
            <p className="mt-5 ml-3 mb-3 text-red-300">
              Select your preferred date
            </p>
          ) : (
            <div className="overflow-x-auto mt-10">
              <table className="table">
                {/* head */}
                <thead className="bg-base-300 ">
                  <tr>
                    <th>Room Name</th>
                    <th>Date</th>
                    <th>startTime</th>
                    <th>endTime</th>
                    <th>pricePerSlot</th>

                    <th>Booking</th>
                  </tr>
                </thead>
                {SlotData?.data?.map((item: TSlote) => (
                  <tbody key={item._id}>
                    {/* row 1 */}
                    <tr className="bg-base-200">
                      <td className="w-60">{item.room.name}</td>
                      <td>{item.date}</td>
                      <td>{item.startTime}</td>
                      <td>{item.endTime}</td>
                      <td>{item.room.pricePerSlot}</td>

                      <td>
                        <Link to="/checkout">
                          <button
                            onClick={() => handleBooking(item)}
                            className="btn  btn-primary"
                          >
                            Booking Slot
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          )}
        </div>
      </div>
      <div className="border-gray-700 border lg:col-span-4 lg:ml-10 ">
        <p className="text-xl ml-5 mt-5">User Information</p>
        <div className="card-body ">
          {/* 1/ */}
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="Fullname"
                placeholder="Full Name"
                className="input input-bordered"
                defaultValue={name}
                readOnly
                required
              />
            </div>
            {/* 2 */}

            <div className="form-control">
              <label className="label">
                <span className="label-text "> Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered "
                defaultValue={email}
                readOnly
                required
              />
            </div>
            {/* 3 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Phone number</span>
              </label>
              <input
                type="number"
                name="number"
                placeholder="number"
                className="input input-bordered "
                defaultValue={phone}
                readOnly
                required
              />
            </div>
            {/* 3 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="address"
                className="input input-bordered "
                defaultValue={address}
                readOnly
                required
              />
            </div>
            {/* 4 */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
