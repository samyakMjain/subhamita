import { useState } from 'react';

interface CardPageProps {
  onNext: () => void;
}

function CardPage({ onNext }: CardPageProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(true);
    setTimeout(() => {
      onNext();
    }, 1500);
  };

  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-100 to-rose-200 animate-gradient p-4 relative overflow-hidden">
      <div className="absolute top-8 left-6 text-2xl md:text-3xl animate-float opacity-60">🌸</div>
      <div className="absolute top-16 right-8 text-xl md:text-2xl animate-pulse opacity-60">✨</div>
      <div className="absolute bottom-20 left-10 text-2xl md:text-3xl animate-bounce opacity-50">🦋</div>
      <div className="absolute bottom-12 right-6 text-xl md:text-2xl animate-float opacity-60">💕</div>
      <div className="absolute top-1/3 left-4 text-lg md:text-xl animate-pulse opacity-40">🌹</div>
      <div className="absolute top-1/4 right-4 text-2xl md:text-3xl animate-float opacity-50">💗</div>
      <div className="absolute bottom-1/3 right-12 text-lg md:text-xl animate-pulse opacity-40">🌺</div>

      <div
        className={`card-container ${isFlipped ? 'flipped' : ''}`}
        onClick={!isFlipped ? handleCardClick : undefined}
      >
        <div className="card">
          <div className="card-front">
            <div className="card-content">
              <div className="text-3xl md:text-4xl mb-2">🌹 💖 🌹</div>
              <div className="text-5xl md:text-6xl mb-3 animate-pulse">💌</div>
              <h1 className="text-3xl md:text-4xl font-dancing text-rose-600 mb-2">
                For Someone
              </h1>
              <h2 className="text-2xl md:text-3xl font-dancing text-rose-500">
                Very Special ✨
              </h2>
              <p className="text-rose-400 mt-3 md:mt-4 text-base md:text-lg">
                 My Subu Baby 🥰❤️
              </p>
              <p className="text-rose-400 mt-3 md:mt-4 text-sm md:text-base animate-bounce">
                👆 Please Click here 👆
              </p>
              <div className="text-2xl md:text-3xl mt-2">💐🦋💐</div>
            </div>
          </div>
          <div className="card-back">
            <div className="card-content">
              <div className="text-3xl md:text-4xl mb-2">✨ 🎉 ✨</div>
              <div className="text-5xl md:text-6xl mb-4">❤️</div>
              <h2 className="text-2xl md:text-3xl font-dancing text-rose-600">
                Opening... 🎁
              </h2>
              <div className="text-2xl md:text-3xl mt-3">💕 🌸 💕</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
