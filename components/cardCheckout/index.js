// import Image from "next/image";
export default function CardCheckout() {
  return (
    <>
      <div className="py-2 px-1 font-Poppins my-[20px] mx-auto w-[90%] sm:w-[90%] lg:w-[850px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] border-t-2 border-b-slate-400 border-l-2 rounded-[20px] md:flex md:justify-between">
        <div className="md:w-[450px] sm:flex sm:justify-center md:justify-between ">
          <img
            className="mt-[19px] sm:mt-0 mb-[22px] sm:mb-0 mx-auto md:mx-3 sm:mr-0 w-[185px] h-[250px] border-4 border-black rounded-[20px] object-cover"
            src="https://placeimg.com/400/225/arch"
            layout="responsive"
          />
          <h2 className="text-xl text-center sm:text-left md:text-right font-Roboto font-medium sm:w-[50%] md:w-[250px] sm:pl-3 sm:pb-3 md:pl-0 sm:self-end md:self-center">
            Spiderman OTW Home
          </h2>
        </div>
        <div className="md:mx-3 font-Poppins bg-[#25732D] text-white font-normal mt-2 rounded-b-[20px] md:rounded-[20px] md:px-3 md:pt-4 md:w-[230px] md:h-[55px] md: flex justify-between md:self-center">
          <p className="py-5 md:py-0 pl-1 ">Subtotal</p>
          <p className="font-semibold py-5 md:py-0 pr-1">Rp 99.998</p>
        </div>
      </div>
      {/* <Image
        src="https://placeimg.com/400/225/arch"
        width={200}
        height={200}
        alt="profile"
      /> */}
    </>
  );
}
