import React from 'react';
import BackgroundImagePrice from '../../assets/Home12.jpg'
const Price = () => {
    const headers = ['Service', '5 Sit', '7 Sit', 'Wash/Month', 'Combo'];
  const rows = [
    ['Basic', '₹ 900', '₹ 1100', '4', '2'],
    ['Standard', '₹ 1300', '₹ 1500', '4', '1'],
    ['Premium', '₹ 1900', '₹ 2300', '4', '1'],
  ];
    return (
        <div className='bg-gradient-to-r from-teal-400 to-yellow-900 '>

            <div className=' '>
                <div className=' '>

                <h1 className='text-6xl text-center font-bold  text-white'>Price Card</h1>
        <div className=' flex flex-wrap gap-4 justify-center'>
            <div className="bg-gray-900 text-white p-2 md:p-5 mx-10 md:mx-10 my-5 md:my-10 rounded-2xl shadow-lg w-full max-w-xs border-4 border-yellow-400 relative ">


                <h2 className="text-4xl text-center font-semibold mb-2">Basic Wash</h2>
                <div className='flex mx-2'>

                    <div className="text-xl md:text-2xl lg:text-2xl font-bold p-2 mb-2">₹249 <span className="text-sm font-normal text-yellow-400">5 seater</span></div>
                    <div className="text-xl md:text-2xl lg:text-2xl font-bold p-2 mb-2">₹299  <span className="text-sm font-normal text-yellow-400">7 seater</span></div>
                </div>
                <div className="text-2xl text-white mb-6">Service you get</div>

                <ul className="space-y-3 text-sm ">
                    <li className="flex items-center">
                        ✅ Car Wash
                    </li>
                    <li className="flex items-center">
                        ✅ Vaccum Cleaning
                    </li>
                    <li className="flex items-center">
                        ✅ Mat Cleaning
                    </li>
                    <li className="flex items-center text-gray-400 line-through">
                        ❌ Tyre Polish
                    </li>
                    <li className="flex items-center text-gray-400 line-through">
                        ❌ Glass Cleaning
                    </li>

                    <li className="flex items-center text-gray-400 line-through">
                        ❌ Under Car Wash
                    </li>
                    <li className="flex items-center text-gray-400 line-through">
                        ❌ Dash Board Polish
                    </li>
                    <li className="flex items-center text-gray-400 line-through">
                        ❌ Car polish
                    </li>
                    <li className="flex items-center text-gray-400 line-through">
                        ❌ Engine Cleaning
                    </li>
                </ul>

                <button className="w-full mt-6 bg-white text-black font-semibold py-2 rounded-lg hover:bg-yellow-300 transition">
                    Buy Now
                </button>
            </div>

            <div className="bg-gray-900 text-white p-2 md:p-5 mx-10 md:mx-10 my-5 md:my-10 rounded-2xl shadow-lg w-full max-w-xs border-4 border-yellow-400 relative ">
                <div className="absolute -top-3 right-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    Trending
                </div>

                <h2 className="text-4xl text-center font-semibold mb-2">Premium</h2>
                <div className='flex mx-2'>

                    <div className="text-xl md:text-2xl lg:text-2xl font-bold p-2 mb-2">₹499 <span className="text-sm font-normal text-yellow-400">5 seater</span></div>
                    <div className="text-xl md:text-2xl lg:text-2xl font-bold p-2 mb-2">₹599  <span className="text-sm font-normal text-yellow-400">7 seater</span></div>
                </div>
                <div className="text-2xl text-white mb-6">Service you get</div>

                <ul className="space-y-3 text-sm ">
                    <li className="flex items-center">
                        ✅ Car Wash
                    </li>
                    <li className="flex items-center">
                        ✅ Vaccum Cleaning
                    </li>
                    <li className="flex items-center">
                        ✅ Mat Cleaning
                    </li>
                    <li className="flex items-center">
                        ✅ Tyre Polish
                    </li>
                    <li className="flex items-center">
                        ✅ Glass Cleaning
                    </li>
                    <li className="flex items-center">
                        ✅ Under Car Wash
                    </li>
                    <li className="flex items-center">
                        ✅ Dash Board Polish
                    </li>
                    <li className="flex items-center">
                        ✅ Car polish
                    </li>
                    <li className="flex items-center">
                        ✅ Engine Cleaning
                    </li>
                </ul>

                <button className="w-full mt-6 bg-white text-black font-semibold py-2 rounded-lg hover:bg-yellow-300 transition">
                    Buy Now
                </button>
            </div>
            <div className="bg-gray-900 text-white p-2 md:p-5 mx-10 md:mx-10 my-5 md:my-10  rounded-2xl shadow-lg w-full max-w-xs border-4 border-yellow-400 relative ">


                <h2 className="text-4xl text-center font-semibold mb-2">Standard</h2>
                <div className='flex mx-2'>

                    <div className="text-xl md:text-2xl lg:text-2xl font-bold p-2 mb-2">₹349  <span className="text-sm font-normal text-yellow-400">5 seater</span></div>
                    <div className="text-xl md:text-2xl lg:text-2xl font-bold p-2 mb-2">₹399  <span className="text-sm font-normal text-yellow-400">7 seater</span></div>
                </div>
                <div className="text-2xl text-white mb-6">Service you get</div>

                <ul className="space-y-3 text-sm ">
                    <li className="flex items-center">
                        ✅ Car Wash
                    </li>
                    <li className="flex items-center">
                        ✅ Vaccum Cleaning
                    </li>
                    <li className="flex items-center">
                        ✅ Mat Cleaning
                    </li>
                    <li className="flex items-center">
                        ✅ Tyre Polish
                    </li>
                    <li className="flex items-center">
                        ✅ Glass Cleaning
                    </li>
                    <li className="flex items-center">
                        ✅ Dash Board Polish
                    </li>
                    <li className="flex items-center text-gray-400 line-through">
                        ❌ Under Car Wash
                    </li>
                    <li className="flex items-center text-gray-400 line-through">
                        ❌ Car polish
                    </li>
                    <li className="flex items-center text-gray-400 line-through">
                        ❌ Engine Cleaning
                    </li>
                </ul>

                <button className="w-full mt-6 bg-white text-black font-semibold py-2 rounded-lg hover:bg-yellow-300 transition">
                    Buy Now
                </button>
            </div>

            </div>
            <div>
            <h1 className='font-bold text-6xl text-white text-center'>Membership</h1>
            </div>
            
        <div className='flex justify-center'>

            <div className="overflow-x-auto rounded-2xl my-10   border-4 border-yellow-400 relative">
      <table className="bg-gray-900 text-white p-5 w-full max-w-sm ">
        <thead className="bg-white text-gray-700 text-sm">
          <tr>
            {headers.map((header, index) => (
                <th key={index} className="px-3 py-6 text-center border-b border-gray-200 text-black  font-bold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-white text-sm">
          {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-500 transition text-white">
              {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-1 md:px-2 lg:py-3 py-6 border-b border-gray-100 text-center">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

          </div>
          </div>
          </div>

        </div>
    );
};

export default Price;


