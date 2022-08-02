import Link from "next/link";

export default function Welcome() {
  return (
    <div className="flex flex-col justify-center">
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
      <h1 className="text-center font-Roboto font-semibold text-3xl my-7 md:text-7xl lg:my-4 lg:text-6xl">
        Hello !
      </h1>
      {/* button */}
      <Link href="/auth/login">
        <a className="mx-auto text-white font-Roboto font-medium bg-[#25732D] py-2 px-32 rounded-3xl shadow-lg md:text-2xl md:py-3 md:px-44">
          Sign in
        </a>
      </Link>
      <Link href="/auth/register">
        <a className="mt-5 mb-20 mx-auto text-[#25732D] font-Roboto font-medium bg-white py-2 px-32 rounded-3xl shadow-lg md:text-2xl md:py-3 md:px-44 lg:mb-3 lg:py-2">
          Sign up
        </a>
      </Link>
    </div>
  );
}
