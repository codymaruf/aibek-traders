const ContactUs = () => {

  const infos = [
    {
      title: 'Company Name:', info: 'Aqidah Printing'
    },
    {
      title: 'Address:', info: 'Qudrat Ullah, Bondor Bazar, Sylhet Bangladesh'
    },
    {
      title: 'Phone Number:', info: '+1 (123) 456-7890'
    },
    {
      title: 'Email:', info: 'aibekmail.com'
    }
  ]

  const socialMedia = [
    {
      icon: '<i class="fa-brands fa-facebook"></i>', link: 'https://www.facebook.com/groups/1012188983979362/user/61564501293922/'
    },
    {
      icon: '<i class="fa-brands fa-instagram"></i>', link: 'instagram.com'
    }
  ]

  return (
    <div id="contact-us" className='p-7 my-13 sm:px-18'>
      <p className='md:text-3xl mb-5 text-aibek-cyan text-2xl font-bold'>Contact Us</p>

      <h1 className='mb-4 font-semibold text-2xl font-roboto text-dexen-blue '>We’re Ready to Bring Your Ideas to Life!

      </h1>

      <p className='text-lg leading-tight text-gray-500 font-stretch-expanded font-roboto mb-6'>
        Have a question about our services, need a custom quote, or want to discuss your next design or printing project? Aibek Traders is here to help individuals, businesses, and organizations bring their vision to reality with quality and care. Reach out to us today — we’d love to connect and assist you every step of the way.


      </p>

      <h1 className='mb-4 font-semibold text-2xl font-roboto text-dexen-blue '>Contact Information:

      </h1>
      
      <div className="flex flex-col md:flex-row flex-wrep gap-4">
        {/* info */}
      <div className='md:w-[48%] flex flex-col  mb-6'>
      {
        infos.map((info, index) => (
          <div key={index} className='mb-4 flex flex-col '>
            <p className='font-semibold text-aibek-navy text-lg'>
             <span className="text-sm text-gray-600"><i  class="fa-duotone fa-solid fa-circle-dot"></i></span> {info.title}</p>
            <p className='text-gray-600'>{info.info}</p>
          </div>
        ))
      }

      {/* social media */}
      <div className="flex flex-row gap-4">
        {
          socialMedia.map((social, index) => (
            <div key={index} className=''>             
              <a href={social.link} target="_blank" rel="noopener noreferrer" className='text-aibek-navy text-lg' dangerouslySetInnerHTML={{ __html: social.icon }}>
              </a>
            </div>
          ))}
            
        
      </div>
      </div>

      {/* visit massage */}

      <div className="md:w-[48%]">
      <h1 className='mb-4 font-semibold text-2xl font-roboto text-dexen-blue '>Visit Us Anytime!</h1>
      <p className='text-lg leading-tight text-gray-500 font-stretch-expanded font-roboto mb-6'>
        You're always welcome at our office. Whether you want to explore our work, share your ideas, or simply discuss your printing and design needs face-to-face — we’d love to meet you in person. Drop by during office hours, and let’s create something amazing together!


      </p>
      </div>
      </div>


    </div>
  )
}

export default ContactUs