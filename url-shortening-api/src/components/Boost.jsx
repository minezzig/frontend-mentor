import React from "react";
import Button from "./Button";

export default function Boost() {
  return (
    <div className="py-16 bg-primary2 bg-[url('../assets/images/bg-boost-mobile.svg')] md:bg-[url('../assets/images/bg-boost-desktop.svg')]">
      <div className="flex flex-col items-center justify-center gap-8">
        <p className="text-center text-xl md:text-4xl font-bold text-white">
          Boost your links today
        </p>
        <Button text={"Get Started"} textColor={"text-white"} />
      </div>
    </div>
  );
}
