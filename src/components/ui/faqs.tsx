import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

const FAQs = (props: Props) => {
  const faqs = [
    {
      question: "What services does Algorim offer?",
      answer:
        "Algorim specializes in blockchain development, AI solutions, cybersecurity, and full stack development. We provide customized services to meet your business needs.",
    },
    {
      question: "How can I get started with a project?",
      answer:
        "To get started, you can reach out to us through our contact form or schedule a consultation. We'll discuss your project requirements and outline the next steps.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries, including finance, healthcare, e-commerce, and technology. Our expertise allows us to tailor solutions to various sector-specific needs.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer ongoing support and maintenance services to ensure your systems operate smoothly after project completion. We’re here to help whenever you need assistance.",
    },
    {
      question: "Can you help with custom software development?",
      answer:
        "Absolutely! Our team has extensive experience in custom software development, enabling us to create tailored solutions that fit your specific business requirements.",
    },
  ];
  return (
    <section className="font-[family-name:var(--font-redhat)]">
      <h1 className="w-full font-semibold text-3xl md:text-4xl lg:text-4xl text-center mb-12">
        Frequently Asked Questions
      </h1>
      <div className="bg-card shadow-md rounded-lg mb-12">
        {faqs.map((item: any) => {
          return (
            <Accordion
              key={item.question}
              type="single"
              collapsible
              className="w-full p-3  "
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-semibold text-lg ">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg dark:text-orange-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};

export default FAQs;
