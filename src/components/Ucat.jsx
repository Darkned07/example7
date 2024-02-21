import { Link } from "react-router-dom";

function Ucat() {
  return (
    <div>
      <ul className="flex flex-col gap-[66px] md:flex-row md:gap-[30px] items-center justify-center md:justify-between">
        <li className=" relative help__w__max cursor-pointer  rounded-[8px] bg-[#F1F1F1] flex flex-col items-center justify-center pb-[30px] gap-[17px] pt-[100px]">
          <Link
            className="flex flex-col items-center justify-center gap-[5px]"
            to="/headphones"
          >
            <img
              className="w-[140px] h-[124px] absolute top-[-40px]"
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt=""
            />

            <h2 className="text-[15px] font-bold leading-[20px]  tracking-[1px]">
              HEADPHONES
            </h2>
            <h3 className="text-center flex flex-row gap-[12px] items-center text-[13px] font-bold tracking-[1px]  leading-[18px] opacity-50 hover:text-[#fbaf85] hover:opacity-100">
              SHOP
              <img
                className="w-[5px] h-[10px]"
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt=""
              />
            </h3>
          </Link>
        </li>
        <li className=" relative help__w__max cursor-pointer  rounded-[8px] bg-[#F1F1F1] flex flex-col items-center justify-center pb-[30px] gap-[17px] pt-[100px]">
          <Link
            className="flex flex-col items-center justify-center gap-[5px]"
            to="/speakers"
          >
            <img
              className="w-[140px] h-[124px] absolute top-[-40px]"
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt=""
            />

            <h2 className="text-[15px] font-bold leading-[20px]  tracking-[1px]">
              SPEAKERS
            </h2>
            <h3 className="text-center flex flex-row gap-[12px] items-center text-[13px] font-bold tracking-[1px]  leading-[18px] opacity-50 hover:text-[#fbaf85] hover:opacity-100">
              SHOP
              <img
                className="w-[5px] h-[10px]"
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt=""
              />
            </h3>
          </Link>
        </li>
        <li className=" relative help__w__max cursor-pointer  rounded-[8px] bg-[#F1F1F1] flex flex-col items-center justify-center pb-[30px] gap-[17px] pt-[100px]">
          <Link
            className="flex flex-col items-center justify-center gap-[5px]"
            to="/earphones"
          >
            <img
              className="w-[140px] h-[124px] absolute top-[-40px]"
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt=""
            />

            <h2 className="text-[15px] font-bold leading-[20px]  tracking-[1px]">
              EARPHONES
            </h2>
            <h3 className="text-center flex flex-row gap-[12px] items-center text-[13px] font-bold tracking-[1px]  leading-[18px] opacity-50 hover:text-[#fbaf85] hover:opacity-100">
              SHOP
              <img
                className="w-[5px] h-[10px]"
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt=""
              />
            </h3>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Ucat;
