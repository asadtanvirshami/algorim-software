import { Handshake, Rocket, Star, UsersRoundIcon } from "lucide-react";
import React from "react";
const beliefsAndValues = [
  {
    title: "Lead with Empathy",
    description:
      "We step into your team’s world, then into your customers’. At Algorim, we explore every option, stay humble, and practice compassion in everything we do, ensuring our solutions resonate with everyone involved.",
    icon: <UsersRoundIcon className="text-orange-300 mt-1 mr-2" />,
  },
  {
    title: "Take Ownership",
    description:
      "We own our work from start to finish. As proactive problem-solvers, we are accountable for every outcome, committed to delivering results that exceed expectations.",
      icon: <Rocket className="text-orange-300 mt-1 mr-2" />,
    },
  {
    title: "Pursue Excellence",
    description:
      "We are passionate about our craft and dedicated to excellence in every detail. Our commitment to quality means you can trust us to deliver exceptional work, time and again.",
    icon: <Star className="text-orange-300 mt-1 mr-2" />,
    },
  {
    title: "Innovate for the Future",
    description:
      "We design with the future in mind, focusing on solutions that stand the test of time. At Algorim, we prioritize lasting value over shortcuts, ensuring our work remains relevant as your needs evolve.",
    icon: <Handshake className="text-orange-300 mt-1 mr-2" />,
    },
];
type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="flex justify-center items-center">
      <div className="container font-[family-name:var(--font-geist-sans)]">
        <div className="p-5">
          <h1 className="text-7xl font-semibold">It's all about trust.</h1>
          <article className="w-[60rem] text-justify ">
            At Algorim, we believe in the power of innovation to drive
            meaningful change. We’re passionate about building technology that
            not only meets today’s needs but also anticipates the possibilities
            of tomorrow. Our work is guided by a commitment to excellence, where
            every project is an opportunity to deliver value, inspire
            creativity, and push boundaries. We hold that design should be
            intuitive and empowering, development should be robust and secure,
            and every solution should be as unique as the client it serves.
            Transparency, collaboration, and a user-centered approach define how
            we engage, ensuring that the results reflect our dedication to
            quality and integrity. At the heart of Algorim, we believe that
            technology should elevate human experience—making it simpler, more
            accessible, and endlessly inspiring.
          </article>
        </div>
        <div className="p-5 float-right">
          <h1 className="text-7xl font-semibold ">Beliefs & Values</h1>
          <ol>
            {beliefsAndValues.map((item) => (
              <div key={item.title} className="mt-4 flex items-start">
                {item.icon}
                {/* Icon */}
                <div>
                  <li className="text-xl text-orange-300 list-none">
                    {item.title}
                  </li>{" "}
                  {/* Title */}
                  <li className="w-[40rem] text-justify tracking-tighter list-none">
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

export default Hero;
