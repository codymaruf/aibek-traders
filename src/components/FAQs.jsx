import {useState} from 'react'

const FAQs = () => {

    const faqs = [
  {
    question: "What kind of printing services does Aibek offer?",
    answer: "Aibek Traders offers design and print services for banners, posters, cards, crests, awards, and more, tailored for individuals, businesses, and organizations."
  },
  {
    question: "Can I request custom design work?",
    answer: "Yes, Aibek provides fully customizable design services to match your unique branding or personal needs."
  },
  {
    question: "Do you support bulk or institutional orders?",
    answer: "Absolutely. We regularly handle bulk printing for institutions, events, and corporate clients with competitive pricing."
  },
  {
    question: "What is the typical delivery time?",
    answer: "Delivery time varies depending on the project size but most orders are completed within 3-5 working days."
  },
];

const [activeIndex, setActiveIndex] = useState(null);

const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
}


  return (
    
      <div className='md:w-[48%]'>
      <p className='md:text-3xl mb-5 text-aibek-cyan text-2xl font-bold'>Aibek FAQs</p>
      <h1 className='mb-4 font-semibold text-2xl sm:text-3xl md:text-4xl font-roboto text-dexen-blue '>Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <div key={index} className='mb-4'>
            {/* question */}
            <div className={`flex flex-row items-center justify-between p-4 w-full text-left rounded-lg shadow-md font-semibold transition-all duration-300 ease-in-out ${activeIndex === index ? "bg-aibek-cyan text-black" : "bg-aibek-gray text-dexen-blue "}`}
            onClick={() => toggleFAQ(index)}
            >
            <button
            
            
            >
                {faq.question}
            </button>
                <button className='font-bold text-xl'>
                    {activeIndex === index ? "-" : "+"}
                </button>
            
            </div>

            {/* answer */}
            <div
            className={`mt-2 text-gray-600 transition-all duration-300 ease-in-out ${
              activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
            >
                <p>{faq.answer}</p>
            </div>
        </div>
      ))}

      </div>
  )
}

export default FAQs