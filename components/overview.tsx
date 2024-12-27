"use client";

import { ActivityChart } from "@/components/charts/activity-chart";

const data = [
  { name: "Jan", total: 4 },
  { name: "Feb", total: 3 },
  { name: "Mar", total: 5 },
  { name: "Apr", total: 2 },
  { name: "May", total: 6 },
  { name: "Jun", total: 4 },
];

export function Overview() {
  return <ActivityChart data={data} />;
}