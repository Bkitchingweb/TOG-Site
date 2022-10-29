import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Nikkyou-Sans.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-black text-white">
        {children}
      </main>
      <Footer />
    </>
  );
}
