import React from "react";

export default function LinkList({ urlList, copied, handleCopy }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      {urlList.map((item) => (
        <div
          key={item.short}
          className="flex w-full flex-col gap-3 rounded-md bg-white p-3 md:flex-row md:items-center md:justify-between"
        >
          <div className=" p- text-neutral4">{item.long}</div>
          <hr />
          <div className="flex flex-col gap-3 text-primary1 md:flex-row md:items-center md:gap-5">
            {item.short}
            <button
              className={`w-full rounded-md ${copied === item.short ? `bg-primary2` : `bg-primary1`}  px-7 py-3 font-bold text-white`}
              onClick={() => handleCopy(item.short)}
            >
              {copied === item.short ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
