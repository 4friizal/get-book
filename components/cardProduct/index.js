import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { MdAddShoppingCart } from "react-icons/md";

export default function CardProduct({
  id,
  image,
  author,
  title,
  price,
  stock,
}) {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    setLoading(true);
    const body = {
      books_id: id,
    };
    var requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    fetch("https://server.athaprojects.me/carts", requestOptions).then(
      (response) =>
        response
          .json()
          .then((result) => {
            const { message } = result;
            alert(message);
          })
          .catch((err) => {
            alert(err.toString());
          })
          .finally(() => setLoading(false))
    );
  };
  return (
    <>
      <div className="w-40 h-52 lg:w-64 lg:h-96 rounded-2xl border-2 border-[#D9D9D9]">
        <Link href={`/product/${encodeURIComponent(id)}`}>
          <a className="flex flex-col">
            <div className="max-h-36 lg:max-h-48 w-full p-1">
              <Image
                src={image}
                width={1920}
                height={1080}
                layout="responsive"
                alt={title}
              />
            </div>
            <div className="w-full h-full border-t-2 border-[#D9D9D9] p-2">
              <h3 className="text-xs lg:text-lg">{author}</h3>
              <h1 className="font-bold text-xl lg:text-2xl break-words">
                {title}
              </h1>
              <h2 className="font-bold text-lg lg:text-xl text-right">{`IDR ${price}`}</h2>
            </div>
          </a>
        </Link>
      </div>
      {stock > 0 ? (
        <button
          type="button"
          className="my-2 w-40 lg:w-64 bg-[#25732D] text-white rounded-full flex items-center justify-center font-bold p-1"
          onClick={() => handleAddToCart()}
        >
          <MdAddShoppingCart size={20} />
          <p className="font-Roboto mx-2">Add to Cart</p>
        </button>
      ) : (
        <button
          disabled
          type="button"
          className="my-2 w-40 lg:w-64 bg-[#D9D9D9] text-white dark:text-black rounded-full flex items-center justify-center font-bold p-1"
        >
          <p className="font-Roboto text-center italic">Out of Stock</p>
        </button>
      )}
    </>
  );
}
