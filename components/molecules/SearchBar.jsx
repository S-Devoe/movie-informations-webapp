import { useState } from "react";
import { useRouter } from "next/router";
import SearchIcon from "../icons/SearchIcon";

const SearchBar = ({ placeholder, searchPath }) => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 0) {
      router.push(`/${searchPath}/${value.trim()}?page=1`);
      setValue("");
    }
  };

  return (
    <section className=" searchbar w-full flex items-center pb-4 md:pb-10 lg:mt-9">
      <form className="w-full flex items-center" onSubmit={handleSubmit}>
        <SearchIcon className="h-6 w-6 md:h-8 md:w-8" />
        <input
          className="md:heading-md md:placeholder:heading-md
          mx-4 w-full rounded-none border-b border-app-dark-blue
           bg-app-dark-blue pb-[8px] text-base font-light
            caret-app-red placeholder:text-base
           placeholder:text-app-placeholder 
           focus:border-b focus:border-app-greyish-blue focus:outline-none"
          type="text"
          value={value}
          onChange={(e) => handleChange(e)}
          placeholder={placeholder}
          required
        />
        <button
          type="submit"
          className="button text-capitalize flex items-center justify-center 
      rounded-lg bg-app-greyish-blue py-2 px-3 text-xs
       text-app-pure-white hover:bg-app-pure-white hover:text-app-dark-blue"
        >
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchBar;
