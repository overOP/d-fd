import { useEffect } from "react";
import { useNavigate } from "react-router";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    navigate("/signup", { replace: true });
  }, [navigate]);

  return null;
};

export default Logout;
