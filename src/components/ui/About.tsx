import React from "react";
import Timeline from "./Timeline";

const About = () => {
  return (
    <div id="about-section" className= "   flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4 md:space-y-0">
      <div className="w-full md:w-1/3 m-4 md:m-0">
        <div className="text-center">
          <h2 className="text-xl font-bold">About</h2>
        </div>
        <div>
          <p className="text-lg">
            I am a passionate and dedicated full-stack developer with expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack. I have a strong foundation in building robust and scalable web applications, with a keen eye for detail and a commitment to delivering high-quality code.
          </p>
        </div>
      </div>
      <div className="hidden md:block md:w-1/3">
        <Timeline />
      </div>
    </div>
  );
};

export default About;
