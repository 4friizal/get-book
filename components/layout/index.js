import Head from "next/head";

import Header from "../header";
import Menu from "../menu";

export default function Layout({ headTitle, headDesc, children }) {
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={headDesc} />
        <link rel="icon" href="/icon-book.png" />
      </Head>

      <Header />
      <main className="relative md:static min-h-screen w-full flex flex-col md:block bg-white dark:bg-[#2C322B] text-black dark:text-white font-Poppins">
        {children}
        <Menu />
      </main>
    </>
  );
}
