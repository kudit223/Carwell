import React, { useState } from 'react';
import background from '../../assets/Home12.jpg'

const Query = () => {
  
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [number,setNumber]=useState('')
    const [message,setMessage]=useState('')
    const [isOpen,setIsOpen]=useState({
      open: false,
      cod:-1
    })
    

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data={
      name:name,
      email:email,
      number:number,
      message:message
    }

    try{
      
      const response=await fetch("https://script.google.com/macros/s/AKfycbwmnJ2aT0N8AcvaH_4JTdpOD0QjnfZPwF3-hnnQSuno5G3PojAAvFVRTUscHnArIifjHA/exec",{
      method:"POST",
      mode:'no-cors',
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(Data)
      });
      const result=await response.text()
      console.log(result)
      alert("submitted")

      setName('')
      setEmail('')
      setMessage('')
      setNumber('')
    }
    catch(err){
      console.log("error",err)
      alert("something went wrong")
    }

  };

  
  const commanQuery=[{
    drop:false,
    query: 'What services does CarWell offer?',
    response:'CarWell offers a range of services, including car wash, vacuum cleaning, mat cleaning, engine cleaning, glass cleaning, tyre polish, and bike cleaning.'
    
  },

{
  drop:false,
  query:'How can I book a service with CarWell?',
  response:'You can easily schedule your CarWell service by calling 9555987121, or by visiting our website.'
}
,{
  drop:false,
  query:'Does CarWell bring their own equipment?',
  response:'Yes, CarWell brings its own power source and high-powered cleaning tools, making it convenient for doorstep service.'
},
{
  drop:false,
  query:'What types of packages are available?',
  response:'CarWell offers three packages: Basic Wash, Standard Wash, and Premium Wash, each with specific services tailored to your needs.'
}]


  return (
    
    <div >
      <div className='relative'>
      <img src={background} alt="" className='blur flex w-500 h-200' />
    <form onSubmit={handleSubmit} className="absolute inset-0 flex flex-col justify-center h-120 max-w-md mx-auto bg-white  p-6 rounded-xl shadow-md space-y-4 my-25">
      <h2 className="text-4xl font-bold text-center text-gray-800">Contact Us</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
        />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
        />

      <input
        type="tel"
        name="phone"
        placeholder="Your Phone Number"
        value={number}
        onChange={(e)=>setNumber(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
        />

      <textarea
        name="message"
        placeholder="Your Message"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
        />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
        Submit
      </button>
    </form>
    </div>
      <div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-6xl py-5 font-bold text-center'>Common Query</h1>
          <div>
            {commanQuery.map((query,index)=>(
              <div key={index} className='rounded-lg flex border border-gray-300shadow-md text-2xl'>
                {console.log(isOpen)}
                <button onClick={()=>(setIsOpen((prevstate)=>({
                  ...prevstate,
                  open:!prevstate.open,
                  cod:index

                })))}>
                <span  className="text-xl px-3">{isOpen.cod===index ?'+':'-'}</span>
                {query.query}
                {query.drop&& <p>{query.response}</p>}
                </button>
              </div>

            ))}
          </div>

          {/* <div className=''>

          <button  onClick={()=>setIsOpen(!isOpen)}>
            <span  className="text-xl">{isOpen?'+':'-'}</span>
          <span className="font-semibold text-lg">What services does CarWell offer?</span>
          </button>
          <div>

          {isOpen&&(
            <p className="mt-2 text-gray-600">CarWell offers a range of services, including car wash, vacuum cleaning, mat cleaning, engine cleaning, glass cleaning, tyre polish, and bike cleaning.</p>
          )}
          </div>
          </div> */}
        </div>
      </div>
        </div>
          
  );
};

export default Query;
