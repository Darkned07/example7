import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

function Navbar() {
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
        <button>
          <img
            className="w-[24px] h-[16px]"
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
    </div>
  );
}

export default Navbar;
