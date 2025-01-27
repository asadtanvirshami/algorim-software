import TrustPilot from "@/components/ui/trustpilot";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alice Johnson",
      customer: "Blockchain customer",
      testimonial:
        "Working with Algorim has transformed our approach to technology. Their expertise in blockchain and AI has allowed us to innovate and stay ahead of the competition.",
      rating: 5,
    },
    {
      name: "Bob Smith",
      customer: "Application pentesting customer",
      testimonial:
        "The team at Algorim provided exceptional cybersecurity solutions tailored to our needs. Their professionalism and knowledge were outstanding!",
      rating: 4,
    },
    {
      name: "Vasily Brown",
      customer: "MVP development customer",
      testimonial:
        "Algorim's full stack development services exceeded our expectations. They delivered high-quality work on time, and their support throughout the project was invaluable.",
      rating: 5,
    },
  ];

  return (
    <div className="space-y-12 font-[family-name:var(--font-redhat)]">
      <h1 className="w-full font-semibold text-3xl md:text-4xl lg:text-4xl text-center">
        Our client feedbacks
      </h1>
      <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full dark:text-white justify-center items-center ">
        {testimonials.map((item) => {
          return (
            <div
              key={item.name}
              className="border shadow-lg font-[family-name:var(--font-redhat)] bg-white  flex-col space-y-3 dark:bg-card p-3 rounded-md"
            >
              <h2 className="font-semibold text-xl dark:text-orange-300">{item.name}</h2>
              <article>{item.customer}</article>
              <article>{item.testimonial}</article>
            </div>
          );
        })}
      </div>
      <TrustPilot/>
    </div>
  );
};

export default Testimonials;
