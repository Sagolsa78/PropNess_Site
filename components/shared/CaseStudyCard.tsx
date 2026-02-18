"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CaseStudyProps {
  title: string;
  category: string;
  description: string;
  image: string;
  results: string[];
  slug: string;
  className?: string;
  priority?: boolean;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({
  title,
  category,
  description,
  image,
  results,
  slug,
  className,
  priority = false,
}) => {
  return (
    <Card className="overflow-hidden border-border/50 bg-card hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-colors">
                {category}
            </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription className="text-base line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
         <ul className="space-y-2 mb-4">
            {results.map((result, i) => (
                <li key={i} className="flex items-center text-sm text-foreground/80 font-medium">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    {result}
                </li>
            ))}
         </ul>
      </CardContent>
      <CardFooter>
          <Button asChild variant="ghost" className="p-0 hover:bg-transparent group/btn">
              <Link href={`/case-studies/${slug}`} className="flex items-center text-primary font-semibold">
                  View Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
          </Button>
      </CardFooter>
    </Card>
  );
};

export default CaseStudyCard;
