import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Prod from "../components/Prod";
import { useDispatch, useSelector } from "react-redux";
import { filterId } from "../redux/features/slices/shopSlice";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  dispatch(filterId(id));

  return (
    <div className="max-container mt-[60px] mb-[60px]">
      <Link to="/">Go Back</Link>
      <div>
        <Prod />
      </div>
    </div>
  );
}

export default ProductDetail;
