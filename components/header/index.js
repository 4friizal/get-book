import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";

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
          <div className="w-64">
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
              <MdOutlineShoppingCart size={25} />
              {carts?.length > 0 ? (
                <span className="mx-1 w-5 h-5 rounded-full bg-[#25732D] text-white font-medium text-xs text-center items-center justify-center">
                  {carts?.length}
                </span>
              ) : (
                ""
              )}
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
