import { Link } from "react-router-dom";
import ImComp from "../components/ImComp";
import NavItem from "../components/NavItem";
import Ucat from "../components/Ucat";
import "./helppage.css";
import { useApi } from "../hooks/useApi";

function Home() {
  const { useFetch } = useApi();
  useFetch("http://localhost:3000/data");
  return (
    <div>
      <NavItem />

      <div className="max-container">
        <div className="flex flex-col">
          <div className="py-[120px]">
            <Ucat />
          </div>
          <div className="bg-[#D87D4A] mb-[60px] pt-[60px] rounded-[8px] md:px-[85px] px-[10px] flex flex-col md:flex-row items-center md:justify-between  justify-center overflow-hidden">
            <picture className="mb-[-20px]">
              <source
                media="(max-width:768px)"
                srcSet="/assets/home/tablet/image-speaker-zx9.png"
              />
              <source
                media="(max-width:640px)"
                srcSet="/assets/home/mobile/image-speaker-zx9.png"
              />
              <img
                className="md:w-[410px] md:h-[493px] sm:w-[197px] sm:h-[237px] w-[172px] h-[207px]"
                src="/assets/home/desktop/image-speaker-zx9.png"
                alt=""
              />
            </picture>
            <div className=" flex flex-col justify-center items-center mt-[32px] md:items-start">
              <h2 className="hm__help__page__h2 text-[36px] leading-[40px] w-[200px] text-center text-[#ffffff] md:text-[56px] font-bold md:leading-[58px] tracking-[2px] md:mb-[24px] mb-[20px] md:text-start">
                ZX9 SPEAKER
              </h2>
              <p className="hm__help__page__p md:text-start  text-center text-[15px] leading-[25px] font-normal text-[#ffffff] opacity-75  md:mb-[40px] mb-[24px]">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link
                to="/product/zx9-speaker"
                className="mb-[54px] hover:bg-[#4f4949] py-[15px] px-[30px] text-[13px] font-bold leading-[18px] tracking-[1px] text-[#ffffff] bg-[#000000]"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center relative ">
            <div className="flex flex-col items-start justify-center gap-[32px] absolute left-[10px] sm:left-[20px] md:left-[40px]">
              <h2 className="text-[28px] font-bold leading-[38px] tracking-[2px] ">
                ZX7 SPEAKER
              </h2>
              <Link
                to="/product/zx7-speaker"
                className="py-[15px] hover:bg-[#000000] hover:text-[#ffffff]  px-[30px] border border-[#000000] text-[#000000] text-[13px] font-bold leading-[18px] tracking-[1px]"
              >
                See Product
              </Link>
            </div>
            <picture className="">
              <source
                media="(max-width:640px)"
                srcSet="/assets/home/mobile/image-speaker-zx7.jpg"
              />
              <source
                media="(max-width:768px)"
                srcSet="/assets/home/tablet/image-speaker-zx7.jpg"
              />
              <img
                className="w-full h-full rounded-[8px] "
                src="/assets/home/desktop/image-speaker-zx7.jpg"
                alt=""
              />
            </picture>
          </div>
          <div className="mb-[60px] mt-[60px] flex flex-col gap-[40px] sm:flex-row  justify-between">
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/assets/home/mobile/image-earphones-yx1.jpg"
              />
              <source
                media="(max-width: 768px)"
                srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
              />
              <img
                className="rounded-[8px] "
                src="/assets/home/desktop/image-earphones-yx1.jpg"
                alt=""
              />
            </picture>
            <div className="bg-[#f1f1f1] py-[41px]  pl-[24px] rounded-[8px] sm:pr-[53px] md:w-[500px] sm:w-[300px] flex flex-col  items-start justify-center">
              <h2 className="text-[28px] font-bold leading-[38px] tracking-[2px] text-[#000000] mb-[32px]">
                YX1 EARPHONES
              </h2>
              <Link
                to="/product/yx1-earphones"
                className="py-[15px] hover:bg-[#000000] hover:text-[#ffffff]  px-[30px] border border-[#000000] text-[#000000] text-[13px] font-bold leading-[18px] tracking-[1px]"
              >
                See Product
              </Link>
            </div>
          </div>
          <div className="mb-[60px]">
            <ImComp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
