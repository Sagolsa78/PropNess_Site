"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Check } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <div className="bg-muted/20 border-b border-border py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(to right, #8080801a 1px, transparent 1px), linear-gradient(to bottom, #8080801a 1px, transparent 1px)',
            backgroundSize: '14px 24px'
        }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">about profness.</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We are a team of technologists, designers, and strategists obsessed with digital growth.
            </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              <div>
                  <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      To empower businesses with the digital tools and strategies they need to thrive in a rapidly evolving landscape. We believe that technology should be an enabler, not a barrier.
                  </p>
                  <ul className="space-y-4">
                      {["Innovation at Core", "Transparency First", "Results Driven"].map((item) => (
                          <li key={item} className="flex items-center space-x-3">
                              <div className="bg-primary/10 p-1 rounded-full text-primary">
                                  <Check className="w-4 h-4" />
                              </div>
                              <span className="font-medium">{item}</span>
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="bg-secondary/20 p-8 rounded-2xl border border-border/50">
                  <h3 className="text-2xl font-bold mb-4">Why We Started</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                      ProfNess was born from a simple observation: many potential-filled businesses fail not because of their product, but because of poor digital execution. We set out to bridge that gap.
                  </p>
                   <p className="text-muted-foreground leading-relaxed">
                      Today, we help partners across industries navigate the complexities of web, mobile, and AI technologies to build sustainable growth engines.
                  </p>
              </div>
          </div>
      </SectionWrapper>

      {/* Leadership / Team Placeholder */}
      <SectionWrapper className="bg-secondary/10">
          <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The Minds Behind the Magic</h2>
              <p className="text-muted-foreground">Experts in every field, united by a common goal.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Sarah Mitchell", role: "Founder & Creative Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
                { name: "James Chen", role: "CTO & Lead Developer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" },
                { name: "Emma Rodriguez", role: "Head of Strategy", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
                { name: "Michael Park", role: "Design Lead", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" }
              ].map((member, i) => (
                  <div key={i} className="group text-center">
                      <div className="aspect-square bg-muted rounded-xl mb-4 overflow-hidden relative">
                           <div className="w-full h-full bg-gradient-to-t from-black/50 to-transparent absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 z-10">
                               <span className="text-white font-medium text-sm">View Profile</span>
                           </div>
                           <Image 
                             src={member.image} 
                             alt={member.name}
                             fill
                             className="object-cover transition-transform duration-500 group-hover:scale-105"
                           />
                      </div>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-sm text-primary">{member.role}</p>
                  </div>
              ))}
          </div>
      </SectionWrapper>
    </div>
  );
}
