import Link from "next/dist/client/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function FormRegister() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  });

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      fullname,
      username,
      phone,
      password,
    };
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch("https://server.athaprojects.me/register", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message, data } = result;
        if (data) {
          router.push("/auth/login");
        }
        alert(message);
      })
      .catch((error) => {
        console.log(error);
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="min-h-screen dark:bg-[#2C322B]">
      <div className="flex md:pt-28 md:px-4 lg:pt-16 lg:mx-auto xl:max-w-6xl">
        {/* getbook icon || image and Hello! */}
        <div className="hidden md:block md:w-full lg:mt-10">
          <Link href="/auth/welcome">
            <img
              className="mx-auto mt-20 w-[300px] md:mt-40 lg:mt-2"
              src="https://cdn.discordapp.com/attachments/929013677045194802/1003923645590163506/unknown.png"
              alt="icon"
            />
          </Link>
          <img
            className="mx-auto w-[290px] lg:w-[360px]"
            src="https://cdn.discordapp.com/attachments/929013677045194802/1004004222070702161/book-people.png"
            alt="book"
          />
          {/* <h1 className="text-center font-Roboto font-semibold text-6xl my-7 lg:my-0 lg:text-6xl dark:text-white">
            Hello !
          </h1> */}
        </div>
        {/* form login */}
        <div className="w-full md:mr-2 lg:mr-0 lg:ml-28">
          <div className="md:mb-20 lg:mb-14">
            <h1 className="font-Roboto font-extrabold text-5xl ml-8 mt-28 md:text-6xl lg:-mt-2 dark:text-white">
              Hi!
            </h1>
            <h5 className="font-Roboto italic ml-9 text-2xl text-[#2C322B]/20 md:text-3xl dark:text-white/40">
              Create a new account
            </h5>
          </div>
          <form className="mx-4 mt-9" onSubmit={(e) => handleSubmit(e)}>
            <div>
              {/* fullname */}
              <input
                type="text"
                className="font-Roboto font-normal text-base pl-6 border-[#25732D] text-[#636F64]/50 rounded-3xl shadow-lg block w-full p-3 dark:shadow-md dark:shadow-white/40 dark:text-white"
                placeholder="Full Name"
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>
            <div>
              {/* username */}
              <input
                type="text"
                className="mt-5 font-Roboto font-normal text-base pl-6 border-[#25732D] text-[#636F64]/50 rounded-3xl shadow-lg  block w-full p-3 dark:shadow-md dark:shadow-white/40 dark:text-white"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              {/* phone number */}
              <input
                type="number"
                className="mt-5 font-Roboto font-normal text-base pl-6 border-[#25732D] text-[#636F64]/50 rounded-3xl shadow-lg  block w-full p-3 dark:shadow-md dark:shadow-white/40 dark:text-white"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                className="mt-5 font-Roboto font-normal text-base pl-6 border-[#25732D] text-[#636F64]/50 rounded-3xl shadow-lg  block w-full p-3 dark:shadow-md dark:shadow-white/40 dark:text-white"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="mt-10 mx-auto text-white font-Roboto font-medium bg-[#25732D] py-3 w-full rounded-3xl shadow-lg dark:shadow-md dark:shadow-white/40">
              Sign up
            </button>
            <div className="flex mt-5 font-Poppins text-base md:text-lg lg:my-5 lg:text-xl">
              <p className="ml-2 dark:text-white">Already have an account?</p>
              <Link href="/auth/login">
                <a className="ml-2 text-[#25732D]">Login</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
