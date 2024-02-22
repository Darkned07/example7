import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterSlug } from "../redux/features/slices/shopSlice";
import Slug from "../components/Slug";

function ProductSlug() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  dispatch(filterSlug(slug));

  return (
    <div className="max-container mt-[60px] mb-[60px]">
      <Link to="/">Go Back</Link>
      <div>
        <Slug />
      </div>
    </div>
  );
}

export default ProductSlug;
