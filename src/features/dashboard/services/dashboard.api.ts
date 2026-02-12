import { dashboardMock } from "../mocks/dashboard.mock.ts";

export async function getDashboardData() {
  // nanti bisa diganti ke API / GraphQL
  return new Promise((resolve) => {
    setTimeout(() => resolve(dashboardMock), 300);
  });
}
