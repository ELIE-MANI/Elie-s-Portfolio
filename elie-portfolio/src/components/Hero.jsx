import avatar from '../images/Avatar.jpg';
import linkedIn from '../images/linkedIn.png';
import twitter from '../images/twitter.png';
import github from '../images/github.png';



function Hero() {
  return ( 
    <>
    <section className='mt-50 flex justify-center items-center space-x-30 p-5'>
      <div className='flex flex-col space-y-10 items-center'>
        <a href="https://www.linkedin.com/in/maniraguha-elie-1b37a922a/" target="_blank" rel="noopener noreferrer">
        <img src={linkedIn} alt="LinkedIn Logo" className="w-4 h-4 object-cover transition-transform duration-200 hover:scale-110"/>
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="Twitter Logo" className="w-4 h-4 object-cover mx-4 transition-transform duration-200 hover:scale-110"/>
        </a>
        <a href="https://github.com/ELIE-MANI" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub Logo" className="w-4 h-4 object-cover transition-transform duration-200 hover:scale-110 "/>
        </a>
      </div>
      <div>
        <h1 className="text-5xl font-bold">Hi, I'm Elie</h1>
        <p className="mt-4 text-lg">A passionate developer specializing <br /> in creating amazing web experiences.</p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg">Get in Touch</button>
      </div>
      <div>
        <img src={avatar} alt="Elie's Avatar" className="w-64 h-64 rounded-full object-cover"/>
      </div>
    </section>
    </>
   );
}

export default Hero;