import Header from "../header";
import Menu from "../menu";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="relative md:static min-h-screen w-full flex flex-col md:block bg-white dark:bg-[#2C322B] text-black dark:text-white font-Poppins">
        {children}
        <Menu />
      </main>
    </>
  );
}
