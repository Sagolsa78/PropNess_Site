import { cn } from "@/lib/utils";
import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
