import { useState } from "react";
import PropTypes from "prop-types";
import {
  FaFacebookF,
  FaGithubSquare,
  FaGoogle,
  FaRegEye,
} from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";

const SingUpForSingUp = ({singInSingUpHandle}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    const tempShowPassword = !showPassword;
    setShowPassword(tempShowPassword);
    if (tempShowPassword) {
      document.getElementById("password").type = Text;
      document.getElementById("ConformPassword").type = Text;
    } else {
      document.getElementById("password").type = "Password";
      document.getElementById("ConformPassword").type = "Password";
    }
  };

  const showError = (where, what = "") => {
    document.getElementById(where).innerText = what;
  };

  const handleSingIn = (e) => {
    e.preventDefault();
    const usrForm = e.target;
    const userName = usrForm.name.value;
    const userEmail = usrForm.email.value;
    const userPassword = usrForm.password.value;
    const userConformPassword = usrForm.ConformPassword.value;
    console.log(userName, userPassword, userEmail, userPassword.length);
    const passwordLength = 10;
    if (userPassword.length <= passwordLength) {
      showError(
        "PasswordError",
        `The password must be more then ${passwordLength}`
      );
      return;
    } else if (userPassword === userConformPassword) {
      showError("PasswordError", "");
    } else if (!/[0-9]/.test(userPassword)) {
      showError("PasswordError", "You have to use at least one digit (0-9)");
    } else if (!/[A-Z]/.test(userPassword)) {
      showError(
        "PasswordError",
        "You have to use at least one uppercase  (A-Z)"
      );
    } else if (!/[a-z]/.test(userPassword)) {
      showError(
        "PasswordError",
        "You have to use at least one lowercase  (a-z)"
      );
    } else if (!/[@#$%^&*(){}+-=?<>,.`~']/.test(userPassword)) {
      showError(
        "PasswordError",
        "You have to use at least one special character  (@#$%^&*+)"
      );
    } else if (userPassword !== userConformPassword) {
      showError("PasswordError", "The passwords don't match");
      return;
    }
    console.log(userPassword.split("").includes(""));

    // here
  };

  return (
    <div className="grid gap-6 p-[36px] w-full lg:w-1/2 animate-fade">
      <h1 className="text-6xl font-extrabold">Sing Up</h1>
      <div className="flex gap-2 justify-center">
        <div className="flex items-center border rounded-full  p-3 hover:bg-green-200">
          <FaFacebookF size={35} />
        </div>
        <div className="flex items-center border rounded-full  p-3 hover:bg-green-200">
          <FaGoogle size={35} />
        </div>
        <div className="flex items-center border rounded-full  p-3 hover:bg-green-200">
          <FaGithubSquare size={35} />
        </div>
      </div>
      <p>or use your account</p>
      <form onSubmit={handleSingIn} className="flex flex-col w-96 gap-3 m-auto">
        <input
          placeholder="Enter Your Name"
          type="text"
          name="name"
          className="p-3 bg-slate-300 focus:outline-none focus:outline-success"
          required
        />
        <small
          id="NameError"
          className="text-red-600 text-left font-bold"
        ></small>
        <input
          placeholder="Enter Email"
          type="email"
          name="email"
          className="p-3 bg-slate-300  focus:outline-none focus:outline-success"
          required
        />
        <small
          id="EmailError"
          className="text-red-600 text-left font-bold"
        ></small>
        <div className="flex relative">
          <input
            id="password"
            placeholder="Enter A Password"
            type="password"
            name="password"
            className="p-3 bg-slate-300 w-full  focus:outline-none focus:outline-success"
            required
          />
          <div
             onClick={singInSingUpHandle}
            className="absolute top-[10px] right-3 hover:bg-slate-100 rounded-full"
          >
            {showPassword ? (
              <RiEyeCloseLine size={25} />
            ) : (
              <FaRegEye size={25} />
            )}
          </div>
        </div>
        <small
          id="PasswordError"
          className="text-red-600 text-left font-bold"
        ></small>
        <div className="flex relative">
          <input
            id="ConformPassword"
            placeholder="Conform The Password"
            type="password"
            name="ConformPassword"
            className="p-3 bg-slate-300 w-full  focus:outline-none focus:outline-success"
            required
          />
          <div
            onClick={handleShowPassword}
            className="absolute top-[10px] right-3 hover:bg-slate-100 rounded-full"
          >
            {showPassword ? (
              <RiEyeCloseLine size={25} />
            ) : (
              <FaRegEye size={25} />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-success rounded-3xl font-bold text-white text-lg w-1/2 m-auto"
        >
          Sing Up
        </button>
      </form>
      <p>
        If you are new then you can sing up.{" "}
        <span className="font-bold">Click Below!!!</span>
      </p>
      <button
        onClick={singInSingUpHandle}
        className=" m-auto btn btn-outline rounded-3xl w-1/3 text-success font-bold lg:hidden"
      >
        Sing In
      </button>
    </div>
  );
};

SingUpForSingUp.propTypes = {
  singInSingUpHandle: PropTypes.func.isRequired,
};

export default SingUpForSingUp;
