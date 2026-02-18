"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BhuexpertServiceSection from "@/components/sections/BhuexpertServiceSection";

const services = [
  {
    id: "website",
    title: "Website Development",
    description: "We build high-performance websites that look stunning and convert visitors. Using modern frameworks like Next.js, we ensure speed, SEO, and scalability.",
    features: ["Custom UI/UX Design", "Responsive Layouts", "SEO Optimization", "CMS Integration"],
    cta: "Start Your Website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    id: "app",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android. We focus on user experience and performance to keep users engaged.",
    features: ["iOS & Android", "React Native / Flutter", "App Store Optimization", "Performance Tuning"],
    cta: "Build Your App",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "ai",
    title: "AI Automation",
    description: "Leverage the power of AI to automate repetitive tasks, generate content, and gain insights from data.",
    features: ["Content Generation", "Workflow Automation", "Chatbots & Assistants", "Data Analysis"],
    cta: "Automate Now",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "seo",
    title: "SEO & Digital Growth",
    description: "Data-driven strategies to improve your visibility online and drive organic traffic to your business.",
    features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Link Building"],
    cta: "Grow Your Traffic",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/20 border-b border-border py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">our services.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </div>
      </div>

      <BhuexpertServiceSection />

      <div className="space-y-12 py-12">
        {services.map((service, index) => (
          <SectionWrapper key={service.id} id={service.id} className={index % 2 === 0 ? "bg-background" : "bg-secondary/10"}>
            <div className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-foreground/80">
                      <div className="bg-primary/10 p-1 rounded-full text-primary mr-3">
                        <Check className="w-4 h-4" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg">
                    <Link href="/contact">
                        {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
              </div>
              <div className="flex-1 w-full">
                  <div className="aspect-video relative bg-muted rounded-xl border border-border shadow-sm overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                  </div>
              </div>
            </div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  );
}
