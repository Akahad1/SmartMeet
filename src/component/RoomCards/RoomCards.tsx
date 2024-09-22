import { useGetAllRoomsQuery } from "../../redux/fearutes/baseApi";

const RoomCards = () => {
  const { data } = useGetAllRoomsQuery(undefined);
  console.log(data);
  return <div></div>;
};

export default RoomCards;
