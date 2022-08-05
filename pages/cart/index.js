import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import CardCart from "../../components/cardCart";

import Layout from "../../components/layout";

export default function Cart() {
  const router = useRouter();
  const token = localStorage.getItem("token");

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
    if (!token) {
      router.push("/auth/welcome");
    }
  });

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
    <Layout headTitle={"Cart Product"}>
      <div className="md:flex md:justify-evenly md:py-8">
        <div className="divide-y md:divide-y-4 md:w-1/2">
          <h1 className="hidden md:block font-bold text-3xl lg:text-4xl mb-8">
            Cart
          </h1>
          {carts?.map((cart) => (
            <CardCart
              key={cart.id}
              id={cart.id}
              author={cart.author}
              image={cart.image}
              title={cart.title}
              price={cart.price}
            />
          ))}
        </div>
        <div className="hidden md:flex flex-col w-1/4 h-56 lg:h-72 border-2 border-[#D9D9D9] rounded-2xl p-8 items-center justify-between">
          <div className="w-full">
            <h2 className="font-bold md:text-lg lg:text-2xl">Total</h2>
            <h1 className="font-bold md:text-xl lg:text-4xl text-right mt-4">{`IDR ${prices}`}</h1>
          </div>

          <button
            type="button"
            className="w-full bg-[#25732D] text-white rounded-full flex items-center justify-center font-bold p-1"
            onClick={() => handleCheckout()}
          >
            <p className="font-Roboto mx-2">Checkout</p>
          </button>
        </div>
      </div>
    </Layout>
  );
}
