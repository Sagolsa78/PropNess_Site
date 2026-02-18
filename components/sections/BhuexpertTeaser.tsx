"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Database, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

const BhuexpertTeaser = () => {
  return (
    <SectionWrapper id="bhuexpert-teaser" className="bg-background text-foreground relative overflow-hidden">
      <BackgroundGlow className="z-0" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium uppercase tracking-wider">
            Our Flagship Product
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            We Don't Just Build Websites. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              We Build Platforms.
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Introducing <span className="font-semibold text-foreground">Bhuexpert.com</span> — our in-house real estate intelligence engine. 
            It's not just a demo; it's a live, production-grade SaaS product handling real-time data, complex filtering, and interactive mapping.
            We use it to prove our architecture scales before we build yours.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-2 rounded-lg border border-border">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Next.js 14 Architecture</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-2 rounded-lg border border-border">
              <Database className="w-4 h-4 text-green-400" />
              <span>MongoDB Aggregations</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-2 rounded-lg border border-border">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Edge Performance</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8" asChild>
              <Link href="/case-studies/bhuexpert">
                View The Case Study <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary rounded-full px-8" asChild>
                <Link href="https://bhuexpert.com" target="_blank">
                    Live Demo
                </Link>
            </Button>
          </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative lg:h-[500px] w-full bg-zinc-900/50 rounded-xl border border-zinc-800 p-2 overflow-hidden shadow-2xl group"
        >
            {/* Mock Browser/App Interface */}
            <div className="absolute inset-x-0 top-0 h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <div className="ml-4 h-5 w-64 bg-zinc-800 rounded text-[10px] flex items-center px-2 text-zinc-500 font-mono">
                    bhuexpert.com/map-view
                </div>
            </div>
            
            <div className="absolute inset-0 top-8 bg-zinc-950 overflow-hidden">
                {/* Abstract UI Representation since we don't have a screenshot */}
                <div className="flex h-full">
                    {/* Sidebar */}
                    <div className="w-1/3 border-r border-zinc-800 p-4 space-y-4 hidden md:block">
                        <div className="h-8 bg-zinc-900 rounded w-3/4 animate-pulse mb-6" />
                        {[1, 2, 3].map((i) => (
                           <div key={i} className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/30 space-y-2">
                               <div className="h-24 bg-zinc-800/50 rounded w-full" />
                               <div className="h-4 bg-zinc-800 rounded w-2/3" />
                               <div className="flex justify-between">
                                  <div className="h-3 bg-zinc-800 rounded w-1/4" />
                                  <div className="h-3 bg-blue-900/30 rounded w-1/4" />
                               </div>
                           </div> 
                        ))}
                    </div>
                    {/* Map Area */}
                    <div className="flex-1 bg-zinc-900 relative">
                        {/* Map Grid Guidelines */}
                        <div className="absolute inset-0" style={{ 
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', 
                            backgroundSize: '40px 40px' 
                        }}></div>
                        
                        {/* Interactive Pins */}
                        <div className="absolute top-1/3 left-1/4">
                            <div className="relative">
                                <span className="flex h-4 w-4">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
                                </span>
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded shadow-xl whitespace-nowrap border border-zinc-700">
                                    ₹ 2.5 Cr
                                </div>
                            </div>
                        </div>

                         <div className="absolute bottom-1/3 right-1/3">
                            <div className="relative">
                                <div className="w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/20" />
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded shadow-xl whitespace-nowrap border border-zinc-700">
                                    ₹ 1.8 Cr
                                </div>
                            </div>
                        </div>

                        {/* Floating Action/Filter Bar */}
                        <div className="absolute top-4 left-4 right-4 h-12 bg-zinc-900/80 backdrop-blur-md rounded-lg border border-zinc-700/50 flex items-center px-4 justify-between">
                            <div className="flex space-x-2">
                                <div className="h-6 w-20 bg-zinc-800 rounded" />
                                <div className="h-6 w-20 bg-zinc-800 rounded" />
                            </div>
                            <div className="h-8 w-8 rounded-full bg-blue-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default BhuexpertTeaser;
