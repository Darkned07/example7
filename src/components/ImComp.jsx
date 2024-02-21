import React from "react";

function ImComp() {
  return (
    <div className="flex flex-col items-center justify-center gap-[30px] md:flex-row-reverse md:items-center md:justify-between">
      <picture>
        <source media="/assets/shared/desktop/image-best-gear.jpg" srcSet="" />
        <source media="/assets/shared/desktop/image-best-gear.jpg" srcSet="" />
        <img
          className="rounded-[8px] md:w-full md:h-[500px]"
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt=""
        />
      </picture>
      <div className="flex flex-col gap-[32px] items-center justify-center md:items-start ">
        <h2 className="text-center uppercase text-[28px] sm:text-[40px] sm:leading-[44px] sm:tracking-[2px] font-bold leading-[38px] tracking-[1px] mx-p_1 md:text-start">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio
          gear
        </h2>
        <p className="text-[15px] text-center font-normal leading-[25px] mx-p opacity-50 md:text-start">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

export default ImComp;
