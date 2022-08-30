const FilmSynopsis = ({ overview }) => {
  return (
    <div className="mt-4">
      <h3 className="font-semibold text-[1.25rem]">Synopsis</h3>
      <p className="text-app-grey text-[.99rem] mt-2  ">{overview ?  overview : "N/A"}</p>
    </div>
  );
};
export default FilmSynopsis;
