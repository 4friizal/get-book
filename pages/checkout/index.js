import ButtonSmall from "../../components/buttonSmall";
import Layout from "../../components/layout";

import React from "react";
import CardCheckout from "../../components/cardCheckout";

export default function Checkout() {
  return (
    <Layout>
      <div>
        <CardCheckout />
        <div className="font-bold text-lg font-Poppins text-white bg-[#25732D] px-4 py-3 mt-[34px] mb-[17px] mx-auto w-full md:w-[90%] lg:w-[850px] flex justify-between">
          <p>Total</p>
          <p>Rp 99.998</p>
        </div>
        <div className="mx-auto md:w-[90%] lg:w-[850px]  text-right">
          <ButtonSmall
            className="  bg-[#25732D] text-white text-2xl md:text-2xl font-bold py-2 mr-7 md:mr-0 w-[295px] rounded-full"
            label="Checkout"
          />
        </div>
      </div>
    </Layout>
  );
}
