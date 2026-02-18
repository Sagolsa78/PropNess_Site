"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="py-20 relative overflow-hidden bg-background">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-2xl">
          
          {/* Top highlight gradient */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-50" />
          
          <div className="p-8 md:p-16 text-center space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-display">
                Ready to Transform Your Digital{' '}
                <span className="block mt-2">Presence?</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our team can help you achieve your business goals and create lasting impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="h-14 px-8 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg shadow-purple-900/20 w-full sm:w-auto"
                asChild
              >
                <Link href="/start-project">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 px-8 text-base font-medium bg-secondary border-border hover:bg-secondary/80 text-foreground rounded-xl w-full sm:w-auto"
                asChild
              >
                <Link href="/schedule-call">
                  Schedule a Call
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto pt-6">
              <a 
                href="mailto:hello@bhuexpert.com"
                className="flex items-center justify-center gap-3 h-12 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all text-muted-foreground hover:text-foreground group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-purple-400 transition-colors" />
                <span>Email Us</span>
              </a>
              <a 
                href="tel:+1234567890"
                className="flex items-center justify-center gap-3 h-12 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all text-muted-foreground hover:text-foreground group"
              >
                <Phone className="w-5 h-5 text-muted-foreground group-hover:text-purple-400 transition-colors" />
                <span>Call Us</span>
              </a>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              We typically respond within 2 hours during business hours.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
