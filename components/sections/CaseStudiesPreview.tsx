"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import CaseStudyCard from "@/components/shared/CaseStudyCard";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "SEO Revenue Growth",
    category: "Digital Marketing",
    description: "Optimized a local service business for search visibility and conversion.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
    results: ["Increased Revenue by 45%", "Top 3 Ranking for 20+ Keywords"],
    slug: "seo-revenue-growth",
  },
  {
    title: "Social Media Explosion",
    category: "Content Creation",
    description: "Viral content strategy for a lifestyle brand.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
    results: ["Grew Following 5K to 150K", "10M+ Organic Impressions"],
    slug: "social-media-growth",
  },
  {
    title: "Enterprise Logistics Platform",
    category: "Custom Software",
    description: "A scalable enterprise platform for tracking international shipments in real-time.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    results: ["Real-time Tracking for 50k+ Units", "Reduced Operational Costs by 15%"],
    slug: "logistics-platform",
  },
];

const CaseStudiesPreview = () => {
    return (
        <SectionWrapper id="work">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Work</h2>
                    <p className="text-muted-foreground text-lg">
                        Real-world examples of how we drive digital transformation.
                    </p>
                </div>
                <Button asChild variant="outline">
                    <a href="/case-studies">View All Projects</a>
                </Button>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {caseStudies.map((study, index) => (
                     <motion.div
                        key={study.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                     >
                        <CaseStudyCard {...study} />
                     </motion.div>
                 ))}
             </div>
        </SectionWrapper>
    )
}

export default CaseStudiesPreview;
