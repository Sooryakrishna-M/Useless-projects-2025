import React from 'react';
import { Coffee, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="text-center py-12 px-4">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Coffee className="text-orange-400 w-8 h-8" />
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Tea Across the Cosmos
        </h1>
        <Sparkles className="text-yellow-400 w-8 h-8" />
      </div>
      
      <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
        Ever wondered how an astronaut would make tea on different planets? 
        Explore the fascinating effects of gravity on the simple act of pouring tea across our solar system.
      </p>
      
      <div className="mt-6 text-sm text-slate-400">
        <p>Experience physics in action through the art of tea making</p>
      </div>
    </header>
  );
};