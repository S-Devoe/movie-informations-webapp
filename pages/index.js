import Head from "next/head";
import Image from "next/image";
import SearchBar from "../components/molecules/SearchBar";
import Collections from "../components/molecules/Collections";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movie App | TMDB API</title>
        <meta name="description" content="Movie app ctreated by Deevoe" />
        <link rel="icon" href="/favicon.ico" />
      
      </Head>

      <main className="py-[1rem] px-[1.5rem] lg:py-[1.5rem] lg:max-w-[85rem] w-full">
        <SearchBar
          placeholder="Search for Movies or TV Series"
          searchPath="search"
        />
        <div className="movie-section">
          <h2
            className="font-bold mt-4 text-app-heading-sm md:text-app-heading-md 
          tracking-wide lg:text-app-heading-lg"
          >
            Movies
          </h2>
          <Collections
            endpoint="trending"
            endpointType="movie"
            title="trending"
            subTitle="movies"
            path="/movie/trending/1"
            isHomePage={true}
            isTrending={true}
            isMovie={true}
            limit="10"
          />
          <Collections
            endpoint="movie"
            endpointType="popular"
            title="popular"
            subTitle="movies"
            path="/movie/popular/1"
            isHomePage={true}
            isMovie
            limit="6"
          />
          <Collections
            endpoint="movie"
            endpointType="now_playing"
            title="now playing"
            subTitle="movies"
            path="/movie/now-playing/1"
            isHomePage={true}
            isMovie
            limit="6"
          />
          <Collections
            endpoint="movie"
            endpointType="upcoming"
            title="upcoming"
            subTitle="movies"
            path="/movie/upcoming/1"
            isHomePage={true}
            isMovie
            limit="6"
          />
          <Collections
            endpoint="movie"
            endpointType="top_rated"
            title="top rated"
            subTitle="movies"
            path="/movie/top-rated/1"
            isHomePage={true}
            isMovie
            limit="6"
          />
        </div>
        <div className="series_section">
          <h2
            className="font-bold mt-8 md:mt-[6rem] text-app-heading-sm md:text-app-heading-md 
          tracking-wide lg:text-app-heading-lg"
          >
            Tv Series
          </h2>
          <Collections
            endpoint="trending"
            endpointType="tv"
            title="trending"
            subTitle="series"
            path="/tv/trending/1"
            isHomePage={true}
            isTrending={true}
            isMovie={false}
            limit="10"
          />
          <Collections
            endpoint="tv"
            endpointType="popular"
            title="popular"
            subTitle="series"
            path="/tv/popular/1"
            isHomePage={true}
            isMovie={false}
            limit="6"
          />
          <Collections
            endpoint="tv"
            endpointType="on_the_air"
            title="now playing"
            subTitle="series"
            path="/tv/now-playing/1"
            isHomePage={true}
            isMovie={false}
            limit="6"
          />
          <Collections
            endpoint="tv"
            endpointType="airing_today"
            title="upcoming"
            subTitle="series"
            path="/tv/upcoming/1"
            isHomePage={true}
            isMovie={false}
            limit="6"
          />
          <Collections
            endpoint="tv"
            endpointType="top_rated"
            title="top rated"
            subTitle="series"
            path="/tv/top-rated/1"
            isHomePage={true}
            isMovie={false}
            limit="6"
          />
        </div>
      </main>
    </div>
  );
}
