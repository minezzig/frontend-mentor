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
    <header className="m-auto flex max-w-[1024px] items-center justify-between bg-white px-5 py-10">
      <img src={logo} alt="logo" className=" mr-10" />

      <nav
        className={`absolute top-0 my-24 bg-primary2 p-5  md:static md:my-0 md:flex md:flex-row md:bg-transparent md:text-primary2 ${dropdownVisibility} left-0 right-0 mx-auto w-[90%] flex-col items-center justify-center rounded-xl text-white`}
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
