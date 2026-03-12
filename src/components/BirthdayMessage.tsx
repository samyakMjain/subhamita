interface BirthdayMessageProps {
  onNext: () => void;
}

function BirthdayMessage({ onNext }: BirthdayMessageProps) {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 px-4 py-8 md:p-6">
      <div className="max-w-2xl text-center fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-dancing text-rose-600 mb-6 md:mb-8 animate-fade-in">
          Happy Birthday, My Love ❤️
        </h1>

        <div className="space-y-4 md:space-y-6 text-base md:text-xl text-gray-700 font-poppins leading-relaxed">
          <p className="animate-fade-in-delay-1">
            You are the most beautiful part of my life.
          </p>
          <p className="animate-fade-in-delay-2">
            Every smile of yours makes my world brighter.
          </p>
          <p className="animate-fade-in-delay-3">
            Today is all about celebrating YOU.
          </p>
          <p className="animate-fade-in-delay-4">
            Your presence in my life is the greatest gift I could ever ask for.
          </p>
          <p className="animate-fade-in-delay-5">
            You make every moment magical, every day worth living.
          </p>
          <p className="animate-fade-in-delay-6 text-rose-600 font-semibold">
            I'm so grateful that you came in my life...            My Bengali Angel
          </p>
        </div>

        <button
          onClick={onNext}
          className="mt-8 md:mt-12 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full text-lg md:text-xl font-poppins shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 glow-button animate-fade-in-delay-7"
        >
          Next ➜
        </button>
      </div>
    </div>
  );
}

export default BirthdayMessage;
