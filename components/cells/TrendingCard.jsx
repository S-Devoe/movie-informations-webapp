import { useRouter } from "next/router";
import Image from "next/image";
import { imageShimmer, toBase64 } from "../../utils";
import CategoryMovieicon from "../icons/CategoryMovieicon";
import CategoryTvIcon from "../icons/CategoryTvIcon";

const TrendingCard = ({ item, isMovie }) => {
  const router = useRouter();
  const renderYear = (year) => {
    return year.substring(0, 4);
  };

  const renderCategoryIcon = (category) => {
    if (category === "movie") {
      return <CategoryMovieicon className="h-3" />;
    } else {
      return <CategoryTvIcon className="h-3" />;
    }
  };

  const handleClick = () => {
    if (item.media_type === "movie") {
      router.push(`/movie/${item.id}`);
    } else {
      router.push(`/tv/${item.id}`);
    }
  };

  return (
    <div
      className='relative h-[140px] w-[240px] after:absolute after:top-0
     after:right-0 after:bottom-0 after:left-0 after:bg-app-dark-blue after:opacity-50 after:content-[""]
      sm:h-[230px] sm:w-[470px] cursor-pointer'
      onClick={handleClick}
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
        layout="fill"
        objectFit="cover"
        alt={item.title}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          imageShimmer(700, 475)
        )}`}
        className="rounded-lg"
      />
      <div className="info absolute bottom-4 left-4 z-10   ">
        <div className="top flex items-center text-app-grey text-[.8rem] md:text-[.95rem] ">
          <div className="year">
            {isMovie
              ? renderYear(item.release_date)
              : renderYear(item.first_air_date)}
          </div>
          <span className='flex items-center px-[8px] before:content-["•"]'></span>
          <div className="category flex items-center gap-1 capitalize">
            <span>{renderCategoryIcon(item.media_type)} </span>
            {item.media_type}
          </div>
          <div className=" pl-2">{item.adult ? "+18" : "PG"}</div>
        </div>
        <div className="btm md:text-[1.5rem] md:w-[400px] font-bold capitalize text-app-pure-white">
          <h3>{item.title}</h3>
        </div>
      </div>
    </div>
  );
};
export default TrendingCard;
