import { useEffect, useState } from "react";
import GenreCard from "../../components/molecules/GenreCard";
import SearchBar from "../../components/molecules/SearchBar";

const MoviePage = ({ genres }) => {
  const [genresData, setGenresData] = useState([]);

  useEffect(() => {
    setGenresData(genres);
  }, [genres]);

  return (
    <section className="py-[1rem] px-[1.5rem] lg:py-[1.5rem] lg:max-w-[85rem] w-full">
      <SearchBar placeholder="Search for Movies" searchPath="search/movie" />

      <GenreCard data={genresData} pathName="movie" />
    </section>
  );
};
export default MoviePage;

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  );

  const data = await response.json();

  const genres = data.genres;

  // console.log(genres)

  return {
    props: { genres },
  };
};
