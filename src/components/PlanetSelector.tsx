import React from 'react';
import { Planet } from '../data/planets';

interface PlanetSelectorProps {
  planets: Planet[];
  selectedPlanet: Planet;
  onPlanetSelect: (planet: Planet) => void;
}

export const PlanetSelector: React.FC<PlanetSelectorProps> = ({
  planets,
  selectedPlanet,
  onPlanetSelect,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-1 gap-4">
      {planets.map((planet) => (
        <button
          key={planet.name}
          onClick={() => onPlanetSelect(planet)}
          className={`
            relative p-4 rounded-xl border-2 transition-all duration-300 group
            ${selectedPlanet.name === planet.name
              ? 'border-purple-400 bg-purple-900/30 shadow-lg shadow-purple-500/20'
              : 'border-slate-700 bg-slate-800/50 hover:border-slate-600 hover:bg-slate-800/70'
            }
          `}
        >
          <div className="flex items-center gap-3">
            <div 
              className={`w-8 h-8 rounded-full flex-shrink-0 ${planet.color} shadow-lg relative`}
            >
              {/* Planet orbital ring effect */}
              <div className="absolute inset-0 rounded-full border border-current opacity-20 animate-pulse"></div>
            </div>
            
            <div className="text-left flex-1 min-w-0">
              <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                {planet.name}
              </h3>
              <p className="text-xs text-slate-400">
                {planet.gravity.toFixed(1)}× Earth gravity
              </p>
            </div>
          </div>
          
          {/* Selection indicator */}
          {selectedPlanet.name === planet.name && (
            <div className="absolute -right-1 -top-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          )}
        </button>
      ))}
    </div>
  );
};