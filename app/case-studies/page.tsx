"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import CaseStudyCard from "@/components/shared/CaseStudyCard";

const allCaseStudies = [
  {
    title: "Fintech App Modernization",
    category: "Mobile Development",
    description: "Rebuilding a legacy financial app for better user experience and security.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    results: ["40% Increase in User Retention", "2x Faster Transaction Speed"],
    slug: "fintech-app",
  },
  {
    title: "E-Commerce AI Integration",
    category: "AI Automation",
    description: "Implementing personalized product recommendations using machine learning.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
    results: ["25% Boost in Conversion Rate", "Automated Inventory Management"],
    slug: "ecommerce-ai",
  },
  {
    title: "Global Logistics Platform",
    category: "Web Development",
    description: "A scalable enterprise platform for tracking international shipments in real-time.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    results: ["Real-time Tracking for 50k+ Units", "Reduced Operational Costs by 15%"],
    slug: "logistics-platform",
  },
  {
    title: "Healthcare Patient Portal",
    category: "Web Development",
    description: "Secure and intuitive portal for patients to manage appointments and records.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    results: ["98% Patient Satisfaction", "30% Reduction in Admin Work"],
    slug: "healthcare-portal",
  },
  {
    title: "Smart Home IOS App",
    category: "Mobile Development",
    description: "Control all your smart devices from one unified, beautiful interface.",
    image: "https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=1974&auto=format&fit=crop",
    results: ["5-Star App Store Rating", "100k+ Active Users"],
    slug: "smart-home-app",
  },
  {
    title: "SEO Content Engine",
    category: "Digital Growth",
    description: "Automated content strategy that increased organic traffic by 300%.",
    image: "https://images.unsplash.com/photo-1628126235206-5260b9ea6441?q=80&w=1974&auto=format&fit=crop",
    results: ["300% Traffic Increase", "Top 3 Ranking for Key Terms"],
    slug: "seo-content-engine",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
       <div className="bg-zinc-950 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">our work.</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Results that speak for themselves.
          </p>
        </div>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCaseStudies.map((study) => (
                <CaseStudyCard key={study.slug} {...study} />
            ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
