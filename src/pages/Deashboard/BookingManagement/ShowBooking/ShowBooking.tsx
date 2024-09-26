import { useState } from "react";
import Loader from "../../../../component/Loader/Loader";
import { TMeetingRoom } from "../../../../component/RoomCards/RoomCards";
import { useGetAllRoomsQuery } from "../../../../redux/fearutes/randomApi/randomApi";

import { toast } from "sonner";
import {
  useDeleteRoomMutation,
  useGetAllBookingQuery,
} from "../../../../redux/fearutes/adminManagmentApi/adminManagmentApi";
import { TBooking } from "../../../../types/gobal";
import UpdateBooking from "../UpdateBooking/UpdateBooking";

const ShowBooking = () => {
  const { data: BookingData, isLoading } = useGetAllBookingQuery(undefined);
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
    console.log(BookingData);
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
    <div className="min-h-screen">
      <div>
        <p className="lg:text-2xl text-center mt-10 mb-10 text-xl">
          ALL Booking
        </p>
      </div>
      <div className="mb-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-base-300">
              <tr>
                <th>Room Name</th>
                <th>User Name</th>
                <th>Date & Time</th>
                <th>Status </th>

                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            {BookingData?.data?.map((item: TBooking) => (
              <tbody key={item._id}>
                {/* row 1 */}
                <tr className="bg-base-200">
                  <td className="w-60">{item.room?.name}</td>
                  <td>{item.user?.name}</td>
                  <td>{item?.date}</td>
                  <td>{item.isConfirmed}</td>

                  <td>
                    <div className="" onClick={() => setSpecificRoom(item._id)}>
                      <button
                        onClick={() => openModal("my_modal_3")}
                        className="btn btn-xs btn-primary "
                      >
                        Update
                      </button>
                      <UpdateBooking id={item._id}></UpdateBooking>
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

export default ShowBooking;
