/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import React, { memo } from 'react';
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
} from 'lucide-react';

import { cn } from '@/lib/utils';

type ServiceType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const servicesData: ServiceType[] = [
  { icon: <BrainCircuit />, title: 'Machine Learning & AI', description: 'Take advantage of advanced AI.' },
  { icon: <Blocks />, title: 'Blockchain', description: 'We build all from basic Dapps to private Blockchains.' },
  { icon: <Users2 />, title: 'Highly Experienced Resources', description: 'Top-notch Developers who work 9 to 5 for your business.' },
  { icon: <ChartCandlestick />, title: 'Data Engineering & Analytics', description: 'Gain richer customer insights.' },
  { icon: <Tangent />, title: 'UX/UI Design', description: 'Deliver great user experiences.' },
  { icon: <TreePalmIcon />, title: 'Product Development', description: 'Make your product idea its best.' },
  { icon: <Building2Icon />, title: 'Enterprise Software', description: 'Cut costs and improve operations.' },
  { icon: <TabletSmartphone />, title: 'Mobile App Development', description: 'Get a mobile app that wows.' },
  { icon: <Terminal />, title: 'DevOps CI/CD', description: 'Improve efficiency and ROI.' },
  { icon: <BugOff />, title: 'Quality Assurance', description: 'Be sure of your product’s quality.' },
  { icon: <ShieldCheck />, title: 'Application Pentesting', description: 'Make your application cyber attack proof.' },
  { icon: <AppWindowIcon />, title: 'Full Stack Development', description: 'From basic business websites to complex platforms.' },
];

const Services = (() => {
  return (
    <div className="p-2 w-full flex-row space-y-5 font-[family-name:var(--font-redhat)]">
      <Head>
        <title>Our Services</title>
        <meta name="description" content="Explore our top-notch services tailored to meet your business needs." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Algorim",
              "url": "https://algorim.io",
              "service": servicesData.map((service) => ({
                "@type": "Service",
                "name": service.title,
                "description": service.description,
              })),
            }),
          }}
        />
      </Head>
      <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl lg:w-[50rem]">
        We deliver the services you need, with the quality you deserve
      </h1>
      <article className="tracking-tight text-justify text-[15px] md:text-2xl lg:text-2xl w-fit">
        Whether you're looking for a cutting-edge cloud solution, decentralized technology, AI, or a reinvented user experience, we're your all-in-one innovation partner.
      </article>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 max-w-7xl mx-auto">
        {servicesData.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
});

const Feature = ({
  title,
  description,
  icon,
  index,
}: ServiceType & { index: number }) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800'
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-orange-300">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-orange-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-orange-300">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default memo(Services);
