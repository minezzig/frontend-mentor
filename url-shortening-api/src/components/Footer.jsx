import React from "react";
import logo from "/images/logo-footer.svg";

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
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div>
            <p className="mb-5 w-full text-center font-bold text-white md:text-left">
              Resources
            </p>
            <ul className="flex flex-col items-center  justify-center gap-5 md:items-start">
              <li>Link Shortening</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <p className="mb-5 w-full text-center font-bold text-white md:text-left">
              Company
            </p>
            <ul className="flex flex-col items-center  justify-center gap-5 md:items-start">
              <li>About</li>
              <li>Our Team </li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex gap-5 md:mt-0">
          <img src="./images/icon-facebook.svg" alt="" />
          <img src="./images/icon-twitter.svg" alt="" />
          <img src="./images/icon-pinterest.svg" alt="" />
          <img src="./images/icon-instagram.svg" alt="" />
        </div>
      </div>
      <div className="bg-neutral4 text-center">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Greg Minezzi</a>.
      </div>
    </footer>
  );
}
