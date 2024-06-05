import React from "react";

export default function Card({ index, card }) {
  const { title, text, img } = card;
  console.log(img)
  return (
    <div  data-aos="zoom-in" data-aos-delay={300 * index}
      style={{
        translate: window.innerWidth > 768 ? `0 ${index * 32}px` : "0 0",
      }}
      className={`relative flex w-full flex-1 flex-col items-center rounded-md border bg-white p-10 pt-16 md:items-start`}
    >
      <div className="absolute -top-12 left-1/2 flex -translate-x-1/2 rounded-full bg-primary2 p-6 md:left-16">
        <img src={img} alt="icon" />
      </div>
      <h1 className="text-center text-4xl font-bold text-neutral3 md:text-left md:text-xl">
        {title}
      </h1>
      <p className="text-center md:text-left">{text}</p>
    </div>
  );
}
{
  /* <div style={window.innerWidth > 678  && {translate: `0 ${index*32}px`}} */
}
