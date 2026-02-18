"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Code2, Database, Globe, Layers, Zap, Map as MapIcon, BarChart3 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfNessCaseStudyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-zinc-950 text-white pt-32 pb-20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
           <div className="max-w-4xl mx-auto text-center mb-12">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
             >
                <Badge variant="outline" className="mb-6 border-blue-500/30 bg-blue-500/10 text-blue-400 px-4 py-1">
                    Internal Product
                </Badge>
             </motion.div>
             
             <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400"
             >
                ProfNess.com
             </motion.h1>
             
             <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
             >
                A high-performance real estate intelligence platform built to demonstrate our engineering capabilities. 
                Zero legacy code. Pure Next.js performance.
             </motion.p>
           </div>

           {/* Hero Image / Mockup Placeholder */}
           <motion.div
             initial={{ opacity: 0, scale: 0.95, y: 40 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 0.8 }}
             className="relative aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900/50 group"
           >
                {/* Simulated UI for ProfNess */}
                <div className="absolute inset-0 flex flex-col">
                    <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 space-x-2">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 rounded-full bg-zinc-700" />
                            <div className="w-3 h-3 rounded-full bg-zinc-700" />
                            <div className="w-3 h-3 rounded-full bg-zinc-700" />
                        </div>
                        <div className="ml-4 flex-1 max-w-md h-6 bg-zinc-800 rounded-md flex items-center px-3 text-xs text-zinc-500 font-mono">
                           profness.com
                        </div>
                    </div>
                    <div className="flex-1 flex bg-zinc-950 p-4 gap-4">
                        {/* Sidebar Mockup */}
                        <div className="w-1/4 hidden md:flex flex-col gap-3">
                            <div className="h-8 w-3/4 bg-zinc-800 rounded animate-pulse" />
                            <div className="h-4 w-1/2 bg-zinc-800/50 rounded" />
                            <div className="mt-4 space-y-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-24 w-full bg-zinc-900/50 border border-zinc-800 rounded-lg p-2 flex gap-2">
                                        <div className="w-16 h-full bg-zinc-800 rounded" />
                                        <div className="flex-1 space-y-2">
                                            <div className="h-3 w-3/4 bg-zinc-800 rounded" />
                                            <div className="h-2 w-1/2 bg-zinc-800/50 rounded" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Map Mockup */}
                        <div className="flex-1 bg-zinc-900 rounded-lg border border-zinc-800 relative overflow-hidden">
                             <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(10,minmax(0,1fr))] opacity-20">
                                {Array.from({ length: 200 }).map((_, i) => (
                                    <div key={i} className="border-[0.5px] border-zinc-700" />
                                ))}
                             </div>
                             {/* Floating Pins */}
                             {[
                                { top: '20%', left: '30%', price: '2.5 Cr' },
                                { top: '50%', left: '60%', price: '1.8 Cr' },
                                { top: '70%', left: '40%', price: '3.2 Cr' },
                             ].map((pin, i) => (
                                 <div key={i} className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ top: pin.top, left: pin.left }}>
                                     <div className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded shadow-lg font-bold">
                                         ₹ {pin.price}
                                     </div>
                                     <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-blue-600 mx-auto" />
                                 </div>
                             ))}
                        </div>
                    </div>
                </div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-zinc-900/90 backdrop-blur border border-zinc-700 p-4 rounded-lg inline-flex items-center gap-4 shadow-xl">
                        <div className="bg-green-500/20 p-2 rounded-full text-green-500">
                            <Zap className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-sm font-medium text-white">Live Performance Metrics</div>
                            <div className="text-xs text-zinc-400">98/100 Core Web Vitals • &lt; 100ms API Response</div>
                        </div>
                    </div>
                </div>
           </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-zinc-900 border-y border-zinc-800">
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
                    <div className="text-sm text-zinc-500 uppercase tracking-widest">In-House Built</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">&lt;0.5s</div>
                    <div className="text-sm text-zinc-500 uppercase tracking-widest">Page Load</div>
                </div>
                 <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">50k+</div>
                    <div className="text-sm text-zinc-500 uppercase tracking-widest">Properties</div>
                </div>
                 <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                    <div className="text-sm text-zinc-500 uppercase tracking-widest">Uptime</div>
                </div>
            </div>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-16">
                
                {/* The Challenge */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">The Challenge</h2>
                     <p className="text-lg text-muted-foreground leading-relaxed">
                        The real estate market is flooded with slow, clunky platforms. Most existing solutions are 
                        built on legacy architectures, struggle with large datasets, and offer poor mobile experiences. 
                        We wanted to prove that a real estate platform could be as fast and fluid as a consumer social app.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        The goal was clear: Build a platform that handles thousands of property listings with instant filtering, 
                        interactive mapping, and zero lag—proving our capability to handle complex data-driven projects for our clients.
                    </p>
                </div>

                {/* The Solution */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">The Solution</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We bypassed traditional CMSs and built a custom architecture from the ground up using the 
                        <strong> Next.js App Router</strong>. This allowed us to leverage React Server Components for 
                        blazing fast initial loads and client-side interactivity for the map interface.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <Card className="bg-secondary/10 border-border/50">
                            <CardHeader>
                                <MapIcon className="w-8 h-8 text-blue-500 mb-2" />
                                <CardTitle>Geospatial Engine</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Custom MongoDB geospatial queries allow users to draw custom boundaries on the map, 
                                instantly filtering properties within that specific polygon.
                            </CardContent>
                        </Card>
                        <Card className="bg-secondary/10 border-border/50">
                             <CardHeader>
                                <Database className="w-8 h-8 text-green-500 mb-2" />
                                <CardTitle>Smart Caching</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Aggressive edge caching strategies ensure that popular searches load instantly, 
                                reducing database load by 80%.
                            </CardContent>
                        </Card>
                    </div>
                </div>
                
                 {/* Tech Deep Dive */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">Tech Stack Deep Dive</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        We chose a modern, scalable stack to ensure long-term viability and performance.
                    </p>
                    
                    <div className="border border-border rounded-xl overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-border">
                            <div className="p-6 bg-secondary/5">
                                <Code2 className="w-6 h-6 text-primary mb-4" />
                                <h3 className="font-semibold mb-2">Frontend</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>Next.js 14 (App Router)</li>
                                    <li>TypeScript</li>
                                    <li>Tailwind CSS</li>
                                    <li>Framer Motion</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-secondary/5">
                                <Layers className="w-6 h-6 text-primary mb-4" />
                                <h3 className="font-semibold mb-2">Backend & Data</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>Node.js Serverless Functions</li>
                                    <li>MongoDB Atlas</li>
                                    <li>Redis Caching</li>
                                    <li>S3 for Media Storage</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-secondary/5">
                                <Globe className="w-6 h-6 text-primary mb-4" />
                                <h3 className="font-semibold mb-2">Infrastructure</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>Vercel Edge Network</li>
                                    <li>CI/CD Pipelines</li>
                                    <li>Automated Testing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

             {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
                <Card className="sticky top-24 border-blue-500/20 shadow-lg bg-background/50 backdrop-blur">
                    <CardHeader className="bg-secondary/10 border-b border-border/50 pb-4">
                        <CardTitle className="text-lg">Project Highlights</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-6">
                         <div>
                            <div className="text-sm text-muted-foreground mb-1">Role</div>
                            <div className="font-medium">Product Development, UI/UX, Engineering</div>
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground mb-1">Industry</div>
                            <div className="font-medium">Real Estate Tech (PropTech)</div>
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                            <div className="font-medium">3 Months (MVP to Launch)</div>
                        </div>
                         <div>
                            <div className="text-sm text-muted-foreground mb-1">Status</div>
                            <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-green-500/20">Live Production</Badge>
                        </div>
                        
                        <div className="pt-4">
                             <Button className="w-full mb-3" asChild>
                                <Link href="https://profness.com" target="_blank">
                                    Visit Live Platform <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" className="w-full" asChild>
                                <Link href="/contact">
                                    Build Something Similar
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <div className="bg-zinc-900 rounded-xl p-6 text-white">
                    <h3 className="font-bold text-lg mb-4">Why This Matters</h3>
                    <p className="text-sm text-zinc-400 mb-4">
                        Most agencies show you "concepts". We show you "code". ProfNess proves we can handle complex logic for your enterprise applications.
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-blue-400">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Verified Engineering</span>
                    </div>
                </div>
            </div>

        </div>
      </SectionWrapper>
      
      {/* Call to Action Footer */}
      <div className="bg-secondary/20 py-20">
          <div className="container mx-auto px-4 text-center max-w-2xl">
              <h2 className="text-3xl font-bold mb-6">Ready to Build Your Platform?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                  You've seen what we build for ourselves. Let's apply the same engineering rigor to your project.
              </p>
              <Button size="lg" className="rounded-full px-8 text-base" asChild>
                  <Link href="/contact">
                      Start Your Project
                  </Link>
              </Button>
          </div>
      </div>
    </div>
  );
}
