import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Cookies from "js-cookie";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "test@example.com" && password === "1234") {
      Cookies.set("token", "sampletoken123", { expires: 1 });
      navigate("/dashboard");
    } else {
      alert("invalid credentials");
    }
  };
  return (
    <div className="flex flex-row justify-between items-center h-[100%]">
      <div className="p-2 max-w-[386px] w-full h-full flex flex-col gap-6 ml-12 pt-[7%]">
        {/* Logo div */}
        <div className=" py-9 w-[157px] h-[25px] flex justify-start items-center relative">
          <img src="assets/SkygritLogo.svg" alt="logo" />
          <span className="absolute right-[-7px] top-3">
            <img
              className="w-[16px] h-[16px]"
              src="assets/ph_trademark.svg"
              alt="Trademark"
            />
          </span>
        </div>

        {/* Form */}
        <form action="#" className="flex flex-col gap-4" onSubmit={handleLogin}>
          {/* Email */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="text-[16px] text-[#303030]">
              Email
            </label>
            <input
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 pr-12 cursor-pointer"
              type="email"
              name="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="password" className="text-[16px] text-[#303030]">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 pr-12 cursor-pointer"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="w-[62px] h-[40px] bg-[#0D47A1] rounded-[12px] text-white text-[14px] font-[500] hover:bg-[#1565C0] transition"
              // onClick={handleSubmit}
            >
              Log in
            </button>
            <p className="text-[14px] text-[#303030]">
              Forgot Password?{" "}
              <span className="text-[#202020] cursor-pointer hover:underline hover:text-blue-600">
                Reset
              </span>
            </p>
          </div>
        </form>

        <footer className="absolute bottom-5">
          <div className="text-gray-800 opacity-50 text-sm">
            Revolutionizing Post-Booking Airline Experience
          </div>
        </footer>
      </div>
      {/* Image */}
      <div className="h-[40rem] py-2.5 w-max mt-0 mr-10 bg-white">
        <img
          className="w-[100%] h-[100%] my-0 mr-6"
          src="assets/Frame.png"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Login;
