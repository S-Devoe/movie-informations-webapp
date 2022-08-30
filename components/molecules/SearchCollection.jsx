import { useEffect, useState } from "react";
import GeneralCard from "../cells/GeneralCard";
import Heading from "../cells/Heading";
import Loading from "../cells/Loading";

const SearchCollection = ({ data, slug }) => {
  // this is to remove the 'person' media type (it is causing a strange bug)
  const filterResult = data.results.filter(
    (item) => item.media_type !== "person"
  );

  console.log(data);

  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    setSearchedData(filterResult);
    // eslint-disable-next-line
  }, [data]);

  return (
    <>
      {data ? (
        <div className="mt-[.5rem]">
          <Heading
            title2={`Found ${data.total_results} results for '${slug}' `}
          />
          <div className="search-card-collection-wrapper mt-[.5rem] w-full">
            {searchedData.map((item, index) => (
              <div key={index} className={``}>
                <GeneralCard
                  item={item}
                  isMovie={item.media_type === "movie" ? true : false}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="my-4 w-full">
          <Loading />
        </div>
      )}
    </>
  );
};
export default SearchCollection;
