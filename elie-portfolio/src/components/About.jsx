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
                 <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
                    Hello! I'm Elie, a passionate web developer with a knack for creating beautiful and functional websites.
                     With a strong foundation in HTML, CSS, JavaScript & React. <br /> I enjoy bringing ideas to life in the digital world. When I'm not coding, you can find me exploring new technologies or working on personal projects to enhance my skills.
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

