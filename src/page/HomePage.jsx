import React from 'react'
import mainImg from '../assets/homeImg.jpg'
import aboutImg from '../assets/storyImg.jpg'
import foodImg from '../assets/pasta.jpg'
import AppleRiosotto from '../assets/AppleRisotto.jpg'
import pizza from '../assets/pizza.jpg'
import Reviews from '../component/customerReview/reviews'
import { TfiMoreAlt } from "react-icons/tfi";
import Card from "../component/card";
import { Link } from 'react-router-dom'
import Stats from '../component/Stats'
export default function HomePage() {
  return (
    <>
      <section className='p-20 bg-[#dfc499] '>
        <div className='flex justify-center items-center'>
          <div className="">
            <h1 className='text-6xl font-bold text-[#7f5539]'>Restaurant Yukihira</h1>
            <p className='text-[#7f5539] mt-2'>Experience a culinary journey like no other at Restaurant Yukihira. Our chefs blend tradition and innovation to create dishes that will delight your senses.</p>
            <Link to="/menu">
              <button className="mt-2 bg-[#7f5539] text-white rounded-full px-4 py-2 hover:bg-[#5a3a26] transition duration-300">
                Explore Our Menu
              </button>
            </Link>
          </div>
          <div className=''>
            <img src={mainImg} alt="" className='rounded-3xl shadow-[#7f5539] shadow-lg' />
          </div>
        </div>
      </section>

      <Stats />

      <section className='bg-[#dfc499]'>
        <div className='relative'>
          <img src={aboutImg} alt="bg-img" className='w-full h-auto' />
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-8 text-[#7f5539] text-center bg-black bg-opacity-70 sm:bg-opacity-80 md:bg-opacity-95">
            <h1 className="text-4xl font-bold mb-4 text-white">Our Story</h1>
            <p className="text-lg leading-loose">
              Welcome to Restaurant Yukihira, where culinary passion meets innovation. Our journey began with a vision to create a dining experience that goes beyond ordinary. Established with love for the art of cooking, we invite you to embark on a gastronomic adventure like no other.
            </p>
            <p className="text-lg leading-loose mt-4">
              At the heart of Restaurant Yukihira is a commitment to excellence. Our chefs meticulously craft each dish, infusing tradition with a touch of creativity. Every plate tells a story, a narrative woven with flavors that reflect our dedication to culinary craftsmanship.
            </p>
            <p className="text-lg leading-loose mt-4">
              Nestled in a warm and inviting ambiance, our restaurant is more than just a place to dine, it's a heaven where friends and families gather, creating lasting memories. Whether you seek a romantic dinner, a celebration, or a casual outing, Restaurant Yukihira welcomes you to savor moments of joy and indulgence.
            </p>
            <p className="text-lg leading-loose mt-4">
              Join us on this culinary journey, where tradition, innovation, and passion converge to create a symphony of flavors. We look forward to serving you and making every visit to Restaurant Yukihira a delightful and memorable experience.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-[#7f5539] p-4'>
        <h1 className='text-white text-4xl font-serif font-semibold text-center p-4'>
          Our Restaurant's Specials
        </h1>
        <div className='flex justify-evenly gap-4 p-4'>
          <Card
            name="Apple Risotto"
            type="Risotto, Italian"
            description="The risotto emits a refreshing aroma that's both sweet and tart."
            price="240"
            image={AppleRiosotto}
          />
          <Card
            name="Signature Pasta"
            type="Pasta, Italian"
            description="A delightful pasta dish prepared with our secret sauce."
            price="240"
            image={foodImg}
          />
          <Card
            name="Chef's Special Pizza"
            type="Pizza, Italian"
            description="A mouthwatering pizza topped with a unique blend of flavors."
            price="350"
            image={pizza}
          />
        </div>
        <div className='flex justify-end'>
          <Link to="/menu">
            <h1 className="text-red-200 hover:text-red-400 transition-all duration-300 cursor-pointer flex items-center">
              <span className="mr-1">View More</span>
              <TfiMoreAlt className='mt-2' />
            </h1>
          </Link>
        </div>
      </section>

      <Reviews />
    </>
  )
}
