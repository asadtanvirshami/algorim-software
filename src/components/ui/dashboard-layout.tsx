import React from "react";

type Props = {};

const DashboardLayout = (props: Props) => {
  return (
    <div>
      <div className="md:m-12 lg:m-12 ">
        <div className="mt-5 ">
          <div className="md:flex lg:flex ">
            <div>
              {/* <h1 className="font-bold text-4xl">Welcome, {user?.username}</h1> */}
              <h1 className="font-semibold text-xl text-orange-200">
                {/* {user?.email} */}
              </h1>
            </div>
            <div className=" ml-auto ">
              <h1 className="font-semibold text-xl">
                {/* {moment().format("MMMM Do YYYY")} */}
              </h1>
              <h1 className="font-semibold text-xl">
                {/* {moment().format("dddd")} */}
              </h1>
            </div>
          </div>
          {/* <Divider className="mt-5" /> */}
        </div>
        {/* {children} */}
      </div>
    </div>
  );
};

export default DashboardLayout;
