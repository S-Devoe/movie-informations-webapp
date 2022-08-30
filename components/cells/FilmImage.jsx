import Image from "next/image";
import { imageShimmer, toBase64 } from "../../utils";

const FilmImage = ({ src, title }) => {
  return (
    <div className="poster-image rounded-lg relative  md:w-[25rem] ">
      <Image
        src={`https://image.tmdb.org/t/p/original/${src}`}
        width={350}
        height={530}
        quality="100"
        alt={title}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          imageShimmer(240, 475)
        )}`}
        className="rounded-lg"
        unoptimized={true}
      />
    </div>
  );
};
export default FilmImage;
