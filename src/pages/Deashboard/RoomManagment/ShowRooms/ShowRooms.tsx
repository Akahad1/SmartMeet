import { useState } from "react";
import Loader from "../../../../component/Loader/Loader";
import { TMeetingRoom } from "../../../../component/RoomCards/RoomCards";
import { useGetAllRoomsQuery } from "../../../../redux/fearutes/randomApi/randomApi";
import UpdateRoom from "../UpdateRoom/UpdateRoom";
import { toast } from "sonner";
import { useDeleteRoomMutation } from "../../../../redux/fearutes/adminManagmentApi/adminManagmentApi";

const ShowRooms = () => {
  const { data: RoomsData, isLoading } = useGetAllRoomsQuery(undefined);
  const [deleteRoom] = useDeleteRoomMutation();
  const [specificRoomId, setSpecificRoom] = useState("");
  if (isLoading) {
    return <Loader></Loader>;
  }
  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
    console.log(RoomsData);
  };
  const deletedSloteHandler = async (id: string) => {
    const tostID = toast.loading("Deleting Slote");
    try {
      const res = await deleteRoom(id);
      if (res.error) {
        toast.error("SomeThing is Rong", { id: tostID });
      } else {
        toast.success("Room delete  succesfuly", { id: tostID });
      }
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <div>
        <p className="lg:text-2xl text-center mt-10 mb-10 text-xl">ALL ROOMS</p>
      </div>
      <div className="mb-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-base-300 dark:text-white dark:bg-slate-500">
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
            {RoomsData?.data?.map((item: TMeetingRoom) => (
              <tbody key={item._id}>
                {/* row 1 */}
                <tr className="bg-base-200 dark:text-white dark:bg-slate-600">
                  <td className="w-60">{item.name}</td>
                  <td>{item.roomNo}</td>
                  <td>{item.capacity}</td>
                  <td>{item.pricePerSlot}</td>
                  <td>{item.floorNo}</td>

                  <td>
                    <div className="" onClick={() => setSpecificRoom(item._id)}>
                      <button
                        onClick={() => openModal("my_modal_1")}
                        className="btn btn-xs btn-primary "
                      >
                        Update
                      </button>
                      <UpdateRoom
                        id={item._id}
                        specificRoomId={specificRoomId}
                        key={item._id}
                      ></UpdateRoom>
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={() => deletedSloteHandler(item._id)}
                      className="btn btn-xs bg-red-500 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowRooms;
