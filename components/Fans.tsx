import React from 'react';
import { FAN_CULTURE } from '../constants';
import Card from './ui/Card';
import { Volume2, Flame } from 'lucide-react';

const Fans: React.FC = () => {
  return (
    <section id="fans" className="py-24 bg-gradient-to-b from-dark to-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">Twelfth Man</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mt-2 mb-6">Passion & Glory</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Football is nothing without the fans. Explore the unique atmospheres of the Camp Nou and the Virage Sud.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {FAN_CULTURE.map((culture, index) => (
            <div key={culture.club} className={`relative group ${index === 1 ? 'lg:mt-24' : ''}`}>
               {/* Decorative Background */}
               <div className={`absolute -inset-4 rounded-3xl opacity-20 blur-2xl transition-opacity group-hover:opacity-40 ${culture.club === 'FCB' ? 'bg-fcb-blue' : 'bg-est-red'}`}></div>
               
               <Card className="h-full">
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img src={culture.image} alt={culture.groupName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-3 mb-2">
                             <span className={`px-3 py-1 text-xs font-bold rounded-full ${culture.club === 'FCB' ? 'bg-fcb-red' : 'bg-est-yellow text-dark'}`}>
                                {culture.club === 'FCB' ? 'BARÇA' : 'EST'}
                             </span>
                             <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white/80">
                                <Flame size={12} className="text-orange-500" />
                                Ultras Culture
                             </span>
                        </div>
                        <h3 className="text-3xl font-bold font-serif">{culture.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                     <h4 className="text-xl font-bold mb-3 text-gold">{culture.groupName}</h4>
                     <p className="text-gray-300 leading-relaxed mb-6">{culture.description}</p>
                     
                     <div className="space-y-3">
                        <p className="text-sm uppercase tracking-wider text-white/50 font-bold">Iconic Chants</p>
                        {culture.chants.map((chant, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 cursor-pointer transition-colors group/chant">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold">
                                    <Volume2 size={14} className="group-hover/chant:animate-pulse" />
                                </div>
                                <span className="font-medium text-gray-200">{chant}</span>
                            </div>
                        ))}
                     </div>
                  </div>
               </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fans;