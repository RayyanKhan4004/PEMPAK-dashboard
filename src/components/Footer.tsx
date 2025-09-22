"use client";
import twitter from '@public/socialMedia/twitter-icon.svg'
import linkedin from '@public/socialMedia/linkedin.svg'
import youtube from '@public/socialMedia/youtube.svg'
import location from '@public/socialMedia/location-icon.svg'
import phoneNo from '@public/socialMedia/phoneNo.svg'
import gmail from '@public/socialMedia/gmail.svg'
import PhoneDisconnect from '@public/socialMedia/PhoneDisconnect.svg'
import instagram from '@public/socialMedia/instagram.svg'
// import facebook from '@public/socialMedia/facebook-icon.svg'
import watsapp from '@public/socialMedia/watsapp.svg'
import Image from "next/image";
import Link from "next/link";
//          <Image className="m-2" src="socialMedia/facebook-icon.svg" alt="" />

export default function Footer() {
  return (
    <footer className="text-white px-[50px] py-[50px] bg-[var(--color-primary)] grid grid-cols-1 md:grid-cols-4 gap-[130px]">
      {/* <div className="max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-[130px] text-white"> */}
        <div className="">
          <h2 className="text-2xl font-bold text-white">PAMPAK</h2>
          <p className="font-normal text-[14px] py-[24px]">
            PEMPAK Group delivers innovative <br /> electric supplies, energy solutions, and solar concepts. Our goal is to power progress while protecting the environment.
          </p>

          <div className="flex">
            <Image
              src={phoneNo}
              alt=""
              className="bg-white h-5 w-7 mr-2 rounded-[5px]"
            />

            <p className="text-sm mb-3">+92-42-3527-2263/66</p>
          </div>

          <div className="flex">
            <Image
              src={PhoneDisconnect}
              alt=""
              className="bg-white h-5 w-7 mr-2 rounded-[5px]"
            />

            <p className="text-sm mb-3">UAN: +92-42-111-736725 (111-PEMPAK).</p>
          </div>

          <div className="flex">
            <Image
              src={gmail}
              alt=""
              className="bg-white h-5 w-7 mr-2 rounded-[5px]"
            />
            <p className="text-sm mb-3">pempak@gmail.com</p>
          </div>
          <div className="flex">
            <Image
              src={location}
              alt=""
              className="bg-white h-5 w-7 mr-2 rounded-[5px]"
            />
            <p className="text-sm mb-3">Plot No.4, Adj. ATS Lane, Kacha Industrial estate, 4kM Kahna Kacha Road, Lahore-Pakistan.</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/home" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                Our Products
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/ourteam" className="hover:text-white">
                Our team
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-white">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Erection
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                Installation & Commissioning
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                Maintenance
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Training
              </Link>
            </li>
            <li>
              <Link href="/ourteam" className="hover:text-white">
                Testing
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-white">
                Manufacturing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Products
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Switchgear / Controlgear
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                Power Distribution Transformer
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                Green Energy
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Appliances
              </Link>
            </li>
          </ul>
        </div>

        <div className="absolute flex justify-end right-[140px] pt-[340px]">
          {/* <Image className="m-2" src={facebook} alt="" /> */}
          <Image
            className="m-2 bg-white h-8 w-8 rounded-sm"
            src={instagram}
            alt=""
          />
          <Image className="m-2" src={twitter} alt="" />
          <Image className="m-2" src={linkedin} alt="" />
          <Image className="m-2" src={youtube} alt="" />
          <Image className="m-2" src={watsapp} alt="" />
        </div>
      {/* </div> */}
      {/* 
      <hr className="mt-10 ml-10 mr-10 mb-2" />

      <div className="flex justify-around">
        <p>© 2025 PEMPAK. All Right Reserved</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div> */}
    </footer>
  );
}
