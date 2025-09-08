// app/page.tsx
import { Signatureprojects,btn1,clientlogo,news1, products1, services, team1, team2 } from "@/components/UI/home/hero";
import Image from "next/image";
import Link from "next/link";
 
export default function Homepage() {
  
  return (
    <>
<section className="container relative bg-gray-50 bg-[url('/Block/home-main.png')] min-w-screen bg-cover bg-center text-white ">
      <div className="mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
        
         <div>
          <h4 className="text-sm font-bold tracking-wide text-gray-700 uppercase">
            Perfect Elektro Mek <br /> Pakistan (Pvt.) Limited
          </h4>

          <div className="w-12 h-1 bg-orange-500 my-4"></div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            An Excellent Legacy <br /> Of Quarter Century Plus
          </h1>

<p className="mt-6 text-gray-700 leading-relaxed">
  <strong>Perfect Elektro Mek Pakistan Pvt. Limited (PEMPAK)</strong> Group <br />
  develops electric supplies, solutions and solar concepts, that <br /> are
  beneficial to the environment, people, and nature.
</p>

          <div className="mt-8 flex space-x-4">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow hover:bg-orange-600 transition">
              Our Services
            </button>
            <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
           <div className="relative">
            <img
              src="/home-f1.jpg" 
              alt="Engineer"
              width={400}
              height={500}
              className="rounded-xl shadow-lg"
            />

             <div className="absolute -top-6 -left-6 bg-white shadow-md px-4 py-2 rounded-lg">
              <p className="text-xl font-bold text-gray-900">25+</p>
              <p className="text-sm text-gray-600">Years Of Experience</p>
            </div>

             <div className="absolute top-1/3 -left-10 bg-white shadow-md px-4 py-2 rounded-lg">
              <p className="text-xl font-bold text-gray-900">3000+</p>
              <p className="text-sm text-gray-600">Project Executed</p>
            </div>

             <div className="absolute bottom-6 -left-6 bg-white shadow-md px-4 py-2 rounded-lg">
              <p className="text-xl font-bold text-gray-900">500+</p>
              <p className="text-sm text-gray-600">Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>

        <h1 className="text-orange-500 font-semibold mb-2 text-center mt-10 ">About us </h1>

       <section className="container  max-w-7xl mx-auto px-6 py-12"> 
    <div className="grid md:grid-cols-2 gap-10 items-center ">
      
        <div>
        <img src="homeimg/homeabout1.jpg" alt="Team working" className="rounded-lg shadow-lg"/>
      </div>

       <div>
         <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-relaxed">Passionate and Sustainable</h2>
        <p className="text-gray-700 mb-6 text-justify line-">
         We are proud to offer a wide range of solar energy services, including solar panel installation, maintenance, and repair.
        </p>
        <p className="text-gray-700 mb-6 text-justify leading-relaxed">
          Our commitment to sustainability is at the heart of everything we do. We believe that solar energy is the key to a more sustainable future, and we are dedicated to making it accessible to everyone. That's why we offer competitive pricing and financing options to help make solar energy more affordable for our clients.
        </p>
        <a href="#" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition">Learn More →</a>
      </div>
    </div>
  </section>

   <section className="bg-gray-50 py-12">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

       <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="bg-orange-500 p-3 rounded-lg text-white">📄</div>
          <div>
            <h4 className="font-bold">Quality Policy</h4>
            <p className="text-gray-600 text-sm">Ensuring top-notch quality and standards in every project.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-orange-500 p-3 rounded-lg text-white">👥</div>
          <div>
            <h4 className="font-bold">Customer Policy</h4>
            <p className="text-gray-600 text-sm">Customer satisfaction is our main goal.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-orange-500 p-3 rounded-lg text-white">⚡</div>
          <div>
            <h4 className="font-bold">Health & Safety</h4>
            <p className="text-gray-600 text-sm">Ensuring safe and responsible working conditions.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-orange-500 p-3 rounded-lg text-white">🌱</div>
          <div>
            <h4 className="font-bold">Environment Policy</h4>
            <p className="text-gray-600 text-sm">Committed to sustainable practices in all projects.</p>
          </div>
        </div>
      </div>

       <div>
<img src="/homeimg/homeabout2.jpg" alt="Meeting" className="rounded-lg shadow-lg" />
      </div>
    </div>
  </section>

   <section className="bg-orange-500 text-white py-12">
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

  <div className="w-full h-48 md:h-96 bg-[url('/homeimg/greenenergy.png')] bg-cover bg-center rounded-lg shadow-lg flex items-center justify-center">
    
    <div className=" text-center  text-white text-shadow-white line-height:1.4">
      <h1 className="text-5xl font-extrabold" >Green Energy </h1>

      <p className="items-center mt-4 max-w-md text-center leading-snug">
        Secondary power systems i.e. generators are used in industries or commercial buildings and hospitals as emergency, prime or continuous power supply when utility power is lost.
      </p>
      </div>
</div>

     <section className="container max-w-7xl mx-auto py-[30px]">
  <div>
    <h3 className="text-orange-500 font-extrabold mt-[40px]">Our Products</h3>

    <div className="flex justify-between items-center mt-4">
      <div>
        <h1 className="text-[40px] font-bold">Explore Our Products</h1>
        <p className="mt-2 font-normal text-[#474747]">
          Built with quality components under stringent manufacturing standards
        </p>
      </div>

      <div className="flex mt-5">
        <button className="bg-orange-500 cursor-pointer text-white px-8 py-[15px] rounded-lg font-semibold shadow hover:bg-orange-600 hover:scale-105 transition-transform duration-200">
          View All Products →
        </button>
      </div>
    </div>
  </div>
</section>


  <section>
  <div className="container max-w-7xl mx-auto px-6 py-4 grid md:grid-cols-3 gap-8">
    {products1.map((item) => (
      <div 
        key={item.id} 
        className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300"
      >
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4 text-center">
          <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
        <button className=" mt-2 cursor-pointer" >
            Learn more  →
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

 

<section className="container max-w-7xl mx-auto px-6 py-12">
      <p className="text-orange-500 text-center font-semibold">Our Services</p>
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-2">Explore Our Services</h2>
      <p className="text-center text-gray-500 mt-2 mb-8">
        We provide innovative solutions designed to meet your needs with quality and reliability.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={`p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300 ${
              service.active ? "bg-orange-500 text-white" : "bg-white text-gray-800"
            }`}
          >
           <div className="flex items-center justify-center ">
     <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl">
    {service.icon}
  </div>
</div>
            <h3 className="text-lg font-semibold text-center mb-2 mt-5">{service.title}</h3>
            <p className="text-center text-sm ">{service.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-[#FCEDE6] h-[453px]">

      <div className="text-center">
           <h1 className="pt-18 text-[#F16336] font-bold">Our Team</h1>
           <h1 className="text-[40px] font-semibold">Team PEMPAK</h1>
           <p className="font-[400]">A passionate group of professionals dedicated to driving PEMAPK’s vision forward with expertise and commitment.</p>
      </div>
    <section className="py-16 ">
  <div className="container max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
      Our Team
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {team1.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="relative w-full h-64">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>

          <div className="flex justify-center gap-4 pb-6">
             <a href="#" className="text-gray-400 hover:text-blue-500 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-700 transition">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    
<section className="text-center mt-8">
  <button className="bg-orange-500 cursor-pointer text-white font-semibold py-2 px-8 rounded-xl shadow-lg hover:bg-orange-600 hover:scale-105 transition transform duration-300 ease-in-out">
    View All Team <span className="text-lg">→</span>
  </button>

  <section className="mt-10 bg-[#F16336] min-h-[723px] flex flex-col items-center justify-center">
    <div className="flex flex-col items-center text-white">
      <img
        className="rounded-full w-[150px] mt-8"
        src="/Teampempak/pic1.jpg"
        alt="CEO"
      />
      <h1 className="text-5xl  mt-6">Message from our CEO</h1>
      <div className="flex justify-center items-center mt-3  ">
  <p className="text-center max-w-2xl font-normal" >
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type
    specimen book. It has survived not only five centuries, but also the leap into
    electronic typesetting, remaining essentially unchanged. It was popularised in
    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker
    including versions of Lorem Ipsum.
  </p>
  
</div>
<h3 className="text-2xl mt-6  ">Shahid Ali Malik</h3>
<p className="font-normal mt-1">Chief Executive Officer (CEO)</p>

 
    </div>
  </section>
</section>
<section>

</section>

   <div className="text-center mt-15 ">
      <h3 className="text-[#F16336] text-[20px] font-semibold">People at Work</h3>
      <h1 className="text-[40px] font-semibold">Our Skilled Team In Action</h1>
      <p className="text-[18px] font-normal">Dedicated minds and skilled hands working together to turn ideas into impact.</p>
   </div>
  
<div className="container max-w-7xl mx-auto flex flex-wrap justify-center gap-12 mt-12">
  {team2.map((item, index) => {
     const shortText = item.description.includes("elit.")
      ? item.description.split("elit.")[0] + "elit."
      : item.description;

    

    return (
      <div
        key={index}
        className={`rounded-2xl overflow-hidden w-72 shadow-lg transition duration-300 px-4 py-4 border-1 border-[#DFDFDF]

          ${index === 1 ? "bg-orange-500 text-white" : "bg-white border text-gray-800"}`}
      >
         <img
          src={item.image}
          alt={item.description}
          className="w-full h-48 object-cover rounded-t-2xl"
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

<section className="container mx-auto max-w-8xl text-center mt-15">
       <div>
             <h1 className="text-[#F16336] text-20px font-semibold">Arial View</h1>
             <h1 className="font-semibold text-[40px]">We Are Here</h1>
             <p className="text-center text-[18px] font-normal">A stunning bird’s-eye perspective showcasing the full scale and beauty of our operations.</p>
           
           <img className="block mx-auto mt-8" src="/Block/Images/pic1.png" alt="" />
            <h1 className="text-[32px] font-bold mt-5">12,000 sq.m Facility</h1>
           <p className="text-[18px]">4650 sq.m covered</p>
           
       </div>
</section>

<section className="mt-12 min-h-[923px] bg-[#F16336] text-white">
    
       <div className="container max-w-7xl mx-auto pt-20">
          
        <div>
        <p className="font-semibold text-[20px]">Our Certificate </p>
        <h1 className="text-[40px]">Certified & Trusted</h1>
        <p>Proudly serving leading clients with successful projects <br />across diverse industries.</p>
         </div>
      
         <div className="pt-20 grid grid-cols-2" >

             <div>
                  <img className="opacity-50" src="/Certification/pic1.png" alt="" />
             </div>

             <div className="flex justify-between">
               
               <div className="px-12 space-y-4">
                  <p>Quality Management</p>
                  <h1 className="text-[32px] font-semibold">ISO 9001:2015 /2012</h1>
                  <hr />

                  <p>National Electrical Contractor</p>
                  <h1 className="text-[32px] font-semibold">NECA Member /2012</h1>
                      <hr />
                  <p>Green Building Standards</p>
                  <h1 className="text-[32px] font-semibold">LEED Certified /2012</h1>
                  <hr />
                  <p>Safety Standards</p>
                  <h1 className="text-[32px] font-semibold">OSHA Compliant /2012</h1>
                     <hr />
               </div>
               <div>
                  <img className="rounded bg-white border-2" src="\Certification\Vector.png" alt="" />
               </div>
             </div>
         </div>
       </div>
</section>

    <section>
           <div className="container mx-auto max-w-7xl text-center space-y-4 mt-15">
            <p className="text-[#F16336] font-semibold text-[20px]">Our Major Client</p>
            <h1 className="text-[40px] font-semibold">Client Who trust us </h1>
            <p>We are proud to serve leading brands and organizations across diverse industries.</p>

 <div className="grid grid-cols-4 gap-6">
  {clientlogo.map((item, index) => {
    return (
      <div
        key={item.id}
        className={`flex items-center justify-center p-4 border-1   rounded-2xl shadow-sm transition duration-300 
          ${index === 1 
            ? "bg-orange-500 border-orange-500 shadow-orange-200" 
            : "bg-white border-gray-200 hover:border-blue-400"
          }`}
      >
        <img
          src={item.image}
          alt=""
          className={`max-h-20 object-contain ${index === 1 ? "invert brightness-0" : ""}`}
        />
      </div>
    );
  })}
</div>
 </div>
</section>

<section>
           <div className="container mx-auto max-w-7xl text-center space-y-4 mt-15">
            <p className="text-[#F16336] font-semibold text-[20px]">Our Major Projects</p>
            <h1 className="text-[40px] font-semibold">Our Signature Projects </h1>
            <p>Showcasing the projects that highlight our expertise and commitment to excellence..</p>
            
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 ">
  {Signatureprojects.map((item) => (
    <div
      key={item.id}
      className=" space-y-4 text-left px-4 py-4 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 bg-white"
    >
      <img
        className="w-full h-64 object-cover rounded-lg"
        src={item.image}
        alt={`Signature project ${item.id}`}
      />
      <h1 className="text-[20px] font-semibold">{item.title}</h1>
      <p>{item.description}</p>
    </div>
  ))}
</div>

 <h1 className="text-[20px] font-bold text-right mx-60">Team Expansion</h1>
 </div>
 </section>

 <section className=" bg-white px-23 py-23 mt-12 min-w-screen">

 
      <div className=" container max-w-7xl mx-auto grid grid-cols-2">

         <div className="space-y-4 font-semibold">
          <h1 className="text-[#F16336]">News & Updates</h1>
          <h1 className="text-[40px]">Updates & Announcements</h1>
          <p className="font-normal">Stay informed with our latest news, updates, and announcements.</p>
         </div>

         <div className="text-right mt-20">
           
           <button className={btn1}>
            View all News & Updates →
           </button>
    </div>
    </div>

   <div className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
  {news1.map((item, index) => (
    <div 
      key={index} 
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
    >
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <p className="text-sm text-gray-500">{item.date}</p>
        <h1 className="text-lg font-semibold text-gray-800 mt-2">{item.title}</h1>
        <p className="text-gray-600 text-sm mt-1">{item.description}</p>

        <div className="flex items-center gap-2 mt-4">
          <img 
            src={item.img} 
            alt={item.name} 
            className="w-8 h-8 rounded-full object-cover"
          />
          <p className="text-gray-700 text-sm font-medium">{item.name}</p>
        </div>
      </div>
    </div>
  ))}
</div>
 </section>
</section> 
   

    </>
  );
}
