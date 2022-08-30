import { useRouter } from "next/router";
import Image from "next/image";
import { imageShimmer, toBase64 } from "../../utils";
import CategoryMovieicon from "../icons/CategoryMovieicon";
import CategoryTvIcon from "../icons/CategoryTvIcon";

const GeneralCard = ({ item, isMovie }) => {
  const router = useRouter();
  

  const renderYear = (year) => {
    return year.substring(0, 4);
  };

  const renderCategoryIcon = () => {
    if (isMovie == true) {
      return <CategoryMovieicon className="h-3" />;
    } else {
      return <CategoryTvIcon className="h-3" />;
    }
  };

  const handleClick = () => {
    if (isMovie == true) {
      router.push(`/movie/${item.id}`);
    } else {
      router.push(`/tv/${item.id}`);
    }
  };

  return (
    <div
      className={`card-hover-animation cursor-pointer`}
      onClick={handleClick}
    >
      <div
        className="relative h-[133px]  
       sm:h-[170px] lg:h-[200px] md:w-full"
      >
        {item.backdrop_path === null ? (
          <p>Image not available</p>
        ) : (
          <Image
            src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
            layout="fill"
            objectFit="cover"
            alt={item.title}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              imageShimmer(240, 475)
            )}`}
            className="rounded-lg"
          />
        )}
      </div>
      <div className="info mt-[.5rem]">
        <div
          className="top flex items-center text-app-grey 
        text-[.8rem] md:text-[.95rem] "
        >
          <div className="year">
            {item.release_date == "" ||
            item.release_date == null ||
            item.first_air_date == false ||
            item.first_air_date == "" ? (
              <p>N/A</p>
            ) : (
              <div className="">
                {isMovie
                  ? renderYear(item.release_date)
                  : renderYear(item.first_air_date)}
              </div>
            )}
          </div>
          <span className='flex items-center px-[8px] before:content-["•"]'></span>
          <div className="category flex items-center gap-1 capitalize">
            <span>{renderCategoryIcon()} </span>
            {item.media_type}
          </div>
          <div className="pl-2">{item.adult ? "+18" : "PG"}</div>
        </div>
        <div className="btm font-bold capitalize text-app-pure-white">
          <h3>{isMovie ? item.title : item.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default GeneralCard;
