import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import LatestProject from './components/LatestProject'
import ContactUs from './components/ContactUs'
import About from './components/about'
import Footer from './components/Footer'

const App = () => {
  return (
    <section className='max-w-7xl m-auto'>
      <Nav />
      <Hero />
      <Services />
      <LatestProject />
      <About />
      <ContactUs />
      <Footer />
    </section>
  )
}

export default App