interface RomanticMessageProps {
  onNext: () => void;
}

function RomanticMessage({ onNext }: RomanticMessageProps) {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 px-4 py-8 md:p-6">
      <div className="max-w-3xl text-center fade-in">
        <div className="text-5xl md:text-7xl mb-6 md:mb-8 animate-pulse">💗</div>

        <div className="space-y-5 md:space-y-8 text-base md:text-2xl text-gray-700 font-poppins leading-relaxed">
          <p className="animate-fade-in-delay-1">
            Being with you is my favorite place in the world.
          </p>
          <p className="animate-fade-in-delay-2">
            Every moment we share becomes a cherished memory.
          </p>
          <p className="animate-fade-in-delay-3 text-rose-600 font-semibold">
            And I don't just want to celebrate your birthday...
          </p>
          <p className="animate-fade-in-delay-4 text-lg md:text-3xl text-rose-700 font-semibold">
            I want to create another beautiful memory with you.
          </p>
        </div>

        <button
          onClick={onNext}
          className="mt-8 md:mt-12 px-6 py-3 md:px-10 md:py-5 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full text-lg md:text-xl font-poppins shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 glow-button animate-fade-in-delay-5"
        >
          One More Thing... 💗
        </button>
      </div>
    </div>
  );
}

export default RomanticMessage;
