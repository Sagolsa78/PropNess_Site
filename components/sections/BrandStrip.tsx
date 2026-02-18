"use client";

import { motion } from "framer-motion";

const brands = [
  "GrowUp My Trees",
  "GrowUp My Trees",
  "GrowUp My Trees",
  "GrowUp My Trees",
  "GrowUp My Trees",
 
];

const BrandStrip = () => {
    return (
        <section className="py-12 border-b border-border/40 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 max-w-7xl">
                <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
                    Trusted by
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
                    {brands.map((brand, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                            className="text-xl md:text-2xl font-bold font-display text-foreground/80 hover:text-foreground cursor-default select-none"
                        >
                            {brand}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandStrip;
