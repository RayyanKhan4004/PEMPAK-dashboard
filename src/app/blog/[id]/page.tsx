// import Typography from '@/components/UI/Typography'
import React from "react";
import Image from "next/image";
import HeroImage from "../../../../public/Images/blog/bg_image.png";
import Typography from "../../../components/UI/Typography";

const page = () => {
  return (
    <>
      <Typography className="text-[48px] mt-[120px]">
        5 Essential Electrical Safety Tips for Every Homeowner{" "}
      </Typography>
      <Typography className="flex mb-8 gap-[11px]">
        <Typography className="flex gap-2.5">
          {" "}
          <img src="#" alt="" className="h-8 w-8 rounded-full" />
        </Typography>
        <Typography variant="p" color="dark">
          Shahid Ali Malik
        </Typography>
        <span className="inline-block w-4 h-4 bg-[var(--color-gray)] rounded-full "></span>
        <Typography color="secondary">May 19, 2025</Typography>
      </Typography>
      <div>
        <Image className="w-full py-[50px]" src={HeroImage} alt="" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Electricity powers almost everything in our daily lives – from the lights in our living rooms to the appliances in our kitchens. While it makes life easier, it can also be dangerous if not handled properly. Practicing electrical safety is essential to protect your family, property, and valuable equipment. Here are five simple but powerful electrical safety tips every homeowner should follow:
            </p>

            <h2 className="text-xl font-semibold">
              1. Don’t Overload Your Outlets
            </h2>
            <p className="text-gray-700">
              Plugging too many devices into a single outlet can overheat the circuit, increasing the risk of fire. Use power strips with surge protection and spread out your electrical load to keep your system safe.
            </p>

            <h2 className="text-xl font-semibold">
              2. Inspect Cords and Plugs Regularly
            </h2>
            <p className="text-gray-700">
             Frayed wires, cracked insulation, or bent plugs are signs of wear and tear. Damaged cords can cause shocks or spark fires, so replace them immediately instead of using tape as a quick fix..
            </p>

            <h2 className="text-xl font-semibold">
              3. Keep Water and Electricity Separate
            </h2>
            <p className="text-gray-700">
             Water is a natural conductor of electricity. Avoid using electrical appliances near sinks, bathtubs, or outdoor wet areas unless they’re specifically designed for such environments.
            </p>

            <h2 className="text-xl font-semibold">
              4. Install Ground Fault Circuit Interrupters (GFCIs)
            </h2>
            <p className="text-gray-700">
             GFCIs are designed to cut off power instantly if an electrical fault is detected. Installing them in kitchens, bathrooms, and outdoor spaces can provide an added layer of protection against shocks.
            </p>

            <h2 className="text-xl font-semibold">
              5. Hire a Licensed Electrician for Repairs
            </h2>
            <p className="text-gray-700">
              DIY electrical fixes may seem cost-effective, but they can be risky. Always call a certified electrician for wiring, installation, or repair work to ensure safety and compliance with electrical codes.
            </p>

            <h2 className="text-xl font-semibold">Final Thoughts</h2>
            <p className="text-gray-700 mb-[100px]">
              Electrical safety is not something to take lightly. Small
              preventive steps can go a long way in protecting your home and
              loved ones. If you notice frequent tripping breakers, flickering
              lights, or burning smells, it’s best to call a professional
              immediately.
            </p>
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-bold mb-4">Latest Blogs</h3>
              <ul className="space-y-4">
                <li className="border-b pb-3">
                  <a
                    href="#"
                    className="block font-medium hover:text-orange-500"
                  >
                    Top 10 Signs Your Home Needs Electrical Upgrades
                  </a>
                  <span className="text-sm text-gray-500">May 18, 2025</span>
                </li>
                <li className="border-b pb-3">
                  <a
                    href="#"
                    className="block font-medium hover:text-orange-500"
                  >
                    Why Regular Electrical Maintenance Saves You Money
                  </a>
                  <span className="text-sm text-gray-500">May 17, 2025</span>
                </li>
                <li className="border-b pb-3">
                  <a
                    href="#"
                    className="block font-medium hover:text-orange-500"
                  >
                    Common Electrical Problems and How to Spot Them Early
                  </a>
                  <span className="text-sm text-gray-500">May 15, 2025</span>
                </li>
                <li>
                  <a
                    href="#"
                    className="block font-medium hover:text-orange-500"
                  >
                    Energy-Saving Tips Every Homeowner Should Follow
                  </a>
                  <span className="text-sm text-gray-500">May 9, 2025</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold ">Popular Tags</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-gray-200 rounded-md text-sm cursor-pointer hover:bg-orange-400 hover:text-white transition">
                  #Digital Payments
                </span>
                <span className="px-3 py-1 bg-gray-200 rounded-md text-sm cursor-pointer hover:bg-orange-400 hover:text-white transition">
                  #Budget Tips
                </span>
                <span className="px-3 py-1 bg-gray-200 rounded-md text-sm cursor-pointer hover:bg-orange-400 hover:text-white transition">
                  #Security
                </span>
                <span className="px-3 py-1 bg-gray-200 rounded-md text-sm cursor-pointer hover:bg-orange-400 hover:text-white transition">
                  #Technology
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
