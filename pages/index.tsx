import Head from "next/head";
import Image from "next/image";
import towerLogo from "../public/tower-logo.svg";
import grid1 from "../public/images/tog-epk-grid-img-1.png"
import grid2 from "../public/images/tog-epk-grid-img-2.jpg"
import grid3 from "../public/images/tog-epk-grid-img-3.jpg"
import grid4 from "../public/images/tog-epk-grid-img-4.png"
import coldArtwork from "../public/images/TOG-COLD-Artwork.jpg";
import reignArtwork from "../public/images/TOG-REIGN-Artwork.jpg";
import press1 from "../public/images/tog-footer-1.png"
import press2 from "../public/images/tog-footer-2.webp"


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

      
      <section className="py-10 md:py-20">
        <div className="container mx-auto grid lg:grid-cols-2 gap-8">
          <h1 className="text-lg sm:text-3xl font-black lg:text-4xl uppercase lg:max-w-[10ch]">dystopian music for a totalitarian world</h1>
          <p className="lg:px-4">Tribe Of Ghosts are an industrial/post-metal four piece based in Brighton, UK. The band's current artistic vision came to fruition at the beginning of 2022 by combining electronic soundscapes, eclectic extreme metal influences and pop vocals with haunting and devastating effects- a brutal, dystopian soundtrack inspired by fiction such as ‘I Have No Mouth And I Must Scream’, ‘1984’, ‘The Handmaid's Tale’ and ‘Fahrenheit 451’.</p>
        </div>
        <div className="w-screen overflow-hidden">
          <div className="container mx-auto flex md:grid md:grid-cols-2 gap-8 mt-8 max-md:px-0 max-md:w-max overflow-x-auto relative">
            <div className="w-[80vw] md:w-full min-h-[400px] relative">
              <Image src={grid1} alt="Reign artwork" fill className="object-cover"/>
            </div>
            <div className="w-[80vw] md:w-full min-h-[400px] relative">
              <Image src={grid3} alt="Reign artwork" fill className="object-cover"/>
            </div>
            <div className="w-[80vw] md:w-full min-h-[400px] relative">
              <Image src={grid2} alt="Reign artwork" fill className="object-cover"/>
            </div>
            <div className="w-[80vw] md:w-full min-h-[400px] relative">
              <Image src={grid4} alt="Reign artwork" fill className="object-cover object-top"/>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-sm:px-0 pb-10 md:pb-20">
        <div className="pb-8 mx-4 sm:mx-0">
          <h1 className="text-lg sm:text-3xl font-black lg:text-4xl uppercase">Discography</h1>
        </div>
        <article className="flex flex-col justify-between gap-10 bg-[#fff] py-8 px-4 lg:flex-row lg:flex-nowrap">
          <div className="lg:max-w-md">
            <Image src={coldArtwork} alt="COLD artwork" />
          </div>
          <div className="flex flex-col justify-between">
            <div className="prose text-black">
              <h1 className="text-lg font-black lg:text-xl">COLD - MARCH 2022</h1>
              <p>Oppressive and merciless, COLD tells the story of a dystopian society being battery-farmed into submission. The method in question: organ harvesting.</p>
              <p>Being the first single of the band's current artistic vision, COLD is the statement of Tribe Of Ghost's intent to never cease creating vicious and uncompromising music.</p>
            </div>
            <iframe
              className="width-full mt-8 h-[120px] border-0"
              style={{ border: 0, width: "100%", height: "120px" }}
              src="https://bandcamp.com/EmbeddedPlayer/track=2062379417/size=large/bgcol=fff/linkcol=333333/tracklist=false/artwork=none/transparent=true/"
              seamless
            ></iframe>
          </div>
        </article>
        <article className="flex flex-col justify-between gap-10 border-t border-t-white py-8 px-4  lg:flex-row-reverse lg:flex-nowrap">
          <div className="lg:max-w-md">
            <Image src={reignArtwork} alt="Reign artwork" />
          </div>
          <div className="flex flex-col justify-between">
            <div className="prose prose-invert">
              <h1 className="text-lg font-black lg:text-xl">REIGN - JUNE 2022</h1>
              <p>Picking up from where the harrowing conclusion of COLD left off, REIGN is the anthem of surrender and defeat. Tribe of Ghost’s 2nd single of 2022 tells the story of a totalitarian society on the brink of collapse, coinciding with a cataclysmic storm. </p>
              <p>In the early stages of writing, REIGN was originally a melancholic post-metal anthem. But, during pre-production, the song mutated into a dystopian power-ballad, notably by the addition of an orchestra of synthesisers, now a key element in Tribe of Ghost's creative palette.</p>
            </div>
            <iframe
              className="width-full mt-8 h-[120px] border-0"
              style={{ border: 0, width: "100%", height: "120px" }}
              src="https://bandcamp.com/EmbeddedPlayer/track=1975193543/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=none/transparent=true/"
              seamless
            ></iframe>
          </div>
        </article>
      </section>

      <section className="container mx-auto max-sm:px-0">
        <div className="pt-10 md:pt-20 pb-8 mx-0 bg-[#fff]">
          <h1 className="text-lg sm:text-3xl font-black lg:text-4xl uppercase lg:text-right text-black px-4">Press</h1>
        </div>
        <div className="flex flex-col justify-between gap-10 bg-[#fff] py-8 px-4 lg:flex-row lg:flex-nowrap items-start relative">
          <div className="lg:sticky lg:top-8 max-w-md">
            <Image src={press1} alt="Reign artwork" className="pr-10"/>
            <Image src={press2} alt="Reign artwork" className="pl-10 -translate-y-[50px]"/>
          </div>
          <div className="flex flex-col pb-20">
            <article className="prose text-black lg:pt-20">
              <p>"...their art peers into what could be a not-too-distant future with crushing riffs, technically impressive instrumentation and a dual vocal attack."</p>
              <h1 className="text-base">Matt Nobel Midlands Metalheads</h1>
              <a href="https://mmhradio.co.uk/10-unmissable-bands-on-bloodstock-2022s-smaller-stages/" target="_blank" rel="noopener noreferrer" className="border py-2 px-4 no-underline mt-8 inline-block">Read article</a>
            </article>
            <article className="prose text-black pt-20">
              <p>"...their own brand of Alt Metal is hard to pin down and even more thrilling for that very point"</p>
              <h1 className="text-base">Metal Talk</h1>
              <a href="https://www.metaltalk.net/bloodstock-2022-mercyful-fate-off-hiatus-and-totally-mesmerising.php" target="_blank" rel="noopener noreferrer" className="border py-2 px-4 no-underline mt-8 inline-block">Read article</a>
            </article>
            <article className="prose text-black pt-20">
              <p>"A complex piece of art with intricately placed components that are designed to keep you on your toes"</p>
              <h1 className="text-base">Rock Out Stand Out</h1>
              <a href="https://rockoutstandout.com/2022/06/19/single-review-tribe-of-ghosts-cold/" target="_blank" rel="noopener noreferrer" className="border py-2 px-4 no-underline mt-8 inline-block">Read article</a>
            </article>
            <article className="prose text-black pt-20">
              <p>"It is only a matter of time before Tribe of Ghosts is one of the biggest names in the UK metal circuit"</p>
              <h1 className="text-base">Amelia Vandergast A&R Factory</h1>
              <a href="https://www.anrfactory.com/tribe-of-ghosts-wake-the-subjugated-in-their-industrial-post-metal-debut-single-cold/" target="_blank" rel="noopener noreferrer" className="border py-2 px-4 no-underline mt-8 inline-block">Read article</a>
            </article>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-sm:px-0 py-10 lg:py-20">
        <div className="pb-8 mx-4 sm:mx-0">
          <h1 className="text-lg sm:text-3xl font-black lg:text-4xl uppercase">Featured Shows</h1>
        </div>
        <article className="flex flex-col justify-between gap-10 border-t border-t-white py-8 px-4  lg:flex-row-reverse lg:flex-nowrap lg:items-start">
          <div className="hidden lg:block lg:max-w-md">
            <Image src={towerLogo} alt="Reign artwork" className="max-w-[200px] opacity-10 brightness-[1000]" />
          </div>
          <div className="max-w-lg lg:mt-10">
            <div className="relative mt-10">
              <div className="absolute left-0 top-2 w-[4px] rounded h-[calc(100%-1.3em)] bg-white opacity-50"></div>
              <div className="ml-6">
                <span className="mb-2 inline-block text-blue text-md tracking-[0.2em] font-bold uppercase leading-none relative before:absolute before:top-1 before:-left-[1.875rem] before:block before:w-4 before:h-4 before:rounded-full before:bg-white">June 2022</span>
                <p className="mb-4">Winners of Metal 2 the Masses Brighton Final</p>
              </div>
              <div className="ml-6">
                <span className="mb-2 inline-block text-blue text-md tracking-[0.2em] font-bold uppercase leading-none relative before:absolute before:top-1 before:-left-[1.875rem] before:block before:w-4 before:h-4 before:rounded-full before:bg-white">August 2022</span>
                <p className="mb-4">Bloodstock Openair 2022</p>
              </div>
              <div className="ml-6">
                <span className="mb-2 inline-block text-blue text-md tracking-[0.2em] font-bold uppercase leading-none relative before:absolute before:top-1 before:-left-[1.875rem] before:block before:w-4 before:h-4 before:rounded-full before:bg-white">September 2022</span>
                <p className="mb-4">Headline Show + DROWND - The Hope & Ruin, Brighton</p>
              </div>
              <div className="ml-6">
                <span className="mb-2 inline-block text-blue text-md tracking-[0.2em] font-bold uppercase leading-none relative before:absolute before:top-1 before:-left-[1.875rem] before:block before:w-4 before:h-4 before:rounded-full before:bg-white">November 2022</span>
                <p className="">MACHINE FEST, The Black Prince, Northampton</p>
                <p className="mb-4">Headline Show - Six Six METAL Fest, Six Six Bar, Cambridge</p>
              </div>
            </div>

            <h2 className="text-lg font-black lg:text-xl uppercase mt-20 mb-6 ml-6">Upcoming Shows</h2>

            <div className="relative">
              <div className="absolute left-0 top-2 w-[4px] rounded h-[calc(100%-1.3em)] bg-transparent border border-1 opacity-50"></div>
              <div className="ml-6">
                <span className="mb-2 inline-block text-blue text-md tracking-[0.2em] font-bold uppercase leading-none relative before:absolute before:top-1 before:-left-[1.875rem] before:block before:w-4 before:h-4 before:rounded-full before:bg-black before:border before:border-white">11 Februry 2023</span>
                <p className="mb-4">Headline Show - The Green Door Store, Brighton</p>
              </div>
              <div className="ml-6">
                <span className="mb-2 inline-block text-blue text-md tracking-[0.2em] font-bold uppercase leading-none relative before:absolute before:top-1 before:-left-[1.875rem] before:block before:w-4 before:h-4 before:rounded-full before:bg-black before:border before:border-white">17 Februry 2023</span>
                <p className="mb-4">Headline Show - Club 85, Hitchin</p>
              </div>
              <div className="ml-6">
                <span className="mb-2 inline-block text-blue text-md tracking-[0.2em] font-bold uppercase leading-none relative before:absolute before:top-1 before:-left-[1.875rem] before:block before:w-4 before:h-4 before:rounded-full before:bg-black before:border before:border-white">28 April 2023</span>
                <p className="mb-4">The Night Before UPRISING, Firebug, Leicester</p>
              </div>
              <div className="ml-6">
                <span className="mb-2 inline-block text-blue text-md tracking-[0.2em] font-bold uppercase leading-none relative before:absolute before:top-1 before:-left-[1.875rem] before:block before:w-4 before:h-4 before:rounded-full before:bg-black before:border before:border-white">10 August 2023</span>
                <p className="mb-4">Bloodstock Openair 2023 - Sophie Lancaster Stage</p>
              </div>
              <div className="ml-6">
                <span className="mb-2 inline-block text-blue text-md tracking-[0.2em] font-bold uppercase leading-none relative before:absolute before:top-1 before:-left-[1.875rem] before:block before:w-4 before:h-4 before:rounded-full before:bg-black before:border before:border-white">MORE SHOWS TBA</span>
              </div>
            </div>
            
          </div>
        </article>
      </section>
    </div>
  );
}
