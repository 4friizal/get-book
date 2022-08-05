import Image from "next/image";
import { useRouter } from "next/router";

import { MdOutlineDelete } from "react-icons/md";

export default function CardCart({ id, image, author, title, price }) {
  const router = useRouter();

  const handleDeleteCart = async () => {
    var requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
    if (router.isReady) {
      fetch(`https://server.athaprojects.me/carts/${id}`, requestOptions).then(
        (response) =>
          response
            .json()
            .then((result) => {
              const { code, message } = result;
              if (code === 200) {
                alert(message);
                router.reload();
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
    <div className="w-full h-32 md:h-48 lg:h-64 flex p-8 md:p-0">
      <div className="w-16 md:w-28 lg:w-32 h-20 md:h-32 lg:h-48">
        <Image
          src={image}
          width={1920}
          height={1080}
          layout="responsive"
          alt={title}
        />
      </div>
      <div className="mx-4 w-full">
        <h3 className="font-medium md:text-lg lg:text-2xl">{author}</h3>
        <h1 className="font-bold text-lg md:text-2xl lg:text-4xl">{title}</h1>
        <h2 className="mt-4 md:mt-8 font-bold text-lg md:text-2xl lg:text-4xl text-right">{`IDR ${price}`}</h2>
      </div>
      <button className="flex items-center" onClick={() => handleDeleteCart()}>
        <span className="md:hidden">
          <MdOutlineDelete size={30} />
        </span>
        <span className="hidden md:block">
          <MdOutlineDelete size={45} />
        </span>
      </button>
    </div>
  );
}
