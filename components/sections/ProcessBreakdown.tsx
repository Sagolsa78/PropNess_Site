"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Audit & Strategy",
    description: "We deep dive into your current metrics and pain points to build a roadmap that targets low-hanging fruit and long-term growth.",
  },
  {
    number: "02",
    title: "Design & Build",
    description: "Our engineers and creatives build your custom solution—whether it's a high-converting site or a complex software platform.",
  },
  {
    number: "03",
    title: "Launch & Promote",
    description: "We don't just go live; we go loud. We execute the marketing strategy to drive immediate traffic and user adoption.",
  },
  {
    number: "04",
    title: "Optimize & Scale",
    description: "We review the data, A/B test for better performance, and double down on what works to scale your revenue.",
  },
];

const ProcessBreakdown = () => {
  return (
    <SectionWrapper id="process">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 hidden md:block sticky top-24">
            How We Work
          </h2>
           <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 md:hidden">
            How We Work
          </h2>
          <p className="text-muted-foreground sticky top-36 hidden md:block">
             A structured approach to digital transformation, ensuring transparency and results at every step.
          </p>
           <p className="text-muted-foreground md:hidden mb-12">
             A structured approach to digital transformation, ensuring transparency and results at every step.
          </p>
        </div>

        <div className="md:w-2/3 space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border-l-2 border-border pl-8 relative"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-muted-foreground group-hover:border-primary group-hover:bg-primary transition-colors" />
              <span className="text-5xl font-bold text-muted/20 group-hover:text-primary/20 transition-colors block mb-2">
                {step.number}
              </span>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProcessBreakdown;
