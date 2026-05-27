import { useState } from "react";


function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);


  return ( 
    <>
    <nav  className="  bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-6 py-5">
            {/* Mobile Menu Button */}
       <button 
    onClick={() => setMenuOpen(!menuOpen)}
    className="bg-gray md:hidden flex flex-col justify-between w-6 h-5 order-1 "
    >
     <span className={`block h-0.5 bg-black transition-all duration-300 ${
     menuOpen ? 'rotate-45 translate-y-2' : ''
     }`}></span> 
      <span className={`block h-0.5 bg-black transition-all duration-300 ${
      menuOpen ? 'opacity-0' : ''
      }`}></span>
      <span className={`block h-0.5 bg-black transition-all duration-300 ${
      menuOpen ? '-rotate-45 -translate-y-2' : ''
      }`}></span>
       
    </button>
      <h1 className="text-lg font-semibold order-2 md:order-1">Elie</h1>
     
       <div className="hidden md:flex space-x-8 text-sm md:order-2">
        <a href="#Home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>

      </div>
    
    </div>

  
     <div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
        <div className="flex flex-col mx-3 space-y-4 pb-6 text-sm">
        <a href="#Home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </div>
      )}
     </div>

    


    </nav>
    </>
   );
}

export default NavBar; 