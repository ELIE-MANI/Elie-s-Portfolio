

function NavBar() {
   


  return ( 
    <>
    <nav  className="flex justify-between items-center px-10 py-5 bg-white shadow-md fixed top-0 left-0 right-0 z-10">
      <h1 className=" mx-40 text-lg font-semibold">Elie</h1>
      <div className="flex space-x-8 text-sm">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/skills">Skills</a>
        <a href="/services">Services</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>

      </div>
     
    </nav>
    </>
   );
}

export default NavBar;