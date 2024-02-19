import React from 'react'
import reviewsData from './reviewData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Reviews() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='flex flex-col justify-center bg-[#dfc499] p-8'>
      <h1 className='font-bold text-4xl text-center text-[#452a18]'>
        Reviews from the Table
      </h1>

      <div className=' w-[95%] m-auto'>
        <div className='m-10'>
        <Slider {...settings}>
          {reviewsData.map((data)=>(
            <div key={data.id} className='h-[450px] bg-[#FBEEC1] text-black rounded-xl'>
              <div className='flex justify-center bg-[#7f5539] rounded-t-xl'>
                <img src={data.imageSrc} alt="" className='h-44 w-44 rounded-full p-4'/>
              </div>
              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{data.name}</p>
                <p>{data.comment}</p>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
      </div>
    </>
  )
}

export default Reviews