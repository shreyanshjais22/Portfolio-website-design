import { useState, useEffect } from 'react';

const PROJECTS = [
  {
    title: 'LearnTogether',
    subtitle: 'Language Exchange Platform',
    description:
      'Scalable full-stack app connecting global users for language exchange. Features JWT auth, MongoDB aggregation pipelines, and a 95%-accurate matching algorithm pairing users by native proficiency and learning targets.',
    tech: ['MERN Stack', 'Socket.io', 'JWT', 'MongoDB'],
    color: 'var(--coral)',
    gradient: 'from-[#ff6b6b]/10 to-[#ff8e8e]/10',
    date: 'Jan 2026',
    github: 'https://github.com/shreyanshjais22',
    live: 'https://talk2learn-hvs7.vercel.app/',
    staticImage: '/image.png', // local screenshot placed in public/
  },
  {
    title: 'Imagix',
    subtitle: 'AI SaaS Image Generator',
    description:
      'Production-ready SaaS platform integrating the Clipdrop API to generate high-fidelity AI images from text prompts. Includes multi-gateway payments (Stripe, Razorpay) with atomic transactions and webhook verification.',
    tech: ['React', 'Node.js', 'Stripe', 'Razorpay', 'Clipdrop API'],
    color: 'var(--teal)',
    gradient: 'from-[#4ecdc4]/10 to-[#45b7d1]/10',
    date: 'Nov 2025',
    github: 'https://github.com/shreyanshjais22',
    live: 'https://imagify-main-umber.vercel.app/',
  },
  {
    title: 'Liceria',
    subtitle: 'Grocery Ecosystem',
    description:
      'Multi-vendor e-commerce platform with Role-Based Access Control (RBAC) for admin, seller, and buyer roles. Boosted operational efficiency by 35% with a custom seller dashboard and Cloudinary media optimization.',
    tech: ['Full-Stack', 'Cloudinary', 'Stripe', 'RBAC', 'COD'],
    color: 'var(--purple)',
    gradient: 'from-[#a29bfe]/10 to-[#6c5ce7]/10',
    date: 'Aug 2025',
    github: 'https://github.com/shreyanshjais22',
    live: 'https://liceria-lyart.vercel.app/',
  },
  {
    title: 'Password Generator',
    subtitle: 'Secure Password Tool',
    description:
      'A fast, client-side password generator with customizable length, character sets, and strength indicators. Generates cryptographically safe passwords entirely in the browser with zero data storage.',
    tech: ['React', 'Vite', 'CSS'],
    color: 'var(--yellow)',
    gradient: 'from-[#f9ca24]/10 to-[#f0b90b]/10',
    date: 'Oct 2024',
    github: 'https://github.com/shreyanshjais22',
    live: 'https://passwordgenrator-ebon.vercel.app/',
  },
  {
    title: 'Wall Calendar',
    subtitle: 'Interactive Calendar App',
    description:
      'A clean, interactive wall-style calendar app with event tracking, month navigation, and a minimal UI designed for productivity and daily planning.',
    tech: ['React', 'JavaScript', 'CSS'],
    color: 'var(--blue)',
    gradient: 'from-[#45b7d1]/10 to-[#2e86de]/10',
    date: 'Dec 2024',
    github: 'https://github.com/shreyanshjais22',
    live: 'https://wall-calendar-lake.vercel.app/',
  },
];

export default function Projects() {
  // screenshots keyed by project title
  const [screenshots, setScreenshots] = useState({});

  useEffect(() => {
    PROJECTS.forEach((project) => {
      // If a local static image is provided, use it directly — skip Microlink
      if (project.staticImage) {
        setScreenshots(prev => ({ ...prev, [project.title]: project.staticImage }));
        return;
      }
      if (!project.live) return;
      fetch(
        `https://api.microlink.io/?url=${encodeURIComponent(project.live)}&screenshot=true&meta=false`
      )
        .then(r => r.json())
        .then(data => {
          if (data.status === 'success' && data.data?.screenshot?.url) {
            setScreenshots(prev => ({
              ...prev,
              [project.title]: data.data.screenshot.url,
            }));
          }
        })
        .catch(() => {/* gradient fallback stays */ });
    });
  }, []);

  return (
    <section id="projects" className="py-24 px-6 bg-[var(--soft-gray)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-[var(--coral)] uppercase tracking-[0.3em] mb-3"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.875rem', fontWeight: 600 }}
          >
            Portfolio
          </p>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 700 }}>
            Featured Projects
          </h2>
          <p
            className="max-w-2xl mx-auto opacity-70"
            style={{ fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 300 }}
          >
            Real-world applications showcasing full-stack development, scalable architecture, and product thinking
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => {
            const screenshotSrc = screenshots[project.title];
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Project header — gradient base + live screenshot when ready */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  {/* Screenshot fades in once fetched */}
                  {screenshotSrc && (
                    <img
                      src={screenshotSrc}
                      alt={`${project.title} preview`}
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                  )}

                  {/* Skeleton pulse while screenshot is loading (no url yet) */}
                  {!screenshotSrc && project.live && (
                    <div className="absolute inset-0 bg-gray-200/40 animate-pulse" />
                  )}

                  {/* Bottom gradient so badges stay legible over screenshot */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${project.color}70 0%, transparent 55%)`,
                    }}
                  />

                  {/* Hover colour wash */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: project.color }}
                  />

                  {/* Date badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className="px-3 py-1 bg-white/90 backdrop-blur rounded-lg text-xs"
                      style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, color: project.color }}
                    >
                      {project.date}
                    </span>
                  </div>

                  {/* First 2 tech badges */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 2).map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-white/90 backdrop-blur rounded-lg text-sm"
                          style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, color: project.color }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl" style={{ fontWeight: 700 }}>
                      {project.title}
                    </h3>
                    <p className="text-sm opacity-50" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500 }}>
                      {project.subtitle}
                    </p>
                  </div>
                  <p className="opacity-70" style={{ lineHeight: 1.7, fontWeight: 300 }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-[var(--soft-gray)] rounded-lg text-sm"
                        style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500 }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 rounded-lg border-2 border-gray-300 hover:border-[var(--dark-navy)] hover:bg-[var(--dark-navy)] hover:text-white transition-all duration-300"
                      style={{ fontWeight: 600 }}
                    >
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 rounded-lg border-2 text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
                        style={{
                          fontWeight: 600,
                          backgroundColor: project.color,
                          borderColor: project.color,
                        }}
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/shreyanshjais22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--dark-navy)] text-white rounded-xl hover:bg-[var(--coral)] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ fontWeight: 600 }}
          >
            View All Projects on GitHub
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
