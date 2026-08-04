import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

// 1. Apni image import karein (path check kar lein)
import myPhoto from './assets/my-image.jpg' 

function App() {
  return (
    // Is master gradient background ko rehne dete hain, premium lag raha hai
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-16 scroll-smooth">
      <Navbar />
      
      {/* Home / Hero Section - Split Layout */}
      <main id="home" className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
          
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">Full-Stack Web Developer</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Joynal Abedin Mollah</span>
            </h1>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed">
              I build clean, scalable, and secure applications. Passionate about turning complex problems into elegant web solutions.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30">
                View My Work
              </a>
              <a 
                href="/resume.pdf" 
                download="Joynal_Abedin_Mollah_Resume.pdf"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition shadow-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Column: Profile Picture */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative">
              {/* Image Border/Highlight */}
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20"></div>
              
              <img 
                src={myPhoto} 
                alt="Joynal Abedin Mollah" 
                // w-64 h-64 (mobile par), w-80 h-80 (laptops par). object-cover perfect cropping ke liye
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white z-10 relative" 
              />
            </div>
          </div>

        </div>
      </main>

      <About />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center mt-auto">
        <p className="text-gray-400">© 2026 Joynal Abedin Mollah. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;