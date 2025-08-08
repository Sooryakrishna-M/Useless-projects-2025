import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { Planet } from '../data/planets';

interface VideoPlayerProps {
  planet: Planet;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ planet }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      setIsPlaying(false);
      setCurrentTime(0);
      videoRef.current.currentTime = 0;
    }
  }, [planet.name]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const restart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
      if (isPlaying) {
        videoRef.current.play();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-center mb-2">Tea Making on {planet.name}</h2>
        <p className="text-slate-300 text-center text-sm">
          Gravity: {planet.gravity.toFixed(1)}× Earth | Watch how gravity affects the tea pouring speed
        </p>
      </div>

      <div className="relative group mb-4">
        <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
          <video
            ref={videoRef}
            src={planet.videoUrl}
            className="w-full h-64 md:h-96 object-cover"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            poster={`https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=800`}
          />
          
          {/* Video overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          
          {/* Loading placeholder when no video */}
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80">
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full ${planet.color} mx-auto mb-4 animate-pulse`}></div>
              <p className="text-slate-300">Replace with your {planet.name} tea video</p>
              <p className="text-xs text-slate-500 mt-2">Video path: {planet.videoUrl}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="space-y-4">
        {/* Progress Bar */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-400 w-12">{formatTime(currentTime)}</span>
          <div className="flex-1">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
          <span className="text-sm text-slate-400 w-12">{formatTime(duration)}</span>
        </div>

        {/* Control Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={restart}
            className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="text-sm">Restart</span>
          </button>
          
          <button
            onClick={togglePlay}
            className="flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors font-medium"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-slate-400">
        <p>Observe how the tea falls at different speeds due to {planet.name}'s gravity</p>
      </div>
    </div>
  );
};