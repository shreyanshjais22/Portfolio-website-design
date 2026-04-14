export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-[var(--coral)] uppercase tracking-[0.3em]" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.875rem', fontWeight: 600 }}>
                About Me
              </p>
              <h2 className="text-5xl md:text-6xl" style={{ fontWeight: 700, lineHeight: 1.2 }}>
                Building the Future, One Line at a Time
              </h2>
            </div>

            <div className="space-y-4 opacity-70" style={{ fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 300 }}>
              <p>
                I'm Shreyansh Jaiswal, a B.Tech student in Electronics and Communication Engineering at the Indian Institute
                of Information Technology, Kota. Passionate about full-stack development and competitive programming,
                I love turning complex problems into elegant, scalable solutions.
              </p>
              <p>
                From building real-time language exchange platforms to AI-powered SaaS products, I thrive in environments
                that challenge me to think critically and creatively. I'm also Design Lead at IIIT Kernel and Social Media
                Manager at QnS, where I blend technical and creative skills.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="mailto:shreyanshjais2202@gmail.com"
                className="inline-flex items-center gap-2 text-[var(--coral)] hover:gap-4 transition-all duration-300"
                style={{ fontWeight: 600 }}
              >
                Get In Touch
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[var(--coral)] to-[var(--coral)]/80 p-8 rounded-2xl text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <p className="text-5xl mb-2" style={{ fontWeight: 700 }}>500+</p>
                <p className="opacity-90" style={{ fontWeight: 500 }}>Problems Solved</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[var(--teal)] to-[var(--teal)]/80 p-8 rounded-2xl text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <p className="text-5xl mb-2" style={{ fontWeight: 700 }}>3+</p>
                <p className="opacity-90" style={{ fontWeight: 500 }}>Projects Built</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[var(--purple)] to-[var(--purple)]/80 p-8 rounded-2xl text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <p className="text-5xl mb-2" style={{ fontWeight: 700 }}>2+</p>
                <p className="opacity-90" style={{ fontWeight: 500 }}>Years Coding</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[var(--yellow)] to-[var(--yellow)]/90 p-8 rounded-2xl text-[var(--dark-navy)] relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <p className="text-5xl mb-2" style={{ fontWeight: 700 }}>IIIT</p>
                <p className="opacity-90" style={{ fontWeight: 600 }}>Kota, Rajasthan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
