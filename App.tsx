import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Legends from './components/Legends';
import Trophies from './components/Trophies';
import Fans from './components/Fans';
import Stadiums from './components/Stadiums';

const App: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen text-white selection:bg-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Legends />
        <Trophies />
        <Fans />
        <Stadiums />
      </main>
      
      <footer className="py-12 bg-black border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="font-serif text-2xl font-bold tracking-wider mb-6">
            <span className="text-fcb-blue">FC BARCELONA</span> <span className="text-gray-600 mx-2">×</span> <span className="text-est-red">EST</span>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            A tribute to football history, passion, and culture.
          </p>
          <div className="flex gap-4 text-gray-400 text-xs uppercase tracking-widest">
            <span>En</span>
            <span>Fr</span>
            <span>Ar</span>
          </div>
          <div className="mt-8 text-gray-600 text-sm font-medium">
            Created by Mohamed Tlili • Built with love
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;