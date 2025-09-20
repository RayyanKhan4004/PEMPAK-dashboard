import exam from '../../../app/home/assets/exam.svg'
import light from '../../../app/home/assets/eco-light-bulb.svg'
import automation from '../../../app/home/assets/automation.svg'
import presentation from '../../../app/home/assets/presentation.svg'
import tool from '../../../app/home/assets/tool.svg'
import setting from '../../../app/home/assets/settings.svg'
import Image from 'next/image'

export const products1 = [
  { id: 1, name: "Automatic Switch Transfer (ATS)", image: "/Block/homeimg/product1.jpg" },
  { id: 2, name: "Light Power Distribution Board (BDS)", image: "/Block/homeimg/product2.jpg" },
  { id: 3, name: "Bus Tie Duct (BTD)", image: "/Block/homeimg/product3.jpg" }
];

export const services = [
  {
    id: 1,
    title: "Manufacturing",
    description: "We deliver high-quality manufacturing with precision, durability, and innovation at every stage.",
    icon: <Image src={automation} alt=''/>, 
  },
  {
    id: 2,
    title: "Installation & Commissioning",
    description: "We deliver reliable installation and commissioning, ensuring smooth setup, optimal performance, and long-term efficiency.",
    icon: <Image src={setting} alt=''/>,
  },
  {
    id: 3,
    title: "Maintenance",
    description: "We provide expert maintenance to keep your systems running smoothly, safely, and efficiently.",
    icon: <Image src={tool} alt=''/>,
  },
  {
    id: 4,
    title: "Testing",
    description: "We provide reliable testing services to ensure safety, accuracy, and optimum performance of your systems.",
    icon: <Image src={exam} alt=''/>,
  },
  {
    id: 5,
    title: "Training",
    description: "We offer professional training to equip your team with the knowledge and skills for safe and efficient operations.",
    icon: <Image src={presentation} alt=''/>,
  },
  {
    id: 6,
    title: "Energy Audit",
    description: "Identify energy waste, optimize efficiency, and reduce costs with our professional energy audit service.",
    icon: <Image src={light} alt=''/>,
  },
];
export const team1= [
  {id:1 ,
   image: '/Block/Teampempak/pic1.jpg',
   name: 'Shahid Ali Malik' ,
   description:'Cheif Executive Officer (CEO)'
  }, 

  {
    id:2 ,
    name:'Engr, Shahidzad Afnan' ,
    image:'/Block/Teampempak/pic2.jpg',
    description:'Director'
  },
   {
    id: 3,
    name: 'Dr.Shahidzada Usman',
    image:'/Block/Teampempak/pic3.jpg',
    description:'Director'
   },
   {
    id:4,
    name:'Engr.Ahmad Fawad',
    image:'/Block/Teampempak/pic4.jpg',
    description:'Manager Marketing '
   },
   {
    id:5,
    name:'Engr. Ali Anwar',
    image :'/Block/Teampempak/pic5.jpg',
    description: 'Directror Operations',
    },
    {
      id:6,
      name:'Engr. Qaiser Ali',
      image:'/Block/Teampempak/pic6.jpg',
      description:'Application Engineer',
    },
    {
      id:7,
      name:'Engr. Muhammad Azhar',
      image:'/Block/Teampempak/pic7.jpg',
      description:'Manager Production',      
    },

    {
      id:8,
      name:'Nazeer Ahmad',
      image:'/Block/Teampempak/pic8.jpg',
      description:'Supervisor Electrical',
    }
]

export const team2=[{
  id:1,
  image:'/Block/Skilled team/pic1.png',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic cupiditate molestiae voluptas laboriosam harum velit commodi quia vitae, voluptatum obcaecati alias in esse! Culpa minus mollitia neque sed expedita! '
},
 {
  id:2,
  image:'/Block/Skilled team/pic2.png' ,
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic cupiditate molestiae voluptas laboriosam harum velit commodi quia vitae, voluptatum obcaecati alias in esse! Culpa minus mollitia neque sed expedita!'
 },
 {
  id:3,
  image:'/Block/Skilled team/pic3.png',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, hic cupiditate molestiae voluptas laboriosam harum velit commodi quia vitae, voluptatum obcaecati alias in esse! Culpa minus mollitia neque sed expedita!'
 },
]

export const clientlogo=[
  {
    id:1,
    image:'/Block/Client logo/pic1.png'
  },
  
  {
    id:2,
    image:'/Block/Client logo/pic2.png'
  },
  
  {
    id:3,
    image:'/Block/Client logo/pic3.png'
  },
  
  {
    id:4,
    image:'/Block/Client logo/pic4.png'
  },
  
  {
    id:5,
    image:'/Block/Client logo/pic5.png'
  },
  
  {
    id:6,
    image:'/Block/Client logo/pic6.png'
  },
  
  {
    id:7,
    image:'/Block/Client logo/pic7.png'
  },
  
  {
    id:8,
    image:'/Block/Client logo/pic8.png'
  },
]

export const Signatureprojects= [
    {
        id:1,
        image:'/Block/Signature/pic1.jpg',
        title:'Qadafi Stadium',
        description:'Complete electrical installation for 50,000 sq ft office complex Complete electrical.',
    },
    {
        id:2,
        image:'/Block/Signature/pic2.jpg',
        title:'Safe City Gujranwala',
        description:'Industrial power distribution and automation systems Industrial power.'
    },
    {
        id:3,
        image:'/Block/Signature/pic3.jpg',
         title:'Mangla Dam',
        description:'Industrial power distribution and automation systems Industrial power..'
    },
    
    {
        id:4,
        image:'/Block/Signature/pic4.jpg',
         title:'Stitching Unit',
        description:'Industrial power distribution and automation systems Industrial power.'
    },
    {
        id:5,
        image:'/Block/Signature/pic5.jpg',
         title:'Hospitals',
        description:'Industrial power distribution and automation systems Industrial power.'
    },
    {
        id:6,
        image:'/Block/Signature/pic6.jpg',
         title:'Tarbela Dam',
        description:'Industrial power distribution and automation systems Industrial power.'
    },

]

export const btn1 = " cursor-pointer px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold shadow hover:bg-orange-600 transition"  
export const news1= [

    {
        id:1, 
        image:'/Block/Newspic/pic1.png',
        date:'August 15 2025',
        title:'New Solar Division Launch',
        description:'Expanding our services to include comprehensive solar installation and maintenance.',
        img:'/Block/Newspic/Shahid ALi Malik.jpg',
        name:'Shahid Ali '
    },
    {
        id:2, 
        image:'/Block/Newspic/pic3.jpg',
        date:'August 15 2025',
        title:'Safety Award Recognition',
        description:'Received the Regional Safety Excellence Award for zero workplace accidents..',
        img:'/Block/Newspic/Shahid ALi Malik.jpg',
        name:'Shahid Ali'
    },
    {
        id:3, 
        image:'/Block/Newspic/pic2.png',
        date:'August 15 2025',
        title:'',
        description:'Welcoming 20 new certified electricians to meet growing demand..',
        img:'/Block/Newspic/Shahid ALi Malik.jpg',
        name:'Shahid Ali'
    },
]

    //  Our Team PAge 

    export const ourteam1=[
      
      {
      id:1,
      name:'Engr. Shahidzada Afnan Malik',
      description:'Director',
      image:'Block/Our team/pic2.png'
    },
      {
      id:2,
      name:'Dr. Shahidzada Usman Malik',
      description:'Director',
      image:'Block/Our team/pic3.png'
    },
  
  
  ]

  export const ourservice1=[

    {
      id:1 ,
      name:'Engr. Ali Anwar',
      image:'/Block/Our team/service1.png',
      description:'Design Engineer'
    },
    {
      id:2 ,
      name:'Engr. Qaiser Ali',
      image:'/Block/Our team/service2.png',
      description:'Application Engineer'
    },
    {
      id:3 ,
      name:'Engr. Muhammad Azhar',
      image:'/Block/Our team/service3.png',
      description:'Manager Production'
    },
    {
      id:4 ,
      name:'Nazeer Ahmed',
      image:'/Block/Our team/service4.png',
      description:'Supervisor Electrical'
    },
    {
      id:5 ,
      name:'Raheem Butt',
      image:'/Block/Our team/service5.png',
      description:'Manager Finance'
    },
    {
      id:6 ,
      name:'Ayyaz Butt',
      image:'/Block/Our team/service6.png',
      description:'Manager Procurement'
    },


  ]

  
