import Image from "next/image";
import React from "react";
import Gif from "@/assets/images/push.gif";

import Gmail from "@/assets/images/socials/icons8-gmail-64.png";
import Slack from "@/assets/images/socials/icons8-slack-64.png";
import Trello from "@/assets/images/socials/icons8-trello-a-web-based-list-making-application-for-multi-platform-64.png";
import Jira from "@/assets/images/socials/icons8-jira-64.png";
import Teams from "@/assets/images/socials/icons8-teams-64.png";

// ... rest of your code ...

type Props = {};

const Update = (props: Props) => {
  const Icons = [
    {
      icon: Slack,
    },
    {
      icon: Trello,
    },
    {
      icon: Gmail,
    },
    {
      icon: Teams,
    },
    {
      icon: Jira,
    },
  ];
  return (
    <div className="">
      <div className="grid lg:grid-cols-2 justify-stretch w-full ">
        <Image
          alt="mobile-app"
          className="rounded-xl w-fit lg:ml-52"
          src={Gif}
        />
        <div className="font-[family-name:var(--font-geist-sans)]">
          <h1 className="w-full font-semibold text-3xl md:text-5xl lg:text-6xl">
            It's important for you to know what's new
          </h1>
          <article className="tracking-tighter text-justify text-[15px] md:text-xl lg:text-xl">
            From the start to finish, we'll update you on what's new. Either
            it's the features, the design, or the code. We make sure that we are
            in touch with you.
          </article>
          <div className="flex just space-x-3">
            <div className=" lg:space-x-3 lg:flex w-full  dark:text-white justify-start items-center ">
              {Icons.map((item: any) => {
                return (
                  <div key={item.icon} className="border mt-4 font-[family-name:var(--font-geist-sans)] flex-col  dark:bg-card  p-3 h-fit rounded-md">
                    <Image src={item.icon} alt="icons" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
