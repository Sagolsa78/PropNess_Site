"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { CheckCircle2 } from "lucide-react";

const principles = [
  {
    title: "Data-Driven Decisions",
    description: "We don't guess. We analyze market data and user behavior to guide every design and technical choice.",
  },
  {
    title: "Scalable Architecture",
    description: "Building for today's needs with tomorrow's growth in mind. Our systems are designed to handle scale effortlessly.",
  },
  {
    title: "User-Centric Design",
    description: "Every pixel serves a purpose. We craft intuitive experiences that convert visitors into loyal customers.",
  },
  {
    title: "Transparent Collaboration",
    description: "No black boxes. You get full visibility into our process, progress, and performance metrics.",
  },
];

const DigitalGrowthPhilosophy = () => {
  return (
    <SectionWrapper className="bg-background relative">
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                    Philosophy of Growth
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        In a digital landscape crowded with noise, clarity wins. At ProfNess, we believe that true growth comes from the intersection of innovative technology and strategic design.
                    </p>
                    <p>
                        We don't just build websites or apps; we build digital ecosystems engineered to perform. Our approach is rooted in a deep understanding of your business mechanics and customer psychology.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {principles.map((p, i) => (
                    <div key={i} className="bg-card border border-border/50 p-6 rounded-xl hover:bg-secondary/10 transition-colors">
                        <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                        <p className="text-sm text-muted-foreground">{p.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </SectionWrapper>
  );
};

export default DigitalGrowthPhilosophy;
