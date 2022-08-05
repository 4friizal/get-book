import ButtonSmall from "../../components/buttonSmall";
import InputFixed from "../../components/inputFixed";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";

export default function EditProduct() {
  const router = useRouter();
  const token = localStorage.getItem("token");
  const { id } = router.query;
  const role = localStorage.getItem("role");

  const [objSubmit, setObjSubmit] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      fetch(`https://server.athaprojects.me/books/${id}`)
        .then((response) => response.json())
        .then((result) => {
          const { message, code, data } = result;
          // const { title, price, stock, author, sinopsis, file, image,} = data;
          if (data) {
            setObjSubmit(data);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    }
  }, [router.isReady]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }

    let requestOptions = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };

    fetch(`https://server.athaprojects.me/books/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message, data } = result;
        if (data) {
          router.push(`/product/${id}`);
        }
        alert(message);
        setObjSubmit({});
      })
      .catch((error) => {
        console.log(error);
        alert(error.toString());
      })
      .finally();
  };

  const handleDeleteProduct = async () => {
    var requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
    if (router.isReady) {
      fetch(`https://server.athaprojects.me/books/${id}`, requestOptions).then(
        (response) =>
          response
            .json()
            .then((result) => {
              const { code, message } = result;
              if (code === 200) {
                alert(message);
                router.push("/");
              }
            })
            .catch((err) => {
              alert(err.toString());
            })
            .finally()
      );
    }
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <Layout headTitle="Edit Product">
      <div className=" mx-auto w-full md:w-[80%] lg:w-[95%] 2xl:w-[75%] lg:flex justify-between">
        {/* logo  */}
        <div className="mt-[148px] lg:w-[50%] hidden lg:block ">
          <h2 className=" text-[#25732D] font-Roboto text-6xl font-extrabold my-10 text-center  ">
            Edit your product
          </h2>
          <img
            className="mx-auto mt-20 w-[300px] md:mt-40 lg:mt-2"
            src="https://cdn.discordapp.com/attachments/929013677045194802/1003923645590163506/unknown.png"
            alt="icon"
          />
          <img
            className="mx-auto w-[290px] lg:w-[360px]"
            src="https://cdn.discordapp.com/attachments/929013677045194802/1004004222070702161/book-people.png"
            alt="book"
          />
        </div>
        <div className="mt-[97px] px-5 md:px-14 lg:px-5 lg:w-[50%] flex flex-col justify-center items-center">
          <form className="mx-auto" onSubmit={(e) => handleSubmit(e)}>
            <InputFixed
              type="text"
              placeholder="Edit your book title"
              value={objSubmit.title}
              onChange={(e) => handleChange(e.target.value, "title")}
            />
            <InputFixed
              type="text"
              placeholder="Edit your book price"
              value={objSubmit.price}
              onChange={(e) => handleChange(e.target.value, "price")}
            />
            <InputFixed
              type="text"
              placeholder="Edit your book stock"
              value={objSubmit.stock}
              onChange={(e) => handleChange(e.target.value, "stock")}
            />
            <InputFixed
              type="text"
              placeholder="Edit your book author"
              value={objSubmit.author}
              onChange={(e) => handleChange(e.target.value, "author")}
            />
            <InputFixed
              type="text"
              placeholder="Edit your book synopsis"
              value={objSubmit.sinopsis}
              onChange={(e) => handleChange(e.target.value, "sinopsis")}
            />
            <label className="-mb-6 -mt-2">Input your book in pdf file</label>
            <InputFixed
              type="file"
              placeholder="Edit your book in pdf format"
              onChange={(e) => {
                setFile(URL.createObjectURL(e.target.files[0]));
                handleChange(e.target.files[0], "file");
              }}
            />
            <label className="-mb-6 -mt-2">Input your image book</label>
            <InputFixed
              type="file"
              placeholder="Edit your book image"
              onChange={(e) => {
                setImage(URL.createObjectURL(e.target.files[0]));
                handleChange(e.target.files[0], "image");
              }}
            />
            <ButtonSmall
              className=" mx-auto my-7 py-2 bg-[#25732D] text-white text-2xl md:text-2xl font-bold rounded-full  w-[295px] md:w-full "
              label="Save"
            />
          </form>

          <ButtonSmall
            className=" mx-20 my-0 py-2 bg-[#FF4D00] text-white text-2xl md:text-2xl font-bold rounded-full  w-[295px] md:w-full "
            label="Delete"
            onClick={() => handleDeleteProduct()}
          />
        </div>
      </div>
    </Layout>
  );
}
