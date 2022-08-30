import { useEffect, useState } from "react";
import TrendingCard from "../cells/TrendingCard";
import Heading from "../cells/Heading";
import GeneralCard from "../cells/GeneralCard";
import Loading from "../cells/Loading";

const Collections = ({
  endpointType,
  isHomePage,
  title,
  subTitle,
  title2,
  isMovie,
  path,
  endpoint,
  isTrending,
  limit,
}) => {
  const [data, setData] = useState([]);
  const [limitData, setLimitData] = useState([]);

  // useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${endpoint}/${endpointType}/${
            isTrending ? "day" : ""
          }?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        );
        const json = await response.json();
        // console.log(json);
        setData(json.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrending();

    // eslint-disable-next-line 
  // }, []);

  

  // there are 1000 movie details coming from the API, this func fetch the first 10
  useEffect(() => {
    if (data.length >= 1) setLimitData(data.slice(0, limit));
  }, [data, limit]);

  return (
    <>
      {data ? (
        <div className="mt-[.5rem]">
          <Heading
            isHomePage={isHomePage}
            title={title}
            subTitle={subTitle}
            title2={title2}
            isMovie={isMovie}
            path={path}
          />

          {isTrending ? (
            <div className="flex gap-[1rem] overflow-hidden overflow-x-auto h-scroll">
              {limitData.map((item, index) => (
                <div key={index}>
                  <TrendingCard item={item} isMovie={isMovie} />
                </div>
              ))}
            </div>
          ) : (
            <div className="card-collection-wrapper mt-[.5rem] w-full">
              {limitData.map((item, index) => (
                <div key={index} className={`card-${index}`}>
                  <GeneralCard item={item} isMovie={isMovie} />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div
          className="my-4 w-full"
        >
          <Loading />
        </div>
      )}
    </>
  );
};
export default Collections;
