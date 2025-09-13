import React from "react";
import Typography from "../UI/Typography";

const CustomProduct = () => {
  // Array for product categories
  const productCategories = [
    {
      id: 1,
      img: "/images/product1.jpg",
      title: "Medium Voltage Switchgear",
      desc: "Some industries only require generator power for emergency lighting and other emergency systems but in Pakistan as the power failure issues or load.",
    },
    {
      id: 2,
      img: "/images/product2.jpg",
      title: "Low Voltage Switchgear",
      desc: "Some industries only require generator power for emergency lighting and other emergency systems but in Pakistan as the power failure issues or load.",
    },
    {
      id: 3,
      img: "/images/product2.jpg",
      title: "Control & Relay Panels",
      desc: "Some industries only require generator power for emergency lighting and other emergency systems but in Pakistan as the power failure issues or load.",
    },
    {
      id: 4,
      img: "/images/product2.jpg",
      title: "AC/ DC Auxiliary Supply Equipment",
      desc: "Some industries only require generator power for emergency lighting and other emergency systems but in Pakistan as the power failure issues or load.",
    },
    {
      id: 5,
      img: "/images/product2.jpg",
      title: "Motor Control Centers",
      desc: "Some industries only require generator power for emergency lighting and other emergency systems but in Pakistan as the power failure issues or load.",
    },
    {
      id: 6,
      img: "/images/product2.jpg",
      title: "Multi Source Power Supply Synchronizing Panels",
      desc: "Some industries only require generator power for emergency lighting and other emergency systems but in Pakistan as the power failure issues or load.",
    },
    {
      id: 7,
      img: "/images/product2.jpg",
      title: "PLC based equipment tailored to specific requirements",
      desc: "Some industries only require generator power for emergency lighting and other emergency systems but in Pakistan as the power failure issues or load.",
    },
    {
      id: 8,
      img: "/images/product2.jpg",
      title: "Power Factor Improvement Equipment",
      desc: "Some industries only require generator power for emergency lighting and other emergency systems but in Pakistan as the power failure issues or load.",
    },
    {
      id: 9,
      img: "/images/product2.jpg",
      title: "MV/ LV Changeover equipment",
      desc: "Some industries only require generator power for emergency lighting and other emergency systems but in Pakistan as the power failure issues or load.",
    },
    {
      id: 10,
      img: "/images/product2.jpg",
      title: "Auto Main Failure (AMF) Panel and Auto Transfer Switch (ATS)",
      desc: "Some industries only require generator power for emergency lighting and other emergency systems but in Pakistan as the power failure issues or load.",
    },
    {
      id: 11,
      img: "/images/product2.jpg",
      title: "Bus Tie Duct (BTD) & Bus Bar Trunking system",
      desc: "Some industries only require generator power for emergency lighting and other emergency systems but in Pakistan as the power failure issues or load.",
    },
    {
      id: 12,
      img: "/images/product2.jpg",
      title:
        "Rehabilitation & Reclamation of all kind of Switchgear and Grid Station equipment",
      desc: "Some industries only require generator power for emergency lighting and other emergency systems but in Pakistan as the power failure issues or load.",
    },
    {
      id: 13,
      img: "/images/product2.jpg",
      title: "Low Voltage Switchgear",
      desc: "Some industries only require generator power for emergency lighting and other emergency systems but in Pakistan as the power failure issues or load.",
    },
  ];

  return (
    <Typography className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-12">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16  ">
        <Typography className="flex-1 mt-[100px] ">
          <img
            src="/images/main.jpg"
            alt="Main"
            className="w-full h-auto rounded-xl shadow-md"
          />
          <Typography className="flex flex-wrap gap-3 mt-4">
            {[
              "/images/small1.jpg",
              "/images/small2.jpg",
              "/images/small3.jpg",
              "/images/small4.jpg",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                className="w-20 h-20 rounded-lg shadow"
              />
            ))}
          </Typography>
        </Typography>
        <Typography variant="h2" className="flex-1" color="dark">
          <h2 className=" font-bold mb-6  mt-[100px]">Description</h2>
          <Typography
            variant="p-l"
            color="tertiary"
            className="space-y-4 text-gray-700 leading-relaxed"
          >
            <p>
              Secondary power system in generators and in industries or
              commercial buildings are installed with process system
              distribution panel boards (PDBs), also known as low-tension
              switchgear systems.
            </p>
            <p>
              Low tension distribution systems receive power at 415 V (3-phase)
              / 240 V (1-phase) from transformers and distribute it to various
              power and lighting loads through multiple feeders.
            </p>
            <p>
              The switchgear includes air circuit breakers, molded case circuit
              breakers, miniature circuit breakers, residual current devices,
              fuses, contactors, and protective relays for the safe distribution
              of electrical energy.
            </p>
            <p>
              Custom-built low-tension distribution panels are manufactured in
              both fixed type and draw-out type designs to suit customer
              requirements.
            </p>
          </Typography>
        </Typography>
      </div>
      <Typography variant="h2" color="dark" className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12 ">
          Product Categories
        </h2>
        <Typography className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 ">
          {productCategories.map((product) => (
            <Typography
              key={product.id}
              className="bg-white border rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col hover:bg-orange-500"
            >
              <img
                src={product.img}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-semibold text-xl mb-2 text-gray-800">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {product.desc}
                </p>
                <a
                  href="#"
                  className="text-orange-500 font-medium hover:underline mt-3"
                >
                  Learn More →
                </a>
              </div>
            </Typography>
          ))}
        </Typography>
      </Typography>
    </Typography>
  );
};

export default CustomProduct;
