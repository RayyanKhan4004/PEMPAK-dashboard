'use client'
import React, { useState, useEffect } from "react";
import Typography from "../UI/Typography";

const CustomProduct = () => {

  // interface categoies data
  interface Categories {
    name: string,
    desc: string,
    bannerimg?: string,
    addimgs?: string[]
  }

  // interface product data
  interface Products {
    name: string,
    cate: string,
    description: string,
    images?: string
  }

  // set stats
  const [categoies, setCategoies] = useState<Categories[]>([])
  const [products, setProducts] = useState<Products[]>([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoies = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://pempak-api.vercel.app/api/categories')
        const data = await response.json();
        setCategoies(data)
        console.log("categories")
        console.log(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch categories');
        console.error('Error fetching categories:', err);
      } finally {
        setLoading(false);
      }
    }

    const fetchProductss = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://pempak-api.vercel.app/api/products')
        const data = await response.json();
        setProducts(data)
        console.log("producst")
        console.log(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    }


    fetchCategoies()
    fetchProductss()
  }, [])

  if (loading) {
    return (
      <Typography className='gap-6 w-[70%] grid grid-cols-3 py-[50px]'>
        <Typography className='text-center col-span-3'>Loading blogs...</Typography>
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography className='gap-6 w-[70%] grid grid-cols-3 py-[50px]'>
        <Typography className='text-center col-span-3 text-red-500'>
          Error: {error}
        </Typography>
      </Typography>
    );
  }

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
    <Typography className=" px-4 sm:px-8 md:px-12 lg:px-20 py-12 ">
      <div className="flex flex-row mt-[100px] justify-center items-center px-[120px] w-full flex-wrap">
        <Typography className="flex-1 ">
          <img
            src={categoies[0].bannerimg}
            alt="Main"
            className="  rounded-xl shadow-md w-[565px] h-[466px]  "
          />
          <Typography className="flex flex-wrap gap-3 mt-4  ">
            {[
              "/images/small1.jpg",
              "/images/small2.jpg",
              "/images/small3.jpg",
              "/images/small4.jpg",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                className="w-20 h-20 rounded-lg shadow "
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
      <Typography variant="h2" color="dark" className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12 ">
          Product Categories
        </h2>
        <Typography className="flex flex-row-2 gap-6 justify-center w-full flex-wrap">
          {productCategories.map((product) => (
            <Typography
              key={product.id}
              className="bg-white border rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-row hover:bg-orange-500  w-[588px] p-[24px] text-black hover:text-white"
            >
              <img
                src={product.img}
                className=" object-cover w-[223px] h-[223px] rounded-2xl"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-semibold text-xl mb-2 ">{product.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {product.desc}
                </p>
                <a
                  href="#"
                  className="text-orange-500 font-medium group-hover:text-white mt-3"
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
