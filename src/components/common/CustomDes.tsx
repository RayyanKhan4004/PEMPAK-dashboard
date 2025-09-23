"use client";
import React, { useState } from "react";
import Typography from "../UI/Typography";
import Image from "next/image";

type SUBIMG = string[];
const CustomDes = () => {
  const des: SUBIMG = [
    "/images/small1.jpg",
    "/images/small1.jpg",
    "/images/small1.jpg",
    "/images/small1.jpg",
  ];

  const [MainImg, setMainImg] = useState(Object.values(des)[0]);

  return (
    <Typography className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-12 ">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mt-[100px] ">
        <Typography className="flex-1  ">
          <Image
            src={MainImg}
            alt="Main"
            className="w-full h-auto rounded-xl shadow-md"
          />
          <Typography className="flex flex-wrap gap-3 mt-4">
            {des.map((img, index) => (
              <Image
                onClick={() => setMainImg(img)}
                key={index}
                src={img}
                className="w-20 h-20 rounded-lg shadow cursor-pointer"
                alt=""
              />
            ))}
          </Typography>
        </Typography>
        <Typography variant="h2" className="flex-1" color="dark">
          <h2 className=" font-bold mb-6">Description</h2>
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
    </Typography>
  );
};

export default CustomDes;
