import React from 'react'
// import Laptop from '../assets/laptop.jpg';

const Analytic = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h2 className="text-4xl font-extrabold text-center max-w-[80%] m-auto text-gray-900 sm:text-4xl">
        Make your business stand out with us
      </h2>
      <div className="max-w-[1240px] w-4/5 mx-auto grid md:grid-cols-2 space-x-6 py-11">
        <div className="flex flex-col justify-center">
          <p className="text-gray-800 mb-4 font-bold text-4xl ">
            Get discovered by more customers
          </p>
          <p className="mt-2 text-xl mb-2 font-normal text-gray-500">
            Higher reviews & better listings make you more discoverable to
            people organically
          </p>
          <button className="bg-blue-400 outline-bg text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
        <img
          className="w-[500px] mx-auto my-4"
          src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62cc453f2139195799ff1678_Mask%20Group%20109.webp"
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] w-4/5 mx-auto grid md:grid-cols-2 space-x-6 py-11">
        <img
          className="w-[500px] mx-auto my-4"
          src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62def85e197fa06b03e4005b_Group%2018718.webp"
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-gray-800 mb-4 font-bold text-4xl ">
            Faster conversion with our Captain AI
          </p>
          <p className="mt-2 text-xl mb-2 font-normal text-gray-500">
            Automate web chat, messaging, reviews & feedbacks with our AI
            assistant
          </p>
          <button className="bg-blue-400 outline-bg text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
      <div className="max-w-[1240px] w-4/5 mx-auto grid md:grid-cols-2 space-x-6 py-11">
        <div className="flex flex-col justify-center">
          <p className="text-gray-800 mb-4 font-bold text-4xl ">
            Marketing that works for you
          </p>
          <p className="mt-2 text-xl mb-2 font-normal text-gray-500">
            Run highly effective & targeted campaigns on text & emails and put
            your customer data to use
          </p>
          <button className="bg-blue-400 outline-bg text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
        <img
          className="w-[500px] mx-auto my-4"
          src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dee8fb4ff877b8c4b92833_new111.webp"
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] w-4/5 mx-auto grid md:grid-cols-2 space-x-6 py-11">
        <img
          className="w-[500px] mx-auto my-4"
          src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62dee8fba79d98b49f7812a5_new222.webp"
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <p className="text-gray-800 mb-4 font-bold text-4xl ">
            Training & Support
          </p>
          <p className="mt-2 text-xl mb-2 font-normal text-gray-500">
            Talk to a dedicated relationship manager to get the help you need.
            No wait time, a dedicated line just for you.
          </p>
          <button className="bg-blue-400 outline-bg text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Analytic
