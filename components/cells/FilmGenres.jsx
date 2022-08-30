import Link from "next/link";
import { useEffect, useState } from "react";

const FilmGenres = ({ data, isMovie }) => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    setGenre(data);
  }, [data]);

  console.log(genre.length);

  return (
    <div className="flex-col w-full">
      <h3 className="text-[1.25rem] font-semibold ">Genres</h3>
      <div className="flex gap-4 items-center jusb mt-2 ">
        {genre.length >= 1 ? (
          genre.map((item, index) => (
            <button
              key={index}
              className="bg-app-pure-white text-app-dark-blue px-[1rem] py-[.25rem] rounded"
            >
              <Link
                href={
                  isMovie
                    ? `/movie/genre/${item.id}?name=${item.name}&page=1`
                    : `/tv/genre/${item.id}?name=${item.name}&page=1`
                }
              >
                {item.name}
              </Link>
            </button>
          ))
        ) : (
          <p>N/A</p>
        )}
      </div>
    </div>
  );
};
export default FilmGenres;
