import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { delAll } from "../redux/features/slices/shopSlice";

function Modal() {
  const dispatch = useDispatch();
  const { allProduct, price } = useSelector((store) => store.shop);
  return (
    <div className="flex flex-col gap-[25px]">
      <img
        className="w-[64px] h-[64px] "
        src="/assets/checkout/icon-order-confirmation.svg"
        alt=""
      />
      <h2 className="text-[24px] font-bold leading-[28px] tracking-[1px] uppercase">
        THANK YOU FOR YOUR ORDER
      </h2>
      <p className="opacity-50 text-[#000000] text-[15px] font-normal leading-[25px]">
        You will receive an email confirmation shortly.
      </p>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-1 md:flex-row">
          <div className="rounded-[8px] bg-[#f1f1f1] pt-[30px] px-[35px] pb-[20px]">
            <ul className="flex flex-col gap-[24px]">
              {allProduct &&
                allProduct.map((s) => {
                  return (
                    <li className="flex flex-row justify-between items-center">
                      <div className="w-[64px] h-[64px] rounded-[8px] bg-[#f1f1f1] py-[12px] px-[15px] mr-[20px]">
                        <img
                          src={s.image.desktop.slice(1)}
                          className="w-[40px] h-[40px]"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-[5px] mr-[auto]">
                        <h2 className="text-[15px] font-bold leading-[25px] text-[#000000]">
                          {s.name}
                        </h2>
                        <span className="text-[14px] font-bold leading-[25px] text-[#000000] opacity-50">
                          $ {s.price}
                        </span>
                      </div>
                      <h2 className="text-[#000000] opacity-50 text-[15px] font-bold leading-[25px]">
                        x{s.amount}
                      </h2>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="rounded-[8px] bg-[#000000] py-[15px] pl-[24px]">
            <h2 className="text-[#ffffff] text-[15px] leading-[25px] opacity-50 text-start">
              GRAND TOTAL
            </h2>
            <span className="mt-[20px] text-[#ffffff] font-bold uppercase text-[18px] ">
              ${Math.trunc(price + price / 100)}
            </span>
          </div>
        </div>
        <Link
          to="/"
          className="py-[15px] mt-[20px] bg-[#D87D4A] upercase font-bold text-[13px] leading-[18px] tracking-[1px] text-center text-[#ffffff]"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default Modal;
