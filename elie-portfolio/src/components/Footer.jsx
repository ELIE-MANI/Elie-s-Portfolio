import linkedIn from '../images/linkedIn.png';
import twitter from '../images/twitter.png';
import github from '../images/github.png';



function Footer () {
    return (
        <footer className="bg-[#32487a] text-white text-center p-10 mt-20 h-full">
            <div className="flex items-center justify-center ">
      <div className='flex flex-col items-start'>          
    <h1 className=" mx-40 text-4xl mb-5 font-semibold">Elie</h1>
    <p className='mx-30'>Frontend Developer</p>
    </div>

      <div className="flex space-x-8 text-sm mr-40 ">
        
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>

          <div className='flex justify-between space-x-10 items-center ml-20'>
                <a href="https://www.linkedin.com/in/maniraguha-elie-1b37a922a/" target="_blank" rel="noopener noreferrer">
                <img src={linkedIn} alt="LinkedIn Logo" className="icon-white w-4 h-4 object-cover transition-transform duration-200 hover:scale-110"/>
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter Logo" className="icon-white w-4 h-4 object-cover mx-4 transition-transform duration-200 hover:scale-110"/>
                </a>
                <a href="https://github.com/ELIE-MANI" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub Logo" className="icon-white w-4 h-4 object-cover transition-transform duration-200 hover:scale-110 "/>
                </a>
              </div>

      </div>
            </div>
            <p className='mt-20 text-gray-400 '>&copy; Elie Maniraguha. All rights reserved.</p>
        </footer>
    );
}
export default Footer;