import Image from "next/image";
import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";

import logo from "../../assets/logo.png";

export default function Header() {
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
          <MdOutlineShoppingCart size={25} />
        </div>
      </div>
    </header>
  );
}
