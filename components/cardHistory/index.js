import Image from "next/image";
import React from "react";

export default function CardHistory({ price, title, image }) {
  return (
    <>
      <div className="mt-9 py-2 px-1 font-Poppins  w-[90%] sm:w-[70%] lg:w-[60%] xl:w-[50%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] border-t-2 border-b-slate-400 border-l-2 rounded-[20px] mx-auto lg:flex ">
        {/*input img  */}
        {/* <img
          className="mt-[19px] sm:mt-0 mb-[22px] sm:mb-0 mx-auto w-[185px] h-[250px] border-4 border-black rounded-[20px] object-cover sm:self-center"
          src="{image}"
          layout="responsive"
        /> */}

        <figure className=" mt-[19px] sm:mt-0 mb-[22px] sm:mb-0 mx-auto w-[185px] h-[250px] border-4 border-black rounded-[20px] object-cover sm:self-center">
          <Image
            src={image}
            width={19}
            height={19}
            layout="responsive"
            alt={title}
          />
        </figure>

        <div className="mx-auto flex justify-between  w-[80%] lg:w-[60%]">
          <h2 className="font-Roboto text-xl sm:text-2xl font-bold lg:self-center">
            {title}
          </h2>

          <p className="self-center"> IDR {price}</p>
        </div>
      </div>
    </>
  );
}
