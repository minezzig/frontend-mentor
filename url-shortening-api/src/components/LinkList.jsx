import React from "react";

export default function LinkList({ urlList }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      {urlList.map((item) => (
        <div className="gap-3 flex w-full flex-col rounded-md bg-white p-3 md:flex-row md:items-center md:justify-between">
          <div className=" p- text-neutral4">{item.long}</div>
          <hr/>
          <div className="gap-3 flex flex-col text-primary1 md:flex-row md:gap-5 md:items-center">
            {item.short}
            <button className="w-full rounded-md bg-primary1 px-7 py-3 font-bold text-white">
              Copy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
