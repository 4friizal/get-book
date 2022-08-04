import React from "react";

export default function CardHistory({
  id,
  invoice_id,
  order_id,
  price,
  qty,
  title,
}) {
  return (
    <>
      <div className="py-2 px-1 font-Poppins mx-auto w-[90%] sm:w-[90%] lg:w-[85%] xl:w-[70%] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] border-t-2 border-b-slate-400 border-l-2 rounded-[20px] md:flex">
        {/*input img  */}
        <img
          className="mt-[19px] sm:mt-0 mb-[22px] sm:mb-0 mx-auto w-[185px] h-[250px] border-4 border-black rounded-[20px] object-cover sm:self-center"
          src="https://placeimg.com/400/225/arch"
          layout="responsive"
        />

        <div className="sm:flex sm:flex-col sm:justify-center md:w-[70%] lg:md:w-[78%]">
          <div className="flex  md:flex-row lg:flex-col justify-between px-2">
            <div>
              {/* input title */}
              <h2 className="font-Roboto text-xl sm:text-2xl font-bold">
                {title}
              </h2>
              {/* input author */}
              <p>{invoice_id}</p>
            </div>
            <div>
              {/* input price */}
              <p> IDR {price}</p>
              {/* input stock */}
              <p> stock: {qty} </p>
              {/* input ID  */}
              <p>id: {id}</p>
            </div>
          </div>

          <div className="px-2 lg:pt-4 ">
            <h2 className="font-bold">Synopsis</h2>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using It is a long. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using It is a long. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using It is a long.
          </div>
        </div>
      </div>
    </>
  );
}
