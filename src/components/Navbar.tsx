// components/Navbar.tsx
"use client";
import Link from "next/link";
import Typography from "@/components/UI/Typography";
import { useEffect, useState , useRef } from "react";
export const Navbar = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: "Home", link: "/home" },
    { label: "About", link: "/about" },

    {
      label: "Our Products",
      catagoried: [
        {
          name: "Switchgear / Controlgear",
          sub: [{ name: "Low Voltage Switchgear" }],
        },
        {
          name: "Power Distribution Transformer",
        },
        {
          name: "Green Energy",
        },
        {
          name: "Appliances",
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
  // useEffect(() => {});
  return (
    <nav className="shadow-md p-4 flex items-center justify-between">
      <Typography variant="h3" weight="b" color="primary" className="ml-17">
        PEMPAK
      </Typography>

      {/* Navigation Links */}
      <div className="flex relative space-x-6 text-lg font-medium items-center">
        {navLinks.map((item, index) => {
          return (
            <Link
              href={item.link ? item.link : ("/" as string)}
              className="hover:font-bold"
              onClick={() => setMainDropdown(item.label)}
              // onMouseLeave={() => setMainDropdown("")}
            >
              {item.label}

              {mainDorpdown == item.label && item.catagoried && (
                <div ref={dropdownRef} className=" absolute top-8 left-1/2 -translate-x-1/2 bg-white shadow-lg space-y-2 rounded-[12px] z-10">
                  {item.catagoried.map((sub, i) => {
                    return (
                      <div
                        className="reletive px-4"
                        onClick={() => setSubDropdown(sub.name)}
                        // onMouseLeave={() => setSubDropdown("")}
                      >
                        <Typography
                          weight="semi-b"
                          varient="ps"
                          className=" hover:text-white hover:bg-[var(--color-primary)]"
                        >
                          {sub.name}
                        </Typography>

                        {subDropdown === sub.name && sub.sub && (
                          <div className="absolute left-full top-0 bg-white shadow-lg   space-y-2 rounded-[12px] z-10 hover:text-white hover:bg-[var(--color-primary)]">
                            {sub.sub.map((s, j) => {
                              return (
                                <div className="p-4 bg-white rounded-[12px]">
                                  <p className="  hover:text-white hover:bg-[var(--color-primary)] text-nowrap">
                                    {s.name}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </Link>
          );
        })}
      
      </div>
    </nav>
  );
};
