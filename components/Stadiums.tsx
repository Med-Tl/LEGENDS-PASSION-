import React from 'react';
import { STADIUMS } from '../constants';
import { MapPin, Users } from 'lucide-react';

const Stadiums: React.FC = () => {
  return (
    <section id="stadiums" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12 text-center">Sacred Grounds</h2>
        
        <div className="space-y-24">
            {STADIUMS.map((stadium, idx) => (
                <div key={stadium.name} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                    
                    {/* Image Section */}
                    <div className="w-full lg:w-3/5 relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-10 mix-blend-overlay pointer-events-none"></div>
                        <img 
                            src={stadium.image} 
                            alt={stadium.name} 
                            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Overlay Stats */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl z-20 flex justify-between items-end">
                             <div className="flex items-center gap-2 text-white/90">
                                <MapPin className="text-gold" size={20} />
                                <span className="font-medium">{stadium.location}</span>
                             </div>
                             <div className="text-right">
                                <span className="block text-xs text-gray-400 uppercase">Capacity</span>
                                <span className="text-2xl font-bold font-mono">{stadium.capacity}</span>
                             </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-2/5">
                        <div className={`w-16 h-1 bg-gradient-to-r ${stadium.club === 'FCB' ? 'from-fcb-blue to-fcb-red' : 'from-est-red to-est-yellow'} mb-6`}></div>
                        <h3 className="text-4xl font-bold font-serif mb-4">{stadium.name}</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            {stadium.description}
                        </p>
                        
                        <ul className="space-y-4">
                            {stadium.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Stadiums;