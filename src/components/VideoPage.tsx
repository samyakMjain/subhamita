import { useRef, useState } from 'react';
import videoSrc from '../video/video.mp4';

interface VideoPageProps {
  onNext: () => void;
}

function VideoPage({ onNext }: VideoPageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-purple-100 to-rose-200 animate-gradient p-4">
      <div className="w-full max-w-[85vw] md:max-w-md fade-in">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          playsInline
          className="w-full max-h-[65vh] object-contain rounded-2xl shadow-2xl"
          onEnded={handleVideoEnd}
        />
      </div>

      {videoEnded && (
        <button
          onClick={onNext}
          className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full text-lg md:text-xl font-poppins shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 glow-button fade-in"
        >
          Next ➜
        </button>
      )}
    </div>
  );
}

export default VideoPage;
