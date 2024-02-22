import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CatList() {
  const { filters } = useSelector((store) => store.shop);
  return (
    <ul className="flex flex-col-reverse gap-[30px]">
      {filters &&
        filters.map((d) => {
          return (
            <li
              key={d.id}
              className={`flex flex-col gap-[32px]  md:justify-between ${
                d.id === "3" ? "md:flex-row-reverse" : "md:flex-row"
              } ${d.id === "5" ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              <div className="bg-[#F1F1F1] rounded-[8px] pt-[41px] px-[54px] flex items-center justify-center">
                <picture>
                  <source media="(max-width:640px)" srcSet={d.image.mobile} />
                  <source media="(max-width:768px)" srcSet={d.image.tablet} />
                  <img
                    className="w-[220px] h-[243px] sm:w-[330px] sm:h-[283px] md:w-[350px] md:h-[386px]"
                    src={d.image.desktop}
                    alt=""
                  />
                </picture>
              </div>
              <div className="flex flex-col items-center justify-center gap-[24px] md:items-start">
                {d.new && (
                  <h3 className="text-[14px]  font-normal leading-[19px] tracking-[10px] uppercase text-[#D87D4A]">
                    NEW PRODUCT
                  </h3>
                )}
                <h2 className="text-center md:text-start  sm:text-[40px] sm:leading-[44px] sm:tracking-[1px] text-[28px] font-bold leading-[38px] tracking-[1px] uppercase text-[#000000] w-[300px]">
                  {d.name}
                </h2>
                <p className="text-[15px] md:text-start text-center font-normal md:w-[300px] leading-[25px] opacity-50 sm:w-[572px]">
                  {d.description}
                </p>
                <Link
                  to={`/product/${d.slug}/${d.id}`}
                  className="py-[15px] px-[30px] text-[13px] leading-[18px] tracking-[1px] uppercase bg-[#D87D4A] text-[#ffffff] hover:bg-[#fbaf85]"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </li>
          );
        })}
      {!filters && (
        <div className="flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </ul>
  );
}

export default CatList;
