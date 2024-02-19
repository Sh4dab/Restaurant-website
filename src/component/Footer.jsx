import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='bg-[#291F1F] text-white py-8'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-evenly px-4'>
        <div className='mb-6 md:mb-0'>
          <img src={logo} alt="logo" className='w-auto h-10' />
        </div>
        <div className='flex flex-col md:flex-row items-center gap-4 text-sm'>
          <Link to={"/"} className='hover:text-gray-300'>
            Home
          </Link>
          <Link to={"/menu"} className='hover:text-gray-300'>
            Menu
          </Link>
          <Link to={"/contact"} className='hover:text-gray-300'>
            Contact
          </Link>
        </div>
        <div className='flex items-center gap-4'>
          <FaFacebook className='hover:text-gray-300 cursor-pointer' />
          <FaInstagram className='hover:text-gray-300 cursor-pointer' />
          <FaXTwitter className='hover:text-gray-300 cursor-pointer' />
        </div>
      </div>
      <div className='container mx-auto mt-4 text-sm text-center'>
        <p>&copy; 2024 Yukihira. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;