import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const nav = useNavigate();
  useEffect(() => {
    localStorage.clear();
    nav("/signup", { replace: true });
  }, [nav]);
  return null;
};

export default Logout;
