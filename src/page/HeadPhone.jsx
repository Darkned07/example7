import CatList from "../components/CatList";
import NavHelpCat from "../components/NavHelpCat";
import Ucat from "../components/Ucat";
import ImComp from "../components/ImComp";
import { useEffect, useState } from "react";

function HeadPhone() {
  const text = "headphones";
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/data?category=" + text)
      .then((data) => data.json())
      .then((doc) => setDoc(doc))
      .catch((error) => console.log(error));
  }, [text]);

  return (
    <div className="">
      <NavHelpCat text={text} />
      <div className="max-container flex flex-col gap-[60px]">
        <div className="mt-[60px] mb-[60px]">
          {doc && <CatList doc={doc} />}
          {!doc && (
            <div className="flex items-center justify-center">
              <span className="loading loading-spinner loading-lg"></span>
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
