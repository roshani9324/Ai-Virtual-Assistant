import React, { useContext, useState } from "react";
import bg from "../assets/authBg.png";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext";
import axios from "axios";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { serverUrl,userData, setUserData } = useContext(userDataContext);
  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      let result = await axios.post(
        `${serverUrl}/api/auth/signin`,
        {
          email,
          password,
        },
        { withCredentials: true },
      );
      console.log(result);
      setLoading(false);
      setUserData(result.data.user);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      setLoading(false);

    }
  };
  return (
    <div>
      <div
        className="w-full h-[100vh] bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <form
          onSubmit={handleSignIn}
          className="w-[90%] h-[600px] max-w-[500px] bg-[#00000062] backdrop-blur shadow-lg shadow-black flex flex-col items-center justify-center gap-[20px] px-[20px]"
        >
          <h1 className="text-white text-[30px] font-semibold mb-[30px]">
            Sign In to <span className="text-blue-400">Virtual Assistant</span>
          </h1>

          <input
            type="email"
            value={email}
            id=""
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter you email"
            className="w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text=[18px] "
          />
          <div className="w-full h-[60px] border-2 border-white bg-transparent text-white  rounded-full text=[18px] relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              name=""
              id=""
              className="w-full h-full outline-none  rounded-full bg-transparent placeholder-gray-300 px-[20px] py-[10px]"
            />
            {!showPassword && (
              <IoEye
                onClick={() => setShowPassword(true)}
                className="absolute cursor-pointer top-[18px] right-[20px] w-[25px] h-[25px] text-[white]"
              />
            )}
            {showPassword && (
              <IoEyeOff
                onClick={() => setShowPassword(false)}
                className=" cursor-pointer absolute top-[18px] right-[20px] w-[25px] h-[25px] text-[white]"
              />
            )}
          </div>
          {error.length > 0 && (
            <p className="text-red-500 text-[17px]">{error}</p>
          )}
          <button
            disabled={loading}
            className="min-w-[150px] h-[60px] mt-[30px] text-black font-semibold bg-white rounded-full text-[19px] "
          >
            {loading ? "Loading ..." : "Sign In"}
          </button>
          <p
            className="text-[white] text-[18px] cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Already have an account ?
            <span className="text-blue-400 ">Sign Up </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
