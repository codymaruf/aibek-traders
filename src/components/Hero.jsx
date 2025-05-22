import { useGSAP } from "@gsap/react"
import gsap from "gsap";

const Hero = () => {
  let tl = gsap.timeline()

  useGSAP(() =>{
    tl.from(
      '#welcome',
      {y:-60, opacity:0, duration:1.7},
    )
    tl.from(
      '#trust-call',
      {y:50, opacity:0, duration:2}, .5
    )
    tl.from(
      '#description',
      {y:-40, opacity:0, duration:1.7}, 1
    )
    tl.from(
      '#button',
      {y:40, opacity:0, duration:1.7}, 1
    )
  }, [])

  return (
    
    <section className='w-full sm:h-screen h-[70vh] relative'>
      <div className="absolute z-10 bg-black opacity-70 h-full w-full"></div>
      {/* Background Image */}
      <img id='bg-img'src="./images/machine.jpg"  alt="machine" className='object-cover w-full h-full absolute z-0' />

      {/* Overlay Content */}
      <div id="texts" className="relative z-30 flex flex-col items-center justify-center sm:gap-10 gap-6 h-full text-white text-center  px-4">
        
        <h1 id='welcome' className='opacity-70 font-bold sm:text-3xl text-xl'>Welcome to Aibek Traders</h1>
      <h1 id='trust-call' className='opacity-70 font-bold md:text-8xl sm:text-5xl text-3xl'>Trusted Ptinting<br/> & Copy Center</h1>
      <p id='description' className='text-xl sm:text-3xl md:text-4xl opacity-70'>Design helps us to stand out, it tells a story<br/> about us and what we stand for.</p>
      <div id="button" className="">
        <button  className="bg-green-500 shadow-lg border-1 border-green-300 rounded-xl h-10 w-30 text-aibek-cream font-bold sm:h-15 sm:w-50 sm:text-2xl hover:scale-105 duration-100 cursor-pointer ease-in">
          Place Order
        </button>
      </div>
      </div>
    </section>
  )
}

export default Hero