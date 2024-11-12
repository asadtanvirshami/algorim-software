import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-12 gap-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
