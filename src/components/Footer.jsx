import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="max-container relative">
      <div className="flex flex-col items-center justify-center gap-[48px] sm:items-start sm:gap-[32px] md:flex-row md:justify-between">
        <Link
          className="before:content-[''] before:absolute before:top-[-52px] before:align-center  before:w-[101px] before:bg-[#D87D4A] before:h-[4px] "
          to="/"
        >
          <img
            className="w-[143px] h-[25px]"
            src="/assets/shared/desktop/logo.svg"
            alt=""
          />
        </Link>
        <ul className="flex flex-col gap-[16px] items-center sm:flex-row">
          <li className="text-[#ffffff] font-bold text-[13px] leading-6 hover:text-[#D87D4A]">
            <Link to="/">HOME</Link>
          </li>
          <li className="text-[#ffffff] font-bold text-[13px] leading-6 hover:text-[#D87D4A]">
            <Link to="/headphones">HEADPHONES</Link>
          </li>
          <li className="text-[#ffffff] font-bold text-[13px] leading-6 hover:text-[#D87D4A]">
            <Link to="/speakers">SPEAKERS</Link>
          </li>
          <li className="text-[#ffffff] font-bold text-[13px] leading-6 hover:text-[#D87D4A]">
            <Link to="/earphones">EARPHONES</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center mt-[48px] gap-[48px] sm:gap-[80px] sm:items-start md:gap-[56px]">
        <p className="opacity-50 text-[#ffffff] text-[15px] text-center font-normal sm:text-left md:max-w-[400px]">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="flex flex-col items-center justify-center gap-[50px] sm:flex-row sm:justify-between sm:w-full">
          <span className="opacity-50 text-[#ffffff] text-[15px] font-bold ">
            Copyright 2021. All Rights Reserved
          </span>
          <ul className="flex flex-row gap-[16px] items-center md:absolute md:right-10 md:bottom-[63px]">
            <li className="hover:bg-[#D87D4A]">
              <Link>
                <img
                  className="w-[24px] h-[24px]"
                  src="/assets/shared/desktop/icon-facebook.svg"
                  alt=""
                />
              </Link>
            </li>
            <li className="hover:bg-[#D87D4A]">
              <Link>
                <img
                  className="w-[24px] h-[24px]"
                  src="/assets/shared/desktop/icon-twitter.svg"
                  alt=""
                />
              </Link>
            </li>
            <li className="hover:bg-[#D87D4A]">
              <Link>
                <img
                  className="w-[24px] h-[24px]"
                  src="/assets/shared/desktop/icon-instagram.svg"
                  alt=""
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
