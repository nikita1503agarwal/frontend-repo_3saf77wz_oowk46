import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubSection from './components/GitHubSection';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-black scroll-smooth antialiased">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubSection />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
