import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { setUser, TUser } from "../../redux/fearutes/auth/authSlice";
import { toast } from "sonner";
import { useLogInMutation } from "../../redux/fearutes/auth/authApi";
import { veryfiyToken } from "../../utils/veryfiyToken";
import Lottie from "react-lottie-player";
import signupAnimation from "../../../public/Imgage/Animation - 1733064133074 (1).json";
import { FaGoogle } from "react-icons/fa";

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
      const userInfo = { email, password };
      const res = await login(userInfo).unwrap();
      const user = veryfiyToken(res.token) as TUser;
      dispatch(setUser({ user, token: res.token }));
      toast.success("Log In successfully", { id: tostID, duration: 2000 });
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong", { id: tostID, duration: 2000 });
      console.log(error);
    }

    form.reset();
  };

  const autofill = (email: string, password: string) => {
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;

    if (emailInput && passwordInput) {
      emailInput.value = email;
      passwordInput.value = password;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-screen-lg px-6 py-8">
        <div className="flex justify-center items-center">
          <Lottie
            loop
            play
            animationData={signupAnimation}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="w-full max-w-md bg-white dark:text-white dark:bg-slate-800 shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">
            Log In to Your Account
          </h2>
          <form onSubmit={loginhander}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium  dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input input-bordered w-full mt-1 dark:text-white dark:bg-slate-600"
                  placeholder="example@mail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input input-bordered w-full mt-1 dark:text-white dark:bg-slate-600"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-6">
              Log In
            </button>
            <div className="flex items-center justify-center mt-4">
              <button type="button" className="btn btn-primary w-full mt-6">
                <FaGoogle className="mr-2" />
                Continue with Google
              </button>
            </div>

            <div className="flex flex-col items-center mt-4 space-y-2">
              <button
                type="button"
                onClick={() => autofill("sahad.doe@example.com", "123456")}
                className="btn bg-blue-500 text-white hover:bg-blue-600 w-full"
              >
                Autofill Admin Credentials
              </button>
              <button
                type="button"
                onClick={() => autofill("rafid@gmail.com", "123456")}
                className="btn bg-green-500 text-white hover:bg-green-600 w-full"
              >
                Autofill User Credentials
              </button>
            </div>

            <p className="text-sm text-center mt-4 text-gray-600 dark:text-white">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
