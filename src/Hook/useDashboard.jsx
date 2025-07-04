import { useState, useEffect, useCallback } from "react";
import { http } from "../config/Axios";

const EMPTY = {
  quoatitionsList: 0,
  percentages: 0,
  repairList: 0,
  repairPercentage: 0,
  userList: 0,
  userPercentage: 0,
  spareList: 0,
  sparePercentage: 0,
};

const useDashboard = () => {
  const [dashboardList, setDashboardList] = useState(EMPTY);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDashboard = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await http.get("/api/dashboard"); // backend route
      setDashboardList(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  return { dashboardList, isLoading, error };
};

export default useDashboard;
