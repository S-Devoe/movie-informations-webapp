import { useEffect, useState } from "react";

const FilmCast = ({ credit }) => {
  // console.log(credit);

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(credit.cast);
  }, [credit]);

  return (
    <div>
      <h2 className="text-[1.25rem] font-semibold mb-4">Casts</h2>
      {data ? (
        <div className=" flex gap-2 flex-wrap">
          {data.map((item, index) => (
            <h3
              key={index}
              className="px-[.45rem] py-[.25rem] border-2 border-app-pure-white rounded-lg"
            >
              {item.length > 0 ? item.name : "N/A"}
            </h3>
          ))}
        </div>
      ) : (
        <p>Error Occured</p>
      )}
    </div>
  );
};
export default FilmCast;
