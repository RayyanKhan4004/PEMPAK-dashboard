import CustomHero from "@/components/common/CustomHero";
import Typography from "@/components/UI/Typography";
import React from "react";

const page = () => {
  let obj1 = [
    {
      id: 1,
      image: "/ourServices/service-1.svg",
      title: "Manufacturing",
      description:
        "We deliver high-quality manufacturing with precision, durability, and innovation at every stage.",
    },
    {
      id: 2,
      image: "/ourServices/service-2.svg",
      title: "Installation & Commissioning",
      description:
        "We deliver reliable installation and commissioning, ensuring smooth setup, optimal performance, and long-term efficiency.",
    },
    {
      id: 3,
      image: "/ourServices/service-3.svg",
      title: "Maintenance",
      description:
        "We provide expert maintenance to keep your systems running smoothly, safely, and efficiently.",
    },
    {
      id: 4,
      image: "/ourServices/service-4.svg",
      title: "Testing",
      description:
        "We provide reliable testing services to ensure safety, accuracy, and optimum performance of your systems.",
    },
    {
      id: 5,
      image: "/ourServices/service-5.svg",
      title: "Training",
      description:
        "We offer professional training to equip your team with the knowledge and skills for safe and efficient operations.",
    },
    {
      id: 6,
      image: "/ourServices/service-6.svg",
      title: "Energy Audit",
      description:
        "Identify energy waste, optimize efficiency, and reduce costs with our professional energy audit service.",
    },
  ];

  let data = [
    {
      id: 1,
      description: "Total Engineering Services"
    },
    {
      id: 2,
      description: "Complete in house Design, Manufacturing &Testing Capabilities"
    },
    {
      id: 3,
      description: "Genuine & identified sourced components with Backup Warrantee"
    }

  ]

return (
  <div>


  <div className="relative h-[60vh]">
        <div className="absolute inset-0 bg-[url('/about-bg.svg')] bg-cover bg-center z-0" />

        <div className="absolute inset-0 z-0" />

        <div className="relative p-10 text-white mx-9">
          <h1 className="text-4xl font-bold mt-8">Our Services</h1>
          <p className="w-[20vw] mt-10">
            We provide innovative solutions designed to meet your needs with quality and reliability.
          </p>
        </div>
      </div>



    {/* Explore Our Services */}
    <div className="p-2 m-4">
      <Typography variant="h3" weight="b" className="text-center block">
        Explore Our Services
      </Typography>
    </div>


    
    <Typography variant="p" className="text-center block">
      We provide innovative solutions designed to meet your needs with
      quality and reliability.
    </Typography>

<div className="flex justify-center">
    <div className="flex mt-5">

      <div className="relative border border-gray-300 rounded-lg p-6 text-center shadow-sm w-100 ml-4 overflow-hidden group ml-13 " >
  {/* background overlay */}
  <div className="absolute bottom-0 left-0 w-full h-0 bg-orange-500 transition-all duration-500 ease-in-out group-hover:h-full "></div>

  {obj1
    .filter((item) => item.id === 1)
    .map((item) => (
      <div key={item.id} className="mb-4 relative z-10 pt-4">
        <img src={item.image} alt={item.title} className="m-auto" />
        <Typography
          variant="h4"
          weight="b"
          className="text-center block mt-6"
        >
          {item.title}
        </Typography>
        <Typography variant="p" className="text-center block mt-6">
          {item.description}
        </Typography>
      </div>
    ))}
    <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-500 rounded-b-lg"></div>
      </div>


      <div className="relative border border-gray-300 rounded-lg p-6 text-center shadow-sm w-100 ml-4 overflow-hidden group">
  {/* background overlay */}
  <div className="absolute bottom-0 left-0 w-full h-0 bg-orange-500 transition-all duration-500 ease-in-out group-hover:h-full"></div>

  {obj1
    .filter((item) => item.id === 2)
    .map((item) => (
      <div key={item.id} className="mb-4 relative z-10">
        <img src={item.image} alt={item.title} className="m-auto" />
        <Typography
          variant="h4"
          weight="b"
          className="text-center block"
        >
          {item.title}
        </Typography>
        <Typography variant="p" className="text-center block mt-4">
          {item.description}
        </Typography>
      </div>
    ))}
    <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-500 rounded-b-lg"></div>
      </div>



      <div className="relative border border-gray-300 rounded-lg p-6 text-center shadow-sm w-100 ml-4 overflow-hidden group mr-10 pt-10 pb-15">
  {/* background overlay */}
  <div className="absolute bottom-0 left-0 w-full h-0 bg-orange-500 transition-all duration-500 ease-in-out group-hover:h-full"></div>

  {obj1
    .filter((item) => item.id === 3)
    .map((item) => (
      <div key={item.id} className="mb-4 relative z-10 ">
        <img src={item.image} alt={item.title} className="m-auto" />
        <Typography
          variant="h4"
          weight="b"
          className="text-center block mt-6"
        >
          {item.title}
        </Typography>
        <Typography variant="p" className="text-center block mt-4">
          {item.description}
        </Typography>
      </div>
    ))}
    <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-500 rounded-b-lg"></div>
      </div>

    </div>
</div>    

 <div className="flex justify-center">
    <div className="flex mt-5">
      <div className="relative border border-gray-300 rounded-lg p-6 text-center shadow-sm w-100 ml-4 overflow-hidden group ml-13" >
  {/* background overlay */}
  <div className="absolute bottom-0 left-0 w-full h-0 bg-orange-500 transition-all duration-500 ease-in-out group-hover:h-full"></div>

  {obj1
    .filter((item) => item.id === 4)
    .map((item) => (
      <div key={item.id} className="mb-4 relative z-10">
        <img src={item.image} alt={item.title} className="m-auto" />
        <Typography
          variant="h4"
          weight="b"
          className="text-center block mt-6"
        >
          {item.title}
        </Typography>
        <Typography variant="p" className="text-center block mt-4">
          {item.description}
        </Typography>
      </div>
    ))}
    <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-500 rounded-b-lg"></div>
</div>


      <div className="relative border border-gray-300 rounded-lg p-6 text-center shadow-sm w-100 ml-4 overflow-hidden group">
  {/* background overlay */}
  <div className="absolute bottom-0 left-0 w-full h-0 bg-orange-500 transition-all duration-500 ease-in-out group-hover:h-full"></div>

  {obj1
    .filter((item) => item.id === 5)
    .map((item) => (
      <div key={item.id} className="mb-4 relative z-10">
        <img src={item.image} alt={item.title} className="m-auto" />
        <Typography
          variant="h4"
          weight="b"
          className="text-center block mt-6"
        >
          {item.title}
        </Typography>
        <Typography variant="p" className="text-center block mt-4">
          {item.description}
        </Typography>
      </div>
    ))}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-500 rounded-b-lg"></div>
</div>


      <div className="relative border border-gray-300 rounded-lg p-6 text-center shadow-sm w-100 ml-4 overflow-hidden group mr-10">
  {/* background overlay */}
  <div className="absolute bottom-0 left-0 w-full h-0 bg-orange-500 transition-all duration-500 ease-in-out group-hover:h-full"></div>

  {obj1
    .filter((item) => item.id === 6)
    .map((item) => (
      <div key={item.id} className="mb-4 relative z-10">
        <img src={item.image} alt={item.title} className="m-auto" />
        <Typography
          variant="h4"
          weight="b"
          className="text-center block mt-6"
        >
          {item.title}
        </Typography>
        <Typography variant="p" className="text-center block mt-4 pb-9">
          {item.description}
        </Typography>
      </div>
    ))}
    <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-500 rounded-b-lg"></div>
</div>

    </div>
 </div>

    {/* Customer Satisfaction Assured Through */}
    <div className="block bg-gray-200 p-15 h-180 mt-30" >

    <div className="p-2 m-4">
      <Typography variant="h3" weight="b" className="text-center block">
        Customer Satisfaction Assured Through
      </Typography>
    </div>

    <Typography variant="p" className="text-center block">
      We ensure customer satisfaction through quality products, reliable services, and a commitment to exceeding expectations.
    </Typography>

    <div className="p-3 m-10 flex space-x-49 space-y-10 overflow-x-auto scroll-hide">
  <div className="min-w-[220px] h-53 rounded-full flex items-center justify-center relative bg-white shadow-xl">
    <p className="text-center p-3">{data[0].description}</p>
    <div className="absolute top-0 right-6 bg-orange-500 text-white rounded-full h-9 w-9 flex items-center justify-center text-sm">
      {data[0].id}
    </div>
  </div>

  <div className="min-w-[220px] h-53 rounded-full flex items-center justify-center relative bg-white shadow-xl mt-20 ">
    <p className="text-center p-3">{data[1].description}</p>
    <div className="absolute top-0 right-6 bg-orange-500 text-white rounded-full h-9 w-9 flex items-center justify-center text-sm">
      {data[1].id}
    </div>
  </div>

  <div className="min-w-[220px] h-53 rounded-full flex items-center justify-center relative bg-white shadow-xl">
    <p className="text-center p-3">{data[2].description}</p>
    <div className="absolute top-0 right-6 bg-orange-500 text-white rounded-full h-9 w-9 flex items-center justify-center text-sm">
      {data[2].id}
    </div>
  </div>

  <div className="min-w-[220px] h-53 rounded-full flex items-center justify-center relative bg-white shadow-xl mt-20">
    <p className="text-center p-3">{data[1].description}</p>
    <div className="absolute top-0 right-6 bg-orange-500 text-white rounded-full h-9 w-9 flex items-center justify-center text-sm">
      {data[1].id}
    </div>
  </div>

  <div className="min-w-[220px] h-53 rounded-full flex items-center justify-center relative bg-white shadow-xl">
    <p className="text-center p-3">{data[2].description}</p>
    <div className="absolute top-0 right-6 bg-orange-500 text-white rounded-full h-9 w-9 flex items-center justify-center text-sm">
      {data[2].id}
    </div>
  </div>
</div>






    </div>
          

    {/* From start to stretch */}
    <div className="flex justify-center">

    <div className="mb-20 mt-20">
      <img src="ourServices/map-start-to-end.svg" alt="" className="mt-10" />
    </div>

    </div>

  </div>
);
};

export default page;
