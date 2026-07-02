import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { education } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-dark-900/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-accent-primary rounded-full"></div>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {education.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-dark-800 group-hover:border-accent-primary group-hover:bg-accent-primary/10 text-gray-400 group-hover:text-accent-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                <BookOpen className="w-5 h-5" />
              </div>
              
              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-dark-800 p-6 rounded-2xl border border-white/5 hover:border-accent-primary/30 transition-colors">
                <div className="flex flex-col gap-1 mb-2">
                  <span className="text-sm font-mono text-accent-secondary">{item.year}</span>
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                </div>
                <p className="text-gray-300 font-medium mb-2">{item.institution}</p>
                <div className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="inline-block px-2 py-1 bg-dark-700 rounded text-accent-primary font-mono">{item.score}</span>
                  {item.stream && <span>{item.stream}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
