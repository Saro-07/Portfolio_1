import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const Skills = () => {
  const categoryTitles: Record<string, string> = {
    languages: "Languages",
    web: "Web Technologies",
    database: "Databases",
    tools: "Tools & Software",
    libraries: "Libraries",
    concepts: "Concepts",
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent-secondary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, items], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover-glow"
            >
              <h3 className="text-lg font-display font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-accent-primary rounded-full"></span>
                {categoryTitles[key]}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <span 
                    key={item}
                    className="px-3 py-1.5 bg-dark-900/50 backdrop-blur-sm border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white hover:border-accent-primary/50 transition-colors shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
