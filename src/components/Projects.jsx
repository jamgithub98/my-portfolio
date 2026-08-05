import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Ettihad Foundation Management Platform",
      description: "A comprehensive, secure web platform built for the Ettihad Foundation. Features a dynamic admin dashboard for project management, cloud-based image uploads, and a public-facing interface for donor engagement. Secured with role-based access control.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Tailwind CSS"],
      // Yahan apne asli links dalein
      githubLink: "#",
      liveLink: "https://ettihad-foundation-live-link.vercel.app"
    },
    {
      id: 2,
      title: "OPD & Doctor Prescription System",
      description: "A healthcare management application featuring role-based access control for Admins, Doctors, and Receptionists. Streamlines patient registration, appointment scheduling, medicine inventory, and generates printable digital prescriptions.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 3,
      title: "Fraud Detection Using Machine Learning",
      description: "An analytical machine learning model designed to accurately classify and detect fraudulent financial transactions, showcasing a strong understanding of data processing and algorithmic problem-solving.",
      techStack: ["Machine Learning", "Data Analysis", "Classification Models"],
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6 mt-auto">
                  <a href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 font-bold text-sm transition flex items-center gap-1">
                    Code &rarr;
                  </a>
                  <a href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 font-bold text-sm transition flex items-center gap-1">
                    Live Demo &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;