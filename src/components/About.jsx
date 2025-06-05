import React from 'react'
import FAQs from './FAQs'

const About = () => {
  return (
    <div id='about' className='p-7 my-13 sm:px-18'>
      <p className='md:text-3xl mb-5 text-aibek-cyan text-2xl font-bold'>About us</p>

      {/* about hendle */}
      <div className='flex flex-col mb-10 sm:flex-row sm:items-center sm:gap-10'>
      <h1 className='sm:w-[50%] mb-4 font-semibold text-2xl font-roboto text-dexen-blue '>Committed to Providing Creative & Complete Branding Solutions</h1>

      <p className='sm:w-[50%] text-lg leading-tight text-gray-500 font-stretch-expanded font-roboto mb-6'>
        At Aibek Traders, we are dedicated to delivering impactful branding and design services tailored to the diverse needs of our clients. Whether you're an individual, a growing business, or a large organization, we approach every project with precision, creativity, and a deep commitment to quality. Built on trust and innovation, Aibek Traders has earned a reputation for helping brands express their identity clearly and confidently.
      </p>
      </div>

      {/* Ending */}
      <div className='flex flex-row flex-wrap items-center justify-between gap-7 w-full'>
        {/* promise */}
      <div className='bg-aibek-gray p-5 sm:p-8 shadow-lg mb-10 md:w-[47%]'>
      <h1 className='mb-4 font-bold text-2xl font-roboto text-dexen-blue '>We Handle All Your Printing Needs with Care</h1>
      <p className='text-lg leading-tight text-gray-500 font-stretch-expanded font-roboto mb-6'>
        Aibek Traders specializes in creative design and quality printing. From banners, posters, and festoons to cards, crests, and various award items — we bring your ideas to life with precision and care. Whether for business, institutions, or personal needs, Aibek offers complete solutions that make a lasting impression.


      </p>
      <img 
      className='shadow-lg'
      src="images/booksLying.webp" alt="design" />
      </div>

      <FAQs />

      
      </div>

    </div>
  )
}

export default About