import Header from "../header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full bg-white dark:bg-[#2C322B] text-black dark:text-white font-Poppins">
        {children}
      </main>
    </>
  );
}
