"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical website project take?",
    answer: "For standard business websites, we typically launch within 2-4 weeks. Extensive custom software or enterprise apps usually take 8-12 weeks depending on complexity. We always provide a strict timeline before starting.",
  },
  {
    question: "Do you work with small businesses or just enterprises?",
    answer: "Both! We have dedicated teams for each. Our 'Growth' track helps small service businesses get leads fast, while our 'Scale' track builds custom software infrastructure for larger enterprises.",
  },
  {
    question: "What makes you different from hiring a freelancer?",
    answer: "Reliability and breadth. A freelancer is one person juggling everything. We are a team of specialists—designers, developers, and marketers—working in sync to guarantee your project doesn't just 'work', but actually makes you money.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We believe in transparency. We offer fixed-price packages for standard websites and marketing setups starting at $2,500. For custom development, we provide a detailed quote after our initial strategy call.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes. Technology requires maintenance. We offer monthly support packages to handle updates, security, and content changes so you never have to worry about your site going down.",
  },
];

const FAQ = () => {
  return (
    <SectionWrapper id="faq" className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-lg">
            Everything you need to know before we start working together.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-lg font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
};

export default FAQ;
