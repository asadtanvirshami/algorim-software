import {
  ArrowUp,
  DiamondIcon,
  Hammer,
  Handshake,
  Rocket,
  Star,
  StarsIcon,
  UsersRoundIcon,
} from "lucide-react";
import React from "react";
const beliefsAndValues = [
  {
    title: "Lead with Empathy",
    description:
      "We explore every option, stay humble, and practice compassion in everything we do, ensuring our solutions resonate with everyone involved.",
    icon: <UsersRoundIcon className="text-orange-300 mt-1 mr-2" />,
  },
  {
    title: "Take Ownership",
    description:
      "We are accountable for every outcome, committed to delivering results that exceed expectations.",
    icon: <Rocket className="text-orange-300 mt-1 mr-2" />,
  },
  {
    title: "Pursue Excellence",
    description:
      "Our commitment to quality means you can trust us to deliver exceptional work, time and again.",
    icon: <Star className="text-orange-300 mt-1 mr-2" />,
  },
  {
    title: "Innovate for the Future",
    description:
      "At Algorim, we prioritize lasting value over shortcuts, ensuring our work remains relevant as your needs evolve.",
    icon: <Handshake className="text-orange-300 mt-1 mr-2" />,
  },
];
const trust = [
  {
    title: "Clear Vision & Strategic Direction",
    description:
      "Leaders inspire trust by defining a clear path and motivating teams toward shared goals.",
    icon: <ArrowUp className="text-orange-300 mt-1 mr-2" />,
  },
  {
    title: "Open Communication & Transparency",
    description:
      "Encouraging open dialogue fosters trust and keeps everyone aligned.",
    icon: <DiamondIcon className="text-orange-300 mt-1 mr-2" />,
  },
  {
    title: "Empowerment, Trust-Building & Support",
    description:
      "Leaders build trust by empowering team members, giving them confidence and autonomy.",
    icon: <StarsIcon className="text-orange-300 mt-1 mr-2" />,
  },
  {
    title: "Adaptability, Problem-Solving & Reliability",
    description:
      "Being flexible, dependable, and solution-oriented helps teams overcome challenges with trust in leadership.",
    icon: <Hammer className="text-orange-300 mt-1 mr-2" />,
  },
];
type Props = {};

const Beliefs = (props: Props) => {
  return (
    <section className="justify-center items-center">
      <div className=" font-[family-name:var(--font-redhat)] space-y-12">
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
          <ol className=" bg-zinc-900 dark:bg-card text-white rounded-xl px-5 py-3 shadow-md order-1 lg:order-none">
            {trust.map((item) => (
              <div key={item.title} className="mt-4 flex items-start p-1 ">
                {item.icon}
                {/* Icon */}
                <div className="ml-4">
                  <li className="text-lg text-orange-300 list-none">
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

          <div className="text-center md:text-right lg:text-right">
            <h1 className="text-4xl md:text-4xl lg:text-7xl font-semibold">
              It's all about Trust,
            </h1>
          </div>
        </div>
      </div>
      <div className=" font-[family-name:var(--font-redhat)]">
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
          <h1 className="text-4xl md:text-4xl lg:text-7xl font-semibold text-center lg:text-left">
            Beliefs & Values.
          </h1>
          <ol className="bg-zinc-900 dark:bg-card text-white rounded-xl px-5 py-3 shadow-md">
            {beliefsAndValues.map((item) => (
              <div key={item.title} className="mt-4 flex items-start p-1 ">
                {item.icon}
                {/* Icon */}
                <div className="ml-4">
                  <li className="text-lg text-orange-300 list-none">
                    {item.title}
                  </li>{" "}
                  {/* Title */}
                  <li className="w-full text-[15px]  md:w-fit md:text-[16px] lg:text-[15px] lg:w-full text-justify tracking-tight list-none">
                    {item.description}
                  </li>{" "}
                  {/* Description */}
                </div>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Beliefs;
