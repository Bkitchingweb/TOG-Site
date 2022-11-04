import Head from "next/head";
import Image from "next/image";
import towerLogo from "../public/tower-logo.svg";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>TRIBE OF GHOSTS</title>
        <meta
          name="description"
          content="Dystopian Music for a Totalitarian World"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto flex h-[calc(100vh-57px)] items-center justify-center py-20 lg:max-w-md">
        <Image src={towerLogo} alt="Reign artwork" className="h-full" />
      </div>

      <div className="container mx-auto ">
        <h1 className="text-lg lg:text-xl">Tribe of Ghosts</h1>
      </div>
    </div>
  );
}
