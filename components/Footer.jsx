import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="flex py-[1.5rem] flex-wrap flex-col justify-center items-center">
      <p className="mb-4">
        Coded by{"  "}
        <Link href="https://deevoe.vercel.app" target="_blank" passHref>
          <a
            className="text-app-greyish-blue hover:underline "
            target="_blank"
          >
            DeeVoe.{" "}
          </a>
        </Link>
        UI design by&nbsp;
        <Link href="https://www.frontendmentor.io/" target="_blank" passHref>
          <a className="text-app-greyish-blue" target="_blank">
             Frontend Mentor.
          </a>
        </Link>
      </p>
      <h4 className="text-app-body-sm text-app-greyish-blue">Powered By</h4>
      <div className=" relative h-[2rem] w-[9rem] ">
        <Image
          src="/assets/icon-tmdb-long.svg"
          alt="tmdb"
          height="100"
          width="500"
        />
      </div>
    </section>
  );
};
export default Footer;
