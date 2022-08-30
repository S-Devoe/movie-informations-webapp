import Link from "next/link";

const Heading = ({ path, isHomePage, subTitle, title, title2, isMovie }) => {
  return (
    <div>
      {isHomePage ? (
        <div className="flex justify-between items-center w-full ">
          <div className="left flex gap-4 items-center">
            <h2 className="capitalize text-app-heading-sm md:text-app-heading-md lg:text-app-heading-lg ">
              {title}
            </h2>
            <span
              className={
                isMovie
                  ? `ml-1 mt-[.5rem] rounded-md border-2 py-px px-2 text-[8px] font-medium uppercase tracking-wider text-app-pure-white sm:ml-4 sm:text-[10px] `
                  : `ml-2 mt-[.5rem] rounded-md border-2 border-app-pure-white bg-app-pure-white py-px px-2 text-[8px] font-medium uppercase tracking-wider text-app-dark-blue sm:ml-4 sm:text-[10px]`
              }
            >
              {subTitle}
            </span>
          </div>

          <div className="right">
            <Link href={path} passHref>
              <a className="cursor-pointer text-xs font-medium uppercase tracking-wide text-app-greyish-blue hover:underline ">
                see more
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <div className="font-light mb-[.85rem] text-xl md:text-2xl lg:text-3xl">
          <h2>{title2}</h2>
        </div>
      )}
    </div>
  );
};
export default Heading;
