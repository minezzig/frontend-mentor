import Card from "./Card";

export default function Info() {
  const cards = [
    {
      title: "Brand Recognition",
      text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
      img: "../assets/images/icon-brand-recognition.svg",
    },
    {
      title: "Detailed Records",
      text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions. ",
      img: "../assets/images/icon-detailed-records.svg",
    },
    {
      title: "Fully Customizable",
      text: "../images/icon-fully-customizable.svg",
    },
  ];

  return (
    <section className="w-full bg-gray-200 px-5 pt-10 pb-36">
      <div className=" max-w-[1024px] m-auto">
        <div className="mb-24 flex w-full flex-col items-center justify-center gap-7">
          <p className="text-center text-4xl font-bold text-neutral3">
            Advanced Statistics
          </p>
          <p className="text-center md:max-w-lg">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="relative flex flex-col gap-24 lg:flex-row md:gap-12">

          <div className="absolute right-1/2 top-0 h-full w-2 translate-x-1/2 bg-primary1 md:top-1/2 md:h-2 md:w-full md:translate-y-1/2"></div>
          {cards.map((card, i) => (
            <Card key={i} index={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
