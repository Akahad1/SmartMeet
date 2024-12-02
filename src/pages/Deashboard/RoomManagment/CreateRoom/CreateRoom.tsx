import { FormEvent } from "react";
import { useCreateRoomMutation } from "../../../../redux/fearutes/adminManagmentApi/adminManagmentApi";
import { toast } from "sonner";

const CreateRoom = () => {
  const [addroom] = useCreateRoomMutation();
  const singUpinPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const name = form.Fullname.value;
    const Image = form.Image.value;
    const roomNo = form.roomNo.value;
    const floorNo = form.floorNo.value;
    const capacity = form.capacity.value;
    const pricePerSlot = form.pricePerSlot.value;
    const amenities = form.amenities.value;

    const tostID = toast.loading("Room");
    try {
      const createRoom = {
        name,
        Image,
        roomNo: Number(roomNo),
        floorNo: Number(floorNo),
        capacity: Number(capacity),
        pricePerSlot: Number(pricePerSlot),
        amenities: [amenities],
      };
      console.log(createRoom);

      const res = await addroom(createRoom);
      if (res.error) {
        toast.error("SomeThing is Rong", { id: tostID });
      } else {
        toast.success("Room Create succesfuly", { id: tostID });
      }
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <div>
        <div className=" lg:w-1/2 lg:m-auto">
          <div className="">
            <div className=" bg-center place-items-center grid mt-10 mb-10 lg:mr-10 mr-4 ml-4   ">
              <div className=" lg:w-full md:w-2/3 w-full border dark:text-white dark:bg-slate-800   bg-base-200   border-slate-900 rounded-2xl  ">
                <h1 className="lg:text-3xl md:text-3xl dark:text-white   lg:ml-8 lg:mt-5 ml-16 mt-5 text-xl ">
                  CREATE NEW ROOM
                </h1>

                <div className="card-body">
                  {/* 1/ */}
                  <form onSubmit={singUpinPassword}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-white">
                          {" "}
                          Name
                        </span>
                      </label>
                      <input
                        type="name"
                        name="Fullname"
                        placeholder="Full Name"
                        className="input input-bordered dark:text-white dark:bg-slate-600"
                        required
                      />
                    </div>
                    {/* 2 */}

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-white">
                          Image
                        </span>
                      </label>
                      <input
                        type="text"
                        name="Image"
                        placeholder="Image"
                        className="input input-bordered dark:text-white dark:bg-slate-600"
                        required
                      />
                    </div>
                    {/* 3 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-white">
                          Room Number
                        </span>
                      </label>
                      <input
                        type="number"
                        name="roomNo"
                        placeholder="RoomNo"
                        className="input input-bordered dark:text-white dark:bg-slate-600"
                        required
                      />
                    </div>
                    {/* 4 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-white">
                          Floor Number
                        </span>
                      </label>
                      <input
                        type="number"
                        name="floorNo"
                        placeholder="FloorNo"
                        className="input input-bordered dark:text-white dark:bg-slate-600"
                        required
                      />
                    </div>
                    {/* 5 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-white">
                          Capacity
                        </span>
                      </label>
                      <input
                        type="number"
                        name="capacity"
                        placeholder="Capacity"
                        className="input input-bordered dark:text-white dark:bg-slate-600"
                        required
                      />
                    </div>
                    {/* 6 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-white ">
                          Price Per Slot
                        </span>
                      </label>
                      <input
                        type="number"
                        name="pricePerSlot"
                        placeholder="PricePerSlot"
                        className="input input-bordered dark:text-white dark:bg-slate-600"
                        required
                      />
                    </div>
                    {/* 7 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-white">
                          Amenities
                        </span>
                      </label>
                      <input
                        type="text"
                        name="amenities"
                        placeholder="Amenities"
                        className="input input-bordered dark:text-white dark:bg-slate-600"
                        required
                      />
                    </div>
                    {/* 4 */}

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

export default CreateRoom;
