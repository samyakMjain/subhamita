import { useState, useRef, useCallback } from 'react';

interface ProposalPageProps {
  onYes: () => void;
}

function ProposalPage({ onYes }: ProposalPageProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [noAttempts, setNoAttempts] = useState(0);
  const [playfulText, setPlayfulText] = useState('');
  const noButtonRef = useRef<HTMLDivElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);

  const playfulMessages = [
    "Are you sure? 😜",
    "That's not the right choice 👀",
    "Try again 😏",
    "Come on, you know you want to say yes 💕",
    "The YES button is calling you 😘",
    "Wrong button! 🙈",
    "Still not the right one 💖",
    "You're making this harder than it needs to be 😅",
  ];

  const rectsOverlap = (
    r1: { top: number; left: number; width: number; height: number },
    r2: { top: number; left: number; width: number; height: number },
    padding = 20,
  ) => {
    return !(
      r1.left + r1.width + padding < r2.left ||
      r2.left + r2.width + padding < r1.left ||
      r1.top + r1.height + padding < r2.top ||
      r2.top + r2.height + padding < r1.top
    );
  };

  const moveNoButton = useCallback(() => {
    const btnWidth = noButtonRef.current?.offsetWidth ?? 120;
    const btnHeight = noButtonRef.current?.offsetHeight ?? 56;
    const margin = 16;
    const maxX = window.innerWidth - btnWidth - margin;
    const maxY = window.innerHeight - btnHeight - margin;

    const yesRect = yesButtonRef.current?.getBoundingClientRect();

    let randomX: number;
    let randomY: number;
    let attempts = 0;

    do {
      randomX = margin + Math.random() * (maxX - margin);
      randomY = margin + Math.random() * (maxY - margin);
      attempts++;
    } while (
      yesRect &&
      attempts < 50 &&
      rectsOverlap(
        { top: randomY, left: randomX, width: btnWidth, height: btnHeight },
        { top: yesRect.top, left: yesRect.left, width: yesRect.width, height: yesRect.height },
      )
    );

    setNoButtonPosition({ top: randomY, left: randomX });
    setNoAttempts((prev) => prev + 1);
    setPlayfulText(playfulMessages[Math.min(noAttempts, playfulMessages.length - 1)]);
  }, [noAttempts]);

  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 px-4 py-8 md:p-6 relative overflow-hidden">
      <div className="max-w-3xl text-center fade-in z-10">
        <div className="text-5xl md:text-8xl mb-5 md:mb-8 animate-bounce">💖</div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-dancing text-rose-600 mb-4 md:mb-6 animate-fade-in">
          Will you go out on a date with me?
        </h1>

        <div className="mb-5 md:mb-8 text-4xl md:text-6xl">
          <span className="inline-block animate-pulse">🌹</span>
          <span className="inline-block animate-pulse delay-100">💐</span>
          <span className="inline-block animate-pulse delay-200">🌺</span>
        </div>

        {playfulText && (
          <p className="text-base md:text-2xl text-rose-500 font-poppins mb-5 md:mb-8 animate-bounce">
            {playfulText}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center relative">
          <button
            ref={yesButtonRef}
            onClick={onYes}
            className="px-8 py-4 md:px-12 md:py-6 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full text-xl md:text-2xl font-poppins shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 glow-button-strong z-20"
          >
            YES 💕
          </button>

          <div
            ref={noButtonRef}
            className="no-button-container"
            style={
              noAttempts > 0
                ? {
                    position: 'fixed',
                    top: `${noButtonPosition.top}px`,
                    left: `${noButtonPosition.left}px`,
                    transition: 'all 0.3s ease',
                    zIndex: 30,
                  }
                : {}
            }
          >
            <button
              onClick={moveNoButton}
              className="px-8 py-4 md:px-12 md:py-6 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700 rounded-full text-xl md:text-2xl font-poppins shadow-lg hover:shadow-xl transition-all duration-300"
            >
              NO 🙈
            </button>
          </div>
        </div>

        <p className="mt-8 md:mt-12 text-gray-600 text-base md:text-lg font-poppins italic animate-fade-in-delay-2">
          Choose wisely... 😊
        </p>
      </div>
    </div>
  );
}

export default ProposalPage;
