import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Custom404 = () => {
  const router = useRouter();
  const [counter, setCounter] = useState(6);
  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1500);
    } else {
      router.push("/");
    }
  });



  return (
    <div className="my-10 flex flex-col items-center justify-center">
      <Head>
        <title>404 - Not Found | Entertainment App</title>
      </Head>
      <h1 className="mt-20 text-xl md:text-4xl">404 - Page Not Found</h1>

      <p className="font-medium text-[2.5rem] flex gap-3 flex-col items-center justify-center md:flex-row md:text-[5rem] my-[3rem] ">
        <span className="capitalize text-[1rem] lg:text-[3rem]">
          go back home in{" "}
        </span>
        <span> {counter}</span>
      </p>
      <Link href="/" passHref>
        <button className="rounded-md bg-app-greyish-blue p-2 px-4 hover:bg-app-pure-white hover:text-app-dark-blue">
          Go home
        </button>
      </Link>
    </div>
  );
};
export default Custom404;
