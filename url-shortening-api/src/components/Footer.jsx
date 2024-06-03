import React from "react";
import logo from "../assets/images/logo-footer.svg";
import twitter from "../assets/images/icon-twitter.svg";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";


export default function Footer() {
  return (
    <footer className="bg-neutral4">
      <div className="m-auto flex max-w-[1024px] flex-col items-center justify-center p-10 md:flex-row md:items-start md:justify-between ">
        <div className="mb-10 ">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-col gap-10 px-10 text-xs md:flex-row md:gap-28">
          <div>
            <p className="mb-5 w-full text-center font-bold text-white md:text-left">
              Features
            </p>
            <ul className="flex flex-col items-center justify-center gap-5 md:items-start">
              <li><a href="#" className="hover:text-primary1">Link Shortening</a></li>
              <li><a href="#" className="hover:text-primary1">Branded Links</a></li>
              <li><a href="#" className="hover:text-primary1">Analytics</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-5 w-full text-center font-bold text-white md:text-left">
              Resources
            </p>
            <ul className="flex flex-col items-center  justify-center gap-5 md:items-start">
              <li><a href="#" className="hover:text-primary1">Link Shortening</a></li>
              <li><a href="#" className="hover:text-primary1">Developers</a></li>
              <li><a href="#" className="hover:text-primary1">Support</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-5 w-full text-center font-bold text-white md:text-left">
              Company
            </p>
            <ul className="flex flex-col items-center  justify-center gap-5 md:items-start">
              <li><a href="#" className="hover:text-primary1">About</a></li>
              <li><a href="#" className="hover:text-primary1">Our Team</a></li>
              <li><a href="#" className="hover:text-primary1">Careers</a></li>
              <li><a href="#" className="hover:text-primary1">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex gap-5 md:mt-0">
          <img src={facebook} alt="facebook" className="scale-100 transition-scale hover:scale-110 cursor-pointer "/>
          <img src={twitter} alt="twitter" className="scale-100 transition-scale hover:scale-110 cursor-pointer"/>
          <img src={pinterest} alt="pinterest" className="scale-100 transition-scale hover:scale-110 cursor-pointer"/>
          <img src={instagram} alt="instagram" className="scale-100 transition-scale hover:scale-110 cursor-pointer"/>
        </div>
      </div>
      <div className="bg-neutral4 text-center text-xs">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"  className="text-primary1">
          Frontend Mentor
        </a>
        . Coded by <a href="https://gregminezzi.vercel.app" className="text-primary1">Greg Minezzi</a>.
      </div>
    </footer>
  );
}
