import Link from "next/link";

const Pagination = ({
  nextPath,
  prevPath,
  isFirstPage,
  isLastPage,
  pageNum,
  prevPage,
  nextPage,
  lastPage,
}) => {
  return (
    <div className="flex items-center ">
      <Link href={prevPath} as={prevPath}>
        <a>
          <button
            onClick={prevPage}
            disabled={isFirstPage ? true : false}
            type="button"
            className="flex items-center justify-center rounded-lg rounded-r-none border-2 
          py-2 pl-4 pr-6 font-medium hover:bg-app-pure-white hover:text-app-dark-blue capitalize "
          >
            prev
          </button>
        </a>
      </Link>
      <p
        className="border-t-2 border-b-2 bg-app-pure-white py-2 px-4
       text-app-dark-blue"
      >
        {`Page ${pageNum} of ${lastPage === 0 ? 1 : lastPage}`}
      </p>
      <Link href={nextPath} as={nextPath}>
        <a>
          <button
            onClick={nextPage}
            disabled={isLastPage || lastPage === 0 ? true : false}
            type="button"
            className="flex items-center justify-center rounded-lg rounded-l-none border-2 
          py-2 pl-4 pr-6 font-medium hover:bg-app-pure-white hover:text-app-dark-blue capitalize "
          >
            next
          </button>
        </a>
      </Link>
    </div>
  );
};
export default Pagination;
