import React from 'react';
import { Info, Zap, Globe } from 'lucide-react';
import { Planet } from '../data/planets';

interface PlanetInfoProps {
  planet: Planet;
}

export const PlanetInfo: React.FC<PlanetInfoProps> = ({ planet }) => {
  return (
    <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-6 h-6 rounded-full ${planet.color}`}></div>
        <h3 className="text-xl font-bold">{planet.name}</h3>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-white">Gravity Effect</h4>
            <p className="text-sm text-slate-300">
              {planet.gravity > 1 
                ? `Tea falls ${planet.gravity.toFixed(1)}× faster than on Earth`
                : planet.gravity < 1
                ? `Tea falls ${(1/planet.gravity).toFixed(1)}× slower than on Earth`
                : "Tea falls at the same speed as on Earth"
              }
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Globe className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-white">Surface Gravity</h4>
            <p className="text-sm text-slate-300">
              {planet.gravity.toFixed(2)} × Earth gravity ({(planet.gravity * 9.81).toFixed(1)} m/s²)
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-white">Fun Fact</h4>
            <p className="text-sm text-slate-300">{planet.description}</p>
          </div>
        </div>

        {/* Gravity Comparison Bar */}
        <div className="mt-6">
          <h4 className="font-semibold text-white mb-2">Gravity Comparison</h4>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 w-8">0×</span>
            <div className="flex-1 bg-slate-700 rounded-full h-3 relative">
              <div 
                className={`h-full rounded-full ${planet.color} transition-all duration-500`}
                style={{ width: `${Math.min(planet.gravity / 3 * 100, 100)}%` }}
              ></div>
              <div className="absolute top-0 left-1/3 w-px h-full bg-slate-500"></div>
            </div>
            <span className="text-xs text-slate-400 w-8">3×</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">Earth gravity is at the 1/3 mark</p>
        </div>
      </div>
    </div>
  );
};