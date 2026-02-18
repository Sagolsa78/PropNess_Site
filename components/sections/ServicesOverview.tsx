"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Laptop, Smartphone, BrainCircuit, BarChart3, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Problem: Slow, outdated sites kill sales. Solution: We build blazing fast, conversion-optimized websites using Next.js. Result: 2x conversions and instant credibility.",
    icon: Laptop,
    href: "/services#website",
  },
  {
    title: "Content Creation",
    description: "Problem: Boring brands get ignored. Solution: We produce viral-ready reels, scripts, and visuals that grab attention. Result: 10x engagement and brand authority.",
    icon: Smartphone,
    href: "/services#content",
  },
  {
    title: "Social Media Management",
    description: "Problem: Inconsistent posting loses followers. Solution: Full-service strategy, scheduling, and community management. Result: Exponential organic growth.",
    icon: BrainCircuit,
    href: "/services#social",
  },
  {
    title: "Custom Software",
    description: "Problem: Off-the-shelf tools don't fit. Solution: Enterprise-grade software tailored to your workflows. Result: Operational efficiency and scalability.",
    icon: BarChart3,
    href: "/services#software",
  },
];

const ServicesOverview = () => {
  return (
    <SectionWrapper id="services" className="bg-secondary/20">
      <div className="flex flex-col space-y-4 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Expertise</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We combine technical mastery with strategic insight to deliver digital products that scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={service.href} className="group block h-full">
              <Card className="h-full border-border/50 bg-background/50 hover:bg-background transition-colors hover:border-primary/50 relative overflow-hidden group-hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ServicesOverview;
