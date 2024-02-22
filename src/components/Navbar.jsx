import { Link, Navigate, useHref } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  incrAll,
  decrAll,
  deletedShops,
  delAll,
} from "../redux/features/slices/shopSlice";
import { useState } from "react";

function Navbar() {
  const [isPen, setIsPen] = useState(false);
  const { allProduct, price } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const history = useHref();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("successufuly signout");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="max-container border border-t-0 border-x-0 border-white border-[100%] ">
      <div className="py-[32px] flex flex-row justify-between items-center">
        <button className="text-[#ffffff] w-[16px] h-[12px] font-bold sm:mr-[40px] md:hidden">
          <FiMenu />
        </button>

        <Link className="sm:mr-[auto] md:mr-[1px]" to="/">
          <img
            className="w-[143px] h-[25px]"
            src="/assets/shared/desktop/logo.svg"
            alt=""
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex flex-row gap-[34px]">
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
        </nav>
        <button
          onClick={() => {
            setIsPen(true);
            document.getElementById("my_modal_2").showModal();
          }}
        >
          <img
            className="w-[24px] h-[16px] sm:mr-[20px]"
            src="/assets/shared/desktop/icon-cart.svg"
            alt=""
          />
        </button>
        <button
          onClick={handleSignOut}
          className="text-black py-[6px] px-[12px] hover:text-white hover:bg-black text-[18px] duration-1000 ease-in-out bg-[#ffffff] "
        >
          Logout
        </button>
      </div>
      {isPen && (
        <dialog id="my_modal_2" className="modal max-container">
          <div className="modal-box  absolute top-[100px] ">
            {!price && (
              <h2 className="flex justify-center items-center text-2xl text-black">
                No data
              </h2>
            )}
            {price > 1 && allProduct && (
              <div className="flex flex-col gap-[32px]">
                <div className="flex flex-row justify-between ">
                  <h2 className="text-[18px] leading-[25px] tracking-[2px] uppercase font-bold text-[#000000]">
                    Cart ( {allProduct.length} )
                  </h2>
                  <button
                    onClick={() => {
                      dispatch(delAll());
                    }}
                    className="text-[#000000] hover:text-[#D87D4A] text-[15px] font-normal leading-[25px] underline opacity-50"
                  >
                    Remove all
                  </button>
                </div>
                {allProduct &&
                  allProduct.map((d) => {
                    return (
                      <div className="flex flex-row justify-between items-center">
                        <div className="w-[64px] h-[64px]  py-[12px] px-[14px] rounded-[8px] bg-[#f1f1f1]">
                          <img
                            className="w-[40px] h-[40px]"
                            src={d.image.desktop.slice(1)}
                            alt=""
                          />
                        </div>
                        <div>
                          <h3 className="text-[#000000] font-bold text-[15px] leading-[25px] ">
                            {d.name}
                          </h3>
                          <span className="text-[#000000] opacity-50 text-[14px] font-bold leading-[25px]">
                            ${d.price * d.amount}
                          </span>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                          <div className="bg-[#f1f1f1] p-[16px] flex flex-row items-center justify-between gap-[20px]">
                            <button
                              onClick={() => {
                                if (d.amount <= 1) {
                                  dispatch(deletedShops(d.id));
                                  <Navigate to="/" />;
                                } else {
                                  dispatch(incrAll(d.id));
                                }
                              }}
                              className="hover:text-[#D87D4A] text-[#000000] opacity-25 hover:opacity-100 text-[17px] font-bold leading-[18px] tracking-[1px] uppercase"
                            >
                              -
                            </button>
                            <h2 className="text-[13px] text-[#000000] font-bold leading-[18px] tracking-[1px]">
                              {d.amount}
                            </h2>
                            <button
                              onClick={() => {
                                dispatch(decrAll(d.id));
                              }}
                              className="hover:text-[#D87D4A]  text-[#000000] opacity-25 hover:opacity-100 text-[17px] font-bold leading-[18px] tracking-[1px] uppercase"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                {allProduct.length <= 0 && (
                  <h2 className="flex justify-center items-center text-2xl text-black">
                    No data
                  </h2>
                )}
                <div className="flex flex-row justify-between items-center">
                  <h2 className="opacity-50 text-[15px] text-[#000000] font-normal leading-[25px] ">
                    TOTAL
                  </h2>
                  <span className="text-[18px] leading-[25px] uppercase font-bold text-[#000000]">
                    ${price > 0 ? price : 0}
                  </span>
                </div>
                <Link
                  to="/check"
                  className="text-center bg-[#D87D4A] hover:bg-[#fbaf85] py-[15px] text-[13px] font-bold leading-[18px] tracking-[1px] uppercase text-[#ffffff]"
                >
                  CHECKOUT
                </Link>
              </div>
            )}
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
}

export default Navbar;
