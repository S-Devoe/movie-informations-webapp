const FilmInfo = ({
  isMovie,
  length,
  language,
  year,
  status,
  firstAir,
  lastAir,
}) => {
  const renderYear = (year) => {
    return year.substring(0, 4);
  };
  return (
    <div>
      {isMovie ? (
        <div className="flex gap-4 flex-wrap justify-between items-center text-sm lg:w-10/12 lg:text-lg">
          <div className="length">
            <h2 className="mb-1 text-app-placeholder">Length</h2>
            <h3 className="text-app-pure-white">{length} min</h3>
          </div>
          <div className="language">
            <h2 className="mb-1 text-app-placeholder">Language</h2>
            <h3 className="text-app-pure-white">{language}</h3>
          </div>
          <div className="year">
            <h2 className="mb-1 text-app-placeholder">Year</h2>
            <h3 className="text-app-pure-white">
              {year ? renderYear(year) : "N/A"}
            </h3>
          </div>
          <div className="status">
            <h2 className="mb-1 text-app-placeholder">Status</h2>
            <h3 className="text-app-pure-white">{status ? status : "N/A"}</h3>
          </div>
        </div>
      ) : (
        <div className=" flex gap-4 flex-wrap items-center justify-between md:justify-around lg:justify-between text-sm lg:w-10/12 lg:text-lg">
          <div className="language">
            <h2 className="mb-1 text-app-placeholder">Language</h2>
            <h3 className="text-app-pure-white">{language}</h3>
          </div>
          <div className="language">
            <h2 className="mb-1 text-app-placeholder">First Air</h2>
            <h3 className="text-app-pure-white">
              {firstAir ? renderYear(firstAir) : "N/A"}
            </h3>
          </div>
          <div className="year">
            <h2 className="mb-1 text-app-placeholder">Last Air</h2>
            <h3 className="text-app-pure-white">
              {lastAir ? renderYear(year) : "N/A"}
            </h3>
          </div>
          <div className="status">
            <h2 className="mb-1 text-app-placeholder">Status</h2>
            <h3 className="text-app-pure-white">{status ? status : "N/A"}</h3>
          </div>
        </div>
      )}
    </div>
  );
};
export default FilmInfo;
