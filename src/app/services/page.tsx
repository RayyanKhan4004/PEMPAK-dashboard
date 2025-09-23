// import CustomHero from "@/components/common/CustomHero";
import Typography from "@/components/UI/Typography";
import React from "react";
import Image from "next/image";

let page = () => {
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

        <div className="flex flex-col gap-8">
          {[obj1.slice(0, 3), obj1.slice(3, 6)].map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-6">
              {row.map((item) => (
                <div
                  key={item.id}
                  className="relative border border-gray-300 rounded-lg text-center shadow-sm w-full overflow-hidden group px-[24px]"
                >
                  {/* hover background animation */}
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-[var(--color-primary)] transition-all duration-500 ease-in-out group-hover:h-full"></div>

                  {/* content */}
                  <div className="mb-4 relative z-10 pt-4">
                    <Image src={item.image} alt={item.title} className="m-auto" />
                    <Typography
                      variant="h4"
                      weight="b"
                      className="text-center block mt-6"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="p"
                      className="text-center block mt-4 pb-6"
                    >
                      {item.description}
                    </Typography>
                  </div>

                  {/* bottom line */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-[var(--color-primary)] rounded-b-lg"></div>
                </div>
              ))}
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
          <Image src="ourServices/map-start-to-end.svg" alt="" className="mt-10" />
        </div>

      </div>

    </div>
  );
};

export default page;
