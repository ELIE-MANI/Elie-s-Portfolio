import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Dashboard from "../images/DASHBOARD.png"
import Capture from "../images/Capture.png"
import FoodApp from "../images/food app.png"

function Portfolio () {
const projects = [
    {
        image: Dashboard,
        title: "Smart Budget Tracker",
        description: "A web application that helps users track their expenses and manage their budget effectively.", 
    },

    {
        image: Capture,
        title: "Task Master",
        description: "A productivity app that allows users to create, organize, and prioritize their tasks efficiently.",   
    },

    {
        image: FoodApp,
        title: "Food App UI",
        description: " A visually appealing and user-friendly interface for a food delivery application.",
    },
];

  return (
      <section className="mt-20">
     <div className="mb-10">
        <h2 className="text-center text-3xl font-bold">Portfolio</h2>
        <p className="text-center text-gray-500">Most Recent Work</p>
     </div>
    <div > 
    <Swiper 
     modules={[Navigation, Pagination]}
     navigation
     pagination={{ clickable: true }}
     spaceBetween={50}
     slidesPerView={1}
     className="max-w-250 mx-auto"
     >
        {projects.map((project, index) => (
            <SwiperSlide key={index} >
               <div className="flex  min-w-full items-center gap-10 p-6 mb-10">
                 <img 
                 src={project.image}
                  alt={project.title}
                  className="w-[350px] h-[350px] object-cover  rounded-lg shadow-md  mx-20"
                  />
                  <div className="mx-10 mb-10">
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div> 

            </SwiperSlide>
        ))}
    </Swiper>        
    </div>


      </section>

    )
}
export default Portfolio