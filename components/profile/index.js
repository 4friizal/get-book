import Link from "next/link";
import { TokenContext, ThemeContext } from "../../utils/context";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import {
  MdPersonOutline,
  MdAlternateEmail,
  MdOutlinePhone,
  MdLightMode,
  MdModeNight,
} from "react-icons/md";

export default function DetailProfile(props) {
  const router = useRouter();
  const { setToken } = useContext(TokenContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      router.push("/auth/welcome");
    }
  });

  const handleTheme = (mode) => {
    setTheme(mode);
  };

  const handleLogout = () => {
    setToken("0");
    localStorage.removeItem("token");
    router.push("/auth/welcome");
    alert("You have been log out");
  };

  return (
    <div className="min-h-screen lg:flex lg:items-center xl:max-w-6xl lg:mx-auto">
      {" "}
      {/* getbook icon || image and Hello! */}
      <div className="hidden md:block md:w-full">
        <img
          className="mx-auto w-[290px] lg:w-[360px]"
          src="https://cdn.discordapp.com/attachments/929013677045194802/1004004222070702161/book-people.png"
          alt="book"
        />
        <h1 className="text-center font-Roboto font-semibold text-6xl my-7 lg:my-0 lg:text-6xl">
          Hello !
        </h1>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-center xl:max-w-6xl lg:=mx-auto">
        {/* Data user */}
        <div>
          <div className="flex items-center mx-5 mt-12 lg:mx-0">
            <MdPersonOutline color="#25732D" size={75} />
            <div>
              <h5 className="font-Poppins text-2xl font-medium">
                {props.fullname}
              </h5>
              <p className="font-Poppins text-xl text-[#636F64]/50 dark:text-white/70">
                Full Name
              </p>
            </div>
          </div>
          <div className="flex items-center mx-6 mt-3 lg:mx-2">
            <MdAlternateEmail color="#25732D" size={60} />
            <div className="ml-3">
              <h5 className="font-Poppins text-2xl font-medium">
                {props.username}
              </h5>
              <p className="font-Poppins text-xl text-[#636F64]/50 dark:text-white/70">
                Username
              </p>
            </div>
          </div>
          <div className="flex items-center ml-7 mt-3 lg:mx-2">
            <MdOutlinePhone color="#25732D" size={60} />
            <div className="ml-3">
              <h5 className="font-Poppins text-2xl font-medium">
                {props.phone}
              </h5>
              <p className="font-Poppins text-xl text-[#636F64]/50 dark:text-white/70">
                Phone
              </p>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="mx-6 my-10 w-80 md:ml-14">
          {role === "admin" ? (
            <div>
              <Link href="/addProduct">
                <button className="mx-auto mt-5 text-white font-Roboto font-medium bg-[#25732D] py-3 w-full rounded-3xl shadow-lg">
                  Add Product
                </button>
              </Link>
              <Link href="/editProfile/">
                <button className="mt-5 mx-auto text-white font-Roboto font-medium bg-[#25732D] py-3 w-full rounded-3xl shadow-lg">
                  Edit Profile
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <Link href="/editProfile/">
                <button className="mt-9 mx-auto text-white font-Roboto font-medium bg-[#25732D] py-3 w-full rounded-3xl shadow-lg">
                  Edit Profile
                </button>
              </Link>
            </div>
          )}

          <div className="flex justify-between mt-5 mx-2">
            {theme === "light" ? (
              <h5 className="font-Roboto text-2xl font-medium text-[#25732D]">
                Dark
              </h5>
            ) : (
              <h5 className="font-Roboto text-2xl font-medium text-[#25732D]">
                Light
              </h5>
            )}
            {theme === "light" ? (
              <div
                onClick={() => handleTheme(theme === "dark" ? "light" : "dark")}
                className="w-20 h-10 shadow-lg rounded-3xl flex items-center"
              >
                <MdLightMode className="ml-2" size={30} color="#25732D" />
              </div>
            ) : (
              <div
                onClick={() => handleTheme(theme === "dark" ? "light" : "dark")}
                className="w-20 h-10 shadow-lg bg-[#25732D] rounded-3xl flex items-center relative overflow-hidden"
              >
                <MdModeNight className="ml-11" size={30} />
              </div>
            )}
          </div>
          <button
            onClick={() => handleLogout()}
            className="mt-5 mx-auto text-white font-Roboto font-medium bg-[#FF4D00] py-3 w-full rounded-3xl shadow-lg"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
