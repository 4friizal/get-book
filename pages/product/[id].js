import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { MdAddShoppingCart } from "react-icons/md";

import Layout from "../../components/layout";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (!token) {
      router.push("/auth/welcome");
    }
  });

  const [book, setBook] = useState([]);
  const [isLoading, setLoading] = useState(false);
  console.log(book);
  useEffect(() => {
    setLoading(true);
    if (router.isReady) {
      fetch(`https://server.athaprojects.me/books/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setBook(data.data);
          setLoading(false);
        })
        .catch((error) => {
          alert(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [router.isReady]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

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
    <Layout headTitle={"Product Detail"}>
      <div className="flex flex-col md:flex-row md:p-8 md:h-screen">
        <div className="block w-full max-h-52 md:hidden">
          <Image
            src={book.image}
            width={1920}
            height={1080}
            layout="responsive"
            alt={book.title}
          />
        </div>
        <div className="hidden w-1/4 max-h-52 md:block">
          <Image
            src={book.image}
            width={350}
            height={550}
            layout="responsive"
            alt={book.title}
          />
        </div>
        <div className="w-full p-8 md:p-4 md:ml-8 lg:ml-10">
          <div className="md:flex md:justify-between">
            <div>
              <h3 className="text-xs md:text-lg lg:text-2xl">{book.author}</h3>
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl break-words">
                {book.title}
              </h1>
            </div>
            <h2 className="hidden font-bold md:block text-2xl lg:text-3xl">
              IDR <span className="text-[#25732D]">{book.price}</span>
            </h2>
          </div>
          <h2 className="font-medium text-lg md:hidden text-right">
            IDR <span className="text-[#25732D]">{book.price}</span>
          </h2>
          <div className="flex flex-col justify-center my-2 md:hidden">
            {book.stock > 0 ? (
              <button
                type="button"
                className="mx-auto my-4 w-52 lg:w-64 bg-[#25732D] text-white rounded-full flex items-center justify-center font-bold p-1"
                onClick={() => handleAddToCart()}
              >
                <MdAddShoppingCart size={25} />
                <p className="font-Roboto mx-2 text-lg">Add to Cart</p>
              </button>
            ) : (
              <button
                disabled
                type="button"
                className="my-4 w-52 lg:w-64 bg-[#D9D9D9] text-white dark:text-black rounded-full flex items-center justify-center font-bold p-1"
              >
                <p className="font-Roboto text-center italic text-lg">
                  Out of Stock
                </p>
              </button>
            )}
            {role === "admin" ? (
              <Link href={`/editProduct/${encodeURIComponent(id)}`}>
                <a className="flex flex-col">
                  <button
                    type="submit"
                    className=" mx-auto my-2 p-1 bg-yellow-500 text-white text-lg  font-bold rounded-full  w-52 lg:w-64 flex items-center justify-center  "
                  >
                    Edit Product
                  </button>
                </a>
              </Link>
            ) : (
              ""
            )}
          </div>
          <h3 className="font-medium text-lg md:mt-8 lg:mt-12 md:text-2xl lg:text-4xl">
            Synopsis
          </h3>
          <p className="w-full break-words my-2 md:text-lg lg:text-2xl">
            {book.sinopsis}
          </p>
          <div className="hidden justify-center my-2 md:flex md:flex-col">
            {book.stock > 0 ? (
              <button
                type="button"
                className="mx-auto my-8 w-72 lg:w-1/2 bg-[#25732D] text-white rounded-full flex items-center justify-center font-bold p-1"
                onClick={() => handleAddToCart()}
              >
                <MdAddShoppingCart size={35} />
                <p className="font-Roboto mx-2 text-lg lg:text-xl">
                  Add to Cart
                </p>
              </button>
            ) : (
              <button
                disabled
                type="button"
                className=" mx-auto my-8 w-72 lg:w-1/2 bg-[#D9D9D9] text-white dark:text-black rounded-full flex items-center justify-center font-bold p-1"
              >
                <p className="font-Roboto text-center italic text-lg lg:text-xl">
                  Out of Stock
                </p>
              </button>
            )}
            {role === "admin" ? (
              <Link href={`/editProduct/${encodeURIComponent(id)}`}>
                <a className="flex flex-col">
                  <button
                    type="submit"
                    className=" mx-auto my-2 p-1 bg-yellow-500 text-white text-lg  font-bold rounded-full  w-72 lg:w-1/2 flex items-center justify-center  "
                  >
                    Edit Product
                  </button>
                </a>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
