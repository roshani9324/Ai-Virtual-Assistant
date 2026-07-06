import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { userDataContext } from "../context/UserContext";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Customize2 = () => {
  const { userData, backendImage, selectedImage, setUserData, serverUrl } =
    useContext(userDataContext);
  const [assistantName, setAssistantName] = useState(
    userData?.assistantName || "",
  );
  // const navigate = useNavigate();
  const handleupdateAssistant = async () => {
    try {
      let formatData = new FormData();
      formatData.append("assistantName", assistantName);
      if (backendImage) {
        formatData.append("assistantImage", backendImage);
      } else {
        formatData.append("imageUrl", selectedImage);
      }

      const result = await axios.post(
        `${serverUrl}/api/user/update`,
        formatData,
        { withCredentials: true },
      );
      console.log(result.data);
      setUserData(result.data.user);
    } catch (err) {
      console.log(err);
      
    }
  };
  return (
    <div className="w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col p-[20px] ">
      <h1 className="m-[40px] text-white text-[30px] text-center">
        Enter Your <span className="text-blue-200"> Assistant Name</span>
      </h1>
      <input
        type="text"
        value={assistantName}
        id=""
        required
        onChange={(e) => setAssistantName(e.target.value)}
        placeholder="eg. shifra or choice your own name"
        className="w-full max-w-[600px] h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text=[18px] "
      />

      {assistantName && (
        <button
          className="min-w-[300px] h-[60px] mt-[30px] text-black font-semibold bg-white rounded-full text-[19px] cursor-pointer"
          onClick={() => {
            handleupdateAssistant();
            ;
          }}
        >
          finally create your assistant
        </button>
      )}
    </div>
  );
};

export default Customize2;
