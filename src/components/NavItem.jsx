import "./comphelp.css";
import { Link } from "react-router-dom";

function NavItem() {
  return (
    <div className="bg-[#101010] pb-[50px]">
      <div className="help__post  max-container  flex flex-col items-center justify-center md:flex-row-reverse md:justify-between md:item-center">
        <picture className="text-center flex items-center justify-center ">
          <source
            media="(min-width:768px)"
            className="w-full h-full"
            srcSet="/assets/home/desktop/image-hero.jpg"
          />
          <source
            media="(min-width:640px)"
            className="w-full h-full"
            srcSet="/assets/home/tablet/image-header.jpg"
          />
          <img
            src="/assets/home/mobile/image-header.jpg"
            className="w-full h-full"
            alt=""
          />
        </picture>
        <div className="help__divs__one flex flex-col gap-[16px] items-center justify-center md:mt-[100px] md:items-start md:gap-[24px] helps__comp__one">
          <span className="help__one__span text-[14px] font-normal text-[#ffffff] opacity-50 leading-5 uppercase tracking-[10px] text-center">
            NEW PRODUCT
          </span>
          <h2 className=" help__one__h2  text-[#ffffff] md:text-[56px] text-[36px] font-bold tracking-[2px] leading-[40px] md:leading-[58px] text-center md:w-[400px] md:text-start  mb-[14px]">
            XX99 Mark II HeadphoneS
          </h2>
          <p className=" help__one__p  text-[15px]  font-normal leading-[25px] md:w-[349px] text-center md:text-start text-[#ffffff] tracking-[0px]  opacity-75 mb-[18px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            to="/product/xx99-mark-two-headphones"
            className="help__btn hover:bg-[#fbaf85] py-[15px] px-[30px] text-[#ffffff] bg-[#D87D4A] text-[13px] tracking-[1px] leading-[18px] font-bold"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavItem;
