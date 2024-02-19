import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiPhone } from 'react-icons/fi';
import coverImg from '../assets/contactImg.jpg';

function ContactPage() {
  return (
    <>
      <div className='flex'>
        <div className='w-2/3'>
          <div className='bg-[#dfc499] min-h-screen flex flex-col justify-center items-center px-8 py-12'>
            <h1 className='text-4xl font-bold mb-4'>Contact Us</h1>
            <p className='text-lg mb-4'>Feel free to reach out to us via email or phone:</p>
            <div className='mb-6'>
              <div className="flex items-center mb-4">
                <FiMail className="text-gray-600 mr-2" />
                <p className="">Email: <span className='text-blue-600'>abcd@gmail.com</span></p>
              </div>
              <div className="flex items-center">
                <FiPhone className="text-gray-600 mr-2" />
                <p className="">Phone number: <span className='text-blue-600'>+91 9999999999</span></p>
              </div>
            </div>
            <p className='text-lg mb-6'>Connect with us on social media:</p>
            <div className='flex gap-4'>
              <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                <FaFacebookF className='text-4xl  hover:text-gray-600 cursor-pointer' />
              </a>
              <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className='text-4xl  hover:text-gray-600 cursor-pointer' />
              </a>
              <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                <FaXTwitter className='text-4xl  hover:text-gray-600 cursor-pointer' />
              </a>
            </div>
          </div>
        </div>

        <div className='w-1/3'>
          <img src={coverImg} alt="bg-img" className='w-full object-cover min-h-screen' />
        </div>
      </div>
    </>
  );
}

export default ContactPage;
