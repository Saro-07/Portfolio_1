
import Header from './components/Header';
import Hero from './components/Hero';
import CertificationsGrid from './components/CertificationsGrid';
import PortfolioGrid from './components/PortfolioGrid';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import AnimatedBackground from './components/AnimatedBackground';
import { personalInfo } from './data/portfolio';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './components/Icons';

function App() {
  return (
    <div className="min-h-screen bg-transparent selection:bg-accent-primary/30 selection:text-white relative z-0">
      <AnimatedBackground />
      <Header />
      
      <main className="relative z-10 pt-20">
        <Hero />
        <Experience />
        <PortfolioGrid />
        <CertificationsGrid />
        <Achievements />
        <Skills />
        <Education />
        
        <section id="contact" className="py-24 bg-dark-800">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect</h2>
              <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
                I am always open to discussing new opportunities, projects, or collaborations. Feel free to reach out!
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 bg-dark-900 hover:bg-dark-700 border border-white/10 hover:border-accent-primary/50 text-white px-6 py-4 rounded-xl transition-all hover:-translate-y-1">
                  <Mail className="text-accent-primary" />
                  <span className="font-medium">{personalInfo.email}</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-dark-900 hover:bg-dark-700 border border-white/10 hover:border-accent-secondary/50 text-white px-6 py-4 rounded-xl transition-all hover:-translate-y-1">
                  <LinkedinIcon className="text-accent-secondary w-6 h-6" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-dark-900 hover:bg-dark-700 border border-white/10 hover:border-gray-500/50 text-white px-6 py-4 rounded-xl transition-all hover:-translate-y-1">
                  <GithubIcon className="text-gray-400 w-6 h-6" />
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-white/5 bg-dark-900 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
