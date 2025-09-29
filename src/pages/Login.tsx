import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form reload
    alert(email)
    navigate("/"); // Redirect to dashboard
  };
  return (
    <div className="bg-amber-50 flex flex-row justify-between items-center h-[100dvh]">
      <div className=" p-6 max-w-[386px] w-full h-[420px] flex flex-col gap-6 ml-20">
        {/* Logo div */}
        <div className=" py-9 w-[160px] h-[25px] flex justify-start items-center relative">
          <img src="assets/skygrit-logo.svg" alt="logo" />
          <span className="absolute right-0 top-3.5">
            <img
              className="w-[16px] h-[16px]"
              src="assets/ph_trademark.svg"
              alt="Trademark"
            />
          </span>
        </div>

        {/* Form */}
        <form action="#" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="text-[16px] text-[#303030]">
              Email
            </label>
            <input
              id="email"
              className="w-full h-[52px] border border-gray-600 rounded-[8px] px-3 text-[16px] text-[#202020] placeholder-[#8D8D8D] active:outline-none focus:outline-none"
              type="email"
              name="email"
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="password" className="text-[16px] text-[#303030]">
              Password
            </label>
            <span className="relative flex items-center">
              <input
                id="password"
                className="w-full h-[52px] border border-gray-600 rounded-[8px] px-3 text-[16px] text-[#202020] placeholder-[#8D8D8D] active:outline-none focus:outline-none"
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
              <button
                type="button"
                className="cursor-pointer flex justify-center items-center"
                onClick={togglePassword}
              >
                <img
                  className="w-[24px] h-[24px] absolute right-3 cursor-pointer"
                  src="assets/view.svg"
                  alt="view"
                />
              </button>
            </span>
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
      </div>
      {/* Image */}
      {/* <div className="h-[40rem] w-max mt-8 mr-10 bg-white"> */}
        <img
          className="w-[45rem] h-[38rem] my-2 mr-6"
          src="assets/Frame.png"
          alt="img"
        />
      {/* </div> */}
    </div>
  );
};

export default Login;