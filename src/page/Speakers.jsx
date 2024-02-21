import NavHelpCat from "../components/NavHelpCat";
import Ucat from "../components/Ucat";
import ImComp from "../components/ImComp";
import CatList from "../components/CatList";
import { useEffect, useState } from "react";

function Speakers() {
  const text = "speakers";
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    const getData = async (text) => {
      fetch("http://localhost:3000/data?category=" + text)
        .then((data) => data.json())
        .then((doc) => setDoc(doc))
        .catch((error) => console.log(error));
    };
    getData(text);
  }, [text]);

  return (
    <div>
      <NavHelpCat text={text} />
      <div className="max-container flex flex-col gap-[60px]">
        <div className="mt-[60px] mb-[60px]">
          {doc && <CatList doc={doc} />}
          {!doc && (
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

export default Speakers;
