import { useState } from "react";
import Loader from "../../../../component/Loader/Loader";
import { useGetAllSloteQuery } from "../../../../redux/fearutes/adminManagmentApi/adminManagmentApi";
import { TSlote } from "../../../../types/gobal";

const ShowSlot = () => {
  const { data: SlotData, isLoading } = useGetAllSloteQuery(undefined);
  const [specificRoomId, setSpecificRoom] = useState("");
  if (isLoading) {
    return <Loader></Loader>;
  }
  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <div>
      <div>
        <p className="lg:text-2xl text-center mt-10 mb-10 text-xl">ALL ROOMS</p>
      </div>
      <div className="mb-10">
        {SlotData?.data?.map((item: TSlote) => (
          <div className="overflow-x-auto" key={item._id}>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th> Room Name</th>
                  <th>Room No</th>
                  <th>Date</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="bg-base-200">
                  <td className="w-60">{item.room.name}</td>
                  <td>{item.room.roomNo}</td>
                  <td>{item.date}</td>
                  <td>{item.startTime}</td>
                  <td>{item.endTime}</td>
                  <td>
                    <div className="" onClick={() => setSpecificRoom(item._id)}>
                      <button
                        onClick={() => openModal("my_modal_1")}
                        className="btn btn-xs btn-primary "
                      >
                        Update
                      </button>
                      {/* <UpdateRoom
                        id={item._id}
                        specificRoomId={specificRoomId}
                        key={item._id}
                      ></UpdateRoom> */}
                    </div>
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

export default ShowSlot;
