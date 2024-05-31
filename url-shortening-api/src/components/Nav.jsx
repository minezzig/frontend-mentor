import React, { useState } from 'react'
import Button from './Button'

export default function Nav() {
    const [dropdownVisibility, setDropdownVisibility] = useState("hidden");

    const handleClick = () => {
        dropdownVisibility === "hidden" ? setDropdownVisibility("flex") : setDropdownVisibility("hidden")
    }

  return (
    <div className="w-full flex justify-between px-5 md:px-10 py-10">
        <div className="flex items-center mr-10"><img src="./images/logo.svg" alt="logo"/></div>

        {/* popup nav */}
        <nav className={`md:hidden my-12 absolute p-5 transition-opacity bg-primary2 ${dropdownVisibility} flex-col justify-center items-center text-white w-[90%] left-0 right-0 mx-auto rounded-xl`}>
            <ul className="flex flex-col justify-center items-center gap-7 p-7 font-bold">
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
            <hr className="border-neutral1 w-full"/>
            <a href="#" className="p-7 font-bold">Login</a>
            <Button text={"Sign Up"} width={"w-full"} textColor={"text-white"}/>
        </nav>
        {/* desktop nav */}
        <nav className="md:flex hidden w-full justify-between">
            <ul className="flex  items-center gap-7 font-bold">
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
            <div className="flex items-center gap-7 font-bold">
                <a href="#">Login</a>
                <Button text={"Sign Up"} width={"w-32"} textColor={"text-white"}/>
            </div>
        </nav>
        <div className="md:hidden hamburger flex flex-col gap-1.5 cursor-pointer " onClick={handleClick}>
            <div className="bg-neutral2 h-1 w-7"></div>
            <div className="bg-neutral2 h-1 w-7"></div>
            <div className="bg-neutral2 h-1 w-7"></div>
        </div>
    </div>
  )
}
