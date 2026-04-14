export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-[#fef8f8] to-[#fff5f5] px-6">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[var(--coral)] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[var(--teal)] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text content */}
          <div className="flex-1 space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="uppercase tracking-[0.3em] opacity-60" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.875rem', fontWeight: 500 }}>
                B.Tech Student · IIIT Kota
              </p>
              <h1 className="text-7xl md:text-8xl" style={{ fontWeight: 700, lineHeight: 1.1 }}>
                Shreyansh <br />
                <span className="text-[var(--coral)]">Jaiswal</span>
              </h1>
            </div>

            <p className="max-w-xl opacity-70" style={{ fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 300 }}>
              Full-stack developer and competitive programmer passionate about building scalable web applications and solving complex algorithmic problems.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-[var(--dark-navy)] text-white rounded-xl hover:bg-[var(--coral)] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ fontWeight: 500 }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-[var(--dark-navy)] text-[var(--dark-navy)] rounded-xl hover:bg-[var(--dark-navy)] hover:text-white transition-all duration-300 hover:scale-105"
                style={{ fontWeight: 500 }}
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Profile image placeholder */}
          <div className="flex-1 flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-[var(--coral)] to-[var(--purple)] p-1 rotate-3 hover:rotate-6 transition-transform duration-500">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[var(--teal)]/20 to-[var(--blue)]/20 backdrop-blur flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-24 h-24 rounded-full bg-white/50 mx-auto flex items-center justify-center">
                      <svg className="w-12 h-12 text-[var(--dark-navy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="opacity-60" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.875rem' }}>Shreyansh Jaiswal</p>
                  </div>
                </div>
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -right-4 bg-[var(--yellow)] text-[var(--dark-navy)] px-6 py-3 rounded-xl shadow-xl rotate-3 animate-bounce" style={{ animationDuration: '3s', fontWeight: 600 }}>
                500+ Problems Solved
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out 0.3s backwards;
        }
      `}</style>
    </section>
  );
}
