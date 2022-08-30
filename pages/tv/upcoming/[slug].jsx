import { useEffect, useState } from "react";
import GeneralCard from "../../../components/cells/GeneralCard";
import Heading from "../../../components/cells/Heading";
import Pagination from "../../../components/molecules/Pagination";
import SearchBar from "../../../components/molecules/SearchBar";

const UpcomingSeries = ({ data, page }) => {
  const lastPage = Number(data.total_pages);
  let currentPage = Number(page);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const [series, SetSeries] = useState([]);
  useEffect(() => {
    SetSeries(data.results);

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
    <section className="py-[1rem] px-[1.5rem] md:px-[3rem] lg:py-[1.5rem] lg:max-w-[85rem] w-full">
      <SearchBar placeholder="Search for Tv shows" searchPath="search/tv" />
      <Heading isHomePage={false} title2="Upcoming TV Shows" />
      <div className="card-collection-wrapper mt-[.5rem] w-full">
        {series.map((show, index) => (
          <div key={index} className={`card-${index}`}>
            <GeneralCard item={show} isMovie={false} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[2.25rem]">
        <Pagination
          prevPath={`/tv/upcoming/${currentPage - 1}`}
          nextPath={`/tv/upcoming/${currentPage + 1}`}
          prevPage={() => currentPage - 1}
          nextPage={() => currentPage + 1}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          pageNum={currentPage}
          lastPage={lastPage}
        />
      </div>
    </section>
  );
};
export default UpcomingSeries;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&page=${slug}`
  );

  const data = await res.json();

  return {
    props: { data, page: slug },
  };
};
