import Loader from "../../../../component/Loader/Loader";
import { TMeetingRoom } from "../../../../component/RoomCards/RoomCards";
import { useGetAllRoomsQuery } from "../../../../redux/fearutes/randomApi/randomApi";

const ShowRooms = () => {
  const { data: RoomsData, isLoading } = useGetAllRoomsQuery(undefined);
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div>
        <p className="lg:text-2xl text-center mt-10 mb-10 text-xl">ALL ROOMS</p>
      </div>
      <div className="mb-10">
        {RoomsData?.data?.map((item: TMeetingRoom) => (
          <div className="overflow-x-auto" key={item._id}>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Title</th>
                  <th>roomNo</th>
                  <th>Capacity</th>
                  <th>PricePerSlot</th>
                  <th>FloorNo</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="bg-base-200">
                  <td className="w-60">{item.name}</td>
                  <td>{item.roomNo}</td>
                  <td>{item.capacity}</td>
                  <td>{item.pricePerSlot}</td>
                  <td>{item.floorNo}</td>
                  <td>
                    <button className="btn btn-xs btn-primary">Update</button>
                  </td>
                  <td>
                    <button className="btn btn-xs bg-red-500 text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowRooms;
