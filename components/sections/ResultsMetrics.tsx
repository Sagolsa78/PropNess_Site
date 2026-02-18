"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";

const metrics = [
  {
    value: "45%",
    label: "Client Revenue Increase",
    description: "Average growth in 3 months",
  },
  {
    value: "150K+",
    label: "Social Followers Gained",
    description: "Across client accounts",
  },
  {
    value: "50+",
    label: "Projects Delivered",
    description: "On time and on budget",
  },
  {
    value: "5x",
    label: "ROI Average",
    description: "Return on Ad Spend",
  },
];

const ResultsMetrics = () => {
  return (
    <SectionWrapper className="bg-background text-foreground py-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold mb-2">{metric.value}</span>
            <span className="text-lg font-semibold mb-1 opacity-90">{metric.label}</span>
            <span className="text-sm opacity-75">{metric.description}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ResultsMetrics;
