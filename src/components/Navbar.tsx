// components/Navbar.tsx
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Typography from "@/components/UI/Typography";
import { useEffect, useState, useRef } from "react";
// import { link } from "fs";
export const Navbar = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const navLinks = [
    { label: "Home", link: "/home" },
    { label: "About", link: "/about" },

    {
      label: "Our Products",
      link: "/switchgear-controleger",
      catagoried: [
        {
          name: "Switchgear / Controlgear",
          sub: [
            { name: "Medium Voltage Switchgear" },
            { name: "Low Voltage Switchgears" },
            { name: "Control & Relay Panels" },
            { name: "AC/ DC Auxiliary Supply Equipment" },
            { name: "Motor Control Centers" },
            { name: "AC/ DC Auxiliary Supply Equipment" },
            { name: "Multi-Source Sync Panels" },
            { name: "PLC based equipment" },
            { name: "Power Factor Improvement Equipment" },
            { name: "MV/ LV Changeover equipment" },
            { name: "Smart AMF & ATS Panels" },
            { name: "Power & Lighting DBs & Feeder Pillar Panels" },
            { name: "Bus Tie Duct (BTD) & Bus Bar Trunking system" },
            { name: "Rehabilitation & Reclamation" },
          ],
        },
        {
          name: "Power Distribution Transformer",
          link: "/power-distribution",
          sub: [
            { name: "Oil Cooled Power Distribution Transformer" },
            { name: "Dry Type Transformers" },
          ],
        },
        {
          name: "Green Energy",
          link: "/green-energy",
          sub: [
            { name: "Designing" },
            { name: "Providing" },
            { name: "Installation" },
            { name: "Commissioning" },
          ],
        },
        {
          name: "Appliances",
          link: "/appliences",
          sub: [
            { name: "Industrial Exhaust Fan" },
            { name: "Ceiling Fans" },
            { name: "Air Purifier" },
            { name: "Rechargeable Cells (AA & AAA)" },
          ],
        },
      ],
    },
    { label: "Blog", link: "/blog" },
    { label: "Team", link: "/our-team" },
    { label: "Services", link: "/services" },
    { label: " Contact us", link: "/contact" },
  ];
  const [mainDorpdown, setMainDropdown] = useState("");
  const [subDropdown, setSubDropdown] = useState("");
  const routeByCategory: Record<string, string> = {
    "Switchgear / Controlgear": "/switchgear-controleger",
    "Power Distribution Transformer": "/power-distribution",
    "Green Energy": "/green-energy",
    Appliances: "/appliences",
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMainDropdown("");
        setSubDropdown("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <nav className="shadow-md px-[120px] py-[10px] flex items-center justify-between">
      <Link href={"/"}>
        <Typography variant="h3" weight="b" color="primary">
          PEMPAK
        </Typography>
      </Link>

      {/* Navigation Links */}
      <div className="flex relative gap-[24px] text-lg font-medium items-center">
        {navLinks.map((item, index) => {
          const hasDropdown = Boolean(item.catagoried);
          if (!hasDropdown) {
            return (
              <Link
                key={`nav-${item.label}-${index}`}
                href={item.link ? item.link : ("/" as string)}
                className="hover:font-bold hover:text-[var(--color-primary)] m-1 !hover:m-0 transition-all duration-300"
              >
                {item.label}
              </Link>
            );
          }

          return (
            <div
              key={`nav-${item.label}-${index}`}
              className="relative hover:font-bold hover:text-[var(--color-primary)] !mr-0 transition-all duration-300"
              onClick={() => setMainDropdown(item.label)}
              // onMouseLeave={() => {
              //   setMainDropdown("")
              //   setSubDropdown("")
              // }}
            >
              <button
                type="button"
                className="cursor-pointer !mr-0 transition-all duration-300"
              >
                {item.label}
              </button>

              {mainDorpdown === item.label && item.catagoried && (
                <div
                  ref={dropdownRef}
                  className=" transition-all duration-300 absolute top-8 left-1/2 -translate-x-1/2 bg-white shadow-lg space-y-1 rounded-[12px] z-10 py-2 min-w-[240px] !mr-0"
                >
                  {item.catagoried.map((sub, i) => {
                    const hasSubmenu =
                      Array.isArray(sub.sub) && sub.sub.length > 0;
                    return (
                      <div
                        key={`cat-${sub.name}-${i}`}
                        className="transition-all duration-300 relative px-4 py-2 hover:bg-[var(--color-primary)] group hover:text-white rounded-[8px] whitespace-nowrap"
                        onMouseEnter={() => setSubDropdown(sub.name)}
                        onMouseLeave={() => setSubDropdown("")}
                      >
                        <button
                          type="button"
                          className="w-full text-left "
                          onClick={() => {
                            const target = routeByCategory[sub.name] || "/";
                            const url = `${target}?cate=${encodeURIComponent(
                              sub.name
                            )}`;
                            router.push(url);
                            setMainDropdown("");
                            setSubDropdown("");
                          }}
                        >
                          <Typography weight="semi-b" variant="ps" className="group-hover:text-white">
                            {sub.name}
                          </Typography>
                        </button>

                        {hasSubmenu && subDropdown === sub.name && (
                          <div className="absolute transition-all duration-300 left-full top-0 bg-white shadow-lg space-y-1 rounded-[12px] z-20 py-2 min-w-[220px]">
                            {sub.sub!.map((s, j) => (
                              <button
                                key={`sub-${s.name}-${j}`}
                                type="button"
                                className=" transition-all duration-300 text-[var(--color-light-black)] w-full block text-[14px] text-left px-4 py-2 hover:bg-[var(--color-primary)] hover:text-white rounded-[8px] whitespace-nowrap"
                                onClick={() => {
                                  // Navigate to the parent category. If you have routes for these sub-items, map them here.
                                  const target =
                                    routeByCategory[sub.name] || "/";
                                  const url = `${target}?cate=${encodeURIComponent(
                                    s.name
                                  )}`;
                                  router.push(url);
                                  setMainDropdown("");
                                  setSubDropdown("");
                                }}
                              >
                                {s.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};
