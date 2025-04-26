import {Link} from 'react-router-dom'
import LogoFooter from '../../assets/logo1.jpg'
import PhoneIcon from '../../assets/phone.png'
import MapIcon from '../../assets/map.png'
import EmailIcon from '../../assets/communication.png'
import TimeIcon from '../../assets/opening-hours.png'


export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white px-6 py-10 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Contact Us */}
        <div>
          <h2 className="text-2xl font-semibold px-7  mb-4">Contact Us</h2>
          <div className="flex items-center gap-2  mb-2">
            <div className="w-5 h-5 text-gray-400" />
            <img src={PhoneIcon} className='w-7 h-7'  />
            <span>Phone No.:</span>
            <span>9555987121</span>
          </div>
          <div className="flex items-center  gap-2 mb-2">
            <div className="w-5 h-5 text-gray-400" />
            <img src={EmailIcon} className='w-7 h-7' />
            <span>Email: carwellindeoria@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 text-gray-400" />
            <img src={MapIcon} className='w-7 h-7' />

            <span>Location: Maa Sharda puri Near JK Mittal Academy Bhatwaliya Deoria,UP</span>
          </div>
        </div>

        {/* Opening Time */}
        <div>
          <h2 className="text-2xl font-semibold px-7 mb-4">Opening Time</h2>
          <div className="flex items-start gap-2 mb-1">
            <div className="w-5 h-5 text-gray-400 mt-1" />
            <div>
            <img src={TimeIcon} className='w-15 h-15' />
              <span>Mon–Sat: <strong>9:00 AM – 9:00 PM</strong></span>
              <p>Sunday: <strong>6:00 AM – 9:00 PM</strong></p>
            </div>
          </div>
        </div>

        {/* Join & Newsletter */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Join Team</h2>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 text-gray-400" />
            <p>Become a family, join here</p>
          </div>
          <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
          <p className="mb-3 text-sm text-gray-300">Subscribe to our newsletter for the latest updates and offers.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded bg-white text-black w-full sm:w-auto"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="mt-10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} CarWell. All rights reserved.
      </div>
    </footer>
    );
}
