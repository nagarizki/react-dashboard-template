import ReactECharts from "echarts-for-react";

type Props = {
  data: { name: string; value: number }[];
};

export default function DonutChart({ data }: Props) {
  const option = {
    tooltip: { trigger: "item" },
    series: [
      {
        type: "pie",
        radius: ["50%", "70%"],
        data,
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 300 }} />;
}
