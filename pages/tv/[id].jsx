import Image from "next/image";
import { useEffect, useState } from "react";
import FilmCast from "../../components/cells/FilmCast";
import FilmGenres from "../../components/cells/FilmGenres";
import FilmHeading from "../../components/cells/FilmHeading";
import FilmImage from "../../components/cells/FilmImage";
import FilmInfo from "../../components/cells/FilmInfo";
import FilmRating from "../../components/cells/FilmRating";
import FilmSynopsis from "../../components/cells/FilmSynopsis";
import FilmWebsite from "../../components/cells/FilmWebsite";
import SearchBar from "../../components/molecules/SearchBar";

const TvSlug = ({ data, credit }) => {
  const [tvSeries, setTvSeries] = useState({});
  console.log(data);

  useEffect(() => {
    setTvSeries(data);
  }, [data]);

  return (
    <section className="py-[1rem] px-[1.5rem] md:px-[3rem] lg:py-[1.5rem] lg:max-w-[85rem] w-full">
      <SearchBar placeholder="Search for TV Shows" searchPath="search/tv" />
      {data ? (
        <div className=" flex items-center flex-col gap-6 lg:flex-row lg:gap-4 lg:items-start ">
          <div className="lg:flex-1">
            <FilmImage
              src={tvSeries.poster_path}
              title={tvSeries.original_name}
            />
          </div>
          <div className="w-full gap-6 flex flex-col lg:gap-4">
            <FilmHeading
              title={tvSeries.original_name || "N/A"}
              tagline={tvSeries.tagline || "N/A"}
            />
            <FilmRating ratingNum={(tvSeries.vote_average / 2).toFixed(2)} />
            <FilmInfo
              isMovie={false}
              language={
                tvSeries.spoken_languages
                  ? tvSeries.spoken_languages[0].english_name
                  : "N/A"
              }
              firstAir={tvSeries.first_air_date}
              status={tvSeries.status}
            />
            <FilmGenres data={tvSeries.genres} isMovie={false} />
            <FilmSynopsis overview={tvSeries.overview} />
            <FilmCast credit={credit} />
            <FilmWebsite website={tvSeries.homepage || ""} />
          </div>
        </div>
      ) : (
        "Loading...."
      )}
    </section>
  );
};
export default TvSlug;

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  );

  const data = await response.json();

  const creditRes = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  );

  const creditData = await creditRes.json();

  return {
    props: {
      data,
      credit: creditData,
    },
  };
};
