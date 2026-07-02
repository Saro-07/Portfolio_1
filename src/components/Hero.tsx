import { useState, useEffect } from 'react';
import Modal from './Modal';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { ArrowRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  
  const titles = ["Data Analyst", "BI Analyst"];
  
  useEffect(() => {
    let currentTitleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      const currentTitle = titles[currentTitleIndex];
      
      if (isDeleting) {
        setTypewriterText(currentTitle.substring(0, currentCharIndex - 1));
        currentCharIndex--;
      } else {
        setTypewriterText(currentTitle.substring(0, currentCharIndex + 1));
        currentCharIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentCharIndex === currentTitle.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        typeSpeed = 500; // Pause before new word
      }

      timeout = setTimeout(type, typeSpeed);
    };

    timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-4 inline-flex flex-col items-center">
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-tight tracking-tight text-white whitespace-nowrap uppercase">
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-gray-300 h-8 flex items-center justify-center w-full">
              <span className="text-accent-primary border-r-2 border-accent-primary pr-2 animate-pulse">{typewriterText}</span>
            </p>
          </div>
          
          <div className="text-lg text-gray-400 max-w-xl leading-relaxed">
            <p className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-14 line-clamp-2'}`}>
              {personalInfo.summary}
            </p>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-sm font-semibold text-accent-primary hover:text-white transition-colors focus:outline-none"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-accent-primary hover:bg-white text-dark-900 font-semibold px-8 py-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900 focus:ring-accent-primary shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:-translate-y-1"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </a>
            
            <button 
              onClick={() => setIsResumeModalOpen(true)}
              className="inline-flex items-center gap-2 bg-dark-800 border border-white/10 hover:border-accent-primary/50 text-white font-semibold px-8 py-3 rounded-full transition-all hover:bg-dark-700 hover:-translate-y-1"
            >
              Resume <Download className="w-4 h-4" />
            </button>
            
            <div className="flex items-center gap-4 ml-4">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="relative group text-gray-400 hover:text-accent-primary transition-colors p-2" aria-label="LinkedIn">
                <LinkedinIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-accent-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="relative group text-gray-400 hover:text-white transition-colors p-2" aria-label="GitHub">
                <GithubIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Visuals / Professional Photography Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-md md:max-w-none relative"
        >
          {/* Animated gradient ring */}
          <div className="absolute inset-[-4px] bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary rounded-3xl opacity-50 blur-lg animate-pulse" />
          
          <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass-card flex items-center justify-center p-1 bg-dark-900">
            <div className="w-full h-full rounded-[1.3rem] overflow-hidden relative">
              <img 
                src="/profile.png" 
                alt="Saravanan Jaisankar" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.parentElement!.querySelector('.fallback')!.classList.remove('hidden');
                }}
              />
              
              <div className="fallback hidden text-center p-8 absolute inset-0 flex flex-col items-center justify-center bg-dark-800">
                <div className="w-24 h-24 mx-auto mb-4 bg-dark-700 rounded-full flex items-center justify-center border border-white/5">
                  <span className="text-4xl text-gray-500">📸</span>
                </div>
                <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">Profile Photo</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <Modal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)}
        title="Resume - Saravanan Jaisankar"
      >
        <div className="w-full h-[80vh]">
          <iframe 
            src={`${personalInfo.resume}#view=FitH`} 
            className="w-full h-full rounded-lg bg-white"
            title="Resume"
          />
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
