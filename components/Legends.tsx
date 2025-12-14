import React, { useState } from 'react';
import { LEGENDS } from '../constants';
import { Legend } from '../types';
import Card from './ui/Card';
import { Star, PlayCircle, Trophy, Quote, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Legends: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'FCB' | 'EST'>('ALL');
  const [selectedLegend, setSelectedLegend] = useState<Legend | null>(null);

  const filteredLegends = filter === 'ALL' ? LEGENDS : LEGENDS.filter(l => l.club === filter);

  return (
    <section id="legends" className="py-20 px-4 md:px-12 bg-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Hall of Legends</h2>
            <p className="text-gray-400 max-w-lg">
              Icons who defined generations. From the magic of Camp Nou to the roar of Radès.
            </p>
          </div>
          
          <div className="flex gap-2 bg-white/5 p-1 rounded-lg backdrop-blur-md">
            {['ALL', 'FCB', 'EST'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${
                  filter === f 
                  ? f === 'FCB' ? 'bg-fcb-blue text-white' : f === 'EST' ? 'bg-est-red text-white' : 'bg-gold text-dark'
                  : 'text-gray-400 hover:text-white'
                }`}
              >
                {f === 'ALL' ? 'All Legends' : f === 'FCB' ? 'Blaugrana' : 'Sang et Or'}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredLegends.map((legend) => (
              <motion.div
                key={legend.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  onClick={() => setSelectedLegend(legend)}
                  className="group h-full flex flex-col"
                >
                  <div className="relative h-80 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-t ${legend.club === 'FCB' ? 'from-fcb-blue/90' : 'from-est-red/90'} to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity`} />
                    <img 
                      src={legend.image} 
                      alt={legend.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${legend.club === 'FCB' ? 'bg-fcb-yellow text-dark' : 'bg-est-yellow text-dark'}`}>
                          {legend.club}
                        </span>
                        <span className="text-xs text-gray-300 font-mono">{legend.years}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white leading-tight">{legend.name}</h3>
                      <p className="text-sm text-gray-300">{legend.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Detail View */}
      <AnimatePresence>
        {selectedLegend && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedLegend(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-[#121212] border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/3 relative h-64 md:h-auto">
                 <img src={selectedLegend.image} className="w-full h-full object-cover" alt={selectedLegend.name} />
                 <div className={`absolute inset-0 bg-gradient-to-t ${selectedLegend.club === 'FCB' ? 'from-fcb-blue' : 'from-est-red'} to-transparent opacity-60`}></div>
                 <div className="absolute bottom-6 left-6">
                    <h2 className="text-3xl font-bold font-serif">{selectedLegend.name}</h2>
                    <p className="opacity-80">{selectedLegend.years}</p>
                 </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-10 flex-1">
                <div className="flex items-start justify-between mb-6">
                   <div>
                      <h4 className="text-gold uppercase tracking-widest text-sm font-bold mb-1">Role</h4>
                      <p className="text-xl">{selectedLegend.role}</p>
                   </div>
                   <div className="text-4xl text-white/10">
                      <Star fill="currentColor" />
                   </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-lg mb-8 border-l-4 border-gold pl-4">
                  {selectedLegend.description}
                </p>

                {selectedLegend.quote && (
                  <div className="mb-8 italic text-gray-400 flex gap-2">
                    <Quote className="shrink-0 w-5 h-5 text-gold" />
                    <p>"{selectedLegend.quote}"</p>
                  </div>
                )}

                <div className="mb-8">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Trophy className="text-gold w-5 h-5" />
                    Major Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLegend.achievements.map((achievement, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10 text-gray-300">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center gap-3 transition-colors group">
                    <PlayCircle className="text-gold group-hover:scale-110 transition-transform" />
                    <span className="font-semibold">Watch Iconic Moments</span>
                  </button>
                  <a 
                    href={selectedLegend.wikiLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center gap-3 transition-colors group"
                  >
                    <ExternalLink className="text-gold group-hover:scale-110 transition-transform" size={20} />
                    <span className="font-semibold">Read Biography</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Legends;