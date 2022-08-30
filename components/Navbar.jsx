import Link from "next/link";
import Logo from "./icons/Logo";
import MovieIcon from "./icons/MovieIcon";
import TvIcon from "./icons/TvIcon";
import HomeIcon from "./icons/HomeIcon";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 lg:top-[1.5rem] z-50 bg-app-semi-dark-blue py-[.5rem]
       px-[1rem] flex justify-between items-center
       md:mt-[.85rem] md:mx-[.85rem] md:rounded-lg
        lg:flex-col lg:w-[4.5rem] lg:ml-[.75rem] lg:py-[1rem]
         lg:h-[90vh] lg:mt-[1.5rem] "
      aria-label="nav-bar"
    >
      {/* logo  */}
      <Link href="/" passHref>
        <a>
          <Logo />
        </a>
      </Link>

      {/* nav links  */}
      <div className="flex gap-[4.5rem] lg:flex-col lg:gap-[5rem]  ">
        <Link href="/" passHref>
          <a>
            <HomeIcon />
          </a>
        </Link>
        <Link href="/movie" passHref>
          <a>
            <MovieIcon />
          </a>
        </Link>
        <Link href="/tv" passHref>
          <a>
            <TvIcon />
          </a>
        </Link>
      </div>

      {/* profile  */}
      <div className="h-[3rem] w-[3rem]">
        <Image
          src="/assets/image-avatar.png"
          alt="profile-img"
          height="100"
          width="100"
        />
      </div>
    </nav>
  );
};
export default Navbar;
