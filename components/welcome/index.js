import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Welcome() {
  const router = useRouter();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  });
 
  return (
    <div className="flex min-h-screen flex-col justify-center dark:bg-[#2C322B]">
      <img
        className="mx-auto mt-20 w-[200px] md:mt-40 md:w-[400px] lg:mt-7"
        src="https://cdn.discordapp.com/attachments/929013677045194802/1003923645590163506/unknown.png"
        alt="icon"
      />
      <img
        className="mx-auto w-[290px] md:w-[400px] lg:w-[300px]"
        src="https://cdn.discordapp.com/attachments/929013677045194802/1004004222070702161/book-people.png"
        alt="book"
      />
      <h1 className="text-center dark:text-white font-Roboto font-semibold text-3xl my-7 md:text-7xl lg:my-4 lg:text-6xl">
        Hello !
      </h1>
      {/* button */}
      <Link href="/auth/login">
        <a className="mx-auto  text-white font-Roboto font-medium bg-[#25732D] py-2 px-32 rounded-3xl shadow-lg md:text-2xl md:py-3 md:px-44 dark:shadow-md dark:shadow-white/40">
          Sign in
        </a>
      </Link>
      <Link href="/auth/register">
        <a className="mt-5 mb-20 mx-auto  text-[#25732D] font-Roboto font-medium bg-white py-2 px-32 rounded-3xl shadow-lg md:text-2xl md:py-3 md:px-44 lg:mb-3 lg:py-2 dark:shadow-md dark:shadow-white/40">
          Sign up
        </a>
      </Link>
    </div>
  );
}
