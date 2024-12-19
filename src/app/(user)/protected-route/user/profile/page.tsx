import React from "react";
import UserForm from "./form/user-form";

type Props = {};

const UserProfile = (props: Props) => {
  return (
    <div className="bg-black h-screen flex justify-center items-center ">
      <div className="border p-3 rounded-xl">
        <h1 className="text-white text-xl font-semibold">Profile Setting</h1>
        <UserForm />
      </div>
    </div>
  );
};

export default UserProfile;
