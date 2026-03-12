import hasiImg from '../Pic/hasi.jpg';
import kissiImg from '../Pic/kissi.jpg';
import greenImg from '../Pic/green.jpg';
import fuljhadiImg from '../Pic/fuljhadi.jpg';
import toppicImg from '../Pic/toppic.jpg';
import sareepicImg from '../Pic/sareepic.jpg';

interface GalleryPageProps {
  onNext: () => void;
}

function GalleryPage({ onNext }: GalleryPageProps) {
  const memories = [
    { caption: 'My favorite smile ❤️', image: hasiImg },
    { caption: 'Our beautiful kissi 😘✨', image: kissiImg },
    { caption: 'Meri Hariyali 💕', image: greenImg },
    { caption: 'Every moment with you feels like diwali,\nmy fuljhadi 🌸', image: fuljhadiImg },
    { caption: 'You make life beautiful and warm, My Hottieee ❤️‍🔥🥵', image: toppicImg },
    { caption: 'My Queen 💖', image: sareepicImg },
  ];

  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 px-4 py-10 md:py-16 overflow-y-auto">
      <div className="max-w-md md:max-w-lg mx-auto fade-in">
        <h1 className="text-3xl md:text-5xl font-dancing text-center text-rose-600 mb-8 md:mb-12">
          Beautiful Memories 💝
        </h1>

        <div className="flex flex-col gap-8 md:gap-12 mb-10 md:mb-14">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="rounded-2xl shadow-xl overflow-hidden relative">
                <img
                  src={memory.image}
                  alt={memory.caption}
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <p className="text-white text-lg md:text-2xl font-dancing font-semibold p-4 md:p-6 w-full text-center whitespace-pre-line">
                    {memory.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pb-6">
          <button
            onClick={onNext}
            className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full text-lg md:text-xl font-poppins shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 glow-button"
          >
            Next Surprise ➜
          </button>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
