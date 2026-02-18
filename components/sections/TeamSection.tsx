"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Sarah Mitchell",
    role: "Founder & Creative Director",
    bio: "Award-winning designer with 10+ years of experience crafting digital experiences.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    gradient: "from-purple-600 to-blue-600",
  },
  {
    name: "James Chen",
    role: "CTO & Lead Developer",
    bio: "Full-stack expert specializing in scalable systems and AI integration.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    name: "Emma Rodriguez",
    role: "Head of Strategy",
    bio: "Data-driven strategist focused on business growth and market positioning.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "Michael Park",
    role: "Design Lead",
    bio: "User experience specialist with a passion for detail and micro-interactions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    gradient: "from-indigo-500 to-purple-600",
  },
];

const TeamSection = () => {
  return (
    <SectionWrapper id="team" className="bg-background py-24">
      <div className="text-center mb-16 space-y-4">
        <span className="text-primary font-bold tracking-widest uppercase text-sm">
          Team
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4 font-display">
          Meet Our Leaders
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Passionate professionals dedicated to bringing your vision to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col"
          >
            {/* Image/Gradient Area */}
            <div className="relative h-64 overflow-hidden">
               {/* Gradient Overlay for style matching the reference */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-20 group-hover:opacity-30 transition-opacity z-10`} />
              
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-sm mb-4">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {member.bio}
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-auto">
                <Link
                  href="#"
                  className="p-2 rounded-lg bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="p-2 rounded-lg bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TeamSection;
