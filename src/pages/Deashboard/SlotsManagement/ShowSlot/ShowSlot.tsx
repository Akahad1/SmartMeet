import { toast } from "sonner";
import Loader from "../../../../component/Loader/Loader";
import {
  useDeleteSloteMutation,
  useGetAllSloteQuery,
} from "../../../../redux/fearutes/adminManagmentApi/adminManagmentApi";
import { TSlote } from "../../../../types/gobal";
import UpdateSlote from "../UpdateSlote/UpdateSlote";

const ShowSlot = () => {
  const { data: SlotData, isLoading } = useGetAllSloteQuery(undefined);
  const [deleteSlote] = useDeleteSloteMutation(undefined);

  if (isLoading) {
    return <Loader></Loader>;
  }
  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };
  const deletedSloteHandler = async (id: string) => {
    const tostID = toast.loading("Deleting Slote");
    try {
      const res = await deleteSlote(id);
      if (res.error) {
        toast.error("SomeThing is Rong", { id: tostID });
      } else {
        toast.success("Slote delete succesfuly", { id: tostID });
      }
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <div>
        <p className="lg:text-2xl text-center mt-10 mb-10 text-xl">ALL Slote</p>
      </div>
      <div className="mb-10">
        {SlotData?.data?.map((item: TSlote) => (
          <div className="overflow-x-auto" key={item._id}>
            <table className="table">
              {/* head */}
              <thead className="dark:text-white">
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
                <tr className="bg-base-200 dark:text-white dark:bg-slate-600">
                  <td className="w-60">{item.room.name}</td>
                  <td>{item.room.roomNo}</td>
                  <td>{item.date.split("T")[0]}</td>
                  <td>{item.startTime}</td>
                  <td>{item.endTime}</td>
                  <td>
                    <div className="">
                      <button
                        onClick={() => openModal("my_modal_2")}
                        className="btn btn-xs btn-primary "
                      >
                        Update
                      </button>
                      <UpdateSlote id={item._id}></UpdateSlote>
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
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowSlot;
