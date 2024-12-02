import { FormEvent } from "react";
import { toast } from "sonner";
import { useUpdateBookingMutation } from "../../../../redux/fearutes/adminManagmentApi/adminManagmentApi";

const UpdateBooking: React.FC<{ id: string }> = ({ id }) => {
  const [updateBooking] = useUpdateBookingMutation();
  const updateRoom = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const isConfirmed = form.isConfirmed.value;

    const tostID = toast.loading("UpdateBooking..");

    try {
      const bookingData = {
        isConfirmed,
      };

      const updateBookingData = {
        id: id,
        body: bookingData,
      };

      const res = await updateBooking(updateBookingData);
      if (res.error) {
        toast.error("SomeThing is Rong", { id: tostID });
      } else {
        toast.success("Booking update succesfuly", { id: tostID });
      }
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <div>
        <div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}

          <dialog id="my_modal_3" className="modal">
            <div className="modal-box ">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn text-xl mb-3 btn-circle btn-ghost absolute right-2 top-2 dark:text-white dark:bg-slate-600">
                  ✕
                </button>
              </form>
              <div className=" ">
                <div className="">
                  <div className=" bg-center mt-3  ">
                    <div className=" lg:w-full md:w-2/3 w-full border dark:text-white dark:bg-slate-800  bg-base-200   border-slate-900 rounded-2xl  ">
                      <h1 className="lg:text-3xl md:text-3xl   lg:ml-8 lg:mt-5 ml-16 mt-5 text-xl ">
                        UPDATE BOOKING
                      </h1>

                      <div className="card-body">
                        {/* 1/ */}
                        <form onSubmit={updateRoom}>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text dark:text-white">
                                {" "}
                                Approve/Reject Bookings
                              </span>
                            </label>
                            <select
                              name="isConfirmed"
                              className="select w-full dark:text-white dark:bg-slate-600"
                            >
                              <option value="confirmed">Approve</option>
                              <option value="canceled">Reject</option>
                            </select>
                          </div>

                          <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary ">
                              Update Room
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default UpdateBooking;
