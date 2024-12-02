import { FormEvent } from "react";

import { toast } from "sonner";
import { useGetAllRoomsQuery } from "../../../../redux/fearutes/randomApi/randomApi";
import { TMeetingRoom } from "../../../../component/RoomCards/RoomCards";
import { useCreateSloteMutation } from "../../../../redux/fearutes/adminManagmentApi/adminManagmentApi";

const CreateSlote = () => {
  const { data: RoomSData } = useGetAllRoomsQuery(undefined);
  const [addSlot] = useCreateSloteMutation();
  const createSlotehandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const room = form.room.value;
    const date = form.date.value;
    const startTime = form.startTime.value;
    const endTime = form.endTime.value;
    const parts = room.split(" "); // Split the string by commas
    const lastItem = parts[parts.length - 1];

    const tostID = toast.loading("Create Slote");
    try {
      const createSlote = {
        room: lastItem,
        date,
        startTime,
        endTime,
      };
      console.log(createSlote);

      const res = await addSlot(createSlote);
      if (res.error) {
        toast.error("SomeThing is Rong", { id: tostID });
      } else {
        toast.success("Slote Create succesfuly", { id: tostID });
      }
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
    form.reset();
  };
  return (
    <div>
      <div>
        <div className=" lg:w-1/2 lg:m-auto">
          <div className="">
            <div className=" bg-center place-items-center grid mt-10 mb-10 lg:mr-10 mr-4 ml-4   ">
              <div className=" lg:w-full md:w-2/3 w-full border dark:text-white dark:bg-slate-800   bg-base-200   border-slate-900 rounded-2xl  ">
                <h1 className="lg:text-3xl md:text-3xl   lg:ml-8 lg:mt-5 ml-16 mt-5 text-xl ">
                  CREATE SLOT
                </h1>

                <div className="card-body">
                  {/* 1/ */}
                  <form onSubmit={createSlotehandler}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-white">
                          {" "}
                          Room Id
                        </span>
                      </label>
                      <select
                        name="room"
                        className="select w-full dark:text-white dark:bg-slate-600 "
                      >
                        {RoomSData?.data?.map((item: TMeetingRoom) => (
                          <option key={item._id}>
                            {`${item.name}   ${item._id}`}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* 2 */}

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-white">Date</span>
                      </label>
                      <input
                        type="date"
                        name="date"
                        placeholder="date"
                        className="input input-bordered dark:text-white dark:bg-slate-600"
                        required
                      />
                    </div>
                    {/* 3 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-white ">
                          Start Time
                        </span>
                      </label>
                      <input
                        type="time"
                        name="startTime"
                        placeholder="Start Time"
                        className="input input-bordered dark:text-white dark:bg-slate-600"
                        required
                      />
                    </div>
                    {/* 4 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-white">
                          End Time
                        </span>
                      </label>
                      <input
                        type="time"
                        name="endTime"
                        placeholder="EndTime"
                        className="input input-bordered dark:text-white dark:bg-slate-600"
                        required
                      />
                    </div>

                    <div className="form-control mt-6">
                      <button type="submit" className="btn btn-primary ">
                        Create Room
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSlote;
