import { useEffect, useState } from "react";
import Head from "next/head";
import Pagination from "../../components/molecules/Pagination";
import SearchBar from "../../components/molecules/SearchBar";
import SearchCollection from "../../components/molecules/SearchCollection";

const SearchPage = ({ data, page, slug }) => {
  const lastPage = Number(data.total_pages);
  let currentPage = Number(page);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  // console.log(currentPage, slug, lastPage);

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
        placeholder="Search for Movies or TV Series"
        searchPath="search"
      />
      <SearchCollection data={data} slug={slug} />
      <div className="flex justify-center mt-[2rem] ">
        <Pagination
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          pageNum={currentPage}
          prevPage={() => currentPage - 1}
          nextPage={() => currentPage + 1}
          prevPath={`/search/${slug}?page=${currentPage - 1}`}
          nextPath={`/search/${slug}?page=${currentPage + 1}`}
          lastPage={lastPage}
        />
      </div>
    </section>
  );
};
export default SearchPage;

// getServerSideProps
export async function getServerSideProps(context) {
  const { slug, page } = context.query;
  //   console.log(slug, "+", page);

  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${slug}&page=${page}&include_adult=true`
  );
  const data = await response.json();
  console.log(data);

  return {
    props: { data, slug, page }, // will be passed to the page component as props
  };
}
