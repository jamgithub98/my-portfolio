import React from 'react';

const About = () => {
  const skills = [
    "React.js", "Node.js", "Express.js", "MongoDB", 
    "JavaScript", "HTML & CSS", "Tailwind CSS", 
    "DaisyUI", "Vite", "SQL", "Git & GitHub", 
    "REST APIs", "JWT Auth"
  ];

  const stats = [
    { icon: "🎓", text: "MCA Graduate" },
    { icon: "💻", text: "Full Stack MERN Developer" },
    { icon: "🚀", text: "5+ Projects Completed" },
    { icon: "🌍", text: "Open to Opportunities" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-transparent to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Background</h3>
            <p className="text-gray-600 mb-5 leading-relaxed text-lg">
              I'm a Full Stack Web Developer specializing in the MERN stack, with a Master's degree in Computer Applications (MCA) from the University of Science and Technology Meghalaya (USTM). I enjoy building modern, responsive, and secure web applications that deliver seamless user experiences.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              My expertise includes MongoDB, Express.js, React.js, Node.js, JavaScript, RESTful APIs, JWT Authentication, and Role-Based Access Control (RBAC). I focus on writing clean, maintainable code and developing scalable solutions that solve real-world problems. I'm passionate about continuous learning and always exploring new technologies to improve my skills and build better software.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
                  <span className="text-3xl drop-shadow-sm">{stat.icon}</span>
                  <span className="text-gray-800 font-bold tracking-wide">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Arsenal</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-gray-50 text-gray-800 px-5 py-2.5 rounded-xl font-medium border border-gray-200 shadow-sm hover:border-blue-500 hover:text-blue-600 transition duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;