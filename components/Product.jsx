import React from 'react'
import {BsHeartPulseFill} from 'react-icons/bs'
import {TbDentalBroken} from 'react-icons/tb'
import {HiHome} from 'react-icons/hi'
import {BsFillHandbagFill} from 'react-icons/bs'
import {MdEmergency, MdAutoMode} from 'react-icons/md'
import {IoIosRestaurant} from 'react-icons/io'
import {GiButterflyFlower} from 'react-icons/gi'
import {GiCaptainHatProfile} from 'react-icons/gi'
import {RiServiceFill} from 'react-icons/ri'
import {CiMoneyCheck1, CiCalendar} from 'react-icons/ci'

function Product() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div>
        <h2 className="text-4xl text-gray-500 font-extrabold text-center max-w-[80%] m-auto text-gray-900 sm:text-4xl">
          SalesCaptain is designed for your business
        </h2>
        <p className="text-center text-black font-normal text-gray-500 text-2xl pb-9 pt-2">
          Select your industry to see how it works
        </p>
        <div className="max-w-[70%]  mx-auto grid md:grid-cols-4 gap-5 min-w-[90%]">
          <div className="w-full border-[1px] border-gray-100 rounded-lg shadow    curser-pointer flex items-center  justify-center  p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
            <BsHeartPulseFill className="text-4xl text-gray-500 mr-2 " />

            <h3 className="font-semibold text-black text-center ">
              HealthCare
            </h3>
          </div>
          <div className="w-full border-[1px] border-gray-100 rounded-lg shadow    cursor-pointer items-center flex justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <TbDentalBroken className="text-4xl text-gray-500 mr-2 " />
            <h3 className="font-semibold text-black">Dental</h3>
          </div>
          <div className="w-full border-[1px] border-gray-100 rounded-lg shadow    cursor-pointer flex items-center  justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <HiHome className="text-4xl text-gray-500 mr-2 " />
            <h3 className="font-semibold text-black">HomeService</h3>
          </div>
          <div className="w-full border-[1px] border-gray-100 rounded-lg shadow    cursor-pointer flex items-center  justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <BsFillHandbagFill className="text-4xl text-gray-500 mr-2 " />
            <h3 className="font-semibold text-black">Retail</h3>
          </div>
          <div className="w-full border-[1px] border-gray-100 rounded-lg shadow    cursor-pointer flex items-center  justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <MdEmergency className="text-4xl text-gray-500 mr-2 " />
            <h3 className="font-semibold text-black">Hospitality</h3>
          </div>
          <div className="w-full border-[1px] border-gray-100 rounded-lg shadow   cursor-pointer  flex items-center  justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <MdAutoMode className="text-4xl text-gray-500 mr-2 " />
            <h3 className="font-semibold text-black">Automotive</h3>
          </div>
          <div className="w-full border-[1px] border-gray-100 rounded-lg shadow    cursor-pointer flex items-center  justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <IoIosRestaurant className="text-4xl text-gray-500 mr-2 " />
            <h3 className="font-semibold text-black">Restaurants</h3>
          </div>
          <div className="w-full border-[1px] border-gray-100 rounded-lg shadow   cursor-pointer  flex items-center  justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <GiButterflyFlower className="text-4xl text-gray-500 mr-2 " />
            <h3 className="font-semibold text-black">Wellness</h3>
          </div>
          <div className="w-full border-[1px] border-gray-100 rounded-lg shadow    cursor-pointer flex items-center  justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <GiCaptainHatProfile className="text-4xl text-gray-500 mr-2 " />
            <h3 className="font-semibold text-black">Professional service</h3>
          </div>
          <div className="w-full border-[1px] border-gray-100 rounded-lg shadow   cursor-pointer  flex items-center  justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <RiServiceFill className="text-4xl text-gray-500 mr-2 " />
            <h3 className="font-semibold text-black">Care Service</h3>
          </div>
          <div className="w-full border-[1px] border-gray-100 rounded-lg shadow   cursor-pointer flex items-center  justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <CiMoneyCheck1 className="text-4xl text-gray-500 mr-2 " />
            <h3 className="font-semibold text-black">Financial Service</h3>
          </div>
          <div className="w-full border-[1px] border-gray-100 rounded-lg shadow    curs0r-pointer flex items-center  justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <CiCalendar className="text-4xl text-gray-500 mr-2 " />
            <h3 className="font-semibold text-black">Recreational Services</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
