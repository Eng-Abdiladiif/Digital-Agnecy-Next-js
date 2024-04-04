import React from "react";
import img from "../../public/quote-2.png";
import Customer from "../components/Customer";

function Clients() {
  return (
    <div
      className="flex  max-w-4xl mx-auto p-4 h-[550px] flex-col bg-cover
    mt-[100px] mb-5"
      style={{ backgroundImage: `url(./image/quote-2.png)` }}
    >
      <div
        className="flex space-y-3 flex-col justify-center items-center
        "
      >
        {/* one */}
        <div className="space-y-3 text-center">
          <h1
            className="text-lg font-bold
                uppercase text-orange-600
                "
          >
            Testinmals
          </h1>
          <h2
            className="
                text-xl font-bold
                md:text-3xl"
          >
            CUSTOMER'S AWESOME
          </h2>
          <h2
            className="
                text-xl font-bold
                md:text-3xl text-orange-500"
          >
            FEEDBACK.
          </h2>
        </div>
        <div>
          <Customer />
        </div>
        {/* two */}

        {/* thre */}
      </div>
    </div>
  );
}

export default Clients;
