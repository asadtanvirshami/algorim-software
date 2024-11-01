import React, { memo } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Count = () => {
  return (
    // from-slate-400 via-slate-300 to-slate-400
    <div className="mt-20 font-[family-name:var(--font-redhat)] w-full text-center lg:h-[200px]  items-center justify-center flex-wrap lg:flex-nowrap md:flex-nowrap lg:w-full align-middle  mx-auto flex text-white bg-zinc-800  dark:bg-zinc-900 p-8 rounded-xl">
      <div className="w-full lg:w-full mb-8 lg:mb-0 md:mb-0 mx-4 flex  justify-center align-middle items-center">
        <ul className="text-center">
          <li>
            <h3 className="text-xl font-bold bg-whitemd:text-[14px] lg:text-[18px]">
              ACTIVE CLIENTS
            </h3>
          </li>
          <li className="text-4xl bg-whitecountup-number">
            <CountUp end={20} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </li>
        </ul>
      </div>

      <div className=" md:w-full lg:w-full mb-8 lg:mb-0 md:mb-0 mx-4 flex  justify-center align-middle items-center">
        <ul className="text-center">
          <li>
            <h3 className="text-xl font-bold text-white md:text-[14px] lg:text-[18px]">
              PROJECTS DONE
            </h3>
          </li>
          <li className="text-4xl bg-whitecountup-number">
            <CountUp end={20} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </li>
        </ul>
      </div>

      <div className=" md:w-full lg:w-full mb-8 lg:mb-0 md:mb-0 mx-4 flex  justify-center align-middle items-center">
        <ul className="text-center">
          <li>
            <h3 className="text-xl font-bold bg-whitemd:text-[14px] lg:text-[18px]">
              PROJECT ADVISORS
            </h3>
          </li>
          <li className="text-4xl bg-whitecountup-number">
            <CountUp end={10} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </li>
        </ul>
      </div>

      <div className=" md:w-full lg:w-full mb-8 lg:mb-0 md:mb-0 mx-4 flex  justify-center align-middle items-center">
        <ul className="text-center">
          <li>
            <h3 className="text-xl font-bold bg-whitemd:text-[14px] lg:text-[18px]">
              GLORIOUS YEARS
            </h3>
          </li>
          <li className="text-4xl bg-whitecountup-number ">
            <CountUp end={1} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(Count);
