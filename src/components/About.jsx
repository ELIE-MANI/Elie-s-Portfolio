import Me from "../images/Me.png";
function About (){
    return(
        <section id="about" className="py-20 bg-gray-100 mt-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-3 text-center">About Me</h2>
               <p className="text-center text-gray-500 mb-5">My Information</p>
            </div>
            <div className="flex justify-center items-center ">
                <img src={Me} alt="Elie" className="w-48 h-58  mx-auto mb-6 object-cover"/>
                <div>
                 <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto ">
                    Hello! I'm Elie, a passionate Full-Stack Developer and UI/UX Designer dedicated to building modern, responsive, and user-friendly web applications.
                    With strong experience in React, JavaScript, Tailwind CSS, Node.js, Express.js, PostegreSQL, and Figma, I enjoy transforming ideas into real digital experiences. <br />
                    I’m constantly learning new technologies, improving my development skills, and creating projects that combine clean design with scalable functionality.
                 </p>
                    
                <a href="https://docs.google.com/document/d/14v1PB_RCBxmcLoFTVKyfVz87Qz-Sq1Yvdfr-69I_uGI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer">Download CV</button>
                </a>
                </div>
            </div>
        </section>
    );
}
export {About};

