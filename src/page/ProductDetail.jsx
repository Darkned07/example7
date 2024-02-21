import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Prod from "../components/Prod";

function ProductDetail() {
  const { id } = useParams();
  const [dat, setDat] = useState(null);

  useEffect(() => {
    const getApi = (id) => {
      fetch("http://localhost:3000/data?id=" + id)
        .then((data) => data.json())
        .then((doc) => setDat(doc))
        .catch((error) => console.log(error));
    };
    getApi(id);
  }, [id]);

  return (
    <div className="max-container mt-[60px] mb-[60px]">
      <Link to="/">Go Back</Link>
      <div>{dat && <Prod doc={dat} />}</div>
      {!dat && (
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

export default ProductDetail;
