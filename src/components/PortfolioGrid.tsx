import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { projects } from '../data/portfolio';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import Modal from './Modal';

const Counter = ({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toLocaleString();
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={ref} />;
};

const PortfolioGrid = () => {
  const [filter, setFilter] = useState('All');
  const [selectedPaper, setSelectedPaper] = useState<string | null>(null);
  
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-dark-900/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-accent-primary rounded-full"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent-primary ${
                  filter === cat 
                    ? 'bg-accent-primary text-dark-900 shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
                    : 'bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group glass-card rounded-2xl overflow-hidden hover-glow flex flex-col relative z-10"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {project.badge && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 text-xs font-semibold bg-dark-900/80 backdrop-blur-md text-accent-primary border border-accent-primary/20 rounded-full">
                        {project.badge}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <FolderGit2 className="w-5 h-5 text-accent-secondary" />
                    <span className="text-sm font-mono text-gray-400">{project.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-mono text-gray-300 bg-dark-700/50 border border-white/5 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Simulated Metric Counters for effect */}
                  <div className="flex gap-4 mb-6 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-xl font-display font-bold text-accent-primary">
                        <Counter to={project.id === 'restaurant-rating' ? 7403 : 100} />{project.id === 'help-desk' ? '%' : ''}
                      </span>
                      <span className="text-xs text-gray-500 uppercase tracking-wider font-mono">
                        {project.id === 'restaurant-rating' ? 'Datasets' : 'SLA Target'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                    {project.links.demo && (
                      <a 
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                    {project.links.paper && (
                      <button 
                        onClick={() => setSelectedPaper(project.links.paper as string)}
                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent-secondary transition-colors focus:outline-none"
                      >
                        <ExternalLink className="w-4 h-4" /> Research Paper
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Modal 
        isOpen={!!selectedPaper} 
        onClose={() => setSelectedPaper(null)}
        title="Research Paper"
      >
        <div className="w-full h-[80vh]">
          <iframe 
            src={`${selectedPaper}#view=FitH`} 
            className="w-full h-full rounded-lg bg-white"
            title="Research Paper"
          />
        </div>
      </Modal>
    </section>
  );
};

export default PortfolioGrid;
