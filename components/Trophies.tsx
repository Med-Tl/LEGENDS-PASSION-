import React from 'react';
import { TROPHIES } from '../constants';
import Card from './ui/Card';

const Trophies: React.FC = () => {
  return (
    <section id="trophies" className="py-20 px-4 md:px-12 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-16">Cabinet of Glory</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TROPHIES.map((trophy) => (
                <Card key={trophy.id} className="p-6 flex flex-col items-center text-center group hover:bg-white/10 border-t-4 border-transparent hover:border-gold transition-all">
                    <div className="relative w-32 h-32 mb-6 group-hover:scale-110 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <img src={trophy.image} alt={trophy.name} className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 h-14 flex items-center justify-center">{trophy.name}</h3>
                    
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-4 font-serif">
                        {trophy.count}
                    </div>
                    
                    <p className="text-sm text-gray-400 mb-4 line-clamp-2">{trophy.description}</p>
                    
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${trophy.club === 'FCB' ? 'bg-fcb-blue/20 text-fcb-blue' : 'bg-est-red/20 text-est-red'}`}>
                        {trophy.years}
                    </span>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Trophies;