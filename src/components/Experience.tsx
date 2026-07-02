import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-accent-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-[25%] top-0 bottom-0 w-0.5 bg-white/10 -ml-px" />
          <div className="md:hidden absolute left-[15px] top-0 bottom-0 w-0.5 bg-white/10 -ml-px" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row group"
              >
                {/* Desktop Date */}
                <div className="hidden md:block w-[25%] pt-7 pr-10 text-right">
                  <div className="text-accent-secondary font-mono text-sm font-semibold whitespace-nowrap">
                    {exp.duration}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-[15px] md:left-[25%] top-7 w-4 h-4 rounded-full bg-dark-900 border-2 border-accent-primary group-hover:bg-accent-primary transition-colors z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)] -translate-x-1/2" />

                {/* Content Card */}
                <div className="pl-12 md:pl-10 md:w-[75%]">
                  <div className="glass-card p-6 md:p-8 rounded-2xl hover-glow">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent-primary transition-colors mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Briefcase className="w-4 h-4 shrink-0 text-accent-secondary" />
                          <span className="font-medium text-sm md:text-base leading-snug">{exp.company}</span>
                        </div>
                      </div>
                      
                      {/* Mobile Date */}
                      <div className="md:hidden inline-flex items-center gap-2 text-accent-secondary font-mono text-xs bg-accent-secondary/10 px-3 py-1.5 rounded-full w-fit">
                        <Calendar className="w-3 h-3" />
                        <span className="whitespace-nowrap">{exp.duration}</span>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="text-gray-300 text-sm md:text-base leading-relaxed flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
