"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses needing a solid digital foundation.",
    price: "From ₹2,500",
    features: [
      "Custom Landing Page Design",
      "Basic SEO Setup",
      "Social Media Setup",
      "Lead Generation Form",
      "1 Month Support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    description: "For ambitious brands ready to scale revenue and traffic.",
    price: "From ₹75,000",
    features: [
      "5-Page Custom Website",
      "Advanced SEO & Analytics",
      "Content Strategy (4 Blogs/mo)",
      "Social Media Management",
      "CRM Integration",
    ],
    cta: "Scale Now",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "End-to-end custom software and dominance in your market.",
    price: "Custom",
    features: [
      "Full-Stack Web Application",
      "Custom AI Solutions",
      "Dedicated Marketing Team",
      "24/7 Priority Support",
      "SLA Guarantees",
    ],
    cta: "Book Strategy Call",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <SectionWrapper id="pricing" className="bg-secondary/10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Transparent Pricing, Tangible Results
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Choose the plan that fits your growth stage. No hidden fees, just ROI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border p-8 flex flex-col ${
              plan.popular
                ? "bg-background border-primary/50 shadow-2xl scale-105 z-10"
                : "bg-background/50 border-border shadow-sm hover:border-primary/30 transition-colors"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                Most Popular
              </div>
            )}
            <div className="mb-6">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{plan.description}</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              {plan.price !== "Custom" && <span className="text-muted-foreground">/project</span>}
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className={`w-full ${
                plan.popular ? "bg-primary text-primary-foreground" : "variant-outline"
              }`}
              variant={plan.popular ? "default" : "outline"}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Pricing;
