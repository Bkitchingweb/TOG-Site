import Head from "next/head";
import Image from "next/image";
import coldArtwork from "../public/images/TOG-COLD-Artwork.jpg";
import reignArtwork from "../public/images/TOG-REIGN-Artwork.jpg";

export default function Music() {
  return (
    <div className="">
      <Head>
        <title>Music - TOG</title>
        <meta
          name="description"
          content="combining electronic soundscapes, eclectic extreme metal influences and pop vocals with haunting and devastating effects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <div className="py-4 text-xl font-black uppercase leading-none md:text-[10vw]">
          <h1 className="">Music</h1>
        </div>
        <article className="flex flex-col justify-between gap-10 border-t border-t-white py-4 lg:flex-row-reverse lg:flex-nowrap">
          <div className="lg:max-w-md">
            <Image src={reignArtwork} alt="Reign artwork" />
          </div>
          <div className="prose prose-invert flex flex-col">
            <h1 className="text-lg font-black lg:text-xl">REIGN</h1>
            <p className="">
              Picking up from where the harrowing conclusion of COLD left off,
              REIGN is the anthem of surrender and defeat. Tribe of Ghost’s 2nd
              single of 2022 tells the story of a totalitarian society on the
              brink of collapse, coinciding with a cataclysmic storm.
            </p>
            <iframe
              className="width-full my-auto h-[120px] border-0"
              style={{ border: 0, width: "100%", height: "120px" }}
              src="https://bandcamp.com/EmbeddedPlayer/track=1975193543/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=none/transparent=true/"
              seamless
            ></iframe>
          </div>
        </article>
        <article className="flex flex-col justify-between gap-10 border-t border-t-white py-4 lg:flex-row-reverse lg:flex-nowrap">
          <div className="lg:max-w-md">
            <Image src={coldArtwork} alt="COLD artwork" />
          </div>
          <div className="prose prose-invert flex flex-col">
            <h1 className="text-lg font-black lg:text-xl">COLD</h1>
            <p className="">
              Tribe Of Ghosts first single COLD will be released on the 25th of
              March 2022, The track combines all of our musical and creative
              influences to create the soundtrack for a society being battery
              farmed into submission, where each person is harvested until their
              last breath to feed the elite and the depraved.
            </p>
            <iframe
              className="width-full my-auto h-[120px] border-0"
              style={{ border: 0, width: "100%", height: "120px" }}
              src="https://bandcamp.com/EmbeddedPlayer/track=2062379417/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=none/transparent=true/"
              seamless
            ></iframe>
          </div>
        </article>
      </div>
    </div>
  );
}
