import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";

export default function Header() {
  return (
    <header className="w-full h-full bg-white dark:bg-black text-black dark:text-white font-Poppins">
      <div className="border-b-2 rounded-b-2xl md:rounded-0">
        <div className="h-16 flex justify-evenly items-center">
          <div className="w-64">
            <div className="w-full rounded-full border border-[#D9D9D9] px-4">
              <MdSearch size={25} color={"#D9D9D9"} className="inline" />
              <input
                type="text"
                placeholder="Search book..."
                className="input input-ghost inline bg-inherit text-sm italic text-[#D9D9D9] p-0 ml-4"
              />
            </div>
          </div>
          <MdOutlineShoppingCart size={25} />
        </div>
      </div>
    </header>
  );
}
