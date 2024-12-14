import {
  useGetAllBookingQuery,
  useGetAllSloteQuery,
  useGetAllUserQuery,
} from "../../../redux/fearutes/adminManagmentApi/adminManagmentApi";
import Loader from "../../Loader/Loader";
import { useGetAllRoomsQuery } from "../../../redux/fearutes/randomApi/randomApi";

const DashboardCards = () => {
  const { data: BookingData, isLoading } = useGetAllBookingQuery(undefined);
  const { data: Rooms, isLoading: RoomLoading } =
    useGetAllRoomsQuery(undefined);
  const { data: SlotData, isLoading: SloteIsLoading } =
    useGetAllSloteQuery(undefined);
  const { data: userData, isLoading: userLoading } =
    useGetAllUserQuery(undefined);
  console.log(BookingData);
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (userLoading) {
    return <Loader></Loader>;
  }
  if (SloteIsLoading) {
    return <Loader></Loader>;
  }
  if (RoomLoading) {
    return <Loader></Loader>;
  }
  const cardData = [
    { label: "Users", value: userData?.data.length, bg: "bg-blue-500" },
    { label: "Bookings", value: BookingData?.data.length, bg: "bg-green-500" },
    { label: "Slots", value: SlotData?.data.length, bg: "bg-yellow-500" },
    { label: "Rooms", value: Rooms?.data.length, bg: "bg-red-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardData.map((card) => (
        <div
          key={card.label}
          className={`p-4 rounded shadow text-white ${card.bg}`}
        >
          <h3 className="text-lg font-semibold">{card.label}</h3>
          <p className="text-2xl">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
