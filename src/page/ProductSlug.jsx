import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Prod from "../components/Prod";

function ProductSlug() {
  const { slug } = useParams();
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    const getDoc = async (slug) => {
      fetch("http://localhost:3000/data?slug=" + slug)
        .then((data) => data.json())
        .then((doc) => setDoc(doc))
        .catch((error) => console.log(error));
    };
    getDoc(slug);
  }, [slug]);

  return (
    <div className="max-container mt-[60px] mb-[60px]">
      <Link to="/">Go Back</Link>
      <div>{doc && <Prod doc={doc} />}</div>
      {!doc && (
        <div className="flex items-center justify-center">
          <h2 className="flex justify-center items-center text-[20px] sm:text-[30px]">
            Loading
            <span className="loading loading-spinner loading-md sm:loading-lg"></span>
          </h2>
        </div>
      )}
    </div>
  );
}

export default ProductSlug;
