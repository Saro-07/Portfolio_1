import { useState } from 'react';
import { certifications } from '../data/portfolio';
import Modal from './Modal';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

const getCompanyDomain = (issuer: string) => {
  if (issuer.toLowerCase().includes('google')) return 'google.com';
  if (issuer.toLowerCase().includes('oracle')) return 'oracle.com';
  if (issuer.toLowerCase().includes('infosys')) return 'infosys.com';
  if (issuer.toLowerCase().includes('tcs')) return 'tcs.com';
  if (issuer.toLowerCase().includes('hp')) return 'hp.com';
  if (issuer.toLowerCase().includes('forage')) return 'theforage.com';
  return 'example.com';
};

const CertificationsGrid = () => {
  const [selectedCert, setSelectedCert] = useState<{name: string, url: string, issuer: string} | null>(null);

  const handleOpenCert = (cert: any) => setSelectedCert(cert);
  const handleCloseModal = () => setSelectedCert(null);

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-accent-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {certifications.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-accent-primary" />
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button 
                      onClick={() => handleOpenCert(cert)}
                      className="w-full h-full text-left group glass-card rounded-2xl p-6 transition-all duration-300 hover-glow focus:outline-none flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shrink-0 border border-white/20 shadow-inner group-hover:scale-105 transition-transform">
                          <img 
                            src={`https://logo.clearbit.com/${getCompanyDomain(cert.issuer)}`} 
                            alt={cert.issuer}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement!.innerHTML = '<span class="text-dark-900 font-bold text-lg">' + cert.issuer.charAt(0) + '</span>';
                            }}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-200 group-hover:text-accent-primary transition-colors line-clamp-2">
                            {cert.name}
                          </h4>
                        </div>
                      </div>
                      
                      <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-sm text-gray-400">{cert.issuer}</span>
                        <span className="text-xs font-mono text-accent-secondary">{cert.date}</span>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedCert} 
        onClose={handleCloseModal}
        title={selectedCert?.name || "Certificate"}
      >
        {selectedCert && (
          <div className="w-full h-[75vh]">
            <iframe 
              src={`${selectedCert.url}#view=FitH`} 
              className="w-full h-full rounded-lg bg-white"
              title={selectedCert.name}
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default CertificationsGrid;
