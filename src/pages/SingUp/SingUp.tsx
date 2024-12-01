import { FormEvent } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useSingUpMutation } from "../../redux/fearutes/auth/authApi";

const Signup = () => {
  const [addSingUp] = useSingUpMutation();
  const navigate = useNavigate();

  const singUpinPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = form.fullname.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const password = form.password.value;

    const tostID = toast.loading("Signing up...");
    try {
      const userinfo = {
        name,
        email,
        password,
        phone,
        role: "user",
        address,
      };

      const res = await addSingUp(userinfo);
      if (res.error) {
        toast.error("Something went wrong", { id: tostID });
      } else {
        toast.success("Signup successful! Please log in.", { id: tostID });
        form.reset();
        navigate(`/login`);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row ">
      {/* Left Image Section */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center ">
        <img
          src="https://lottie.host/embed/08d655c0-92c4-4237-bf56-0b600827aeba/hgwzpmUz7z.lottie"
          alt="Signup Illustration"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="flex items-center justify-center w-full lg:w-1/2 p-6">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Create Your Account
          </h2>
          <form onSubmit={singUpinPassword}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="input input-bordered w-full mt-1"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input input-bordered w-full mt-1"
                  placeholder="example@mail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="input input-bordered w-full mt-1"
                  placeholder="+123456789"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-600"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="input input-bordered w-full mt-1"
                  placeholder="123 Main Street"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input input-bordered w-full mt-1"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-6">
              Sign Up
            </button>

            <div className="flex items-center justify-center mt-4">
              <button
                type="button"
                className="btn bg-red-500 text-white hover:bg-red-600 flex items-center px-4 py-2 rounded-lg"
              >
                <FaGoogle className="mr-2" />
                Continue with Google
              </button>
            </div>

            <p className="text-sm text-center mt-4 text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
