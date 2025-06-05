import React, { useState } from "react";

const Nav = () => {
   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    {text: "Home", id: "home"},
    {text: "About", id: "about"},
    {text: "Services", id: "services"},
    {text: "Latest Projects", id: "latest-projects"},
    {text: "Contact Us", id: "contact-us"}
  ]

  return (
    <section id="home">
      
      <nav className="bg-white shadow-md py-4 pr-4">
      {/* Logo */}
      <div className="flex items-center sm:justify-center justify-between p-0">
        <a href="#" className="p-0 ml-4">
          <img src="./images/logo.png" alt="Logo" className="sm:mt-1  shadow-lg p-2 bg-white w-25 sm:w-30"/>
        </a>

        {/* Hamburger for small devices */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-aibek-cyan shadow-lg font-bold focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu links */}
      <div 
        className={`absolute z-50 w-full mt-4 sm:mt-7 bg-white 
    ${isOpen ? "max-h-screen" : "max-h-0"} 
    sm:relative flex flex-col sm:flex-row sm:justify-between sm:items-center 
    transition-all duration-200 ease-in-out sm:overflow-visible overflow-hidden`}
      >
        {menuItems.map(({text, id}) => (
    <a
      key={id}
      href={`#${id}`}
      
      className=" px-4 py-2 text-aibek-cyan hover:text-sky-blue font-bold hover:underline transition duration-300 ease-in-out relative z-50"
    >
      {text}
    </a>
    ))}
      </div>
    </nav>
    </section>
  )
}

export default Nav