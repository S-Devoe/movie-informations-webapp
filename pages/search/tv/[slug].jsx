import { useEffect, useState } from "react";
import Head from "next/head";
import SearchCollection from "../../../components/molecules/SearchCollection";
import Pagination from "../../../components/molecules/Pagination";
import SearchBar from "../../../components/molecules/SearchBar";
import Heading from "../../../components/cells/Heading";
import GeneralCard from "../../../components/cells/GeneralCard";

const SearchTvSeries = ({ data, page, slug }) => {
  const lastPage = Number(data.total_pages);
  let currentPage = Number(page);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  // console.log(data.results);

  useEffect(() => {
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
  }, [currentPage]);

  return (
    <section className="py-[1rem] px-[1.5rem] lg:py-[1.5rem] lg:max-w-[85rem] w-full">
      <Head>
        <title>{slug}</title>
      </Head>
      <SearchBar
        placeholder="Search for TV Series"
        searchPath="search/tv"
      />{" "}
      {data ? (
        <div className="mt-[.5rem]">
          <Heading
            title2={`Found ${data.total_results} results for '${slug}' `}
          />
          <div className="search-card-collection-wrapper mt-[.5rem] w-full">
            {data.results.map((item, index) => (
              <div key={index} className={``}>
                <GeneralCard item={item} isMovie={false} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading... </p>
      )}
      <div className="flex justify-center mt-[2rem] ">
        <Pagination
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          pageNum={currentPage}
          prevPage={() => currentPage - 1}
          nextPage={() => currentPage + 1}
          prevPath={`/search/tv/${slug}?page=${currentPage - 1}`}
          nextPath={`/search/tv/${slug}?page=${currentPage + 1}`}
          lastPage={lastPage}
        />
      </div>
    </section>
  );
};
export default SearchTvSeries;

export const getServerSideProps = async (context) => {
  const { slug, page } = context.query;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${slug}&page=${page}&include_adult=true`
  );

  const data = await res.json();

  return {
    props: { data, slug, page },
  };
};
