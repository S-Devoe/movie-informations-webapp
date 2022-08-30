import { useEffect, useState } from "react";
import GeneralCard from "../../../components/cells/GeneralCard";
import Pagination from "../../../components/molecules/Pagination";
import SearchBar from "../../../components/molecules/SearchBar";
import SearchCollection from "../../../components/molecules/SearchCollection";

const MovieGenreType = ({ data, page, name, id }) => {
  const lastPage = Number(data.total_pages);
  let currentPage = Number(page);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
//   console.log(currentPage, id, lastPage);

  const [genreData, setGenreData] = useState([]);
  useEffect(() => {
    setGenreData(data.results);

    if (currentPage === 1) {
      setIsFirstPage(true);
    }
    if (currentPage > 1) {
      setIsFirstPage(false);
    }

    if (currentPage === lastPage) {
      setIsLastPage(true);
    }
    if (currentPage < lastPage) {
      setIsLastPage(false);
    }
    // eslint-disable-next-line
  }, [data]);


  return (
    <section className="py-[1rem] px-[1.5rem] lg:py-[1.5rem] lg:max-w-[85rem] w-full">
      <SearchBar
        placeholder="Search for Movies or TV Series"
        searchPath="search/movie"
      />
      <h2 className="font-semibold text-[1rem] md:text-[1.5rem] pb-[1rem] lg:mt-[-1.5rem] ">
        {name}
      </h2>
      <div className="card-collection-wrapper">
        {genreData.map((item, index) => (
          <div key={index} className="">
            <GeneralCard item={item} isMovie={true} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[4rem] ">
        <Pagination
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          pageNum={currentPage}
          prevPage={() => currentPage - 1}
          nextPage={() => currentPage + 1}
          prevPath={`/movie/genre/${id}/?name=${name}&page=${currentPage - 1}`}
          nextPath={`/movie/genre/${id}/?name=${name}&page=${currentPage + 1}`}
          lastPage={lastPage}
        />
      </div>
    </section>
  );
};
export default MovieGenreType;

export const getServerSideProps = async (context) => {
  //   console.log(context);
  const { name, id, page } = context.query;
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}&with_genres=${id}`
  );

  const data = await response.json();
  console.log(data);

  return {
    props: { data, name, page, id },
  };
};
