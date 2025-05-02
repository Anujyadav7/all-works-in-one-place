
import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  src: string;
  title?: string;
  thumbnail?: string;
  className?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ src, title, thumbnail, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={`video-container rounded-lg overflow-hidden bg-black/20 aspect-video ${className}`}>
      {!isPlaying ? (
        <div className="relative w-full h-full">
          <div 
            className="w-full h-full flex items-center justify-center cursor-pointer bg-black/20"
            onClick={handlePlay}
          >
            {thumbnail ? (
              <img 
                src={thumbnail} 
                alt={title || "Video thumbnail"} 
                className="w-full h-full object-cover opacity-80"
              />
            ) : (
              <div className="w-full h-full bg-black/40 flex items-center justify-center">
                <span className="text-white/50 text-sm">Video Preview</span>
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center hover:bg-black/40 transition-colors">
              <div className="rounded-full bg-primary/90 p-3 animate-pulse-glow">
                <Play className="h-8 w-8 text-white" />
              </div>
            </div>
            {title && (
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-sm font-medium">{title}</h3>
              </div>
            )}
          </div>
        </div>
      ) : (
        <video 
          src={src}
          className="w-full h-full object-cover"
          controls
          autoPlay
          onPause={() => setIsPlaying(false)}
        />
      )}
    </div>
  );
};

export default VideoCard;
