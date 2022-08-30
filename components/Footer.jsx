import Image from "next/image";

const Footer = () => {
  return (
    <section className="flex py-[1.5rem] flex-col justify-center items-center">
      <h4 className='text-app-body-sm text-app-greyish-blue'>Powered By</h4>
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
