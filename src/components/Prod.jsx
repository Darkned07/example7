import { Link } from "react-router-dom";
import Ucat from "./Ucat";
import ImComp from "./ImComp";

function Prod({ doc }) {
  return (
    <div className="mt-[60px] mb-[60px]">
      <ul>
        {doc &&
          doc.map((d) => {
            return (
              <li key={d.id} className="flex flex-col gap-[60px]">
                <div className="flex flex-col gap-[60px] sm:flex-row items-center justify-between">
                  <div className="rounded-[8px] bg-[#f1f1f1] pt-[18px] sm:px-[30px]   sm:py-[70px] pb-[60px] flex items-center justify-center">
                    <picture>
                      <source
                        media="(max-width:768px)"
                        srcSet={d.image.tablet.slice(1)}
                      />
                      <source
                        media="(max-width:640px)"
                        srcSet={d.image.mobile.slice(1)}
                      />
                      <img
                        className="w-[263px] h-[238px]  md:w-[540px] md:h-[560px]"
                        src={d.image.desktop.slice(1)}
                      />
                    </picture>
                  </div>
                  <div className="flex flex-col gap-[24px] md:gap-[32px]">
                    {d.new && (
                      <h3 className="text-[14px]  font-normal leading-[19px] tracking-[10px] uppercase text-[#D87D4A]">
                        NEW PRODUCT
                      </h3>
                    )}
                    <h2 className="text-[28px]  sm:w-[349px] md:text-[40px] md:leading-[44px] md:tracking-[2px] text-[#000000] font-bold leading-[38px] tracking-[1px] text-start uppercase ">
                      {d.name}
                    </h2>

                    <p className="text-[#000000]  sm:w-[349px] opacity-50 text-[15px] font-normal leading-[25px] text-start ">
                      {d.description}
                    </p>
                    <h2 className="text-[#000000] text-[18px] font-bold leading-[25px] tracking-[2px] uppercase text-start">
                      ${d.price.toLocaleString("en", "US")}
                    </h2>
                    <div className="flex flex-row items-center justify-between">
                      <div className="bg-[#f1f1f1] p-[16px] flex flex-row items-center justify-between gap-[20px]">
                        <button className="hover:text-[#D87D4A] text-[#000000] opacity-25 hover:opacity-100 text-[17px] font-bold leading-[18px] tracking-[1px] uppercase">
                          -
                        </button>
                        <h2 className="text-[13px] text-[#000000] font-bold leading-[18px] tracking-[1px]">
                          1
                        </h2>
                        <button className="hover:text-[#D87D4A]  text-[#000000] opacity-25 hover:opacity-100 text-[17px] font-bold leading-[18px] tracking-[1px] uppercase">
                          +
                        </button>
                      </div>
                      <button className="py-[15px] px-[32px] bg-[#D87D4A] text-[#ffffff] text-[13px] font-bold leading-[18px] tracking-[1px] uppercase hover:bg-[#fbaf85]">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-[60px] mb-[60px] flex flex-col gap-[60px] md:flex-row md:justify-between md:items-start">
                  <div className="flex flex-col gap-[24px]">
                    <h2 className="text-[24px] font-bold leading-[36px] tracking-[1px] uppercase text-start text-[#000000]">
                      FEATURES
                    </h2>
                    <p className="text-[#000000] md:w-[400px] text-[15px] font-normal leading-[25px] text-start opacity-50">
                      {d.features}
                    </p>
                  </div>
                  <div className="flex flex-col gap-[24px] sm:flex-row sm:justify-between md:flex-col">
                    <h2 className="text-[#000000] text-[24px] font-bold leading-[36px] text-start uppercase tracking-[1px]">
                      IN THE BOX
                    </h2>
                    <ul className="flex flex-col gap-[8px] text-start">
                      {d &&
                        d.includes.map((s) => {
                          return (
                            <li
                              key={s.quantity}
                              className="flex flex-row gap-[24px]"
                            >
                              <span className="text-[15px] font-bold leading-[25px] text-start text-[#D87D4A]">
                                {s.quantity}x
                              </span>
                              <h3 className="text-[#000000] text-[15px] font-normal leading-[25px] opacity-50">
                                {s.item}
                              </h3>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-[20px] sm:flex-row">
                  <div className="flex flex-col gap-[20px]">
                    <picture>
                      <source
                        media="(max-width:640px)"
                        srcSet={d.gallery.first.mobile.slice(1)}
                      />
                      <source
                        media="(max-width:768px)"
                        srcSet={d.gallery.first.tablet.slice(1)}
                      />
                      <img
                        className="rounded-[8px]"
                        src={d.gallery.first.desktop.slice(1)}
                        alt=""
                      />
                    </picture>
                    <picture>
                      <source
                        media="(max-width:640px)"
                        srcSet={d.gallery.second.mobile.slice(1)}
                      />
                      <source
                        media="(max-width:768px)"
                        srcSet={d.gallery.second.tablet.slice(1)}
                      />
                      <img
                        className="rounded-[8px]"
                        src={d.gallery.second.desktop.slice(1)}
                        alt=""
                      />
                    </picture>
                  </div>
                  <picture>
                    <source
                      media="(max-width:640px)"
                      srcSet={d.gallery.third.mobile.slice(1)}
                    />
                    <source
                      media="(max-width:768px)"
                      srcSet={d.gallery.third.tablet.slice(1)}
                    />
                    <img
                      className="rounded-[8px]"
                      src={d.gallery.third.desktop.slice(1)}
                      alt=""
                    />
                  </picture>
                </div>
                <div className="mt-[60px] mb-[60px]">
                  <h2 className="text-[24px] font-bold leading-[36px] tracking-[1px] uppercase text-center">
                    YOU MAY ALSO LIKE
                  </h2>
                  <ul className="flex flex-col gap-[56px] mt-[40px] sm:flex-row sm:justify-between">
                    {d.others.map((m) => {
                      return (
                        <li className="flex flex-col gap-[32px] items-center">
                          <picture>
                            <source
                              media={m.image.mobile.slice(1)}
                              srcSet="(max-width:640px)"
                            />
                            <source
                              media={m.image.tablet.slice(1)}
                              srcSet="(max-width:768px)"
                            />
                            <img
                              className="w-[327px] h-[180px] object-center sm:w-[223px] sm:h-[318px] sm:object-cover md:w-[350px] md:h-[318px]"
                              src={m.image.desktop.slice(1)}
                              alt=""
                            />
                          </picture>
                          <h2 className="text-center uppercase tracking-[2px] leading-[33px] font-bold text-[24px] text-[#000000]">
                            {m.name}
                          </h2>
                          <Link
                            to={`/product/${m.slug}`}
                            className="py-[15px] px-[30px] text-[13px] leading-[18px] tracking-[1px] uppercase bg-[#D87D4A] text-[#ffffff] hover:bg-[#fbaf85]"
                          >
                            SEE PRODUCT
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="mb-[60px] mt-[60px]">
                  <Ucat />
                </div>
                <div className="mt-[60px] mb-[60px]">
                  <ImComp />
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Prod;
