import ButtonSmall from "../../components/buttonSmall";
import InputFixed from "../../components/inputFixed";
import Layout from "../../components/layout";

import { useRouter } from "next/router";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { TokenContext, RoleContext } from "../../utils/context";

export default function AddProduct() {
  const { token, seToken } = useContext(TokenContext);

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
        <form className=" mt-[97px] px-5 md:px-14 lg:px-5 lg:w-[50%] flex flex-col gap-8">
          <InputFixed type="text" placeholder="Input your book title" />
          <InputFixed type="text" placeholder="Input your book price" />
          <InputFixed type="text" placeholder="Input yoru book stock" />
          <InputFixed type="text" placeholder="Input your book author" />
          <InputFixed type="text" placeholder="Input your book synopsis" />
          <label className="-mb-6 -mt-2">Input your book in pdf file</label>
          <InputFixed type="file" placeholder="Input your book in pdf format" />
          <label className="-mb-6 -mt-2">Input your image book</label>
          <InputFixed type="file" placeholder="Input your book image" />

          <ButtonSmall
            className="mx-auto mt-7 py-2 bg-[#25732D] text-white text-2xl md:text-2xl font-bold rounded-full  w-[295px] md:w-[50%] "
            label="Save"
          />
        </form>
      </div>
    </Layout>
  );
}
