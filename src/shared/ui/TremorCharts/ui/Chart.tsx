"use client";

import { BarChart } from "@/shared/ui/TremorCharts/ChartOptions";

const chartdata = [
  {
    name: "31SaaS",
    Day: 4,
  },
  {
    name: "LessonEnglish2",
    Day: 16,
  },
  {
    name: "MirrorWorld",
    Day: 7,
  },
  {
    name: "Portfolio",
    Day: 5,
  },
  {
    name: "Next Pizza",
    Day: 17,
  },
];

export const BarChartLayoutExample = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="100" className="">
      <BarChart
        className="h-72"
        data={chartdata}
        index="name"
        categories={["Day"]}
        yAxisWidth={90}
        layout="vertical"
      />
    </div>
  );
};
