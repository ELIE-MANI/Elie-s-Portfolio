import { useState } from 'react';
import webdesign from "../images/web-design.png"
import prototype from "../images/prototype.png"
function Services () {
    const services =[
        {
            title: "UI/UX Design",
            details: [
                "Wireframing & Prototyping (Figma)",
                "Building user-friendly interfaces",
                "Complete UX research and testing"
            ],
            image:webdesign
        },

        {
            title: "Frontend Developer",
            details: [
                "Static websites using HTML, CSS, JavaScript",
                "Responsive design with Tailwind CSS",
                "Website using frameworks like React.js",
                "Fronted apps integrated with backend APIs",

            ],
            image:prototype
        },
    ];

    const [activeService, setActiveService] = useState(null);

    return (
        <section id="services" className="bg-gray-100 p-20">
          <div className="container mx-auto px-5">  
        <h2 className="font-bold text-3xl text-center  ">Services</h2>
        <p className="text-center text-gray-500 mt-3">What I Offer</p>
        </div>
        <div className='flex justify-center gap-10  mx-20 mt-10 mb-20 h-[250px] '>
            {services.map((service, index) => (
                <div key={index}
                onClick={() => setActiveService(service)}
                className='w-1/3 p-6  rounded-xl shadow-md cursor-pointer bg-white hover:shadow-xl transition'
                >
                 <div className='flex flex-col space-y-10 mt-20'>   
                 <img src={service.image} alt=""className='icon-blue w-8 h-8 ' />
                <h3 className='text-xl font-semibold mb-4'>{service.title}</h3>
                <p className='text-[#32487a] font-medium'>View More →</p>
                </div>
                </div>
            ))}
           {activeService && (
            <div className='fixed inset-0 bg-black/40 flex justify-center items-center'>
            <div className='bg-white p-8 rounded-xl w-[450px] relative'>
              <button className='absolute right-4 top-4 text-xl'
              onClick={() => setActiveService(null)}
              > 
                ✖
              </button>
              <h3 className='text-2xl font-bold mb-4'>{activeService.title}</h3>
              <ul className='space-y-3'>
                {activeService.details.map((detail, idx) => (
                    <li key={idx} className='flex items-start gap-2'>
                        <span className='text-[#32487a] mt-1'>✔</span>
                        <p>{detail}</p>
                    </li>
                ))}

              </ul>
            </div>
            </div>
           )}
        </div>

        </section>
    )
}
export default Services;