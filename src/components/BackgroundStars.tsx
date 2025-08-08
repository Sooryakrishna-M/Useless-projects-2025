import React from 'react';

export const BackgroundStars: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated stars */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-20 animate-pulse"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 3 + 's',
            animationDuration: (Math.random() * 3 + 2) + 's',
          }}
        />
      ))}
      
      {/* Larger twinkling stars */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`twinkle-${i}`}
          className="absolute rounded-full bg-blue-200 opacity-30"
          style={{
            width: '2px',
            height: '2px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animation: `twinkle ${Math.random() * 4 + 2}s infinite`,
            animationDelay: Math.random() * 2 + 's',
          }}
        />
      ))}
    </div>
  );
};