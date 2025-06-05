import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 mt-14 px-6 py-8 font-roboto text-sm">

  <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">

    {/* Left Side: Branding + Copyright */}
    <div className="flex flex-col">
      <h2 className="text-dexen-blue font-semibold text-2xl mb-1"><a href='#home'>Aibek Traders</a></h2>
      <p className="mb-2 max-w-xs">Creative & Complete Printing and Branding Solutions for individuals, organizations, and businesses.</p>
      <p className="text-xs">&copy; {new Date().getFullYear()} Aibek Traders. All rights reserved.</p>
    </div>

    {/* Middle: Quick Links */}
    <div className="flex flex-col gap-2">
      <h1 className="text-aibek-cyan text-xl font-semibold mb-1">Quick Links</h1>
      <a href="#home" className="hover:text-dexen-blue transition text-sm">Home</a>
      <a href="#services" className="hover:text-dexen-blue transition text-sm">Services</a>
      <a href="#about" className="hover:text-dexen-blue transition text-sm">About</a>
      <a href="#contact-us" className="hover:text-dexen-blue transition text-sm">Contact</a>
    </div>

    {/* Right: Social Icons */}
    <div className="flex flex-col gap-2">
      <h3 className="text-aibek-cyan font-semibold mb-1">Follow Us</h3>
      <div className="flex gap-4 text-xl">
        <a href="https://www.facebook.com/groups/1012188983979362/user/61564501293922/" target="_blank" rel="noopener noreferrer" className="hover:text-dexen-blue">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-dexen-blue">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer