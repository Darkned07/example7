import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import Modal from "../components/Modal";
import { toast } from "react-toastify";
import { delAll } from "../redux/features/slices/shopSlice";

function Checkout() {
  const dispatch = useDispatch();
  const name = useRef();
  const email = useRef();
  const number = useRef();
  const addres = useRef();
  const zipcode = useRef();
  const city = useRef();
  const country = useRef();
  const moneynum = useRef();
  const moneypin = useRef();

  const [card, setCard] = useState(false);
  const [hids, setHids] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.current.value.trim().length > 1 &&
      email.current.value.trim().length > 1 &&
      number.current.value.trim().length > 1 &&
      addres.current.value.trim().length > 1 &&
      zipcode.current.value.trim().length > 1 &&
      city.current.value.trim().length > 1 &&
      country.current.value.trim().length > 1
    ) {
      if (card) {
        if (
          moneynum.current.value.trim().length > 1 &&
          moneypin.current.value.trim().length > 1
        ) {
          document.getElementById("my_modal_1").showModal();
        } else {
          toast.error(
            "barcha inputlar toldirilmagan yoki bo'sh joylar qilib ketgan!"
          );
        }
      } else if (hids) {
        document.getElementById("my_modal_1").showModal();
      } else {
        toast.error(
          "Xatolik siz no'tog'ri malumotlarni kiritganga o'xshaysiz!"
        );
      }
    } else {
      toast.error(
        "barcha inputlar toldirilmagan yoki bo'sh joylar qilib ketgan!"
      );
    }

    setTimeout(() => {
      dispatch(delAll());
    }, 15000);
  };

  const { allProduct, total, price } = useSelector((store) => store.shop);
  return (
    <div className="max-container mt-[20px] mb-[60px] flex flex-col gap-[40px]">
      <Link
        to="/"
        className="text-[15px] font-normal leading-[25px] opacity-50 text-[#000000]"
      >
        Go Back
      </Link>

      <div className="flex flex-col gap-[20px] lg:flex-row items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[20px] lg:flex-row items-center"
        >
          <div className="shadow-xl rounded-[8px] w-[80%] bg-[#ffffff] p-[48px]">
            <h2 className="text-start text-[28px] sm:text-[32px] sm:leading-[36px] sm:tracking-[2px] font-bold leading-[38px] tracking-[1px] uppercase text-[#000000]">
              CHECKOUT
            </h2>
            <div className="flex flex-col gap-[20px] mt-[40px]">
              <span className="text-[13px] text-[#D87D4A] font-bold leading-[25px] tracking-[1px] uppercase text-start">
                BILLING DETAILS
              </span>
              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[24px] sm:flex-row sm:justify-between sm:items-center ">
                  <label className="flex flex-col gap-[9px] w-full">
                    <span className="text-[12px] leading-[16px] font-bold text-[#000000]">
                      Name
                    </span>
                    <input
                      ref={name}
                      name="name"
                      className="rounded-[8px] text-[#000000]  outline-[#D87D4A] font-bold leading-[19px] text-[14px] bg-[#ffffff] border border-[#F1F1F1] py-[18px] pl-[24px]"
                      type="text"
                      placeholder="Alexei Ward"
                    />
                  </label>
                  <label className="flex flex-col gap-[9px] w-full">
                    <span className="text-[12px] leading-[16px] font-bold text-[#000000]">
                      Email Address
                    </span>
                    <input
                      ref={email}
                      name="email"
                      className="rounded-[8px] text-[#000000]  outline-[#D87D4A] font-bold leading-[19px] text-[14px] bg-[#ffffff] border border-[#F1F1F1] py-[18px] pl-[24px]"
                      type="email"
                      placeholder="alexei@mail.com"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-[9px] w-full">
                  <span className="text-[12px] leading-[16px] font-bold text-[#000000]">
                    Phone Number
                  </span>
                  <input
                    ref={number}
                    name="number"
                    className="rounded-[8px] md:w-[310px] text-[#000000]  outline-[#D87D4A] font-bold leading-[19px] text-[14px] bg-[#ffffff] border border-[#F1F1F1] py-[18px] pl-[24px]"
                    type="number"
                    placeholder="+1 202-555-0136"
                  />
                </label>
              </div>
              <span className="text-[13px] text-[#D87D4A] font-bold leading-[25px] tracking-[1px] uppercase text-start">
                shipping info
              </span>
              <div className="flex flex-col gap-[24px]">
                <label className="flex flex-col gap-[9px] w-full">
                  <span className="text-[12px] leading-[16px] font-bold text-[#000000]">
                    Your Address
                  </span>
                  <input
                    ref={addres}
                    name="address"
                    className="rounded-[8px] text-[#000000]  outline-[#D87D4A] font-bold leading-[19px] text-[14px] bg-[#ffffff] border border-[#F1F1F1] py-[18px] pl-[24px]"
                    type="text"
                    placeholder="1137 Williams Avenue"
                  />
                </label>
                <div className="flex flex-col gap-[24px] sm:flex-row sm:justify-between sm:items-center ">
                  <label className="flex flex-col gap-[9px] w-full">
                    <span className="text-[12px] leading-[16px] font-bold text-[#000000]">
                      ZIP Code
                    </span>
                    <input
                      ref={zipcode}
                      name="zipcode"
                      className="rounded-[8px] text-[#000000]  outline-[#D87D4A] font-bold leading-[19px] text-[14px] bg-[#ffffff] border border-[#F1F1F1] py-[18px] pl-[24px]"
                      type="number"
                      placeholder="10001"
                    />
                  </label>
                  <label className="flex flex-col gap-[9px] w-full">
                    <span className="text-[12px] leading-[16px] font-bold text-[#000000]">
                      City
                    </span>
                    <input
                      ref={city}
                      name="city"
                      className="rounded-[8px] text-[#000000]  outline-[#D87D4A] font-bold leading-[19px] text-[14px] bg-[#ffffff] border border-[#F1F1F1] py-[18px] pl-[24px]"
                      type="text"
                      placeholder="New York"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-[9px] w-full">
                  <span className="text-[12px] leading-[16px] font-bold text-[#000000]">
                    Country
                  </span>
                  <input
                    ref={country}
                    name="country"
                    className="rounded-[8px] md:w-[310px] text-[#000000]  outline-[#D87D4A] font-bold leading-[19px] text-[14px] bg-[#ffffff] border border-[#F1F1F1] py-[18px] pl-[24px]"
                    type="text"
                    placeholder="United States"
                  />
                </label>
              </div>
              <span className="text-[13px] text-[#D87D4A] font-bold leading-[25px] tracking-[1px] uppercase text-start">
                payment details
              </span>
              <div className="flex flex-col gap-[24px] sm:flex-row sm:justify-between sm:items-center w-full">
                <h2 className="text-[12px] leading-[26px] font-bold text-black">
                  Payment Method
                </h2>
                <div className="flex flex-col gap-[16px]">
                  <label className=" flex flex-row items-center rounded-[8px] sm:w-[320px] border border-[#D87D4A] w-full py-[18px] pl-[16px] gap-[16px]">
                    <input
                      onChange={() => {
                        setCard(true);
                        setHids(false);
                      }}
                      className="w-[20px] h-[20px] text-[#D87D4A] radio radio-warning"
                      type="radio"
                      name="cards"
                      id=""
                    />
                    <span className="text-[14px] font-bold leading-[19px] text-black">
                      e-Money
                    </span>
                  </label>
                  <label className=" flex flex-row items-center rounded-[8px] sm:w-[320px] border border-[#D87D4A] w-full py-[18px] pl-[16px] gap-[16px]">
                    <input
                      onChange={() => {
                        setCard(false);
                        setHids(true);
                      }}
                      className="w-[20px] h-[20px] text-[#D87D4A] radio radio-warning"
                      type="radio"
                      name="cards"
                      id=""
                    />
                    <span className="text-[14px] font-bold leading-[19px] text-black">
                      Cash on Delivery
                    </span>
                  </label>
                </div>
              </div>
              {card && (
                <div className="flex flex-col gap-[24px] sm:flex-row sm:justify-between">
                  <label className="flex flex-col gap-[9px] w-full">
                    <span className="text-[12px] leading-[16px] font-bold text-[#000000]">
                      e-Money Number
                    </span>
                    <input
                      ref={moneynum}
                      name="cards-money"
                      className="rounded-[8px] md:w-[310px] text-[#000000]  outline-[#D87D4A] font-bold leading-[19px] text-[14px] bg-[#ffffff] border border-[#F1F1F1] py-[18px] pl-[24px]"
                      type="number"
                      placeholder="238521993"
                    />
                  </label>
                  <label className="flex flex-col gap-[9px] w-full">
                    <span className="text-[12px] leading-[16px] font-bold text-[#000000]">
                      e-Money PIN
                    </span>
                    <input
                      ref={moneypin}
                      name="pin"
                      className="rounded-[8px] md:w-[310px] text-[#000000]  outline-[#D87D4A] font-bold leading-[19px] text-[14px] bg-[#ffffff] border border-[#F1F1F1] py-[18px] pl-[24px]"
                      type="number"
                      placeholder="6891"
                    />
                  </label>
                </div>
              )}
              {hids && (
                <div className="mt-[40px] flex flex-col items-center gap-[20px] sm:flex-row">
                  <img
                    className="w-[48px] h-[48px]"
                    src="/assets/checkout/icon-cash-on-delivery.svg"
                    alt=""
                  />
                  <p>
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-[20px] w-[80%] bg-[#ffffff] rounded-[8px] shadow-xl py-[32px] px-[24px] ">
            <h2 className="text-[#000000] text-[18px] font-bold leading-[25px] tracking-[1px] uppercase">
              SUMMARY
            </h2>
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
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-row justify-between items-center">
                <h2 className="text-[15px] text-[#000000] opacity-50 font-normal uppercase leading-[25px]">
                  TOTAL
                </h2>
                <h2 className="text-[18px] text-[#000000] font-bold leading-[25px] uppercase">
                  $ {price}
                </h2>
              </div>
              <div className="flex flex-row justify-between items-center">
                <h2 className="text-[15px] text-[#000000] opacity-50 font-normal uppercase leading-[25px]">
                  SHIPPING
                </h2>
                <h2 className="text-[18px] text-[#000000] font-bold leading-[25px] uppercase">
                  $ {Math.trunc(price / 100)}
                </h2>
              </div>
              <div className="flex flex-row justify-between items-center">
                <h2 className="text-[15px] text-[#000000] opacity-50 font-normal uppercase leading-[25px]">
                  VAT (INCLUDED)
                </h2>
                <h2 className="text-[18px] text-[#000000] font-bold leading-[25px] uppercase">
                  $ 1,079
                </h2>
              </div>
              <div className="flex flex-row justify-between items-center">
                <h2 className="text-[15px] text-[#000000] opacity-50 font-normal uppercase leading-[25px]">
                  GRAND TOTAL
                </h2>
                <h2 className="text-[18px]  text-[#D87D4A] font-bold leading-[25px] uppercase">
                  $ {Math.trunc(price + price / 100)}
                </h2>
              </div>
              <button className="py-[15px] mt-[20px] bg-[#D87D4A] upercase font-bold text-[13px] leading-[18px] tracking-[1px] text-center text-[#ffffff]">
                CONTINUE & PAY
              </button>
            </div>
          </div>
        </form>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div>
            <Modal />
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Checkout;
