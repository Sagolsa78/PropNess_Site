"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { motion } from "framer-motion";
import { BrainCircuit, FileText, Share2, BarChart } from "lucide-react";

const flowSteps = [
    {
        icon: BrainCircuit,
        title: "Niche Detection",
        description: "AI analyzes market trends to identify opportunities.",
    },
    {
        icon: FileText,
        title: "Content Generation",
        description: "Automated creation of SEO-optimized articles and posts.",
    },
    {
        icon: Share2,
        title: "Multi-Channel Distribution",
        description: "Smart scheduling across social media and web platforms.",
    },
    {
        icon: BarChart,
        title: "Performance Tracking",
        description: "Real-time analytics to refine the growth strategy.",
    },
];

const AIAutomationSystemOverview = () => {
  return (
    <SectionWrapper className="bg-zinc-950 text-white overflow-hidden relative">
         {/* Background Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                The AI Growth Engine
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                A closed-loop system that automates your digital presence from strategy to execution.
            </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent hidden lg:block -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {flowSteps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center hover:border-primary/50 transition-colors shadow-lg"
                    >
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary">
                            <step.icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                        <p className="text-sm text-zinc-400">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </SectionWrapper>
  );
};

export default AIAutomationSystemOverview;
