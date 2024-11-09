import { useState } from "react";
import SingInForSingIn from "../Component/Registration/SingIn/SingInForSingIn";
import SingUpForSingIn from "../Component/Registration/SingUp/SingUpForSingIn";
import SingUpForSingUp from "../Component/Registration/SingUp/SingUpForSingUp";
import SingInForSingUp from "../Component/Registration/SingIn/SingInForSingUp";

const UserLog = () => {
  const [singIn, setSingIn] = useState(true);
  const singInSingUpHandle = () => {
    setSingIn(!singIn);
    console.log(singIn);
  };
  console.log(singIn);
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] text-center text-black p-40">
        <div className=" animate-fade-up w-[650px] lg:w-[1200px] lg:h-[700px] border rounded-3xl shadow-2xl flex lg:animate-fade animate-once animate-delay-2000 animate-ease-out">
          {singIn ? (
            <SingInForSingIn singInSingUpHandle={singInSingUpHandle} />
          ) : (
            <SingInForSingUp singInSingUpHandle={singInSingUpHandle} />
          )}
          {singIn ? (
            <SingUpForSingIn singInSingUpHandle={singInSingUpHandle} />
          ) : (
            <SingUpForSingUp singInSingUpHandle={singInSingUpHandle} />
          )}
        </div>
      </div>
    </>
  );
};

export default UserLog;
