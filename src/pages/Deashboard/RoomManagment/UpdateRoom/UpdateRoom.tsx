import { FormEvent } from "react";
import { toast } from "sonner";
import { useUpdateRoomsMutation } from "../../../../redux/fearutes/adminManagmentApi/adminManagmentApi";

const UpdateRoom: React.FC<{ id: string; specificRoomId: string }> = ({
  id,
}) => {
  const [updateRooms] = useUpdateRoomsMutation();

  const updateRoom = async (event: FormEvent<HTMLFormElement>) => {
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
      const Room = {
        name,
        Image,
        roomNo: Number(roomNo),
        floorNo: Number(floorNo),
        capacity: Number(capacity),
        pricePerSlot: Number(pricePerSlot),
        amenities: [amenities],
      };

      const updateRoomData = {
        id: id,
        body: Room,
      };

      const res = await updateRooms(updateRoomData);
      if (res.error) {
        toast.error("SomeThing is Rong", { id: tostID });
      } else {
        toast.success("Room update succesfuly", { id: tostID });
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

          <dialog id="my_modal_1" className="modal">
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
                        UPDATE ROOM
                      </h1>

                      <div className="card-body">
                        {/* 1/ */}
                        <form onSubmit={updateRoom}>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text"> Name</span>
                            </label>
                            <input
                              type="name"
                              name="Fullname"
                              placeholder="Full Name"
                              className="input input-bordered"
                            />
                          </div>
                          {/* 2 */}

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text ">Image</span>
                            </label>
                            <input
                              type="text"
                              name="Image"
                              placeholder="Image"
                              className="input input-bordered "
                            />
                          </div>
                          {/* 3 */}
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text ">Room Number</span>
                            </label>
                            <input
                              type="number"
                              name="roomNo"
                              placeholder="RoomNo"
                              className="input input-bordered "
                            />
                          </div>
                          {/* 4 */}
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text ">Floor Number</span>
                            </label>
                            <input
                              type="number"
                              name="floorNo"
                              placeholder="FloorNo"
                              className="input input-bordered "
                            />
                          </div>
                          {/* 5 */}
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text ">Capacity</span>
                            </label>
                            <input
                              type="number"
                              name="capacity"
                              placeholder="Capacity"
                              className="input input-bordered "
                            />
                          </div>
                          {/* 6 */}
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text ">
                                Price Per Slot
                              </span>
                            </label>
                            <input
                              type="number"
                              name="pricePerSlot"
                              placeholder="PricePerSlot"
                              className="input input-bordered "
                            />
                          </div>
                          {/* 7 */}
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text ">Amenities</span>
                            </label>
                            <input
                              type="text"
                              name="amenities"
                              placeholder="Amenities"
                              className="input input-bordered "
                            />
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

export default UpdateRoom;
