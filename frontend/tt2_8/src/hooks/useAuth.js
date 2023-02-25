import { useContext } from "react";
import { AppContext } from "../context/appContext";

const useAuth = () => {
  return useContext(AppContext);
};

export default useAuth;
