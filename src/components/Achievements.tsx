import { motion } from 'framer-motion';
import { Trophy, Lightbulb, Shield, Award } from 'lucide-react';
import { achievements } from '../data/portfolio';

const getIcon = (title: string) => {
  if (title.toLowerCase().includes('hackathon') || title.toLowerCase().includes('sih')) return <Shield className="w-6 h-6 text-accent-primary" />;
  if (title.toLowerCase().includes('pitch arena') || title.toLowerCase().includes('3rd place')) return <Trophy className="w-6 h-6 text-yellow-400" />;
  if (title.toLowerCase().includes('pitch')) return <Lightbulb className="w-6 h-6 text-accent-secondary" />;
  return <Award className="w-6 h-6 text-accent-primary" />;
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-dark-900/30">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievements & Extracurricular</h2>
          <div className="w-20 h-1 bg-accent-secondary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-2xl hover-glow flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                {getIcon(item.title)}
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-1 leading-snug group-hover:text-accent-secondary transition-colors">
                  {item.title}
                </h3>
                {item.location && (
                  <p className="text-accent-secondary text-sm font-medium mb-3">
                    {item.location}
                  </p>
                )}
                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
