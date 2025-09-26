// import CustomHero from "@/components/common/CustomHero";
import Typography from "@/components/UI/Typography";
import { services } from "@/components/UI/home/hero";
import React from "react";
import Image from "next/image";

const Page = () => {
  // const obj1 = [
  //   {
  //     id: 1,
  //     image: "/ourServices/service-1.svg",
  //     title: "Manufacturing",
  //     description:
  //       "We deliver high-quality manufacturing with precision, durability, and innovation at every stage.",
  //   },
  //   {
  //     id: 2,
  //     image: "/ourServices/service-2.svg",
  //     title: "Installation & Commissioning",
  //     description:
  //       "We deliver reliable installation and commissioning, ensuring smooth setup, optimal performance, and long-term efficiency.",
  //   },
  //   {
  //     id: 3,
  //     image: "/ourServices/service-3.svg",
  //     title: "Maintenance",
  //     description:
  //       "We provide expert maintenance to keep your systems running smoothly, safely, and efficiently.",
  //   },
  //   {
  //     id: 4,
  //     image: "/ourServices/service-4.svg",
  //     title: "Testing",
  //     description:
  //       "We provide reliable testing services to ensure safety, accuracy, and optimum performance of your systems.",
  //   },
  //   {
  //     id: 5,
  //     image: "/ourServices/service-5.svg",
  //     title: "Training",
  //     description:
  //       "We offer professional training to equip your team with the knowledge and skills for safe and efficient operations.",
  //   },
  //   {
  //     id: 6,
  //     image: "/ourServices/service-6.svg",
  //     title: "Energy Audit",
  //     description:
  //       "Identify energy waste, optimize efficiency, and reduce costs with our professional energy audit service.",
  //   },
  // ];

  const data = [
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
    },
    {
      id: 4,
      description: "Compliance of Relative International standards with localize input"
    },
    {
      id: 5,
      description: "Motivated staff & Workforce with wide variety of indispensable experiance"
    },
    {
      id: 6,
      description: "International Standards certification like ISO-9001:2008 & OHSAS 18001:2007"
    },
    {
      id: 7,
      description: "Committed Management with Customer oriented approach"
    },

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
      <section className="px-[120px] py-[100px]">
        <div className="">
          <Typography variant="h3" weight="b" className="text-center block">
            Explore Our Services
          </Typography>
          <Typography variant="p" className="text-center block pb-12">
            We provide innovative solutions designed to meet your needs with
            quality and reliability.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-lg shadow-lg relative overflow-hidden group bg-white text-gray-800"
            >
              {/* hover background animation */}
              <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                <div className="flex items-center justify-center">
                  <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl group-hover:bg-white relative">
                    {/* Default Icon */}
                    <Image
                      src={service.iconDefault}
                      alt={service.title}
                      width={48}
                      height={48}
                      className="absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                    />
                    {/* Hover Icon */}
                    <Image
                      src={service.iconHover}
                      alt={`${service.title} hover`}
                      width={48}
                      height={48}
                      className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2 mt-5">{service.title}</h3>
                <p className="text-center text-sm">{service.description}</p>
              </div>
              <div className="absolute inset-0 w-full h-full bg-[var(--color-primary)] transition-all duration-500 ease-in-out translate-y-full group-hover:translate-y-0"></div>
              <div className="absolute left-0 bottom-0 w-full h-[7px] bg-[var(--color-primary)]"></div>
            </div>
          ))}
        </div>

      </section>



      {/* Customer Satisfaction Assured Through */}
      <div className="block bg-gray-200 p-15 h-180">
        <div className="p-2 m-4">
          <Typography variant="h3" weight="b" className="text-center block">
            Customer Satisfaction Assured Through
          </Typography>
        </div>

        <Typography variant="p" className="text-center block">
          We ensure customer satisfaction through quality products, reliable services, and a commitment to exceeding expectations.
        </Typography>

        <div className="p-3 m-10 flex space-x-49 space-y-10 overflow-x-auto scroll-hide">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`min-w-[220px] h-53 rounded-full flex items-center justify-center relative bg-white shadow-xl ${index % 2 !== 0 ? "mt-20" : ""
                }`}
            >
              <p className="text-center p-3">{item.description}</p>
              <div className="absolute top-0 right-6 bg-[var(--color-primary)] text-white rounded-full h-9 w-9 flex items-center justify-center text-sm">
                {item.id}
              </div>
            </div>
          ))}
        </div>
      </div>




      {/* From start to stretch */}
      <div className="flex justify-center">

        <div className="mb-20 mt-20">
          <Image src="/ourServices/map-start-to-end.svg" alt="" className="mt-10" width={800} height={400} />
        </div>

      </div>

    </div>
  );
};

export default Page;
