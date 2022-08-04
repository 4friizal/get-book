import Image from "next/image";
import Layout from "../../components/layout";
import InputFixed from "../../components/inputFixed";
import ButtonSmall from "../../components/buttonSmall";

export default function index() {
  return (
    <Layout>
      <h2 className=" text-[#25732D] font-Roboto text-8xl font-extrabold mt-10 text-center hidden lg:block ">
        Edit Profile
      </h2>
      <div className=" mx-auto w-full md:w-[80%] lg:w-[95%] 2xl:w-[75%] lg:flex justify-between">
        {/* logo  */}
        <div className=" mt-[148px] lg:w-[50%]">
          <figure>
            <img
              src="/icon-book.png"
              alt="Logo"
              className="mx-auto sm:w-40 md:w-52"
            />
            <h2 className="font-Baumans text-[#00FF19] text-6xl md:text-7xl text-center">
              geetbook
            </h2>
          </figure>
        </div>

        {/* form edit profile */}
        <form className="  mt-[75px] px-4 lg:w-[50%] flex flex-col gap-8">
          <InputFixed type="text" placeholder="Full Name" />
          <InputFixed type="text" placeholder="Username" />
          <InputFixed type="tel" placeholder="Phone Number" />
          <ButtonSmall
            className="mx-auto mt-7 py-2 bg-[#25732D] text-white text-2xl md:text-2xl font-bold w-[295px]  rounded-full md:w-[60%]"
            label="Save"
          />
          <ButtonSmall
            className="mx-auto py-2 bg-[#FF4D00] text-white text-2xl md:text-2xl font-bold w-[295px] md:w-[60%]  rounded-full "
            label="Delete"
          />
        </form>
      </div>
    </Layout>
  );
}
