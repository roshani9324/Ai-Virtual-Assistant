import axios from "axios";
import React, { createContext } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const userDataContext = createContext();
import { useState,useEffect } from "react";


const UserContext = ({ children }) => {
  const serverUrl = "http://localhost:8000";
  const [userData, setUserData] = useState(null);

  const handleCurrentUSer = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/user/current`, {
        withCredentials: true,
      });
      setUserData(result.data);
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleCurrentUSer();
  }, []);

  const value = {
    serverUrl,
    userData, // ye add kar
    setUserData,
  };
  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;
  


