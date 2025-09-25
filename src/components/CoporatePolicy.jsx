import Image from "next/image";
import coperate1 from "@public/coperate/coperate-1.svg";
import coperate2 from "@public/coperate/coperate-2.svg";
import coperate3 from "@public/coperate/coperate-3.svg";
import coperate4 from "@public/coperate/coperate-4.svg";
import coperate5 from "@public/coperate/coperate-5.svg";
import coperate6 from "@public/coperate/coperate-6.svg";

const policyItems = [
  {
    id: 1,
    side: "right",
    icon: coperate1,
    title: "Quality Policy",
    paragraphs: [
      "PEMPAK will build a standing of QUALITY, RELIABILITY and COMMITMENT with the goal of meeting both our Internal & External Customer's requirements.",
      "PEMPAK further seeks to enhance Customer Satisfaction through consistent improvement of Products, Services, and Quality Management System (QMS) through TRAINING, MOTIVATION, and a HEALTHY/SAFE work environment.",
    ],
  },
  {
    id: 2,
    side: "left",
    icon: coperate2,
    title: "Quality Policy",
    paragraphs: [
      "Customer Relationship Management (CRM) is a widely implemented model for managing PEMPAK's interactions with customers, and clients. It involves using technology to organize, automate, and harmonize business process.",
      "The overall goals of PEMPAK are to find, attract, and win new Client’s Satisfaction, Data Security while retaining the existing customer base and reducing marketing costs.",
    ],
  },
  {
    id: 3,
    side: "right",
    icon: coperate3,
    title: "Corporate Health & Safety Policy",
    paragraphs: [
      "PEMPAK acknowledge its responsibility as an employer to ensure the Health, Safety and Welfare of all employees whilst at work.",
      "Management recognizes the importance of its staff/contractors and encourages the reporting of any hazard or risk that may adversely affect our health and safety standards. We also recognize the importance of ensuring that staff are adequately trained, informed and supervised to realize their activities in a safe manner.",
      "PEMPAK as an organization textures the need of identifying/recording the hazards and reviewing the risk assessments for maintaining a pro-active safety approach.",
    ],
  },
  {
    id: 4,
    side: "left",
    icon: coperate4,
    title: "Environmental Policy",
    paragraphs: [
      "PEMPAK is committed to conduct its business in such a way as to ensure minutest harmful impacts on the environment whilst making the most proficient use of natural resources. Continuous improvement of the business is facilitated through constantly monitoring the satisfaction level of our customers and improving our environmental performance whatever it is possible to do.",
      "PEMPAK prefers working with suppliers and contractors who are implementing Environmental Management Systems and are environmentally conscious organizations.",
    ],
  },
  {
    id: 5,
    side: "right",
    icon: coperate5,
    title: "Corporate Social Responsibility (CSR)",
    paragraphs: [
      "PEMPAK being a responsible business entity fully owe the social responsibility. The up-gradation of surrounded roads and installation of a fresh water turbine to provide hygienic water to the natives with Millions of Rupees investment are the major projects undertaken by us. The primary education plan for young children is also under implementation.",
    ],
  },
  {
    id: 6,
    side: "left",
    icon: coperate6,
    title: "Corporate Management System(CMS)",
    paragraphs: [
      "The Corporate Management System (CMS) is one of the most imperative parts of the infrastructure of PEMPAK's automated financial and logistics management functions.",
      "PEMPAK process the latest, most accurate and updated information analysis which allows them to respond to the market.",
      "Implementation of CMS provides the full functional necessity for analysis as well as management of financial, personnel, operational activities and maintenance services of the enterprise.",
      "ICMS assists in the operational control of all lines of activity to form a solid base for optimum (short-/long term) solutions at all levels of management.",
    ],
  },
];

export default function CoporatePolicy() {
  return (
    <div>
      <div className="bg-orange-50 px-[120px] py-[100px]">
        <div>
          <h1 className="text-2xl font-bold text-center">Corporate Policy’s</h1>
          <p className="text-center mt-3">
            Guiding principles ensuring integrity, safety, and sustainable
            growth across all operations.
          </p>
        </div>

        <section className="py-12 px-4 relative">
          {/* Vertical gradient spine */}
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#F16336]/20 via-[#F16336] to-[#F16336]/20" />

          <div className="max-w-6xl mx-auto space-y-16">
            {policyItems.map((item, index) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start relative">
                {/* Left content */}
                <div className={`space-y-3 ${item.side === "left" ? "md:order-1 text-right pr-6" : "md:order-1"}`}>
                  {item.side === "left" && (
                    <>
                      <h2 className="text-xl font-semibold">{item.title}</h2>
                      {item.paragraphs.map((p, pi) => (
                        <p key={pi} className="text-[var(--color-light-black)] leading-relaxed">{p}</p>
                      ))}
                    </>
                  )}
                </div>

                {/* Center column with icon and local gradient segments */}
                <div className="md:order-2 flex flex-col items-center relative">
                  {/* segment above icon, shorter per card */}
                  <div className={`hidden md:block w-[2px] ${index === 0 ? "h-6" : "h-12"} bg-gradient-to-b from-[#F16336]/20 via-[#F16336]/60 to-[#F16336]`} />
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#F16336]/10 border border-[#F16336]/30 shadow">
                    <Image src={item.icon} alt="" />
                  </div>
                  {/* segment below icon */}
                  <div className={`hidden md:block w-[2px] ${index === policyItems.length - 1 ? "h-6" : "h-12"} bg-gradient-to-b from-[#F16336] via-[#F16336]/60 to-[#F16336]/20`} />
                </div>

                {/* Right content */}
                <div className={`space-y-3 ${item.side === "right" ? "md:order-3 pl-6" : "md:order-3"}`}>
                  {item.side === "right" && (
                    <>
                      <h2 className="text-xl font-semibold">{item.title}</h2>
                      {item.paragraphs.map((p, pi) => (
                        <p key={pi} className="text-[var(--color-light-black)] leading-relaxed">{p}</p>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
