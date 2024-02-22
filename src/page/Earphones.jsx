import NavHelpCat from "../components/NavHelpCat";
import Ucat from "../components/Ucat";
import ImComp from "../components/ImComp";
import CatList from "../components/CatList";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { filter } from "../redux/features/slices/shopSlice";

function Earphones() {
  const [d, setD] = useState(false);
  setTimeout(() => {
    setD(true);
  }, 2000);
  const dispatch = useDispatch();
  const text = "earphones";
  dispatch(filter(text));
  toast.success("Earphones Pages close menu!");

  return (
    <div>
      <NavHelpCat text={text} />
      <div className="max-container flex flex-col gap-[60px]">
        <div className="mt-[60px] mb-[60px]">
          {d && <CatList />}

          {!d && (
            <div className="flex items-center justify-center">
              <h2 className="flex justify-center items-center text-[20px] sm:text-[30px]">
                Loading
                <span className="loading loading-spinner loading-md sm:loading-lg"></span>
              </h2>
            </div>
          )}
        </div>
        <div className="mb-[60px] mt-[60px]">
          <Ucat />
        </div>
        <div className="mt-[60px] mb-[60px]">
          <ImComp />
        </div>
      </div>
    </div>
  );
}

export default Earphones;
