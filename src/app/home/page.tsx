"use client";
// app/page.tsx
import Footer from "@/components/Footer";
import {
  Signatureprojects,
  btn1,
  clientlogo,
  news1,
  products1,
  services,
  team1,
  team2,
} from "@/components/UI/home/hero";
import Typography from "@/components/UI/Typography";
import Link from "next/link";
import asclepius from "./assets/Asclepius.svg";
import chip from "./assets/chip.svg";
import clipbord from "./assets/clipbord.svg";
import cube from "./assets/Cube.svg";
import hand from "./assets/hand.svg";
import handhaeat from "./assets/HandHeart.svg";
import info from "./assets/Info.svg";
import qutationLeft from "./assets/ql.svg";
import quationRight from "./assets/qr.svg";
import leaf from "./assets/leaf.svg";
import flower from "./assets/flower.svg";
import sheld from "./assets/sheld.svg";
import Image from "next/image";
import bage from "./assets/bage.svg";
import landingCircule from "./assets/landingCircule.png";
import { useEffect, useState } from "react";
// import landingCircule from "./assets/landingCircule.png";
// team members interface
interface TeamMember {
  _id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

// Blos interface
interface ItemProps {
  _id: string;
  name: string;
  pf: string;
  title: string;
  des: string;
  date: string;
  ownerImage?: string;
  image: string;
  description?: string;
}

async function getBlogs() {
  const res = await fetch("https://pempak-api.vercel.app/api/blogs");
  if (!res.ok) throw new Error("Failed tp fetch Blogs");
  console.log(res);
  return await res.json();
}

async function getTeamMembers() {
  const res = await fetch("https://pempak-api.vercel.app/api/teams");
  if (!res.ok) throw new Error("Failed to fetch team members");
  // console.log(res)
  return await res.json();
}

export default function Homepage() {
  // stats
  const [teams, setTeams] = useState<TeamMember[]>([]);
  const [blogData, setBlogdata] = useState<ItemProps[]>([]);
  const [ceoData, setCeoData] = useState<{
    name: string;
    image: string;
  } | null>(null);

  // effects
  useEffect(() => {
    (async () => {
      const teamMembers = await getTeamMembers();
      setTeams(teamMembers);

      // Find the CEO from the team data
      const ceo = teamMembers.find(
        (member: TeamMember) => member.role === "Chief Executive Officer (CEO)"
      );
      if (ceo) {
        setCeoData({
          name: ceo.name,
          image: ceo.image || "/placeholder-avatar.jpg",
        });
      }

      setBlogdata(await getBlogs());
    })();
  }, []);

  const [hover, setHover] = useState<string>('');
  return (
    <>
      <section className="container relative bg-gray-50 bg-[url('/Block/Front%20images/home-main.png')] min-w-screen bg-cover bg-center text-white">
        <div className="mx-auto px-[120px] py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
          <div>
            <h4 className="text-[32px] leading-[40px] tracking-wide text-[var(--color-black)] uppercase font-semibold">
              Perfect Elektro Mek <br />
              <span
                className=" pt-0 font-[400]"
                style={{ borderTop: " 2px solid #f16336" }}
              >
                Pakistan (Pvt.) Limited
              </span>
            </h4>

            <div className="w-12 h-1 bg-[var(--color-primary)] my-4"></div>

            <h1 className=" text-[56px] font-extrabold text-[var(--color-black)] leading-tight">
              An Excellent Legacy <br /> Of Quarter Century Plus
            </h1>

            <p className="mt-6 text-[var(--color-light-black)]  text-[18px] leading-relaxed">
              <strong>
                Perfect Elektro Mek Pakistan Pvt. Limited (PEMPAK)
              </strong>{" "}
              Group <br />
              develops electric supplies, solutions and solar concepts, that{" "}
              <br /> are beneficial to the environment, people, and nature.
            </p>

            <div className="mt-8 flex space-x-4">
              <button className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold shadow hover:bg-[var(--color-primary)] transition">
                <Link href="/services"> Our Services </Link>
              </button>
              <button className="px-6 py-3 bg-white text-[var(--color-black)] rounded-lg font-semibold shadow hover:bg-gray-100 transition">
                <Link href="/about"> Learn More </Link>
              </button>
            </div>
          </div>
          {/* <Typography variant="p" color="primary" weight="semi-b">fhfjf</Typography> */}
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src={landingCircule}
                alt="landingCircule"
                width={400}
                height={500}
                className="absolute z-[2] -top-10 -left-1/2"
              />
              <Image
                src="/Block/Front images/home-f1.jpg"
                alt="Engineer"
                width={400}
                height={500}
                className="rounded-xl shadow-lg z-[3]"
              />

              <div className="absolute -top-6 -left-6 bg-white shadow-md px-4 py-2 rounded-lg z-[3] w-[200px] h-[86px] flex justify-center flex-col">
                <p className="text-xl font-bold text-[var(--color-black)]">
                  25+
                </p>
                <p className="text-sm text-[var(--color-light-black)]">
                  Years Of Experience
                </p>
              </div>

              <div className="absolute top-1/3 -left-10 bg-white shadow-md px-4 py-2 rounded-lg  z-[3] w-[200px] h-[86px] flex justify-center flex-col">
                <p className="text-xl font-bold text-[var(--color-black)]">
                  3000+
                </p>
                <p className="text-sm text-[var(--color-light-black)]">
                  Project Executed
                </p>
              </div>

              <div className="absolute bottom-6 -left-6 bg-white shadow-md px-4 py-2 rounded-lg w-[200px] h-[86px] flex justify-center flex-col">
                <p className="text-xl font-bold text-[var(--color-black)]">
                  500+
                </p>
                <p className="text-sm text-[var(--color-light-black)]">
                  Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-[var(--color-primary)] font-semibold text-center pt-[100px] pb-[50px] text-[20px]">
        About us{" "}
      </h1>

      <section className="w-full   px-[120] relative ">
        {/* ccccccccccccccccccccccccccccccccc */}
        <Image
          src={info}
          alt=""
          className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-[30%] -z-10"
          // width={}
          // height={}
        />
        <Image
          src={landingCircule}
          alt=""
          className="absolute -top-10 -left-[30px] -z-[2]"
          // width={}
          // height={}
        />
        <div className="flex justify-between gap-[70px] items-center ">
          <div className="w-fit">
            <Image
              src="/Block/homeimg/homeabout1.jpg"
              alt="Team working"
              className="rounded-lg shadow-lg"
              width={565}
              height={420}
            />
          </div>

          <div className="w-[50%]">
            <h2 className="text-3xl md:text-4xl mb-4 leading-relaxed font-semibold">
              Passionate and Sustainable
            </h2>
            <p className="text-[var(--color-black)] mb-6 text-justify line-">
              We are proud to offer a wide range of solar energy services,
              including solar panel installation, maintenance, and repair.
            </p>
            <p className="text-[var(--color-black)] mb-6 text-justify leading-relaxed">
              Our commitment to sustainability is at the heart of everything we
              do. We believe that solar energy is the key to a more sustainable
              future, and we are dedicated to making it accessible to everyone.
              That&apos;s why we offer competitive pricing and financing options
              to help make solar energy more affordable for our clients.
            </p>
            <button className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold shadow hover:bg-[var(--color-primary)] transition">
              <Link href="/about"> Learn More → </Link>
            </button>
          </div>
        </div>
      </section>

      <section className=" py-[50px] px-[120px]">
        <div className=" flex justify-between gap-[70px]">
          <div className="grid grid-cols-2 gap-7 w-[50%]">
            <div className="flex items-start gap-4">
              <div className="bg-[var(--color-primary)] p-3 rounded-lg text-white min-w-[50px] w-[50px] h-[50px]">
                <Image src={hand} alt="" className="" />
              </div>
              <div>
                <h4 className="font-semibold ">Quality Policy</h4>
                <p className="text-[var(--color-light-black)] text-sm">
                  Ensuring top-notch quality and standards in every project.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[var(--color-primary)] p-3 rounded-lg text-white min-w-[50px] w-[50px] h-[50px]">
                <Image src={clipbord} alt="" className="!w-[25px] !h-[25px]" />
              </div>
              <div>
                <h4 className="font-semibold ">Customer Policy</h4>
                <p className="text-[var(--color-light-black)] text-sm">
                  Customer satisfaction is our main goal.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[var(--color-primary)] p-3 rounded-lg text-white min-w-[50px] w-[50px] h-[50px]">
                <Image src={handhaeat} alt="" width={32} height={32} />
              </div>
              <div>
                <h4 className="font-semibold ">Health & Safety</h4>
                <p className="text-[var(--color-light-black)] text-sm">
                  Ensuring safe and responsible working conditions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[var(--color-primary)] p-3 rounded-lg text-white min-w-[50px] w-[50px] h-[50px]">
                <Image src={asclepius} alt="" width={32} height={32} />
              </div>
              <div>
                <h4 className="font-semibold ">Environment Policy</h4>
                <p className="text-[var(--color-light-black)] text-sm">
                  Committed to sustainable practices in all projects.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[var(--color-primary)] p-3 rounded-lg text-white min-w-[50px] w-[50px] h-[50px]">
                <Image src={cube} alt="" width={32} height={32} />
              </div>
              <div>
                <h4 className="font-semibold ">Health & Safety</h4>
                <p className="text-[var(--color-light-black)] text-sm">
                  Ensuring safe and responsible working conditions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[var(--color-primary)] p-3 rounded-lg text-white min-w-[50px] w-[50px] h-[50px]">
                <Image src={chip} alt="" width={32} height={32} />
              </div>
              <div>
                <h4 className="font-semibold ">Environment Policy</h4>
                <p className="text-[var(--color-light-black)] text-sm">
                  Committed to sustainable practices in all projects.
                </p>
              </div>
            </div>
          </div>

          <div className="w-fit">
            <Image
              src="/Block/homeimg/homeabout2.jpg"
              alt="Meeting"
              className="rounded-lg shadow-lg"
              width={565}
              height={420}
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold">25+</h3>
            <p>Years of Excellence</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">3000+</h3>
            <p>Project Executed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p>Customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">2+</h3>
            <p>Partnerships</p>
          </div>
        </div>
      </section>

      <div className="w-full h-48 md:h-96 bg-[url('/Block/homeimg/greenenergy.png')] bg-cover bg-center rounded-lg shadow-lg flex items-center justify-center">
        <div className=" text-center  text-white text-shadow-white line-height:1.4">
          <h1 className="text-5xl font-bold">Green Energy </h1>

          <p className="items-center mt-4 max-w-md text-center leading-snug">
            Secondary power systems i.e. generators are used in industries or
            commercial buildings and hospitals as emergency, prime or continuous
            power supply when utility power is lost.
          </p>
        </div>
      </div>

      <section className="px-[120px] py-[100px] bg-[#DFDFDF]">
        <section className="">
          <div>
            <h3 className="text-[var(--color-primary)] font-extrabold mt-[40px]">
              Our Products
            </h3>

            <div className="flex justify-between items-center mt-4">
              <div>
                <h1 className="text-[40px] font-bold">Explore Our Products</h1>
                <p className="mt-2 font-normal text-[#474747]">
                  Built with quality components under stringent manufacturing
                  standards
                </p>
              </div>

              <div className="flex mt-5">
                <button className={btn1}>
                  <Link href="/switchgear-controleger">
                    {" "}
                    View All Products →{" "}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="pt-[50px] grid md:grid-cols-3 gap-8 justify-items-center">
            {products1.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[16px] p-[24px] w-fit shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300 hover:bg-[var(--color-primary)] hover:text-white relative"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={336}
                  height={280}
                  className="w-[336px] h-[280px] object-cover  rounded-[8px]"
                />
                <div className="pt-4 pb-10 text-left w-[280px]">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <button className=" mt-2 cursor-pointer absolute bottom-6 left-6">
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className=" px-[120px] py-[100px]">
        <p className="text-[var(--color-primary)] text-center font-semibold">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-2">
          Explore Our Services
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-8">
          We provide innovative solutions designed to meet your needs with
          quality and reliability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-lg shadow-lg relative overflow-hidden group bg-white text-gray-800"
              onMouseEnter={() => setHover(`${service.id}`)}
              onMouseLeave={() => setHover("")}
            >
              {/* hover background animation */}
              <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                <div className="flex items-center justify-center">
                  <div className="w-24 h-24 bg-[var(--color-primary)] rounded-full flex items-center justify-center group-hover:bg-white text-white text-2xl">
                    {hover === `${service.id}` ? (
                      <Image src={service.iconHover} className="" alt="" />
                    ) : (
                      <Image src={service.iconDefault} className="" alt="" />
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2 mt-5">
                  {service.title}
                </h3>
                <p className="text-center text-sm">{service.description}</p>
              </div>
              <div className="absolute inset-0 w-full h-full bg-[var(--color-primary)] transition-all duration-500 ease-in-out translate-y-full group-hover:translate-y-0"></div>
              <div className="absolute left-0 bottom-0 w-full h-[7px] bg-[var(--color-primary)]"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[100px] px-[120px] bg-[#FCEDE6] ">
        <div className="container max-w-7xl mx-auto px-4 text-center space-y-4">
          <Typography color="primary" variant="h4" weight="semi-b">
            <h2>Our Team</h2>
          </Typography>

          <h1 className="text-[40px] font-semibold text-center">Team PEMPAK</h1>
          <p className="font-[400]">
            A passionate group of professionals dedicated to driving PEMAPK’s
            vision forward with expertise and commitment.
          </p>

          {/* Show the last four team members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {teams.slice(-4).map((item: TeamMember, ind: number) => (
              <div
                key={item._id + ind}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl w-[282px] h-[357px]"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={282}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="pl-4 py-[16px] text-left">
                  <h3 className="text-xl font-semibold text-[var(--color-black)]">
                    {item.name}
                  </h3>
                  <p className="text-[var(--color-light-black)] text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Button */}
        <section className="text-center pt-[50px]">
          <button className="bg-[var(--color-primary)] cursor-pointer text-white font-semibold py-2 px-8 rounded-xl shadow-lg hover:bg-[var(--color-primary)] hover:scale-105 transition transform duration-300 ease-in-out">
            <Link href="/our-team">
              View All Team <span className="text-lg">→</span>
            </Link>
          </button>
        </section>
      </section>

      {/* CEO Message */}
      <section className="bg-[#F16336] min-h-[723px] flex flex-col items-center justify-center py-[100px] relative">
        <Image
          className="w-[150px] left-[100px] top-[10%] absolute"
          src={qutationLeft}
          alt="CEO"
          width={150}
          height={150}
        />
        <Image
          className="w-[150px] right-[100px] top-[10%] absolute"
          src={quationRight}
          alt="CEO"
          width={150}
          height={150}
        />
        <div className="flex flex-col items-center justify-between text-white">
          <Image
            className="rounded-full w-[150px] mt-8"
            src="/Block/Teampempak/pic1.jpg"
            alt="CEO"
            width={150}
            height={150}
          />
          <h1 className="text-5xl mt-6">Message from our CEO</h1>
          <div className="flex justify-center items-center mt-3">
            <p className="text-center text-[var(--color-light-gray)] px-[120px] py-[32px]">
              Welcome to PEMPAK <br />
              <br />
              We thrive in the dynamic business landscape, driven by our
              unwavering commitment with perfection of equipment focused on
              client’s convenience and satisfaction.
              <br />
              <br />
              Our self-motivated team is adapting to evolving client needs, we
              have enhanced capabilities in key areas, all while following
              principles of diversity, inclusivity, and equality. Despite of
              various market challenges, our team’s expertise in management at
              all level ensures consistent in time delivery of Quality
              equipment.
              <br />
              <br />
              We have expanded and focused on crucial domains like reverse
              engineering, market analysis, R&D, and technology scouting. This
              resulted in a remarkable growth in all segments of business.
              <br />
              <br />
              This success story of quarter century plus legacy speaks to the
              dedication and resilience of PEMPAK team, here to continued growth
              and excellence.
              <br />
              <br />
              May Allah help us in our deeds <br />
              <br />
              May Allah help us in our deeds
            </p>
          </div>
          <h3 className="text-2xl mt-6">Shahid Ali Malik</h3>
          <p className="font-normal mt-1">Chief Executive Officer (CEO)</p>
        </div>
      </section>

      {/* People at Work */}
      <section className="py-[100px] px-[120px]">
        <div className="text-center">
          <h3 className="text-[#F16336] text-[20px] font-semibold">
            People at Work
          </h3>
          <h1 className="text-[40px] font-semibold">
            Our Skilled Team In Action
          </h1>
          <p className="text-[18px] font-normal">
            Dedicated minds and skilled hands working together to turn ideas
            into impact.
          </p>
        </div>

        <div className="container max-w-7xl mx-auto flex flex-wrap justify-center gap-12 pt-[50px]">
          {team2.map((item, index) => {
            const shortText = item.description.includes("elit.")
              ? item.description.split("elit.")[0] + "elit."
              : item.description;

            return (
              <div
                key={index}
                className={` w-[384px] h-[386px] rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl px-4 py-4 border-1 border-[#DFDFDF]`}
              >
                <Image
                  src={item.image}
                  alt={item.description}
                  width={384}
                  height={278}
                  className="w-full object-cover rounded-t-2xl h-[278px]"
                />
                <div className="p-4">
                  <p className="text-sm font-normal leading-relaxed">
                    {shortText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className=" text-center px-[120px] py-[100px]">
        <div>
          <h1 className="text-[#F16336] text-20px font-semibold">Arial View</h1>
          <h1 className="font-semibold text-[40px]">We Are Here</h1>
          <p className="text-center text-[18px] font-normal text-[var(--color-light-black)]">
            A stunning bird’s-eye perspective showcasing the full scale and
            beauty of our operations.
          </p>
          <Image
            className="block mx-auto mt-8 rounded-2xl"
            src="/Block/Images/pic1.png"
            alt=""
            width={1200}
            height={559}
          />
          <h1 className="text-[32px] font-bold mt-5 text-[#474747]">
            12,000 sq.m Facility
          </h1>
          <p className="text-[18px]">4650 sq.m covered</p>
        </div>
      </section>

      <section className="bg-[#F16336] text-white py-[100px] px-[120px]">
        <div className="container max-w-7xl ">
          <div>
            <p className="font-semibold text-[20px]">Our Certificate </p>
            <h1 className="text-[40px]">Certified & Trusted</h1>
            <p>
              Proudly serving leading clients with successful projects <br />
              across diverse industries.
            </p>
          </div>

          <div className="pt-20 flex justify-between">
            <div>
              <Image
                className="opacity-50"
                src="/Block/Certification/pic1.png"
                alt=""
                width={400}
                height={400}
              />
            </div>

            <div className=" w-[500px]">
              <div className="flex justify-between py-[24px]">
                <div>
                  <p className="pb-[12px] ">Quality Management</p>
                  <div className="flex justify-between gap-12 items-center text-[32px]">
                    <h1>ISO 9001:2015</h1>
                    <span className="text-[16px]">/2012</span>
                  </div>
                </div>
                <Image src={flower} alt="" width={32} height={32} />
              </div>
              <hr />
              <div className="flex justify-between py-[24px]">
                <div>
                  <p className="pb-[12px] ">National Electrical Contractor</p>
                  <div className="flex justify-between gap-12 items-center text-[32px]">
                    <h1>NECA Member</h1>
                    <span className="text-[16px]">/2012</span>
                  </div>
                </div>
                <Image src={sheld} alt="" width={32} height={32} />
              </div>
              <hr />
              <div className="flex justify-between py-[24px]">
                <div>
                  <p className="pb-[12px] ">Green Building Standards</p>
                  <div className="flex justify-between gap-12 items-center text-[32px]">
                    <h1>LEED Certified</h1>
                    <span className="text-[16px]">/2012</span>
                  </div>
                </div>
                <Image src={leaf} alt="" width={32} height={32} />
              </div>
              <hr />
              <div className="flex justify-between py-[24px]">
                <div>
                  <p className="pb-[12px] ">Safety Standards</p>
                  <div className="flex justify-between gap-12 items-center text-[32px]">
                    <h1>OSHA Compliant</h1>
                    <span className="text-[16px]">/2012</span>
                  </div>
                </div>
                <Image src={bage} alt="" width={32} height={32} />
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[100px] px-[120px]">
        <div className="container mx-auto max-w-7xl text-center space-y-4">
          <p className="text-[#F16336] font-semibold text-[20px]">
            Our Major Client
          </p>
          <h1 className="text-[40px] font-semibold">Client Who trust us </h1>
          <p>
            We are proud to serve leading brands and organizations across
            diverse industries.
          </p>

          <div className="grid grid-cols-4 gap-6">
            {clientlogo.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center justify-center p-4 border-1 rounded-2xl shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition duration-300`}
              >
                <Image
                  src={item.image}
                  alt=""
                  width={120}
                  height={80}
                  className={`max-h-20 object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#DFDFDF] py-[100px] px-[120px]">
        <div className="container mx-auto max-w-7xl text-center space-y-4 ">
          <p className="text-[#F16336] font-semibold text-[20px]">
            Our Major Projects
          </p>
          <h1 className="text-[40px] font-semibold">Our Signature Projects </h1>
          <p>
            Showcasing the projects that highlight our expertise and commitment
            to excellence..
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 ">
            {Signatureprojects.map((item) => (
              <div
                key={item.id}
                className=" space-y-4 text-left px-4 py-4 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 bg-white"
              >
                <Image
                  className="w-full h-64 object-cover rounded-lg"
                  src={item.image}
                  alt={`Signature project ${item.id}`}
                  width={400}
                  height={256}
                />
                <h1 className="text-[20px] font-semibold">{item.title}</h1>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className=" bg-white py-[100px] px-[120px] min-w-screen">
        <div className="container max-w-7xl mx-auto grid grid-cols-2">
          <div className="space-y-4 font-semibold">
            <h1 className="text-[#F16336]">News & Updates</h1>
            <h1 className="text-[40px]">Updates & Announcements</h1>
            <p className="font-normal">
              Stay informed with our latest news, updates, and announcements.
            </p>
          </div>
          <div className="text-right mt-20">
            <button className={btn1}>
              <Link href="/blog"> View all News & Updates → </Link>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grd-cols-2 lg:grid-cols-3 gap-6 mt-[50px]">
          {blogData.slice(0, 3).map((item: ItemProps, ind: number) => (
            <Link
              href={`/blog/${item._id}`}
              key={item._id}
              className="border group border-[#DFDFDF] hover:bg-[var(--color-primary)] transition-all duration-500 p-6 rounded-[16px] w-full max-w-[384px] mx-auto block hover:shadow-md relative"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={384}
                height={192}
                className="w-full h-48 object-cover rounded-[16px]"
              />
              <div className="p-4">
                <p className="text-[var(--color-primary)] group-hover:text-[var(--color-light-gray)] text-[14px] transition-all duration-500">
                  {item.date.split("T")[0]}
                </p>
                <h1 className="text-[20px] group-hover:text-[var(--color-white)] font-semibold text-[#151515] mt-2 transition-all duration-500">
                  {item.title}
                </h1>
                <p className="text-[#474747] text-sm mt-1 group-hover:text-[var(--color-light-gray)] transition-all duration-500 pb-10">
                  {item.description
                    ? item.description.split("").slice(0, 100).join("") + "..."
                    : "No description available"}
                </p>
                <div className="text-[#151515] flex items-center gap-2 mt-4 absolute bottom-6 left-6">
                  <Image
                    src={
                      item.ownerImage ||
                      ceoData?.image ||
                      "/placeholder-avatar.jpg"
                    }
                    alt={item.name || ""}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <p className="text-[var(--color-black)] text-sm font-medium  group-hover:text-[var(--color-white)]">
                    {item.name || ceoData?.name || "Author"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
