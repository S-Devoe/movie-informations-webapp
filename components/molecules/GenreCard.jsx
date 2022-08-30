import Link from "next/link";

const GenreCard = ({ data, pathName}) => {
  return (
    <div>
      <div className=" genre-card-section">
        {data.map((item, index) => (
          <Link
            key={item.id}
            href={`/${pathName}/genre/${item.id}?name=${item.name}&page=1`}
            as={""}
          >
            <a
              className={`genre-card-${index} card-hover-animation bg-teal-700
                  flex h-[5rem] md:h-[10rem] w-full grow items-center
                 justify-center rounded-lg p-8 text-center
                  text-xl font-medium`}
            >
              <div>{item.name}</div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default GenreCard;
