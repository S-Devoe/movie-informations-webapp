import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const FilmRating = ({ ratingNum }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-3">
      <h3 className="mb-2 text-4xl font-medium  md:mb-0">{ratingNum}</h3>
      <div className="">
        <Rating
          className="align-center flex self-center"
          initialRating={ratingNum ? ratingNum : 0}
          emptySymbol={<FaRegStar />}
          fullSymbol={<FaStar />}
          readonly
        />
      </div>
    </div>
  );
};
export default FilmRating;
