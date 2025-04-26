import React from "react";
import AboutUsBackgroundImage from '../../assets/AboutUsBackgoundImage.png'


export default function AboutUs()
{
    return (

        <div >
            <section
                style={{ backgroundImage: `url(${AboutUsBackgroundImage})` ,
                backgroundSize:'100% 100%'}}
                className="w-full h-[400px] bg-no-repeat bg-center"
            >
               
            </section>
            <h1 className="text-center font-bold text-5xl my-3"> About Us</h1>
            <p className="mx-10 my-5">CarWell provides affordable autocare with doorstep convenience through its technology and business model. We have developed an innovative bag-pack that includes high-powered service tools. This enables low water uses with pressure-wash and vacuum car cleaning, unlike the current industry standards that rely on cleaning vans or asset-heavy car wash centers. Our website and call service allows for easy booking and scheduling of on-demand professional services as per requirement.</p>
            <h1 className="text-center font-bold text-3xl my-3">CarWell Green</h1>
            <p className="mx-10 my-5">CarWell aims at redefining sustainability in a true sense. With an array of completely eco-friendly services, including low water consuming car cleaning and pressure wash options that save up to 70% of water compared to traditional washing centers. CarWell is committed to contributing toward a sustainable future. Our goal is to empower future generations by reducing environmental impact through innovative autocare solutions.</p>
        </div>
    );
}