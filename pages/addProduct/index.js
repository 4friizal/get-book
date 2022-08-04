import ButtonSmall from "../../components/buttonSmall";
import InputFixed from "../../components/inputFixed";
import Layout from "../../components/layout";

import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function AddProduct() {
  const router = useRouter();
  const token = localStorage.getItem("token");

  const [objSubmit, setObjSubmit] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [author, setAuthor] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      router.push("/addProduct");
    }
  }, {});

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    let requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };
    fetch("https://server.athaprojects.me/books", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message, data } = result;
        if (data) {
          router.push("/");
        }
        alert(message);
        setObjSubmit({});
      })
      .catch((error) => {
        console.log(error);
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <Layout>
      <div className=" mx-auto w-full md:w-[80%] lg:w-[95%] 2xl:w-[75%] lg:flex justify-between">
        {/* logo  */}
        <div className="mt-[148px] lg:w-[50%] hidden lg:block ">
          <h2 className=" text-[#25732D] font-Roboto text-5xl xl:text-6xl font-extrabold my-10 text-center  ">
            Add a new product
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

        {/* form edit profile */}
        <form
          className=" mt-[97px] px-5 md:px-14 lg:px-5 lg:w-[50%] flex flex-col gap-8"
          onSubmit={(e) => handleSubmit(e)}
        >
          <InputFixed
            type="text"
            placeholder="Input your book title"
            onChange={(e) => handleChange(e.target.value, "title")}
          />
          <InputFixed
            type="text"
            placeholder="Input your book price"
            onChange={(e) => handleChange(e.target.value, "price")}
          />
          <InputFixed
            type="text"
            placeholder="Input yoru book stock"
            onChange={(e) => handleChange(e.target.value, "stock")}
          />
          <InputFixed
            type="text"
            placeholder="Input your book author"
            onChange={(e) => handleChange(e.target.value, "author")}
          />
          <InputFixed
            type="text"
            placeholder="Input your book synopsis"
            onChange={(e) => handleChange(e.target.value, "sinopsis")}
          />
          <label className="-mb-6 -mt-2">Input your book in pdf file</label>
          <InputFixed
            type="file"
            placeholder="Input your book in pdf format"
            onChange={(e) => {
              setFile(URL.createObjectURL(e.target.files[0]));
              handleChange(e.target.files[0], "file");
            }}
          />
          <label className="-mb-6 -mt-2">Input your image book</label>
          <InputFixed
            type="file"
            placeholder="Input your book image"
            onChange={(e) => {
              setImage(URL.createObjectURL(e.target.files[0]));
              handleChange(e.target.files[0], "image");
            }}
          />

          <ButtonSmall
            className="mx-auto mt-7 mb-32 py-2 bg-[#25732D] text-white text-2xl md:text-2xl font-bold rounded-full  w-[295px] md:w-[50%] "
            label="Save"
          />
        </form>
      </div>
    </Layout>
  );
}
