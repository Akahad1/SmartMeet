import { FormEvent } from "react";

import { toast } from "sonner";
import { useUpdateProfileMutation } from "../../redux/fearutes/userManagmentApi/UsermanagmentApi";
import { veryfiyToken } from "../../utils/veryfiyToken";
import { useAppSelector } from "../../redux/hook";
import { useCurrentToken } from "../../redux/fearutes/auth/authSlice";

const UpdateProfile = () => {
  const [updateUserProfile] = useUpdateProfileMutation();
  const token = useAppSelector(useCurrentToken);
  const singUpinPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const name = form.Fullname.value;
    const email = form.Image.value;
    const phone = form.roomNo.value;
    const address = form.floorNo.value;

    const tostID = toast.loading("User Update...");

    let user;
    if (token) {
      user = veryfiyToken(token);
    }
    try {
      const updateUser = {
        id: user?.user,
        data: {
          name,
          email,
          phone,
          address,
        },
      };
      console.log(updateUser);

      const res = await updateUserProfile(updateUser);
      if (res.error) {
        toast.error("SomeThing is Rong", { id: tostID });
      } else {
        toast.success("User  update succesfuly", { id: tostID });
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
                  Update Profile
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
                          Email
                        </span>
                      </label>
                      <input
                        type="email"
                        name="Image"
                        placeholder="Email"
                        className="input input-bordered dark:text-white dark:bg-slate-600"
                        required
                      />
                    </div>
                    {/* 3 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-white">
                          Phone
                        </span>
                      </label>
                      <input
                        type="number"
                        name="roomNo"
                        placeholder="number"
                        className="input input-bordered dark:text-white dark:bg-slate-600"
                        required
                      />
                    </div>
                    {/* 4 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text dark:text-white">
                          Address
                        </span>
                      </label>
                      <input
                        type="text"
                        name="floorNo"
                        placeholder="Address"
                        className="input input-bordered dark:text-white dark:bg-slate-600"
                        required
                      />
                    </div>

                    <div className="form-control mt-6">
                      <button type="submit" className="btn btn-primary ">
                        Update Profile
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

export default UpdateProfile;
