import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="flex flex-col mb-48 md:flex-row-reverse md:justify-between max-w-[1024px] m-auto">
      <div className="w-[140%] md:w-full md:translate-x-[10%]">
        <img
          src="./images/illustration-working.svg"
          alt="illustration"
          className="h-full object-cover object-left"
        />
      </div>
      <div className="my-10 flex w-full max-w-[500px] flex-col items-center justify-center gap-7 md:items-start">
        <p className="text-center text-4xl font-bold text-neutral3 md:text-left md:text-6xl">
          More than just shorter links
        </p>
        <p className="text-center md:text-left">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button text={"Get Started"} textColor={"text-white"} />
      </div>
    </div>
  );
}
