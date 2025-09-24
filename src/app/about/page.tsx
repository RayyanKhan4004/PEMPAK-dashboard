// import Typography from "@/components/UI/Typography";
import Image from "next/image";

import CoporatePolicy from "../../components//CoporatePolicy";
// import { Eye } from 'lucide-react';

export default function AboutPage() {
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

      <div className="space-y-20 space-x-3 px-[120px] py-[100px]">
        {/* Section 1: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
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
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
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
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
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
        <div className="">
          <h1 className="text-2xl font-bold text-center">Corporate Vision</h1>
          <p className="text-center mt-3">
            Our vision drives everything we do, shaping our commitment to
            innovation and excellence.
          </p>
        </div>

        <div className="flex bg-white m-7 p-8 justify-center align-middle rounded-4xl">
          <div className="m-1 h-78 w-90 border-r-3 border-r-amber-500">
            <div className="flex">
              <Image
                src="/others/eye-icon.svg"
                alt=""
                className="ml-3"
                width={24}
                height={24}
              />
              <h1 className="text-2xl font-bold px-3">Our Vision</h1>
            </div>

            <p className="p-3">
              PEMPAK firmly believes that perfection in system leads towards
              amplified system efficiency through highly qualified/ motivated
              staff to produce reliable output and safe working environment. To
              uphold motivation level and generate sense of proprietorship
              amongst the workers at PEMPAK, the corporate growth is linked
              proportionately to the individual&apos;s growth.
            </p>
          </div>

          <div className="m-1 h-78 w-90 border-r-3 border-r-amber-500">
            <div className="flex">
              <Image
                src="/others/our-missions.svg"
                alt=""
                className="ml-3"
                width={24}
                height={24}
              />
              <h1 className="text-2xl font-bold px-3">Our Mission</h1>
            </div>
            <p className="p-3">
              PEMPAK is committed to delivering innovative, sustainable, and
              reliable solutions in the field of electrical and solar
              technologies. By integrating advanced systems, skilled manpower,
              and continuous improvement, we strive to meet customer
              expectations while ensuring environmental responsibility and
              community well-being.
            </p>
          </div>
          <div className="m-1 h-78 w-90 border-r-">
            <div className="flex">
              <Image
                src="/others/our-values.svg"
                alt=""
                className="ml-3"
                width={24}
                height={24}
              />
              <h1 className="text-2xl font-bold px-3">Our Values</h1>
            </div>
            <p className="p-3">
              At PEMPAK, we value integrity, innovation, and teamwork. We
              believe in empowering our people through knowledge and ownership,
              fostering a culture of safety and accountability. Our commitment
              to excellence drives us to create long-term partnerships, where
              corporate success aligns with the growth and prosperity of every
              individual.
            </p>
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

        <div className="flex  m-7 p-8 justify-center align-middle rounded-4xl">
          <div className="m-1 w-100 border-4 border-white shadow-md bg-white/80 backdrop-blur-md p-4 rounded-lg">
            <div className="text-center flex justify-center mb-5">
              <Image
                src="/registration/registration-1.svg"
                alt=""
                width={64}
                height={64}
              />
            </div>
            <p className="text-center">
              WAPDA and subsidiaries like NTDC, LESCO, IESCO, FESCO, MEPCO,
              HESCO, PESCO, GEPCO and QESCO etc.
            </p>
          </div>

          <div className="m-1 w-90 border-4 border-white shadow-md bg-white/80 backdrop-blur-md p-4 rounded-lg">
            <div className="text-center flex justify-center mb-5">
              <Image
                src="/registration/registration-2.svg"
                alt=""
                width={64}
                height={64}
              />
            </div>
            <p className="text-gray-800 text-center">
              Engineer in Chief Branch with all formation like MES (Army, Air,
              Navy & DP) FWO and NLC etc.
            </p>
          </div>
          <div className="m-1 w-100 border-4 border-white shadow-md bg-white/80 backdrop-blur-md p-4 rounded-lg">
            <div className="text-center flex justify-center mb-5">
              <Image
                src="/registration/registration-3.svg"
                alt=""
                width={64}
                height={64}
              />
            </div>
            <p className="text-center">
              Pakistan Atomic Energy Commission (Various formations)
            </p>
          </div>

          <div className="m-1 w-100 border-4 border-white shadow-md bg-white/80 backdrop-blur-md p-4 rounded-lg">
            <div className="text-center flex justify-center mb-5">
              <Image
                src="/registration/registration-4.svg"
                alt=""
                width={64}
                height={64}
              />
            </div>
            <p className="text-center">Pakistan Air Force</p>
          </div>
        </div>

        <div className="flex  m-7 p-8 justify-center align-middle rounded-4xl">
          <div className="m-1 w-100 border-4 border-white shadow-md bg-white/80 backdrop-blur-md p-4 rounded-lg">
            <div className="text-center flex justify-center mb-5">
              <Image
                src="/registration/registration-5.svg"
                alt=""
                width={64}
                height={64}
              />
            </div>
            <p className="text-center">
              Water & Sanitary Agencies (WASA&apos;s) of all development
              authorities.
            </p>
          </div>

          <div className="m-1 w-100 border-4 border-white shadow-md bg-white/80 backdrop-blur-md p-4 rounded-lg">
            <div className="text-center flex justify-center mb-5">
              <Image
                src="/registration/registration-6.svg"
                alt=""
                width={64}
                height={64}
              />
            </div>
            <p className="text-gray-800 text-center">
              C & W (Building Department).
            </p>
          </div>
          <div className="m-1 w-90 border-4 border-white shadow-md bg-white/80 backdrop-blur-md p-4 rounded-lg">
            <div className="text-center flex justify-center mb-5">
              <Image
                src="/registration/registration-7.svg"
                alt=""
                width={64}
                height={64}
              />
            </div>
            <p className="text-center">
              Fuji Foundation and many other Autonomous bodies.
            </p>
          </div>

          <div className="m-1 w-90 border-4 border-white shadow-md bg-white/80 backdrop-blur-md p-4 rounded-lg">
            <div className="text-center flex justify-center mb-5">
              <Image
                src="/registration/registration-8.svg"
                alt=""
                width={64}
                height={64}
              />
            </div>
            <p className="text-center">
              Prestigious corporate sector of Pakistan including industries of
              various cross section & commercial institutes.
            </p>
          </div>
        </div>
      </div>
      <CoporatePolicy />
    </div>
  );
}

