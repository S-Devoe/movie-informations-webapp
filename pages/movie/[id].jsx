import { useEffect, useState } from "react";
import FilmCast from "../../components/cells/FilmCast";
import FilmGenres from "../../components/cells/FilmGenres";
import FilmHeading from "../../components/cells/Filmheading";
import FilmImage from "../../components/cells/FilmImage";
import FilmInfo from "../../components/cells/FilmInfo";
import FilmRating from "../../components/cells/FilmRating";
import FilmSynopsis from "../../components/cells/FilmSynopsis";
import FilmWebsite from "../../components/cells/FilmWebsite";
import SearchBar from "../../components/molecules/SearchBar";
import Head from "next/head";

const MovieSlug = ({ data, credit }) => {
  const [movie, setMovie] = useState({});
  console.log(data)

  useEffect(() => {
    setMovie(data);
  }, [data]);

  return (
    <>
      <Head>
        <title>{movie.original_title}</title>
      </Head>
      <section className="py-[1rem] px-[1.5rem] md:px-[3rem] lg:py-[1.5rem] lg:max-w-[85rem] w-full">
        <SearchBar placeholder="Search for Movies" searchPath="search/movie" />
        {data ? (
          <div className=" flex items-center flex-col gap-6 lg:flex-row lg:gap-4 lg:items-start ">
            <div className="lg:flex-1">
              <FilmImage src={movie.poster_path} title={movie.original_name} />
            </div>
            <div className="w-full gap-6 flex flex-col lg:gap-4">
              <FilmHeading
                title={movie.original_title || "N/A"}
                tagline={movie.tagline || "N/A"}
              />
              <FilmRating ratingNum={(movie.vote_average / 2).toFixed(2)} />
              <FilmInfo
                isMovie={true}
                language={
                  movie.spoken_languages == true
                    ? movie.spoken_languages[0].name
                    : "N/A"
                }
                length={movie.runtime ? movie.runtime : "N/A"}
                year={movie.release_date}
                status={movie.status}
              />
              <FilmGenres data={movie.genres} isMovie={true} />
              <FilmSynopsis overview={movie.overview} />
              <FilmCast credit={credit} />
              <FilmWebsite website={movie.homepage || ""} />
            </div>
          </div>
        ) : (
          "Loading...."
        )}
      </section>
    </>
  );
};
export default MovieSlug;

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  );

  const data = await response.json();

  const creditRes = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  );

  const creditData = await creditRes.json();
  return {
    props: {
      data,
      credit: creditData,
    },
  };
};
