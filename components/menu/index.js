import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  MdOutlineHome,
  MdOutlineHistory,
  MdOutlineAccountCircle,
} from "react-icons/md";

export default function Menu() {
  const router = useRouter();
  const { route } = router;

  const [carts, setCarts] = useState([]);
  let prices = 0;
  {
    carts?.map((cart) => {
      prices += cart.price;
    });
  }
  const book_id = [];
  {
    carts?.map((cart) => book_id.push(cart.books_id));
  }

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

  const handleCheckout = async () => {
    const body = {
      books_id: book_id,
    };
    var requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    if (router.isReady) {
      fetch(`https://server.athaprojects.me/checkout`, requestOptions).then(
        (response) =>
          response
            .json()
            .then((result) => {
              const { code, message, payments } = result;
              if (code === 200) {
                alert(message);
                router.push(`/payment/${payments.token}`);
              }
            })
            .catch((err) => {
              alert(err.toString());
            })
            .finally()
      );
    }
  };
  return (
    <div className="block md:hidden absolute bottom-0 w-full bg-white dark:bg-black text-black dark:text-white font-Roboto">
      <div className="sticky bottom-0 z-30 border-t-2 rounded-t-2xl">
        {route === "/cart" ? (
          <div className="flex px-4 py-2 justify-between items-center">
            <div>
              <h2 className="font-medium">Total</h2>
              <h1 className="font-bold text-xl">{`IDR ${prices}`}</h1>
            </div>
            <div>
              <button
                type="button"
                className="w-32 bg-[#25732D] text-white rounded-full flex items-center justify-center font-bold p-1"
                onClick={() => handleCheckout()}
              >
                <p className="font-Roboto mx-2">Checkout</p>
              </button>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}
