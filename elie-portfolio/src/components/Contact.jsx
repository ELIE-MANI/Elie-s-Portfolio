import phone from '../images/telephone.png';
import email from '../images/mail.png';
import location from '../images/location.png';


function Contact() {

return (
    <section id='contact' className="mt-20 bg-gray-100 p-20 h-full">
        <div>
            <h2 className="text-center text-3xl font-bold">Contact Me</h2>
            <p className="text-center text-gray-500">Get in touch</p>
        </div>
        <div>
          <div className='flex flex-col-1 gap-5 mt-10 mx-40 items-center'>
            <img src={phone} alt="telephone" className='icon-blue w-8 h-8' />
            <div className='flex flex-col '>
              <h3 className='font-semibold'>Call Me</h3>
              <p className='text-gray-500'>+250-780-288-631</p>
            </div>
          </div>  
          <div className='flex flex-col-1 gap-5 mt-10 mx-40 items-center'>
            <img src={email} alt="email" className='icon-blue w-8 h-8' />
            <div className='flex flex-col '>
              <h3 className='font-semibold'>Email</h3>
              <p className='text-gray-500'>eliemaniraguha@gmail.com</p>
            </div>
          </div>  
       
       <div className='flex flex-col-1 gap-5 mt-10 mx-40 items-center'>
            <img src={location} alt="location" className='icon-blue w-8 h-8' />
            <div className='flex flex-col '>
              <h3 className='font-semibold'>Location</h3>
              <p className='text-gray-500'>Kigali - Rwanda</p>
            </div>
          </div> 
        </div>
    </section>
)

}
export default Contact;