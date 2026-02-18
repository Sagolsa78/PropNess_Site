"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Target, Zap, BarChart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const aiFeatures = [
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Our AI analyzes millions of data points to identify your ideal customer profile with 95% accuracy.",
  },
  {
    icon: Cpu,
    title: "Automated Content Production",
    description: "Generate high-quality, SEO-optimized content at scale. From blog posts to social captions.",
  },
  {
    icon: Zap,
    title: "Smart Distribution",
    description: "Auto-post to LinkedIn, Twitter, and Instagram at peak engagement times.",
  },
  {
    icon: BarChart,
    title: "Live Performance Tracking",
    description: "Real-time dashboards showing ROI, engagement, and conversion metrics.",
  },
];

export default function AIGrowthPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-zinc-950 text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
             <div className="inline-block px-3 py-1 mb-4 border border-primary/50 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Bhuexpert AI Engine v2.0
             </div>
             <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Automate your growth. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                    Dominate your niche.
                </span>
             </h1>
             <p className="text-xl text-zinc-400 max-w-2xl mb-8">
                A complete ecosystem that finds customers, creates content, and drives sales—while you sleep.
             </p>
             <Button asChild size="lg" className="rounded-full h-12 px-8">
                <Link href="/contact">
                    Get a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
             </Button>
          </div>
        </div>
      </div>

      <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border/50 p-6 rounded-2xl hover:shadow-lg transition-all"
                  >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                          <feature.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </motion.div>
              ))}
          </div>
      </SectionWrapper>

      {/* Visual Flow Representation */}
      <SectionWrapper className="bg-secondary/10">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground">The science behind the system.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
              {/* Connecting Line (Vertical on mobile, horizontal on desktop) */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 md:hidden" />
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 hidden md:block" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                  {[
                      { step: "1", title: "Input", desc: "Define your audience & goals." },
                      { step: "2", title: "Process", desc: "AI Engine generates strategy." },
                      { step: "3", title: "Output", desc: "Leads, Traffic, Revenue." }
                  ].map((s, i) => (
                      <div key={i} className="bg-background border border-border p-8 rounded-xl text-center shadow-sm relative">
                           <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 relative z-20 border-4 border-background">
                               {s.step}
                           </div>
                           <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                           <p className="text-muted-foreground">{s.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </SectionWrapper>
    </div>
  );
}
