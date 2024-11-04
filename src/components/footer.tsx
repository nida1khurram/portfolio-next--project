
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { SiGmail } from "react-icons/si";
export default function Footer() {
  return (
    // <div className='bg-blue-50'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <Link href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
     {/* footer pic */}
    <Image 
   src={"/picture/n1.png"}
    alt="logo"
    width={80}
    height={80}
    />
      <span className="ml-3 text-xl">Nida Khurram</span>
    </Link>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-black sm:py-2 sm:mt-0 mt-4">
      © 2024 Nida Khurram —
     
    </p>
    
    {/* <span className="flex flex-col sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"> */}
      {/* linkendin icon */}
      <span className='flex gap-3 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
      <Link 
       target='_blank'
      href={'https://www.linkedin.com/in/nida-khurram/'}
      className="text-gray-500">
      <FaLinkedinIn className='text-2xl text-[#2ab4aa]'/>
      </Link>
      <Link target="_blank" href={"https://myaccount.google.com/intro/signing-in-to-google"} 
      className="text-[#2ab4aa]">
              <SiGmail className="text-2xl hover:text-[#2ab4aa] "/>
          </Link>

          <Link target="_blank" href={"https://github.com/nida1khurram"} className="text-[#2ab4aa]">
              <FaGithub className="text-2xl hover:text-[#2ab4aa]"/>
          </Link>
          </span>
      {/*  */}
      
    {/* </span> */}
  </div>
</footer>

    // </div>
  )
}
