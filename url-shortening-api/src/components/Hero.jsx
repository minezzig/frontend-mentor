import Button from "./Button";
import heroImage from "../../public/images/illustration-working.svg";

export default function Hero() {
  return (
    <section className="flex flex-col px-5 mb-48 md:flex-row-reverse md:justify-between max-w-[1024px] m-auto overflow-x-hidden">
      <div className="w-[140%] md:w-full md:translate-x-[10%]">
        <img
          src={heroImage}
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
    </section>
  );
}
