import Image from "next/image";

import emailIcon from "../public/images/icon-gmail.svg"
import instaIcon from "../public/images/icon-instagram.svg"
import fbIcon from "../public/images/icon-facebook.svg"

export default function Footer() {
  return (
    <footer id="contact" className="container mx-auto max-sm:px-0">
        <div className="pt-20 pb-8 lg:mx-4 sm:mx-0 bg-[#fff]">
          <h1 className="text-lg sm:text-3xl font-black lg:text-4xl uppercase text-black px-4">Contact</h1>
        </div>
        <div className="flex flex-col justify-between gap-10 bg-[#fff] px-4 lg:flex-row lg:flex-nowrap items-start relative text-black pb-20">
          <a href="mailto:tribeofghostsuk@gmail.com" className="flex items-center font-black">
            <Image src={emailIcon} alt="email Icon" className="mr-2"/>
            tribeofghostsuk@gmail.com
          </a>
          <a href="https://www.instagram.com/tribeofghostsband/" target="_blank" rel="noopener noreferrer" className="flex items-center font-black">
            <Image src={instaIcon} alt="Instagram Icon" className="mr-2"/>
            @tribeofghostsband
          </a>
          <a href="https://www.facebook.com/tribeofghostsUK/" target="_blank" rel="noopener noreferrer" className="flex items-center font-black">
            <Image src={fbIcon} alt="Facebook Icon" className="mr-2"/>
            /tribeofghostsUK
          </a>
          <div className="flex">
          </div>
        </div>
      </footer>
  );
}
