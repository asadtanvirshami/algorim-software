import React from "react";
import Lottie from "lottie-react";
import revenueApp from "@/assets/lottie/Revenue-App-(Dribbble-shot)-[remix].json"; 

const Process = () => {
  const productProcess = [
    {
      title: "1. Product Discovery",
      description:
        "Before turning concepts into code, our process begins by deeply understanding and balancing what is truly valuable to the business and the user.",
    },
    {
      title: "2. Experience Design",
      description:
        "UX/UI design improves customer satisfaction by making every interaction easy, effective, and enjoyable. We build high-performing user interfaces, based on a deep understanding of your customers’ needs and wants.",
    },
    {
      title: "3. Product Engineering",
      description:
        "Scalable software architecture results in future-ready products. It gives you an edge over your competitors. We use the latest tech innovations, enabling clients to solve complex business challenges.",
    },
    {
      title: "4. Product Launch",
      description:
        "The sooner we can test the product in the hands of real users, the better. We work toward a rapid launch and follow with frequent iterative releases.",
    },
  ];

  return (
    <div className="">
      <div className="grid lg:grid-cols-2 items-center justify-stretch w-full ">
        <div className="">
        <Lottie style={{height:650}} animationData={revenueApp} loop={true} />
        </div>
        <div className="font-[family-name:var(--font-redhat)]">
          <div className="gap-4">
            <h1 className="w-full font-[family-name:var(--font-redhat-semi)] text-3xl text-center md:text-5xl lg:text-5xl">
              Product Development Lifecycle
            </h1>
            <ol className="bg-white mt-4 w-full p float-start rounded-xl px-5 py-5 shadow-md order-1 lg:order-none">
              {productProcess.map((item) => (
                <div key={item.title} className="mt-4 flex items-start p-1 ">
                  {/* Icon */}
                  <div className="ml-4">
                    <li className="text-xl font-[family-name:var(--font-redhat-semi)] list-none">
                      {item.title}
                    </li>{" "}
                    {/* Title */}
                    <li className="w-full text-[15px] md:text-[16px] lg:text-[16px] md:w-full lg:w-full text-justify tracking-tight list-none">
                      {item.description}
                    </li>{" "}
                    {/* Description */}
                  </div>
                </div>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
