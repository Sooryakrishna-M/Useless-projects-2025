import React, { useState } from 'react';
import { PlanetSelector } from './components/PlanetSelector';
import { VideoPlayer } from './components/VideoPlayer';
import { PlanetInfo } from './components/PlanetInfo';
import { Header } from './components/Header';
import { BackgroundStars } from './components/BackgroundStars';
import { planetData, Planet } from './data/planets';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet>(planetData[2]); // Default to Earth

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <BackgroundStars />
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Planet Selection */}
            <div className="xl:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-center xl:text-left">Select a Planet</h2>
                <PlanetSelector
                  planets={planetData}
                  selectedPlanet={selectedPlanet}
                  onPlanetSelect={setSelectedPlanet}
                />
              </div>
              
              <PlanetInfo planet={selectedPlanet} />
            </div>

            {/* Video Display */}
            <div className="xl:col-span-2">
              <VideoPlayer planet={selectedPlanet} />
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;