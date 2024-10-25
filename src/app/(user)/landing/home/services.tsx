import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AppWindowIcon,
  Blocks,
  BrainCircuit,
  BugOff,
  Building2Icon,
  ChartCandlestick,
  ShieldCheck,
  TabletSmartphone,
  Tangent,
  Terminal,
  TreePalmIcon,
  Users2,
} from "lucide-react";
import React from "react";

type Props = {};

const Service = [
  {
    icon: <BrainCircuit />,
    title: "Machine Learning & AI",
    description: "Take advantage of advanced AI.",
  },
  {
    icon: <Blocks />,
    title: "Blockchain",
    description: "We build all from basic Dapps to private Blockchains.",
  },
  {
    icon: <Users2 />,
    title: "Highly Experienced Resources",
    description: "Top-notch Developers who work 9 to 5 for your business.",
  },
  {
    icon: <ChartCandlestick />,
    title: "Data Engineering & Analytics",
    description: "Gain richer customer insights.",
  },
  {
    icon: <Tangent />,
    title: "UX/UI Design",
    description: "Deliver great user experiences.",
  },
  {
    icon: <TreePalmIcon />,
    title: "Product Development",
    description: "Make your product idea its best.",
  },
  {
    icon: <Building2Icon />,
    title: "Enterprise Software",
    description: "Cut costs and improve operations.",
  },
  {
    icon: <TabletSmartphone />,
    title: "Mobile App Development",
    description: "Get a mobile app that wows.",
  },
  {
    icon: <Terminal />,
    title: "DevOps CI/CD",
    description: "Improve efficiency and ROI.",
  },
  {
    icon: <BugOff />,
    title: "Quality Assurance",
    description: "Be sure of your product’s quality.",
  },
  {
    icon: <ShieldCheck />,
    title: "Application Pentesting",
    description: "Make your application cyber attack proof.",
  },
  {
    icon: <AppWindowIcon />,
    title: "Full stack development",
    description: "From basic business websites to complex platforms.",
  },
];

const Services = (props: Props) => {
  return (
    <div className="p-2 w-full flex-row space-y-5 font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-semibold text-3xl md:text-4xl lg:text-5 xl lg:w-[50rem]">
        We deliver the services you need, with the quality you deserve
      </h1>
      <div className="w-fit">
        <article className="tracking-tighter text-justify text-[15px] md:text-2xl lg:text-2xl">
          Whether you're looking for a cutting-edge cloud solution, benefit the
          decentralized technology, or if you want to harness AI's potential, or
          need to reinvent the user experience, we're your all-in-one innovation
          partner.
        </article>
      </div>
      <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {Service.map((item) => {
          return (
            <Card key={item.title} className="w-full">
              <CardHeader>
                <CardTitle>{item.icon} </CardTitle>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>{item.description}</CardContent>
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
