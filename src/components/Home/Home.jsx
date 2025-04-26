import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeBackgroundImage from '../../assets/Homebackground.png';
import test from '../../assets/Home12.jpg'
import Location from '../Location/Location';

const HeroSection = () => {
  const [currentIndex,setCurrentIndex]=useState(0);

  const services = [
    "Car Wash",
    "Vaccum Cleaning",
    "Mat Cleaning",
    "Tyre Polish",
    "Glass Cleaning",
    "Under Car Wash",
    "Dash Board Polish",
    "Car polish",
    "Engine Cleaning"
  ];

  useEffect(()=>{ setInterval(() => {
    setCurrentIndex(prev=> prev===services.length-1?0:prev+1);
}, 2000)},[])

  return (
   
   
    <div className="relative ">
      <img className=' flex w-500 h-200  ' src={test} alt="Loading.." />
  <div className="absolute inset-0 flex flex-col items-center justify-center  lg:my-33 px-6 md:px-12 lg:px-24 space-y-4 md:space-y-6 ">
    
    <h1 className="text-5xl md:text-7xl lg:text-9xl lg:my-1  font-bold text-white">
      Premium
    </h1>

    <h1 className="text-3xl md:text-5xl lg:text-6xl lg:my-0 font-bold text-white">
      {services[currentIndex]}
    </h1>

    <h1 className="text-2xl md:text-4xl lg:text-5xl lg:my-1 font-bold text-yellow-900">
      at your Door Step !
    </h1>

    <h1 className="text-xl md:text-3xl lg:text-4xl lg:my-0 font-bold text-white">
      Authorised Products
    </h1>

    <h1 className="text-xl md:text-3xl lg:text-4xl lg:my-0 font-bold text-white">
      Most Affordable Price
    </h1>

    <h1 className="text-xl md:text-3xl lg:text-4xl lg:my-0 font-bold text-white">
      Service Start at <span className="text-red-500">₹249</span>
    </h1>
    <div className='flex gap-1 md:gap-7 lg:gap-10'>

    <button type="button" className="w-fit px-8 py-3 lg:my-1  font-bold rounded-full bg-white text-black hover:bg-gray-600 transition">
      <Link to="/query">Query</Link>
    </button>
    <button type="button" className="w-fit px-8 py-3 lg:my-1  font-bold rounded-full bg-white text-black hover:bg-gray-600 transition">
      <Link to="/price">Price</Link>
    </button>
      <Location/>
    </div>
  </div>
</div>


  );
};

export default HeroSection;

