"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image"; // Note: Need to ensure images exist or use placeholders
import { ArrowRight } from "lucide-react";

const AboutSnippet = () => {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden aspect-video lg:aspect-square bg-muted">
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Bhuexpert Team Collaboration"
              fill
              className="object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10" />
        </div>

        <div className="lg:w-1/2 space-y-6">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Not Just Developers. <br />
            <span className="text-primary">We Are Your Growth Partners.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We started ProfNess because we saw a gap. Traditional agencies give you code, not results. Marketing firms give you hype, not systems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We bridge that gap. We build enterprise-grade software that powers your business, and we implement aggressive marketing strategies that fill your pipeline. Whether you're a local service business or a global tech company, we speak your language: <strong>ROI.</strong>
          </p>
          
          <div className="pt-4">
             <Button variant="link" className="p-0 text-primary text-lg" asChild>
                <a href="/about" className="flex items-center gap-2">
                    Read Our Story <ArrowRight className="w-4 h-4" />
                </a>
             </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSnippet;
