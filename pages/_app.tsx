import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import type { AppProps } from "next/app";
import Head from "next/head";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
};

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Nikkyou-Sans.woff"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Navbar />
      <motion.main
        key={router.route}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
        className="flex min-h-screen flex-col"
      >
        <Component {...pageProps} />
      </motion.main>
      <Footer />
    </>
  );
}
