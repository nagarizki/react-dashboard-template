import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout.tsx";
import DashboardPage from "../pages/dashboard/index.tsx";
import PatientsPage from "../pages/patients/index.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "patients",
        element: <PatientsPage />,
      },
    ],
  },
]);
