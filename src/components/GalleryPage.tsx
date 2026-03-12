interface GalleryPageProps {
  onNext: () => void;
}

function GalleryPage({ onNext }: GalleryPageProps) {
  const memories = [
    {
      caption: 'My favorite smile ❤️',
      color: 'from-pink-300 to-rose-300',
    },
    {
      caption: 'Our beautiful moment ✨',
      color: 'from-purple-300 to-pink-300',
    },
    {
      caption: 'Forever my favorite person 💕',
      color: 'from-rose-300 to-pink-400',
    },
    {
      caption: 'Every moment with you 🌸',
      color: 'from-pink-200 to-purple-200',
    },
    {
      caption: 'You make life beautiful 🦋',
      color: 'from-rose-200 to-pink-300',
    },
    {
      caption: 'My everything 💖',
      color: 'from-purple-200 to-rose-200',
    },
  ];

  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 px-4 py-8 md:p-12">
      <div className="max-w-6xl mx-auto fade-in">
        <h1 className="text-3xl md:text-5xl font-dancing text-center text-rose-600 mb-8 md:mb-12">
          Beautiful Memories 💝
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="gallery-item group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`aspect-square rounded-xl md:rounded-2xl bg-gradient-to-br ${memory.color} shadow-lg overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl`}>
                <div className="w-full h-full flex items-center justify-center p-3 md:p-6">
                  <div className="text-center">
                    <div className="text-3xl md:text-6xl mb-2 md:mb-4">
                      {index === 0 ? '😊' : index === 1 ? '✨' : index === 2 ? '💕' : index === 3 ? '🌸' : index === 4 ? '🦋' : '💖'}
                    </div>
                    <p className="text-white text-xs md:text-xl font-poppins font-semibold">
                      {memory.caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
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
