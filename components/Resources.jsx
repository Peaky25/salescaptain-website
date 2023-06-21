import React from 'react'

const Resources = () => {
  return (
    <div className="w-full bg-white text-center py-16 px-4 text-black">
      <h2 className="text-4xl text-gray-500 font-extrabold text-center max-w-[80%] m-auto text-gray-900 sm:text-4xl">
        Expert Insights and Resources
      </h2>
      <p className="text-center text-black font-normal text-gray-500 text-2xl pb-9 pt-2">
        Get the latest business intelligence relevant to your industry, designed
        to help you grow.
      </p>

      <div className=" max-w-[90%] mx-11  grid grid-cols-3  gap-11 ">
        <div className="rounded border border-gray-100 shadow">
          <figure>
            <img
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe250a42e4ba76b2ab04_Mask%20Group%20166.webp"
              alt="ad"
            />
          </figure>
          <div className="mb-4">
            <p className="cursor-pointer font-semibold my-4">
              Google My Business Basics: How to get more customers from GMB.
            </p>
            <div className="mx-4 justify-end py-3">
              <p>
                Customers want to find local proprietors on search engines and
                nearly 90 percent of that traffic goes to Google.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded border border-gray-100 shadow">
          <figure>
            <img
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe243b03ce85cb2d8c9d_Mask%20Group%20165.webp"
              alt="ad"
            />
          </figure>
          <div className="mb-4">
            <p className="cursor-pointer font-semibold my-4">
              Google My Business Basics: How to get more customers from GMB.
            </p>
            <div className="mx-4 justify-end py-3">
              <p>
                Customers want to find local proprietors on search engines and
                nearly 90 percent of that traffic goes to Google.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded border border-gray-100 shadow">
          <figure>
            <img
              src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe2556fec0b3086291da_pexels-antoni-shkraba-4348404.webp"
              alt="ad"
            />
          </figure>
          <div className="mb-4">
            <p className="cursor-pointer font-semibold my-4">
              Google My Business Basics: How to get more customers from GMB.
            </p>
            <div className="mx-4 justify-end py-3">
              <p>
                Customers want to find local proprietors on search engines and
                nearly 90 percent of that traffic goes to Google.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center cursor-pointer font-semibold my-4 text-blue-600">
        <h5 className="text-center mt-8">View All Resources</h5>
      </div>
    </div>
  )
}

export default Resources
