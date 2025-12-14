import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden pt-16 md:pt-0">
      
      {/* Background Video Placeholder Loop */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent z-10" />
         <img 
            src="https://picsum.photos/seed/stadiumnight/1920/1080" 
            alt="Stadium Atmosphere" 
            className="w-full h-full object-cover opacity-30"
         />
      </div>

      {/* FC Barcelona Side */}
      <div className="relative flex-1 flex flex-col items-center justify-center p-8 border-r border-white/10 bg-fcb-blue/10 backdrop-blur-sm group hover:bg-fcb-blue/20 transition-all duration-500">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
            <div className="w-32 h-32 md:w-48 md:h-48 mb-6 relative">
                 <div className="absolute inset-0 bg-fcb-red rounded-full blur-2xl opacity-40 animate-pulse"></div>
                 {/* Placeholder for Crest */}
                 <div className="w-full h-full bg-gradient-to-br from-fcb-blue to-fcb-red rounded-full flex items-center justify-center text-4xl font-bold border-4 border-fcb-yellow shadow-2xl z-10">
                    FCB
                 </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-fcb-blue to-fcb-red mb-2">FC Barcelona</h1>
            <p className="text-fcb-yellow font-semibold tracking-widest text-sm uppercase">Més que un club</p>
            
            <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-sm">
                <StatCard label="Founded" value="1899" icon={<Calendar size={16}/>} color="text-fcb-red" />
                <StatCard label="Trophies" value="90+" icon={<Trophy size={16}/>} color="text-fcb-yellow" />
            </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-gold rounded-full items-center justify-center font-serif text-dark font-bold text-2xl shadow-[0_0_30px_rgba(212,175,55,0.6)]">
        &amp;
      </div>

      {/* EST Side */}
      <div className="relative flex-1 flex flex-col items-center justify-center p-8 bg-est-red/10 backdrop-blur-sm group hover:bg-est-red/20 transition-all duration-500">
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
            <div className="w-32 h-32 md:w-48 md:h-48 mb-6 relative">
                 <div className="absolute inset-0 bg-est-yellow rounded-full blur-2xl opacity-40 animate-pulse"></div>
                 {/* Placeholder for Crest */}
                 <div className="w-full h-full bg-gradient-to-br from-est-red to-est-yellow rounded-full flex items-center justify-center text-4xl font-bold border-4 border-white shadow-2xl z-10 text-est-black">
                    EST
                 </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-est-red to-est-yellow mb-2 text-center">Espérance</h1>
            <p className="text-white font-semibold tracking-widest text-sm uppercase">Taraji Ya Dawla</p>

            <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-sm">
                <StatCard label="Founded" value="1919" icon={<Calendar size={16}/>} color="text-est-yellow" />
                <StatCard label="Trophies" value="60+" icon={<Trophy size={16}/>} color="text-white" />
            </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Explore Legends</span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

const StatCard = ({ label, value, icon, color }: { label: string, value: string, icon: React.ReactNode, color: string }) => (
    <div className="glass-panel p-3 rounded-lg flex flex-col items-center text-center hover:bg-white/5 transition-colors">
        <div className={`mb-1 ${color}`}>{icon}</div>
        <span className="text-2xl font-bold text-white">{value}</span>
        <span className="text-xs text-gray-400 uppercase tracking-wider">{label}</span>
    </div>
);

export default Hero;