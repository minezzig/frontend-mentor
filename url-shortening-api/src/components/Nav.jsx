import { useState } from "react";
import Button from "./Button";
import logo from "/images/logo.svg";

export default function Nav() {
  const [dropdownVisibility, setDropdownVisibility] = useState("hidden");

  const handleClick = () => {
    dropdownVisibility === "hidden"
      ? setDropdownVisibility("flex")
      : setDropdownVisibility("hidden");
  };

  return (
    <header className="m-auto flex w-full max-w-[1024px] justify-between bg-white px-5 py-10">
      <div className=" mr-10 flex w-full items-center md:mr-0 md:w-auto">
        <img src={logo} alt="logo" />
      </div>

      {/* open navigation on mobile  */}
      <nav
        className={`absolute my-12 bg-primary2 p-5 transition-opacity md:static md:flex md:flex-row md:bg-transparent md:text-primary2 ${dropdownVisibility} left-0 right-0 mx-auto w-[90%] flex-col items-center justify-center rounded-xl text-white`}
      >
        <ul className="flex flex-col items-center justify-center gap-7 p-7 font-bold md:flex-row">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <hr className="w-full border-neutral1 md:hidden" />
        <div className="flex w-full flex-col items-center md:flex-row md:justify-end">
          <a href="#" className="p-7 font-bold">
            Login
          </a>
          <Button
            text={"Sign Up"}
            width={"w-full md:w-auto"}
            textColor={"text-white"}
          />
        </div>
      </nav>

      <div
        className="hamburger flex cursor-pointer flex-col gap-1.5 md:hidden "
        onClick={handleClick}
      >
        <div className="h-1 w-7 bg-neutral2"></div>
        <div className="h-1 w-7 bg-neutral2"></div>
        <div className="h-1 w-7 bg-neutral2"></div>
      </div>
    </header>
  );
}

// {/* open navigation on mobile  */}
// <nav className={`md:hidden my-12 absolute p-5 transition-opacity bg-primary2 ${dropdownVisibility} flex-col justify-center items-center text-white w-[90%] left-0 right-0 mx-auto rounded-xl`}>
//     <ul className="flex flex-col justify-center items-center gap-7 p-7 font-bold">
//         <li>Features</li>
//         <li>Pricing</li>
//         <li>Resources</li>
//     </ul>
//     <hr className="border-neutral1 w-full"/>
//     <a href="#" className="p-7 font-bold">Login</a>
//     <Button text={"Sign Up"} width={"w-full"} textColor={"text-white"}/>
// </nav>
// {/* desktop nav */}
// <nav className="md:flex hidden w-full justify-between">
//     <ul className="flex  items-center gap-7 font-bold">
//         <li>Features</li>
//         <li>Pricing</li>
//         <li>Resources</li>
//     </ul>
//     <div className="flex items-center gap-7 font-bold">
//         <a href="#">Login</a>
//         <Button text={"Sign Up"} width={"w-32"} textColor={"text-white"}/>
//     </div>
// </nav>
