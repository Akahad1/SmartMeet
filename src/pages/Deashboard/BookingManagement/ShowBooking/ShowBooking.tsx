import Loader from "../../../../component/Loader/Loader";
import { toast } from "sonner";
import {
  useDeleteBookingMutation,
  useGetAllBookingQuery,
} from "../../../../redux/fearutes/adminManagmentApi/adminManagmentApi";
import { TBooking } from "../../../../types/gobal";
import UpdateBooking from "../UpdateBooking/UpdateBooking";

const ShowBooking = () => {
  const { data: BookingData, isLoading } = useGetAllBookingQuery(undefined);
  const [deletbooking] = useDeleteBookingMutation();

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
  const deletedBookingHandler = async (id: string) => {
    const tostID = toast.loading("Deleting Slote");
    try {
      const res = await deletbooking(id);
      if (res.error) {
        toast.error("SomeThing is Rong", { id: tostID });
      } else {
        toast.success("Booking delete  succesfuly", { id: tostID });
      }
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="min-h-screen">
      <div>
        <p className="lg:text-2xl dark:text-white text-center mt-10 mb-10 text-xl">
          ALL Booking
        </p>
      </div>
      <div className="mb-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-base-300 dark:text-white dark:bg-slate-600">
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
                <tr className="bg-base-200 dark:text-white dark:bg-slate-800">
                  <td className="w-60">{item.room?.name}</td>
                  <td>{item.user?.name}</td>
                  <td>{item?.date.split("T")[0]}</td>
                  <td>{item.isConfirmed}</td>

                  <td>
                    <div className="">
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
                      onClick={() => deletedBookingHandler(item._id)}
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
