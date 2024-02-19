import React from 'react';

function Card({ name, description, type, price, image }) {
  return (
    <div className="flex max-w-md bg-white shadow-md hover:shadow-[#7f5539] hover:shadow-lg rounded-md transform transition-transform duration-400 ease-in-out hover:translate-x-1 hover:-translate-y-1">
      <div className="w-1/2">
        <img src={image} alt={name} className="object-cover h-full w-full rounded-l-md" />
      </div>
      <div className=" w-1/2 p-4 flex flex-col justify-center items-center gap-2 overflow-hidden">
        <h3 className="text-xl font-semibold">{name}</h3>
        {description&&<p className='text-sm '>{description}</p>}
        {type&& <p className="text-sm text-gray-600 ">{type}</p>}
        <p className="text-sm text-gray-700 font-bold">₹{price}</p>
      </div>
    </div>
  );
}

export default Card;