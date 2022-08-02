import Link from "next/link";
import { useRouter } from "next/router";

import {
  MdOutlineHome,
  MdOutlineHistory,
  MdOutlineAccountCircle,
} from "react-icons/md";

export default function Menu() {
  const router = useRouter();
  return (
    <div className="block md:hidden absolute bottom-0 w-full bg-white dark:bg-black text-black dark:text-white font-Roboto">
      <div className="sticky bottom-0 z-30 border-t-2 rounded-t-2xl">
        <div className="flex justify-around py-2">
          <Link href="/">
            <a
              className={
                router.route === "/"
                  ? `text-[#25732D] flex flex-col items-center text-center`
                  : `flex flex-col items-center text-center`
              }
            >
              <MdOutlineHome size={35} />
              <span>Home</span>
            </a>
          </Link>
          <Link href="/history">
            <a
              className={
                router.route === "/history"
                  ? `text-[#25732D] flex flex-col items-center text-center`
                  : `flex flex-col items-center text-center`
              }
            >
              <MdOutlineHistory size={35} />
              <span>History</span>
            </a>
          </Link>
          <Link href="/profile">
            <a
              className={
                router.route === "/profile"
                  ? `text-[#25732D] flex flex-col items-center text-center`
                  : `flex flex-col items-center text-center`
              }
            >
              <MdOutlineAccountCircle size={35} />
              <span>Profile</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
