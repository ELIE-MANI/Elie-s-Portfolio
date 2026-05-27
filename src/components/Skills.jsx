import { useState } from 'react';
import webdesign from "../images/web-design.png";
import prototype from "../images/prototype.png";
import backend from "../images/backend.png"; // add backend icon

function Skills() {
  const [openFrontend, setOpenFrontend] = useState(false);
  const [openDesigner, setOpenDesigner] = useState(false);
  const [openBackend, setOpenBackend] = useState(false);

  return (
    <>
      <section id='Skills' className='mt-20 items-center p-5'>
        
        <div>
          <h2 className="text-3xl font-bold mb-3 text-center">
            My Skills
          </h2>

          <p className="text-center text-gray-500">
            My technical level
          </p>
        </div>

        <div className='p-8 flex flex-wrap justify-center items-start gap-20 mx-10'>

          {/* Frontend Category */}
          <div>
            <h2
              onClick={() => setOpenFrontend(!openFrontend)}
              className='w-[300px] text-left text-lg font-semibold cursor-pointer p-4 rounded-md hover:bg-gray-200 transition-colors duration-200'
            >
              <div className='flex items-center gap-5'>
                <img
                  src={webdesign}
                  alt="web-design"
                  className='icon-blue w-8 h-8'
                />

                <span className='flex-1'>
                  Frontend Developer
                </span>

                <span>{openFrontend ? "▲" : "▼"}</span>
              </div>
            </h2>

            {openFrontend && (
              <ul className='mt-4 space-y-3'>
                <li>
                  <p className='font-medium'>HTML & CSS</p>
                  <div className='h-[5px] rounded bg-[#1e3a5f]'></div>
                </li>

                <li>
                  <p className='font-medium'>JavaScript</p>
                  <div className='h-[5px] rounded bg-[#1e3a5f]'></div>
                </li>

                <li>
                  <p className='font-medium'>React</p>
                  <div className='h-[5px] rounded bg-[#1e3a5f]'></div>
                </li>

                <li>
                  <p className='font-medium'>Tailwind CSS</p>
                  <div className='h-[5px] rounded bg-[#1e3a5f]'></div>
                </li>
              </ul>
            )}
          </div>

          {/* Backend Category */}
          <div>
            <h2
              onClick={() => setOpenBackend(!openBackend)}
              className='w-[300px] text-left text-lg font-semibold cursor-pointer p-4 rounded-md hover:bg-gray-200 transition-colors duration-200'
            >
              <div className='flex items-center gap-5'>
                <img
                  src={backend}
                  alt="backend"
                  className='icon-blue w-8 h-8'
                />

                <span className='flex-1'>
                  Backend Developer
                </span>

                <span>{openBackend ? "▲" : "▼"}</span>
              </div>
            </h2>

            {openBackend && (
              <ul className='mt-4 space-y-3'>
                <li>
                  <p className='font-medium'>Node.js</p>
                  <div className='h-[5px] rounded bg-[#1e3a5f]'></div>
                </li>

                <li>
                  <p className='font-medium'>Express.js</p>
                  <div className='h-[5px] rounded bg-[#1e3a5f]'></div>
                </li>

                <li>
                  <p className='font-medium'>PostgreSQL</p>
                  <div className='h-[5px] rounded bg-[#1e3a5f]'></div>
                </li>

                <li>
                  <p className='font-medium'>REST APIs</p>
                  <div className='h-[5px] rounded bg-[#1e3a5f]'></div>
                </li>
              </ul>
            )}
          </div>

          {/* UI/UX Designer Category */}
          <div className='min-h-[200px]'>
            <h2
              onClick={() => setOpenDesigner(!openDesigner)}
              className='w-[300px] text-left text-lg font-semibold cursor-pointer p-4 rounded-md hover:bg-gray-200 transition-colors duration-200'
            >
              <div className='flex items-center gap-5'>
                <img
                  src={prototype}
                  alt="prototype"
                  className='icon-blue w-8 h-8'
                />

                <span className='flex-1'>
                  UI/UX Designer
                </span>

                <span>{openDesigner ? "▲" : "▼"}</span>
              </div>
            </h2>

            {openDesigner && (
              <ul className='mt-4 space-y-3'>
                <li>
                  <p className='font-medium'>Figma</p>
                  <div className='h-[5px] rounded bg-[#1e3a5f]'></div>
                </li>
              </ul>
            )}
          </div>

        </div>
      </section>
    </>
  );
}

export default Skills;