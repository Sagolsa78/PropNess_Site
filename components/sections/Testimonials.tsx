"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "ProfNess transformed our entire digital presence. Their strategic approach and attention to detail exceeded all expectations.",
    author: "Alex Thompson",
    role: "CEO, TechVision Inc",
    highlight: false,
  },
  {
    quote: "Working with their team was seamless. They understood our vision and delivered a product that perfectly represents our brand.",
    author: "Jessica Lee",
    role: "Founder, EcoFlow",
    highlight: true,
  },
  {
    quote: "The results speak for themselves—our engagement increased by 89% and sales doubled. Highly recommend their services!",
    author: "David Kumar",
    role: "Marketing Director, Luxora",
    highlight: false,
  },
  {
    quote: "Professional, innovative, and results-driven. This agency is the partner every growing company needs to scale effectively.",
    author: "Maria Garcia",
    role: "VP Product, DataSync",
    highlight: false,
  },
  {
    quote: "Our leads doubled in just 30 days after the new site launch. The ROI was immediate and undeniable.",
    author: "Sarah Jenkins",
    role: "Owner, Jenkins Law Group",
    highlight: false,
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div 
    className={cn(
      "flex-shrink-0 w-[400px] p-8 rounded-2xl border transition-all duration-300 mx-4",
      testimonial.highlight 
        ? "bg-[#0f172a] border-cyan-500/50 shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] dark:bg-[#0f172a] dark:border-cyan-500/50 bg-white border-cyan-500" 
        : "bg-[#111827] border-white/5 dark:bg-[#111827] dark:border-white/5 bg-white border-border shadow-sm hover:border-border/80"
    )}
  >
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-purple-500 fill-purple-500" />
      ))}
    </div>
    <p className={cn(
      "text-lg mb-8 leading-relaxed italic",
      testimonial.highlight ? "text-cyan-50 dark:text-cyan-50 text-gray-700" : "text-gray-300 dark:text-gray-300 text-gray-600"
    )}>
      "{testimonial.quote}"
    </p>
    <div className="border-t border-white/5 dark:border-white/5 border-gray-100 pt-6">
      <p className={cn(
        "font-bold text-base",
        testimonial.highlight ? "text-white dark:text-white text-gray-900" : "text-white dark:text-white text-gray-900"
      )}>
        {testimonial.author}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        {testimonial.role}
      </p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <SectionWrapper id="testimonials" className="bg-[#030712] dark:bg-[#030712] bg-gray-50 py-24 overflow-hidden">
      <div className="text-center mb-16 space-y-4">
        <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4 font-display">
          What Clients Say
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Trusted by leading brands and innovative startups worldwide
        </p>
      </div>

      <div className="relative">
        {/* Vignette / Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 dark:from-[#030712] from-gray-50" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 dark:from-[#030712] from-gray-50" />

        {/* Marquee Container */}
        <div className="flex overflow-hidden group">
          {/* First Loop */}
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
          {/* Second Loop (Duplicate for seamless scroll) */}
          <div className="flex animate-marquee hover:[animation-play-state:paused]" aria-hidden="true">
            {testimonials.map((t, i) => (
              <TestimonialCard key={`dup-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
