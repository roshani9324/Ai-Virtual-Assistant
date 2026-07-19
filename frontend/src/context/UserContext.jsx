import axios from "axios";
import React, { createContext } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const userDataContext = createContext();
import { useState, useEffect } from "react";

const UserContext = ({ children }) => {
  const serverUrl = "http://localhost:8000";
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [frontendImage, setFrontendImage] = useState(null);
  const [backendImage, setBackendImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCurrentUSer = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/user/current`, {
        withCredentials: true,
      });
      setUserData(result.data.user);
      console.log(result.data.user);
    } catch (err) {
      console.log(err);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  const getGeminiResponse = async (command) => {
    try {
      const result = await axios.post(
        `${serverUrl}/api/user/asktoassistant`,
        { command },
        { withCredentials: true },
      );
      return result.data;
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
    userData,
    setUserData,
    loading,
    getGeminiResponse,
    backendImage,
    setBackendImage,
    frontendImage,
    setFrontendImage,
    selectedImage,
    setSelectedImage,
  };
  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;
