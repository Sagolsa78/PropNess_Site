"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Check, Cpu, Server, Globe } from "lucide-react";
import Link from "next/link";

const BhuexpertServiceSection = () => {
  return (
    <SectionWrapper id="platform-dna" className="bg-zinc-900 border-y border-zinc-800 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
            Product DNA
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We Don't Just Write Code. <br/>
            <span className="text-zinc-400">We Engineer Ecosystems.</span>
          </h2>
          <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
            Many agencies stop at "It looks good." We go further. By building and maintaining our own complex platforms like 
            <span className="text-white font-semibold"> Bhuexpert.com</span>, we face the same challenges you do: 
            scalability, data integrity, and user retention.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
               <div className="mt-1 mr-4 bg-blue-500/20 p-2 rounded-lg text-blue-400">
                  <Cpu className="w-5 h-5" />
               </div>
               <div>
                  <h3 className="text-xl font-semibold mb-1">Production-Grade Architecture</h3>
                  <p className="text-zinc-500 text-sm">Our code powers real businesses, not just demos. We use the same rigorous standards for your project.</p>
               </div>
            </div>
            <div className="flex items-start">
               <div className="mt-1 mr-4 bg-purple-500/20 p-2 rounded-lg text-purple-400">
                  <Server className="w-5 h-5" />
               </div>
               <div>
                  <h3 className="text-xl font-semibold mb-1">Scalable Backend Systems</h3>
                  <p className="text-zinc-500 text-sm">From MongoDB aggregations to serverless functions, we know how to handle data at scale.</p>
               </div>
            </div>
             <div className="flex items-start">
               <div className="mt-1 mr-4 bg-green-500/20 p-2 rounded-lg text-green-400">
                  <Globe className="w-5 h-5" />
               </div>
               <div>
                  <h3 className="text-xl font-semibold mb-1">Real-World Growth Tactics</h3>
                  <p className="text-zinc-500 text-sm">We apply the same SEO and growth strategies to your product that we use to grow Bhuexpert.</p>
               </div>
            </div>
          </div>

          <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800" asChild>
            <Link href="/case-studies/bhuexpert">
              See How We Built It
            </Link>
          </Button>
        </div>

        <div className="relative h-full min-h-[400px] bg-zinc-950 rounded-2xl border border-zinc-800 p-8 shadow-2xl flex flex-col justify-between">
            <div className="absolute top-4 right-4 flex space-x-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/20" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                 <div className="w-3 h-3 rounded-full bg-green-500/20" />
            </div>
            
            <div className="space-y-6 mt-8">
                <div className="font-mono text-xs text-zinc-600 mb-2">// Server-Side Logic Visualization</div>
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity cursor-default">
                        <div className="w-16 h-1 rounded bg-zinc-800" />
                        <div className="w-8 h-1 rounded bg-blue-900" />
                        <div className="flex-1 h-1 rounded bg-zinc-900 border border-zinc-800" />
                    </div>
                ))}
                 <div className="p-4 bg-zinc-900/50 rounded border border-zinc-800/50 font-mono text-xs text-green-400">
                    {`> Connecting to specialized database...`} <br/>
                    {`> Optimizing geospatial queries...`} <br/>
                    {`> ⚡️ Response time: 45ms`}
                </div>
            </div>

            <div className="mt-auto pt-8 border-t border-zinc-800">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="text-2xl font-bold text-white">99.9%</div>
                        <div className="text-xs text-zinc-500 uppercase tracking-widest">Uptime</div>
                    </div>
                     <div>
                        <div className="text-2xl font-bold text-white">50k+</div>
                        <div className="text-xs text-zinc-500 uppercase tracking-widest">Data Points</div>
                    </div>
                     <div>
                        <div className="text-2xl font-bold text-white">0.4s</div>
                        <div className="text-xs text-zinc-500 uppercase tracking-widest">Load Speed</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BhuexpertServiceSection;
