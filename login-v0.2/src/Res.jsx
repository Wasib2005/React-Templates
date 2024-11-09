import { useState } from "react";
import { CiCircleMore } from "react-icons/ci";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

function Res() {
  const [singInOn, setSingInOn] = useState(true);
  const [color, setColor] = useState(true);

  const singIn_singUpHandle = () => {
    setSingInOn(!singInOn);
    setTimeout(() => {
      setColor(!color);
    }, 250);
  };
  console.log(singInOn);
  return (
    <>
      <div className=" bg-slate-400 h-[100vh]">
        <div className={`md:h-[100vh] ${color && "h-[100vh]"} flex items-center justify-center`}>
          <div className="flex flex-col w-[400px] md:flex-row md:w-[800px]  md:h-[500px] items-center justify-center ">
            <div
              className={`p-10 w-full md:w-1/2 md:shadow-2xl bg-slate-100 h-full items-center justify-center flex duration-[1000ms] transition 
                 ${
                   color
                     ? " rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                     : " rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none"
                 } 
                 ${singInOn ? " " : "translate-y-full md:translate-y-0 md:translate-x-full "} `}
            >
              <div className=" text-center w-2/3 grid gap-3">
                <h1 className="text-4xl font-bold">
                  {color ? "Sing In" : "Sing Up"}
                </h1>
                <div className="text-2xl flex gap-2 justify-center">
                  <button className="w-9 h-9 flex items-center justify-center  border rounded-full border-slate-400 hover:border-none hover:bg-slate-600">
                    <FaGoogle />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center  border rounded-full border-slate-400 hover:border-none hover:bg-slate-600">
                    <FaFacebookF />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center  border rounded-full border-slate-400 hover:border-none hover:bg-slate-600">
                    <CiCircleMore />
                  </button>
                </div>
                <form className={`flex flex-col ${color ? "gap-6" : "gap-2"}`}>
                  {color || (
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="p-1 border border-black rounded-md outline-none focus:border-blue-400 focus:outline-blue-400"
                    />
                  )}
                  <input
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    className="p-1 border border-black rounded-md outline-none focus:border-blue-400 focus:outline-blue-400"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    className="p-1 border border-black rounded-md outline-none focus:border-blue-400 focus:outline-blue-400"
                  />
                  {color || (
                    <input
                      type="password"
                      name="cPassword"
                      placeholder="Confirm Your Password"
                      className="p-1 border border-black rounded-md outline-none focus:border-blue-400 focus:outline-blue-400"
                    />
                  )}

                  <button
                    type="submit"
                    className={`relative px-4 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group w-1/2 m-auto`}
                  >
                    <span
                      className={`absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2  group-hover:w-full ease
                        ${color ? "border-sky-400" : "border-green-500"}`}
                    />

                    <span
                      className={`absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 ${
                        color ? "border-sky-400" : "border-green-500"
                      } group-hover:w-full ease`}
                    />

                    <span
                      className={`absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 ${
                        color ? "bg-sky-400" : "bg-green-500"
                      } group-hover:h-full ease`}
                    />

                    <span
                      className={`absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 ${
                        color ? "bg-sky-400" : "bg-green-500"
                      } group-hover:h-full ease`}
                    />

                    <span className="absolute inset-0 w-full h-full duration-300 delay-300  opacity-0 group-hover:opacity-100" />

                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease font-semibold">
                      {color ? "Sign In" : "Sign Up"}
                    </span>
                  </button>
                </form>
              </div>
            </div>
            <div
              className={`w-full md:w-1/2 p-10 ${
                color
                  ? "bg-sky-400 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none "
                  : "bg-green-500 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none "
              } h-full items-center justify-center flex flex-col gap-2 duration-[1000ms] transition ${
                singInOn ? "" : "-translate-y-full md:-translate-y-0 md:-translate-x-full"
              } shadow-2xl `}
            >
              {color ? (
                <>
                  <h1 className="text-3xl font-bold">Welcome back!</h1>
                  <p>or</p>
                  <p className="w-4/6 text-center">
                    Are you new to this website? If you are sing up bellow!!!{" "}
                  </p>
                  <button
                    onClick={singIn_singUpHandle}
                    className="relative inline-flex items-center justify-center px-4 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
                  >
                    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-green-500 rounded-lg group-hover:mt-0 group-hover:ml-0" />
                    <span className="absolute inset-0 w-full h-full bg-white rounded-lg " />
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-green-500 rounded-lg opacity-0 group-hover:opacity-100 " />
                    <span className="relative font-semibold text-green-500 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                      Sing Up
                    </span>
                  </button>
                </>
              ) : (
                <>
                  <h1 className="text-3xl font-bold">Hi there!</h1>
                  <p>or</p>
                  <p className="w-4/6 text-center">
                    You already have a account? If you do then sing in bellow!!!{" "}
                  </p>
                  <button
                    onClick={singIn_singUpHandle}
                    className="relative inline-flex items-center justify-center px-3 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
                  >
                    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-sky-400 rounded-lg group-hover:mt-0 group-hover:ml-0" />
                    <span className="absolute inset-0 w-full h-full bg-white rounded-lg " />
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-sky-400 rounded-lg opacity-0 group-hover:opacity-100 " />
                    <span className="relative text-sky-400 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white font-semibold">
                      Sing In
                    </span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Res;
