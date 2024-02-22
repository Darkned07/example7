import CatList from "../components/CatList";
import NavHelpCat from "../components/NavHelpCat";
import Ucat from "../components/Ucat";
import ImComp from "../components/ImComp";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filter } from "../redux/features/slices/shopSlice";

function HeadPhone() {
  const dispatch = useDispatch();
  const text = "headphones";
  const [doc, setDoc] = useState(null);
  const [d, setD] = useState(false);
  setTimeout(() => {
    setD(true);
  }, 2000);
  dispatch(filter(text));

  return (
    <div className="">
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

export default HeadPhone;
