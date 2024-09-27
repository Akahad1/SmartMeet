import { FormEvent } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useSingUpMutation } from "../../redux/fearutes/auth/authApi";

const Singup = () => {
  const [addSingUp] = useSingUpMutation();
  const navigate = useNavigate();
  const singUpinPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = form.Fullname.value;
    const email = form.email.value;
    const phone = form.number.value;
    const address = form.address.value;

    const password = form.password.value;

    const tostID = toast.loading("SingUp..");
    try {
      const userinfo = {
        name,
        email,
        password,
        phone,
        role: "user", //role can be user or admin
        address,
      };
      console.log(userinfo);

      const res = await addSingUp(userinfo);
      if (res.error) {
        toast.error("SomeThing is Rong", { id: tostID });
      } else {
        toast.success("Singup succesfuly Please LogIn", { id: tostID });
        form.reset();
        navigate(`/login`);
      }
      console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <div>
        <div className=" grid lg:grid-cols-8">
          <div className=" lg:col-span-4">
            <img
              className=" lg:w-full  "
              src="https://i.ibb.co/FJPbC4f/2968290.jpg"
              alt=""
            />
          </div>
          <div className="lg:col-span-4">
            <div className=" bg-center place-items-center grid mt-10 mb-10 lg:mr-10 mr-4 ml-4   ">
              <div className=" lg:w-full md:w-2/3 w-full border   bg-base-200   border-slate-900 rounded-2xl  ">
                <h1 className="lg:text-3xl md:text-3xl   lg:ml-8 lg:mt-5 ml-16 mt-5 text-xl ">
                  CREATE NEW ACCOUNT
                </h1>

                <div className="card-body">
                  {/* 1/ */}
                  <form onSubmit={singUpinPassword}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text"> Full Name</span>
                      </label>
                      <input
                        type="name"
                        name="Fullname"
                        placeholder="Full Name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {/* 2 */}

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text "> Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered "
                        required
                      />
                    </div>
                    {/* 3 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text ">Phone number</span>
                      </label>
                      <input
                        type="number"
                        name="number"
                        placeholder="number"
                        className="input input-bordered "
                        required
                      />
                    </div>
                    {/* 3 */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text ">Address</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        placeholder="address"
                        className="input input-bordered "
                        required
                      />
                    </div>
                    {/* 4 */}

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text  ">Password</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered "
                        required
                      />
                      <label className="label">
                        <span className="label-text-alt">
                          {" "}
                          You already singup please{" "}
                          <Link to="/login" className="text-red-500">
                            Log in
                          </Link>
                        </span>
                      </label>
                      <label className="label">
                        <span className="label-text-alt text-red-500 "></span>
                      </label>
                    </div>
                    <div className="    ">
                      <button className="btn   w-full   ">
                        <FaGoogle className="inline mr-3 text-xl" />
                        Continue with Google
                      </button>
                    </div>
                    <div className="form-control mt-6">
                      <button type="submit" className="btn btn-primary ">
                        Sing Up
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

export default Singup;
