import { FormEvent } from "react";
import { toast } from "sonner";
import { useUpdateSloteMutation } from "../../../../redux/fearutes/adminManagmentApi/adminManagmentApi";

const UpdateSlote: React.FC<{ id: string }> = ({ id }) => {
  const [updateSlotes] = useUpdateSloteMutation();

  const updateRoom = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const date = form.date.value;
    const startTime = form.startTime.value;
    const endTime = form.endTime.value;

    const tostID = toast.loading("Updateing slot");

    try {
      const slote = {
        date,
        startTime,
        endTime,
      };
      console.log(id);
      const updateSloteData = {
        id: id,
        body: slote,
      };
      console.log("update Slote", updateSloteData);
      const res = await updateSlotes(updateSloteData);
      if (res.error) {
        toast.error("SomeThing is Rong", { id: tostID });
      } else {
        toast.success("slot update succesfuly", { id: tostID });
      }
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };

  //   console.log("SpecificRoom", SpecificRoom);

  return (
    <div>
      <div>
        <div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}

          <dialog id="my_modal_2" className="modal">
            <div className="modal-box ">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn text-xl mb-3 btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className=" ">
                <div className="">
                  <div className=" bg-center mt-3  ">
                    <div className=" lg:w-full md:w-2/3 w-full border   bg-base-200   border-slate-900 rounded-2xl  ">
                      <h1 className="lg:text-3xl md:text-3xl   lg:ml-8 lg:mt-5 ml-16 mt-5 text-xl ">
                        UPDATE SLOT
                      </h1>

                      <div className="card-body">
                        {/* 1/ */}
                        <form onSubmit={updateRoom}>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text"> Date</span>
                            </label>
                            <input
                              type="date"
                              name="date"
                              placeholder="Date"
                              className="input input-bordered"
                            />
                          </div>
                          {/* 2 */}

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text ">StartTime</span>
                            </label>
                            <input
                              type="time"
                              name="startTime"
                              placeholder="startTime"
                              className="input input-bordered "
                            />
                          </div>
                          {/* 3 */}
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text ">endTime</span>
                            </label>
                            <input
                              type="time"
                              name="endTime"
                              placeholder="endTime"
                              className="input input-bordered "
                            />
                          </div>

                          <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary ">
                              Update Slot
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

export default UpdateSlote;
