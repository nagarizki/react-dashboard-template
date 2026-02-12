import BigNumberCard from "../../components/dashboard/BigNumberCard.tsx";
import DonutChart from "../../components/dashboard/DonutChart.tsx";
import { useDashboardData } from "../../features/dashboard/hooks/useDashboardData.ts";

export default function DashboardPage() {
  const data = useDashboardData();

  if (!data) return <p>Loading...</p>;

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-3 gap-6">
        <BigNumberCard label="Patients" value={data.totalPatients} />
        <BigNumberCard label="Doctors" value={data.totalDoctors} />
        <BigNumberCard label="Visits" value={data.totalVisits} />
      </div>

      <DonutChart data={data.visitsByDepartment} />
    </div>
  );
}
