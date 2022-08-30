const FilmHeading = ({ title, tagline }) => {
  return (
    <div className="w-full text-center lg:text-left ">
      <h1 className="text-xl font-light  md:text-2xl lg:font-medium lg:text-4xl">{title}</h1>
      <h2 className="text-xs font-light text-app-placeholder sm:text-sm md:text-lg">
        {tagline}
      </h2>
    </div>
  );
};
export default FilmHeading;
