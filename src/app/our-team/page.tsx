"use client"
// import CustomHero from "@/components/common/CustomHero";
// import Footer from "@/components/Footer";
// import { ourservice1 } from "@/components/UI/home/hero";
import Typography from "@/components/UI/Typography"
import Image from "next/image";
import { useEffect, useState } from "react";


interface TeamMember {
  _id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

async function getTeamMembers() {
  const res = await fetch('https://pempak-api.vercel.app/api/teams');
  if (!res.ok) throw new Error('Failed to fetch team members');
  return await res.json();
}

export default function OurTeamPage() {
  // const teamMembers =  getTeamMembers();


  // states 
  const [ourservice1, setOurservice1] = useState<TeamMember[]>([])
  //effects 
  useEffect(() => {
    (async () => {
      setOurservice1(await getTeamMembers());
    })();
    //  getTeamMembers();
    //  setOurservice1( getTeamMembers());
  }, [])
  // utils fx 
  const ceo = ourservice1?.find((member: TeamMember) =>
    member.role.toLowerCase().includes('ceo') ||
    member.role.toLowerCase().includes('chief executive officer')
  );

  const directors = ourservice1?.filter((member: TeamMember) =>
    member.role.toLowerCase().includes('director') &&
    !member.role.toLowerCase().includes('ceo')
  );
  return (
    <>

      <div className="relative h-[60vh]">
        <div className="absolute inset-0 bg-[url('/Block/Teampempak/ourteammain.png')] bg-cover bg-center z-0" />

        <div className=" absolute inset-0 z-0" />

        <div className="container max-w-7xl mx-auto pt-15 relative p-10 text-white ">
          <h1 className="text-5xl font-bold mt-28">Our Team</h1>
          <p className="w-[20vw] mt-5 font-bold ">
            A skilled and dedicated team driven by passion, innovation, and collaboration.
          </p>
        </div>
      </div>

      <section className="container w-7xl mx-auto mt-15 ">

        <div className="grid grid-cols-2">

          <div>
            <Image
              className="h-[635px] w-[565px] bg-[#DCE3ED] rounded-2xl object-cover"
              src={ceo?.image || "/Block/Our team/pic1.png"}
              alt={ceo?.name || "Chief Executive Officer (CEO)"}
              width={565}
              height={635}
            />
          </div>

              <div className="space-y-4">
                    <Typography variant="h2" weight="b" color="dark"> {ceo?.name}</Typography> <br />
                    <Typography variant="h4" weight="semi-b" color="primary">Chief Executive Officer (CEO)</Typography> <br />
                    <strong>PERFECT ELEKTRO MEK PAKISTAN (PRIVATE) LIMITED (PEMPAK) </strong>
                    <p>was established in the year 2000 as Distribution. A team of professionals joined hands to fulfill the market needs and challenges of the new manufacturer of complete range of LV & MV SWITCHGEARS & CONTROLGEARS for Reliable Power millennium in the corporate world. All effort made at PEMPAK are focused on perfection of the equipment and client&apos;s convenience.</p>


                     <strong>PERFECT ELEKTRO MEK PAKISTAN (PRIVATE) LIMITED (PEMPAK) </strong> 
                    <p>was established in the year 2000 as Distribution. A team of professionals joined hands to fulfill the market needs and challenges of the new manufacturer of complete range.</p>
                 <Typography variant="h3" weight="semi-b" color="dark"> Experience</Typography> <br />

            <div className="mt-5 grid grid-cols-1 gap-6">
              <div className="flex items-start space-x-3">
                <Image src="/Block/Our team/Vector.png" alt="Leader Icon" className="w-8 h-8" width={32} height={32} />
                <p className="text-[var(--color-light-black)] text-base">
                  Proven leader with years of industry expertise.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <Image src="/Block/Our team/Vector.png" alt="Vision Icon" className="w-8 h-8" width={32} height={32} />
                <p className="text-[var(--color-light-black)] text-base">
                  Visionary mindset driving growth and innovation.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <Image src="/Block/Our team/Vector.png" alt="Excellence Icon" className="w-8 h-8" width={32} height={32} />
                <p className="text-[var(--color-light-black)] text-base">
                  Committed to excellence and long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-10 px-6 py-8 bg-gray-100">
          <div className="w-1/2 pr-4">
            <h2 className="text-3xl font-bold">
              Board Of Directors
            </h2>
          </div>

          <div className="w-1/2 pl-4">
            <p className="text-[var(--color-light-black)] break-words whitespace-normal">
              Our Board of Directors provides strategic guidance, leadership, and oversight to drive sustainable growth.
            </p>
          </div>
        </div>


        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto px-6">
            {directors.map((member: TeamMember, index: number) => (
              <div
                key={member._id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
                <div
                  className={`w-full h-[400px] flex items-center justify-center 
          ${index % 2 === 0 ? "bg-[#e0e4ee]" : "bg-[#FCEDE6]"}`}>
                  <Image
                    className="h-full object-contain"
                    width={384}
                    height={364}
                    src={member.image || "https://res.cloudinary.com/dtj45icg0/image/upload/v1758007183/ImagePlaceholder_iin1a8.png"}
                    // src={
                    //   member.image && member.image.trim() !== ""
                    //     ? member.image
                    //     : "https://res.cloudinary.com/dtj45icg0/image/upload/v1758007183/ImagePlaceholder_iin1a8.png"
                    // }
                    alt={member.name}
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h1 className="text-xl font-semibold">{member.name}</h1>
                  <Typography variant="p" color="primary">
                    {member.role}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="text-center">
            <Typography variant="h2" weight="b" >
              Explore Our Services
            </Typography>
            <Typography variant="p" > <br />
              We provide innovative solutions designed to meet your needs with quality and reliability.
            </Typography>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
            {ourservice1.map((member: TeamMember, index: number) => (
              <div
                key={member._id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2`} >
                <Image
                  className={`object-contain  border-gray-300 rounded-xl mb-4 h-[353px] w-full
          `}
                  // src={member.image }
                  src={member.image || "https://res.cloudinary.com/dtj45icg0/image/upload/v1758007183/ImagePlaceholder_iin1a8.png"}
                  alt={member.name}
                  width={400}
                  height={353}
                />
                <div className="px-3 py-3 flex flex-col items-start">
                  <Typography variant="h4" weight="b" >
                    {member.name}
                  </Typography>
                  <Typography variant="h4" >
                    {member.role}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
