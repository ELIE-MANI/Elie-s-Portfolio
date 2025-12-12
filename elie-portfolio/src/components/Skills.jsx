import { useState } from 'react';

function Skills() {
const [openFrontend, setOpenFrontend] = useState(false);
const [openDesigner, setOpenDesigner] = useState(false);

return (
    <>

    <section id='Skills' className='mt-20 items-center p-5 '>
      <div>
      <h2 className="text-3xl font-bold mb-3 text-center">My Skills</h2>
       <p className="text-center text-gray-500">My technical level</p>
       </div>
       {/* Frontend Category */}
     <div className='p-8 flex justify-center items-start gap-20 mx-40 '>
      <div className=''>  
     <h2 
      onClick={() => setOpenFrontend(!openFrontend)}
      className='w-100  text-left text-lg  font-semibold cursor-pointer p-4 rounded-md hover:bg-gray-200 transition-colors duration-200'  
       >
        Frontend Developer <span className='mx-20'>{openFrontend ? "▲" : "▼"}</span>
      </h2>
      {openFrontend && (
        <ul className='mt-4 space-y-3'>
         <li><p className='font-medium'>HTML & CSS</p> <div className='h-[5px] rounded bg-[#1e3a5f]'></div> </li>
           <li><p className='font-medium'>Javascript</p> <div className='h-[5px] rounded bg-[#1e3a5f]'></div> </li>
           <li><p className='font-medium'>React</p> <div className='h-[5px] rounded bg-[#1e3a5f]'></div> </li>
          <li><p className='font-medium'>Tailwind</p> <div className='h-[5px] rounded bg-[#1e3a5f]'></div> </li>
         </ul>
      )}
     </div>

        {/* Designer Category */}
           <div className=' min-h-[200px]'>  
     <h2 
      onClick={() => setOpenDesigner(!openDesigner)}
      className='w-100  text-left text-lg  font-semibold cursor-pointer p-4 rounded-md hover:bg-gray-200 transition-colors duration-200'  
       >
        UI/UX Designer <span className='mx-20'>{openDesigner ? "▲" : "▼"}</span>
      </h2>
      {openDesigner && (
        <ul className='mt-4 space-y-3'>
         <li><p className='font-medium'>Figma</p> <div className='h-[5px] rounded bg-[#1e3a5f]'></div> </li>
       
         </ul>
      )}
     </div>
     </div>

     
      
 
 
 
    </section>
    </>
   );
}

export default Skills;