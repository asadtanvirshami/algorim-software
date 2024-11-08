/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import pushMob from "@/assets/lottie/Push-notification-list-(iOS)-[remix].json";
import Lottie from "lottie-react";

import Gmail from "@/assets/images/socials/icons8-gmail-64.png";
import Slack from "@/assets/images/socials/icons8-slack-64.png";
import Trello from "@/assets/images/socials/icons8-trello-a-web-based-list-making-application-for-multi-platform-64.png";
import Jira from "@/assets/images/socials/icons8-jira-64.png";
import Teams from "@/assets/images/socials/icons8-teams-64.png";

const Update = () => {
  const Icons = [
    { icon: Slack },
    { icon: Trello },
    { icon: Gmail },
    { icon: Teams },
    { icon: Jira },
  ];
  
  return (
    <div className="">
      <div className="grid lg:grid-cols-2 justify-stretch w-full ">
        <Lottie className="h-[300px] md:h-[500px]" animationData={pushMob} loop={true} />
        <div className="font-[family-name:var(--font-redhat)]">
          <h1 className="w-full font-semibold text-3xl md:text-5xl lg:text-6xl">
            It's important for you to know what's new
          </h1>
          <article className="tracking-tight text-justify text-[15px] md:text-xl lg:text-xl">
            From the start to finish, we'll update you on what's new. Either
            it's the features, the design, or the code. We make sure that we are
            in touch with you.
          </article>
          <div className="flex just space-x-3">
            <div className="lg:space-x-3 lg:flex w-full flex dark:text-white justify-center items-center">
              {Icons.map((item, index: number) => (
                <div
                  key={index}
                  className="border bg-zinc-900 dark:bg-card mt-4 font-[family-name:var(--font-redhat)] flex-col p-3 h-fit rounded-md"
                >
                  <Image src={item.icon} alt="icons" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
