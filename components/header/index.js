import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  MdOutlineShoppingCart,
  MdSearch,
  MdOutlineHistory,
  MdOutlineAccountCircle,
} from "react-icons/md";

import logo from "../../assets/logo.png";

export default function Header() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    fetch("https://server.athaprojects.me/carts", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setCarts(data.data);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {});
  };

  return (
    <header className="sticky top-0 z-30 w-full h-full bg-white dark:bg-black text-black dark:text-white font-Poppins">
      <div className="border-b-2 rounded-b-2xl md:rounded-b-0">
        <div className="h-16 flex justify-evenly items-center">
          <Link href="/">
            <a className="hidden md:block w-1/4 h-full p-4">
              <Image src={logo} alt="logo" width={1920} height={500} />
            </a>
          </Link>

          <div className="w-64 md:w-72 lg:w-full">
            <div className="w-full rounded-full border border-[#D9D9D9] px-4 py-2">
              <MdSearch size={25} color={"#D9D9D9"} className="inline" />
              <input
                type="text"
                placeholder="Search book..."
                className="input input-ghost input-xs bg-inherit text-sm italic text-[#D9D9D9] px-2 focus:outline-0 focus:ring-0"
              />
            </div>
          </div>
          <Link href="/cart">
            <a className="flex items-center">
              <span className="md:hidden">
                <MdOutlineShoppingCart size={25} />
              </span>
              <span className="hidden md:block">
                <MdOutlineShoppingCart size={45} />
              </span>
              {carts?.length > 0 ? (
                <span className="mx-1 w-5 h-5 md:w-10 md:h-10 rounded-full bg-[#25732D] text-white font-medium text-xs md:text-xl text-center items-center justify-center">
                  {carts?.length}
                </span>
              ) : (
                ""
              )}
            </a>
          </Link>
          <div className="hidden md:flex mx-2">
            <Link href="/history">
              <a title="History">
                <MdOutlineHistory size={45} />
              </a>
            </Link>
            <Link href="/profile">
              <a title="Profile">
                <MdOutlineAccountCircle size={45} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
