import React from "react";
import Button from "./Button";

export default function ShortenForm() {
  return (
    <div className="bg-[url('./images/bg-shorten-mobile.svg')] md:bg-[url('./images/bg-shorten-desktop.svg')] bg-primary2 translate-y-1/2 m-5 mb-0 flex flex-col gap-5 rounded-lg p-5 md:m-10 md:mb-0 md:flex-row md:p-10">
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="w-full rounded-md p-3"
      ></input>
      <button className="text-nowrap rounded-md bg-primary1 p-3 px-10 text-white">
        Shorten It!
      </button>
    </div>
  );
}
