// import Typography from "@/components/UI/Typography";
import Image from "next/image";
import eye from '../../../public/others/eye-icon.svg'
import mission from '../../../public/others/our-missions.svg'
import value from '../../../public/others/our-values.svg'
import wapda from '../../../public/registration/registration-1.svg'
import polish from '../../../public/registration/registration-2.svg'
import paec from '../../../public/registration/registration-3.svg'
import paf from '../../../public/registration/registration-4.svg'
import wasa from '../../../public/registration/registration-5.svg'
import cw from '../../../public/registration/registration-6.svg'
import ffp from '../../../public/registration/registration-7.svg'
import pcs from '../../../public/registration/registration-8.svg'

import CoporatePolicy from "../../components//CoporatePolicy";
// import { Eye } from 'lucide-react';

export default function AboutPage() {

  const ourVision = [
    {
      id: 1,
      icon: eye,
      title: "Our Vision",
      desc: "PEMPAK firmly believes that perfection in system leads towards amplified system efficiency through highly qualified/ motivated staff to produce reliable output and safe working environment. To uphold motivation level and generate sense of proprietorship amongst the workers at PEMPAK, the corporate growth is linked proportionately to the individual's growth."
    },
    {
      id: 2,
      icon: mission,
      title: "Our Mission",
      desc: "PEMPAK is committed to delivering innovative, sustainable, and reliable solutions in the field of electrical and solar technologies. By integrating advanced systems, skilled manpower, and continuous improvement, we strive to meet customer expectations while ensuring environmental responsibility and community well-being."
    },
    {
      id: 3,
      icon: value,
      title: "Our Values",
      desc: "At PEMPAK, we value integrity, innovation, and teamwork. We believe in empowering our people through knowledge and ownership, fostering a culture of safety and accountability. Our commitment to excellence drives us to create long-term partnerships, where corporate success aligns with the growth and prosperity of every individual."
    },
  ]

  const registrationData = [
    {
      id:1,
      image: wapda,
      desc:"WAPDA and subsidiaries like NTDC, LESCO, IESCO, FESCO, MEPCO, HESCO, PESCO, GEPCO and QESCO etc."
    },
    {
      id:2,
      image: polish,
      desc:"Engineer in Chief Branch with all formation like MES (Army, Air, Navy & DP) FWO and NLC etc."
    },
    {
      id:3,
      image: paec,
      desc:"Pakistan Atomic Energy Commission (Various formations)"
    },
    {
      id:4,
      image: paf,
      desc:"WAPDA and subsidiaries like NTDC, LESCO, IESCO, FESCO, MEPCO, HESCO, PESCO, GEPCO and QESCO etc."
    },
    {
      id:5,
      image: wasa,
      desc:"Water & Sanitary Agencies (WASA's) of all development authorities."
    },
    {
      id:6,
      image: cw,
      desc:"C & W (Building Department)."
    },
    {
      id:7,
      image: ffp,
      desc:"Fuji Foundation and many other Autonomous bodies."
    },
    {
      id:8,
      image: pcs,
      desc:"Prestigious corporate sector of Pakistan including industries of various cross section &commercial institutes."
    },
  ]

  return (
    <div>
      <div className="relative h-[60vh]">
        {/* Background image layer */}
        <div className="absolute inset-0 bg-[url('/about-bg.svg')] bg-cover bg-center z-0" />

        {/* Optional: dark overlay for contrast */}
        <div className="absolute inset-0 z-0" />

        {/* Content layer */}
        <div className="relative p-10 text-white mx-9">
          <h1 className="text-4xl font-bold mt-8">About Page</h1>
          <p className="w-[20vw] mt-10">
            <b>Perfect Elektro Mek Pakistan Pvt. Limited (PEMPAK)</b> Group
            develops electric supplies, solutions and solar concepts that are
            beneficial to the environment, people, and nature.
          </p>
        </div>
      </div>

      <div className="space-y-20 space-x-3 px-[120px] py-[100px] flex flex-col items-center justify-center gap-[50px]">
        {/* Section 1: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-x-[70px]">
          <Image
            src="/others/team-project.svg"
            alt="Not found"
            width={565}
            height={250}
          // className="h-[250px] w-[70vw] rounded-2xl"
          />
          <div className="w-[565px]">
            <h1 className="font-bold text-4xl mb-6 pb-2">Company</h1>
            <p>
              <b>PERFECT ELEKTRO MEK PAKISTAN (PRIVATE) LIMITED (PEMPAK)</b>
              <br />
              was established in the year 2000 as Distribution. A team of
              professionals joined hands to fulfill the market needs and
              challenges of the new manufacturer of complete range of LV & MV
              SWITCHGEARS & CONTROLGEARS for Reliable Power millennium in the
              corporate world. All effort made at PEMPAK are focused on
              perfection of the equipment and client&apos;s convenience.
            </p>
          </div>
        </div>

        {/* Section 2: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-x-[70px]">
          <Image
            src="/others/team-project.svg"
            alt="Not found"
            width={565}
            height={250}
          />
          <div className="w-[565px]">
            <p>
              <strong>PEMPAK</strong> is fully geared up and equipped with the
              requisite potentials to prosper in the electric industry while
              complying with the international standards in local environment.
              In this revolutionary era, the electric industry has endured a
              complete transformation; therefore, it is imperative to share our
              proficiency to help you meet the ever changing demands /
              requirements of the industry. The affective Customer Service is
              the most gratifying thing we do here.
            </p>
          </div>
        </div>

        {/* Section 3: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-x-[70px]">
          <Image
            src="/others/team-project.svg"
            alt="Not found"
            width={565}
            height={250}
          />
          <div className="w-[565px]">
            <p>
              <strong>PEMPAK</strong> aims to attain high degree of
              customer&apos;s satisfaction and appreciates working in the viable
              environment of electric industry to provide creative solutions to
              our valued customers through a convivial program. We look forward
              for feedback from our customers for reformist improvement to
              ensure customer&apos;s satisfaction. Despite of the recent
              stagnations in the energy sector PEMPAK has revealed progressive
              growth due to its employee&apos;s sheer hard work and commitment
              to excellence in communal obligations.
            </p>
          </div>
        </div>
      </div>

      <div className="px-[120px] py-[100px] bg-orange-100">
        <div>
          <h1 className="text-2xl font-bold text-center">Corporate Vision</h1>
          <p className="text-center mt-3">
            Our vision drives everything we do, shaping our commitment to
            innovation and excellence.
          </p>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-md">
          <div className="flex flex-col md:flex-row">
            {ourVision.map((vision, index) => (
              <>
                <div key={vision.id} className="p-8 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Image src={vision.icon} alt={vision.title} width={28} height={28} />
                    <h2 className="font-bold text-lg">{vision.title}</h2>
                  </div>
                  <p className="text-[15px] leading-6 text-gray-700">{vision.desc}</p>
                </div>
                {index < ourVision.length - 1 && (
                  <div className="flex items-center justify-center" key={`divider-${vision.id}`}>
                    {/* Vertical divider on desktop */}
                    <div className="hidden md:block w-[2px] h-[70%] self-center bg-gradient-to-b from-[#F16336]/20 via-[#F16336] to-[#F16336]/20"></div>
                    {/* Horizontal divider on mobile */}
                    <div className="md:hidden h-[2px] w-[70%] mx-auto bg-gradient-to-r from-[#F16336]/20 via-[#F16336] to-[#F16336]/20"></div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>

      {/* Final Section */}

      <div className="space-y-20 space-x-3 px-[120px] py-[100px]">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          <Image
            src="/others/team-project.svg"
            alt="Not found"
            width={500}
            height={250}
          />
          <div className="w-[40vw]">
            <h1 className="font-bold text-4xl mb-6 pb-2">Quality Objective</h1>
            <ul className="list-disc ml-7">
              <li className="mb-2">
                To manufacture Switchgear & Control gear in compliance with
                International standards duly regulated with local prerequisites.
              </li>
              <li className="mb-2">
                To fashion the culture of system perfection by creating
                awareness of Preventive Maintenance, Human Safety in working and
                utilization of human resources to the optimum level.
              </li>
              <li className="mb-2">
                To focus on human resource development for eventual benefits to
                corporate and individuals working with us.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 px-[120px] py-[100px]">
        <div className="">
          <h1 className="text-2xl font-bold text-center">
            International Standard Certifications
          </h1>
          <p className="text-center mt-3">
            Recognized credentials ensuring quality, safety, and reliability in
            every process.
          </p>
        </div>

        <div className="flex  m-7 p-8 justify-center align-middle rounded-4xl">
          <div className="m-1 w-90 border-4 border-white shadow-md bg-white/80 backdrop-blur-md p-4 rounded-lg">
            <div className="text-center flex justify-center mb-5">
              <Image src="/others/iso-1.svg" alt="" width={64} height={64} />
            </div>
            <h1 className="text-2xl font-bold px-3 text-center">
              ISO 9001:2015
            </h1>
            <p className="p-3 text-center">
              MANAGEMENT SYSTEM for all arrangement covering the manufacturing
              of Electrical Switchgear and location are established to meet the
              requirement of international standards.
            </p>
          </div>

          <div className="m-1 w-90 border-4 border-white shadow-md bg-white/80 backdrop-blur-md p-4 rounded-lg">
            <div className="text-center flex justify-center mb-5">
              <Image src="/others/iso-2.svg" alt="" width={64} height={64} />
            </div>
            <h1 className="text-2xl font-bold text-center text-[var(--color-black)] mb-2">
              ISO 14001:2015
            </h1>
            <p className="text-gray-800 text-center">
              ENVIRONMENT MANAGEMENT SYSTEM for all arrangement covering the
              manufacturing of Electrical Switchgear and location are
              established to meet the requirement of international standards.
            </p>
          </div>

          <div className="m-1 w-90 border-4 border-white shadow-md bg-white/80 backdrop-blur-md p-4 rounded-lg">
            <h1 className="text-2xl font-bold px-3 text-center">
              <div className="text-center flex justify-center mb-5">
                <Image src="/others/iso-3.svg" alt="" width={64} height={64} />
              </div>
              OHSAS 18001:2007
            </h1>
            <p className="p-3 text-center">
              HEALTH AND SAFETY STANDARDS for all arrangement covering the
              manufacturing of Electrical Switchgear and location are
              established to meet the requirement of international standards.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white px-[120px] py-[100px]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-center">
            Registration & Recognization
          </h1>
          <p className="text-center mt-3">
            PEMPAK has been recognized and registered with all the leading
            institutions of the country <br />
            maintaining the sound record of healthy execution.
          </p>
        </div>

        <div className="m-7 p-8 justify-center align-middle rounded-4xl grid grid-cols-4 gap-4 ">
          {registrationData.map((reg)=>(
            <div className="m-1 border-4 border-white shadow-md bg-white/80 backdrop-blur-md p-4 rounded-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
              <div className="mb-5 flex flex-col justify-center items-center">
                <Image src={reg.image} alt="" width={60} height={60 }/>
                <p className="text-center">{reg.desc}</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
      <CoporatePolicy />
    </div>
  );
}

