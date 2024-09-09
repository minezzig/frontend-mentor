import Button from "./Button";
import heroImage from "/images/illustration-working.svg";

export default function Hero() {
  return (
    <section className="m-auto mb-48 grid max-w-[1024px] grid-cols-1 overflow-x-hidden px-5 md:grid-cols-2 md:flex-row-reverse md:justify-between">
      <div className="md:order-2 ">
        <img
          src={heroImage}
          alt="illustration"
          className="h-full object-cover object-left"
        />
      </div>
      <div data-aos="fade-right" className="my-10 flex w-full  flex-col items-center justify-center gap-7 md:items-start">
        <h1 className="text-center text-4xl font-bold text-neutral3 md:text-left md:text-6xl">
          More than just shorter links
        </h1>
        <p className="text-center md:text-left">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button text={"Get Started"} textColor={"text-white"} />
      </div>
    </section>
  );
}
