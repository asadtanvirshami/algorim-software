import {
  CandlestickChart,
  Cpu,
  GraduationCap,
  Hospital,
  Landmark,
} from "lucide-react";
import React from "react";


const Specializing = () => {
  const Industries = [
    {
      icon: <Landmark />,
      title: "Finance",
      description:
        "Empower financial institutions with modern digital solutions to streamline operations and ensure regulatory compliance.",
    },
    {
      icon: <Hospital />,
      title: "Healthcare",
      description:
        "Deliver patient-centered care with scalable health technologies and improve clinical outcomes through digital transformation.",
    },
    {
      icon: <GraduationCap />,
      title: "Education",
      description:
        "Revolutionize learning with advanced digital tools and platforms that foster student engagement and flexible learning paths.",
    },
    {
      icon: <Cpu />,
      title: "Technology",
      description:
        "Accelerate tech innovation with cutting-edge solutions, optimized infrastructure, and seamless software delivery pipelines.",
    },
    {
      icon: <CandlestickChart />,
      title: "Capital Markets",
      description:
        "Optimize your trading platforms with real-time data analytics and automation to stay competitive in the fast-paced market.",
    },
  ];

  return (
    <div className="space-y-12 font-[family-name:var(--font-redhat)]">
      <h1 className="w-full font-semibold text-3xl md:text-4xl lg:text-4xl text-center">
        Utilizing blockchain & AI technology in multiple Industries
      </h1>
      <div className="gap-2 grid grid-cols-1 md:grid-cols-3  lg:grid-cols-5 w-full  justify-center items-center ">
        {Industries.map((item) => {
          return (
            <div
              key={item.title}
              className="border font-[family-name:var(--font-redhat)] text-orange-300 space-y-2 p-3  bg-zinc-900 dark:bg-card   rounded-md"
            >
              {item.icon}
              <h2 className="font-semibold text-xl text-orange-300">
                {item.title}
              </h2>
              <article className="text-white">{item.description}</article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Specializing;
