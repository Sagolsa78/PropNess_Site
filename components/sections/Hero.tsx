"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-slow-drift opacity-40 dark:opacity-60 bg-[radial-gradient(circle_at_center,_var(--gradient-start),_var(--gradient-mid),_var(--gradient-end),_transparent_70%)] blur-3xl" />
         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="mb-6 inline-block"
        >
            <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                For Ambitious Brands & Enterprises
            </span>
        </motion.div>

        <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 font-display bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
        >
            We Build High-Performance Digital Engines That Scale.
        </motion.h1>

        <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
            Stop losing leads to outdated tech. We combine custom software development with aggressive digital marketing to turn your website into a 24/7 revenue generator.
        </motion.p>

        <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
            <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow" asChild>
                <Link href="/contact">
                   Book Your Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base backdrop-blur-sm bg-background/30 hover:bg-background/50" asChild>
                <Link href="/work">
                   View Our Work
                </Link>
            </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
