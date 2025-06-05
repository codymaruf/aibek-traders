import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <section id="Service" className='p-7 my-13 sm:px-18'>
      <p className='md:text-3xl mb-5 text-aibek-cyan text-2xl font-bold'>Our Service</p>

      <h1 className='mb-4 font-semibold text-2xl sm:text-4xl md:text-6xl font-roboto text-dexen-blue '>Aibak Traders – Trusted Printing Solutions in Your Area</h1>

      <p className='text-lg leading-tight text-gray-500 font-stretch-expanded font-roboto mb-6'>
        Aibak Traders is a trusted printing and design center serving individuals, businesses, and organizations. We’ve built a strong reputation for delivering high-quality work with a personal touch. <br />

        From local clients to visitors preparing for events, exhibitions, or campaigns, Aibak Traders has become a go-to name for reliable and creative printing solutions. Whether you need banners, posters, crests, or custom T-shirts, we’re committed to making your ideas come to life — on time and with care. <br  />

        We take pride in our friendly service, affordable pricing, and dedication to quality.
      </p>

      <div
      className='flex flex-wrap justify-center gap-5'
      >
        <ServiceCard image="images/benner.png" title="Benner"/>
      <ServiceCard image="images/card.png" title="Business Card"/>
      <ServiceCard image="images/chrest.png" title="Awards"/>
      <ServiceCard image="images/id.png" title="ID Card"/>
      <ServiceCard image="images/rebone.png" title="Ribbon"/>
      </div>
    </section>
  )
}

export default Services