import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { setUser, TUser } from "../../redux/fearutes/auth/authSlice";
import { toast } from "sonner";
import { useLogInMutation } from "../../redux/fearutes/auth/authApi";
import { veryfiyToken } from "../../utils/veryfiyToken";

const LogIn = () => {
  const dispatch = useAppDispatch();
  const [login] = useLogInMutation();
  const navigate = useNavigate();
  const loginhander = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;

    const tostID = toast.loading("Login");

    try {
      const userInfo = {
        email,
        password,
      };

      const res = await login(userInfo).unwrap();
      const user = veryfiyToken(res.token) as TUser;
      console.log(res);
      dispatch(setUser({ user: user, token: res.token }));
      toast.success("Log In successFully", { id: tostID, duration: 2000 });
      navigate("/");
    } catch (error) {
      toast.error("Something is rong", { id: tostID, duration: 2000 });
      console.log(error);
    }

    form.reset();
  };
  return (
    <div>
      <div>
        <div className=" grid lg:grid-cols-8">
          <div className=" lg:col-span-4">
            <img
              className=" lg:w-full mt-20  "
              src="https://i.ibb.co/0DC09N7/3094352.jpg"
              alt=""
            />
          </div>
          <div className="lg:col-span-4">
            <div className=" bg-center place-items-center  mt-10 mb-10 lg:mr-20 lg:ml-8  md:mr-4 mr-4 ml-4 lg:h-screen flex lg:items-center md:justify-center ">
              <div className="card flex-shrink-0 lg:w-full md:w-2/3  w-full border    bg-base-200 border-slate-900 ">
                <h1 className="lg:text-3xl md:text-3xl  lg:ml-8 lg:mt-5 ml-16 mt-5 text-xl ">
                  Log In Your ACCOUNT
                </h1>

                <div className="card-body">
                  <form onSubmit={loginhander}>
                    {/* 2 */}

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white"> Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white ">Password</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered "
                      />
                      <label className="label">
                        <span className="label-text-alt ">
                          {" "}
                          You not singup plese{" "}
                          <Link to="/register" className="text-red-300">
                            Sing up
                          </Link>
                        </span>
                      </label>
                      <label className="label">
                        <span className="label-text-alt text-red-500 ">
                          {/* {error}{" "} */}
                        </span>
                      </label>
                    </div>

                    <div className="form-control mt-6">
                      <button
                        type="submit"
                        className="btn btn-primary text-white"
                      >
                        Log In
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

export default LogIn;
