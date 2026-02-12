import { useEffect, useState } from "react";
import { getDashboardData } from "../services/dashboard.api.ts";

export function useDashboardData() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getDashboardData().then(setData);
  }, []);

  return data;
}
