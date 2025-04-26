import React from "react";
import UnderCarWash from '../../assets/undercarwash.jpg'
import CarWash from '../../assets/carwash.jpg'
import CarPolish from '../../assets/carposlish.jpg'
import EngineCleaning from '../../assets/Enginecleaning.jpg'
import Tyrepolish from '../../assets/tyrepolish.jpg'
import HowItWork from '../../assets/HowItWork.png'
export default function Services() {

  const features = [
    {
      icon: "📅",
      title: "Easy Booking",
      description: "Easy booking and scheduling at your convenience.",
    },
    {
      icon: "🔌",
      title: "Self-Powered",
      description: "We bring our own Power-Source.",
    },
    {
      icon: "💧",
      title: "Water Efficient",
      description: "We use only two buckets of water.",
    },
    {
      icon: "🧰",
      title: "11+ Services",
      description: "11+ Services for your vehicles at your doorstep!",
    },
    {
      icon: "🎒",
      title: "Innovative Tools",
      description: "Innovative backpack with high-powered service tools.",
    },
    {
      icon: "🌿",
      title: "Eco-Friendly",
      description: "Eco-friendly services, saving up to 70% water.",
    },
    {
      icon: "🌍",
      title: "Future Focused",
      description: "Empowering future generations by reducing environmental impact.",
    },
  ];
  const services = [
    { name: "Under Car Wash", image: UnderCarWash },
    { name: "Car Wash", image: CarWash },
    { name: "Car Polish", image: CarPolish },
    { name: "Engine Cleaning", image: EngineCleaning },
   
  ];
  return (<div className="mx-10 my-10 ">
    <h1 className=" text-6xl text-center font-bold "> Our Services</h1>
    <div className="my-10 flex flex-wrap gap-4 justify-center">
      {services.map((service, index) => (
        <div key={index} className="w-[300px] p-6 rounded-lg shadow-md bg-black">
          <img
            src={service.image}
            alt={service.name}
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-center text-2xl font-medium font-mono tracking-widest uppercase text-gray-100">
              {service.name}
            </span>
          </div>
        </div>
      ))}
    </div>
    <div className=" w-full bg-no-repeat flex  "> 
      <img src={HowItWork} alt="Loading.." />
    </div>
    <h1 className="text-6xl text-center font-bold my-7">Stress-Free Process!</h1>
    <div className="p-6 bg-gray-100 my-0">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

    </div>

  </div>);
}