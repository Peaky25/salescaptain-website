import React, {useEffect} from 'react'
import {useState} from 'react'
// import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className="text-white bg-white">
      {/* <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className=' font-semibold py-10 lg:text-7xl sm:text-4xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'>
        Best way to grow your local business
        </p>
        <div className='flex justify-center items-center'>
          <p className='md:text-2xl sm:text-1xl text-sl italic  py-4 text-black'>
          Artificial Intelligence powered easy-to-use tools to get more customers
           
           <br />
           & 
           <br />
           give them a better experience
          </p>
          
        </div>
        <input type="text" placeholder='EMAIL ID'  />
        <button className='bg-gradient-to-r from-slate-300 to-slate-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
      </div> */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Best way to grow your local business
              </h2>
              <p className="mt-8 max-w-2xl text-xl text-gray-500">
                Artificial Intelligence powered easy-to-use tools to get more
                customers & give them a better experience
              </p>
              <div className="mt-16">
                <a
                  href="#"
                  className="text-base font-medium text-white bg-blue-600 hover:bg-blue-800 px-6 py-3 mr-4 rounded-md"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-blue-600 hover:text-indigo-500"
                >
                  Learn More
                </a>
              </div>
              <div className="mt-4" />
            </div>

            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const images = [
    'https://assets.website-files.com/62a83ee090ccdee139c347e5/62cc453f2139195799ff1678_Mask%20Group%20109.webp',
    'https://assets.website-files.com/62a83ee090ccdee139c347e5/62def85e197fa06b03e4005b_Group%2018718.webp',
    'https://assets.website-files.com/62a83ee090ccdee139c347e5/62dee8fb4ff877b8c4b92833_new111.webp',
  ]

  const goToNextSlide = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % images.length)
  }

  const goToPrevSlide = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + images.length) % images.length)
  }

  const slideInterval = 4000 // 4 seconds

  useEffect(() => {
    const interval = setInterval(goToNextSlide, slideInterval)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="p-16">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full flex transition-all duration-300 ease-in-out transform ${
                index === activeIndex ? 'block' : 'hidden'
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
