import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'

const App = () => {
  return (
    <section className='max-w-7xl m-auto'>
      <Nav />
      <Hero />
      <Services />

    </section>
  )
}

export default App