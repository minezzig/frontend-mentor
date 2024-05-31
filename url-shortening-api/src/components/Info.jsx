import React from "react";
import Card from "./Card";

export default function Info() {
  const cards = [
    {
      title: "Brand Recognition",
      text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
      img: "./images/icon-brand-recognition.svg"
    },
    {
      title: "Detailed Records",
      text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions. ",
      img: "./images/icon-detailed-records.svg"

    },
    {
      title: "Fully Customizable",
      text: " Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      img: "./images/icon-fully-customizable.svg"

    },
  ];
  
  return (
    <div className="w-full bg-gray-200 px-5 md:px-10 py-48">
      <div className="flex w-full flex-col items-center justify-center gap-7 mb-24">
        <p className="text-center text-4xl font-bold text-neutral3">
          Advanced Statistics
        </p>
        <p className="text-center md:max-w-lg">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

      </div>
     

          <div className="flex gap-24 md:gap-12 flex-col md:flex-row relative">
         <div className="h-full w-2 top-0 bg-primary1 absolute right-1/2 translate-x-1/2 md:h-2 md:w-full md:top-1/2 md:translate-y-1/2"></div>
              {cards.map((card, i) => (
              <Card key={i} index={i} card={card}/>
              ))}
          </div>
    </div>
  );
}
