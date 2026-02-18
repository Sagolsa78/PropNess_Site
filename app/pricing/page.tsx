"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        price: "$2,500",
        description: "Perfect for small businesses establishing a digital presence.",
        features: [
            "Custom 5-Page Website",
            "Basic SEO Setup",
            "Mobile Responsive Design",
            "Contact Form Integration",
            "1 Month Support"
        ],
        cta: "Get Started",
        popular: false
    },
    {
        name: "Growth",
        price: "$5,000",
        description: "For businesses ready to scale with automation and deeper strategy.",
        features: [
            "Everything in Starter",
            "CMS Integration",
            "AI Content Automation Setup",
            "Advanced Analytics Dashboard",
            "Social Media Integration",
            "3 Months Support"
        ],
        cta: "Choose Growth",
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Full-scale digital transformation for established organizations.",
        features: [
            "Custom Web App Development",
            "Mobile App (iOS & Android)",
            "Full AI Growth Engine",
            "Dedicated Account Manager",
            "24/7 Priority Support",
            "SLA Guarantee"
        ],
        cta: "Contact Sales",
        popular: false
    }
]

export default function PricingPage() {
    return (
        <div className="flex flex-col min-h-screen">
             <div className="bg-zinc-950 text-white py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">simple pricing.</h1>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                    Transparent investment for measurable growth.
                </p>
                </div>
            </div>

            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <Card key={plan.name} className={`flex flex-col ${plan.popular ? 'border-primary shadow-xl scale-105 relative z-10' : 'border-border/50'}`}>
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                                    Most Popular
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                <CardDescription>{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="text-4xl font-bold mb-6">
                                    {plan.price}
                                    {plan.price !== "Custom" && <span className="text-muted-foreground text-lg font-normal">/project</span>}
                                </div>
                                <ul className="space-y-3">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center text-sm">
                                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                                    <Link href="/contact">
                                        {plan.cta}
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-12 text-muted-foreground text-sm">
                    Need a custom quote? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> for a consultation.
                </div>
            </SectionWrapper>
        </div>
    )
}
