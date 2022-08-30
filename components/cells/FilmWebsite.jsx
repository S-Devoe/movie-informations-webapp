import Link from "next/link";

const FilmWebsite = ({ website }) => {
  return (
    <button>
      <Link href={website} target="_blank" passHref>
        <a
          target="_blank"
          className="flex w-[12rem] md:mt-[1.5rem] flex-row-reverse gap-5 items-center 
          justify-center text-[.89rem] bg-app-greyish-blue 
           px-[2.5rem] py-[.85rem] rounded-lg font-semibold "
        >
          <span>
            <svg
              className="h-[1.2rem] w-[1.2rem] "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"
                fill="currentColor"
              />
            </svg>
          </span>
          Website
        </a>
      </Link>
    </button>
  );
};
export default FilmWebsite;
