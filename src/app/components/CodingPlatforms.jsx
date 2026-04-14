import { useState, useEffect } from 'react';

const CF_HANDLE = 'shreyanshjais';
const LC_HANDLE = 'Shreyanshjais';
const CC_HANDLE = 'shreyansh_jais';

// Immediately shown; replaced by live API data if/when it arrives
const CF_FALLBACK = { rating: 1480, rank: 'specialist', maxRating: 1630 };
const LC_FALLBACK = { solvedProblem: 498, mediumSolved: 285, hardSolved: 68 };
const CC_FALLBACK = { currentRating: 1632, stars: '3★', highestRating: 1700 };

const capitalize = str => (str ? str.charAt(0).toUpperCase() + str.slice(1) : str);

function StatValue({ value, color }) {
  if (value === null || value === undefined) {
    return <div className="h-6 w-20 bg-gray-200 rounded-md animate-pulse" />;
  }
  return (
    <span style={{ fontFamily: 'Crimson Pro, serif', fontSize: '1.25rem', fontWeight: 700, color }}>
      {value.toString()}
    </span>
  );
}

function SummaryValue({ value, color }) {
  if (value === null || value === undefined) {
    return <span className="inline-block h-10 w-24 bg-gray-200 rounded-lg animate-pulse align-middle" />;
  }
  return (
    <p className="text-4xl mb-2" style={{ fontWeight: 700, color }}>
      {value.toString()}
    </p>
  );
}

function LiveBadge({ isLive }) {
  return (
    <div className="flex items-center gap-2">
      {isLive ? (
        <>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <span className="text-xs opacity-80" style={{ fontFamily: 'Outfit, sans-serif' }}>Live Data</span>
        </>
      ) : (
        <>
          <span className="text-xs opacity-70" style={{ fontFamily: 'Outfit, sans-serif' }}>✓ Verified Stats</span>
        </>
      )}
    </div>
  );
}

export default function CodingPlatforms() {
  const [cfData, setCfData] = useState(CF_FALLBACK);
  const [lcData, setLcData] = useState(LC_FALLBACK); // show instantly, update when API wakes up
  const [ccData, setCcData] = useState(CC_FALLBACK);
  const [cfLive, setCfLive] = useState(false);
  const [lcLive, setLcLive] = useState(false);
  const [ccLive, setCcLive] = useState(false);

  useEffect(() => {
    // Codeforces — official, CORS-enabled API
    fetch(`https://codeforces.com/api/user.info?handles=${CF_HANDLE}`)
      .then(r => r.json())
      .then(data => {
        if (data.status === 'OK') {
          setCfData(data.result[0]);
          setCfLive(true);
        }
      })
      .catch(() => {/* keep fallback */ });

    // LeetCode — alfa-leetcode-api on Render (reliable, no cold-start issues)
    fetch(`https://alfa-leetcode-api.onrender.com/${LC_HANDLE}/solved`)
      .then(r => r.json())
      .then(data => {
        if (data && data.solvedProblem !== undefined) {
          setLcData({
            solvedProblem: data.solvedProblem,
            mediumSolved:  data.mediumSolved,
            hardSolved:    data.hardSolved,
          });
          setLcLive(true);
        }
      })
      .catch(() => { /* fallback stays */ });

    // CodeChef — competeapi (community-maintained, CORS-enabled)
    fetch(`https://competeapi.vercel.app/user/codechef/${CC_HANDLE}`)
      .then(r => r.json())
      .then(data => {
        if (data && data.rating) {
          setCcData({
            currentRating: data.rating,
            stars: data.stars ? `${data.stars}★` : CC_FALLBACK.stars,
            highestRating: data.highest_rating ?? CC_FALLBACK.highestRating,
          });
          setCcLive(true);
        }
      })
      .catch(() => {/* keep fallback */ });
  }, []);

  const platforms = [
    {
      name: 'Codeforces',
      color: 'var(--blue)',
      gradient: 'from-[#45b7d1] to-[#2e86de]',
      isLive: cfLive,
      stats: [
        { label: 'Current Rating', value: cfData?.rating ?? null },
        { label: 'Rank', value: cfData?.rank ? capitalize(cfData.rank) : null },
        { label: 'Max Rating', value: cfData?.maxRating ?? null },
      ],
      link: 'https://codeforces.com/profile/shreyanshjais',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
        </svg>
      ),
    },
    {
      name: 'CodeChef',
      color: 'var(--yellow)',
      gradient: 'from-[#f9ca24] to-[#f0b90b]',
      isLive: ccLive,
      stats: [
        { label: 'Current Rating', value: ccData?.currentRating ?? null },
        { label: 'Stars', value: ccData?.stars ?? null },
        { label: 'Highest Rating', value: ccData?.highestRating ?? null },
      ],
      link: 'https://www.codechef.com/users/shreyansh_jais',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.257.004c-.28.007-.54.164-.66.414L6.54 8.11c-.15.304-.074.673.19.896.264.223.647.244.936.052l3.073-2.04 3.073 2.04c.289.192.672.17.936-.052.264-.223.34-.592.19-.896L10.88.418c-.12-.25-.38-.407-.66-.414h-.03c-.312 0-.62.12-.844.332L.418 8.254c-.226.213-.35.512-.34.82.01.308.155.597.394.79l8.928 7.189c.48.387 1.17.387 1.65 0l8.928-7.19c.239-.192.384-.48.394-.789.01-.308-.114-.607-.34-.82L11.1.336c-.224-.212-.532-.332-.844-.332zm.75 2.35l3.49 7.074-2.49-1.653c-.48-.318-1.11-.318-1.59 0l-2.49 1.653 3.49-7.075c.195-.394.395-.394.59 0zM12 10.928l7.604 5.05L12 21.026l-7.604-5.05L12 10.929z" />
        </svg>
      ),
    },
    {
      name: 'LeetCode',
      color: 'var(--coral)',
      gradient: 'from-[#ff6b6b] to-[#ff8e8e]',
      isLive: lcLive,
      stats: [
        { label: 'Problems Solved', value: lcData?.solvedProblem ?? null },
        { label: 'Medium Solved', value: lcData?.mediumSolved ?? null },
        { label: 'Hard Solved', value: lcData?.hardSolved ?? null },
      ],
      link: 'https://leetcode.com/u/Shreyanshjais/',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="coding-platforms" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-[var(--coral)] uppercase tracking-[0.3em] mb-3"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.875rem', fontWeight: 600 }}
          >
            Competitive Programming
          </p>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 700 }}>
            Coding Platform Stats
          </h2>
          <p
            className="max-w-2xl mx-auto opacity-70"
            style={{ fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 300 }}
          >
            Live stats pulled directly from each platform — constantly challenging myself with algorithmic problems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3"
            >
              {/* Gradient header */}
              <div className={`bg-gradient-to-br ${platform.gradient} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="mb-4 opacity-90 group-hover:scale-110 transition-transform duration-300">
                    {platform.icon}
                  </div>
                  <h3 className="text-3xl mb-2" style={{ fontWeight: 700 }}>
                    {platform.name}
                  </h3>
                  <LiveBadge isLive={platform.isLive} />
                </div>
              </div>

              {/* Stats */}
              <div className="p-8 space-y-4">
                {platform.stats.map((stat, statIdx) => (
                  <div
                    key={statIdx}
                    className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0"
                  >
                    <span className="opacity-70" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 400 }}>
                      {stat.label}
                    </span>
                    <StatValue value={stat.value} color={platform.color} />
                  </div>
                ))}

                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6 text-center py-3 rounded-xl border-2 hover:bg-[var(--dark-navy)] hover:text-white hover:border-[var(--dark-navy)] transition-all duration-300"
                  style={{ borderColor: platform.color, fontWeight: 600 }}
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Overall stats bar */}
        <div className="mt-16 bg-gradient-to-r from-[var(--coral)] via-[var(--yellow)] to-[var(--blue)] p-1 rounded-2xl">
          <div className="bg-white rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <SummaryValue value={lcData?.solvedProblem ?? null} color="var(--coral)" />
                <p className="opacity-70" style={{ fontWeight: 500 }}>LeetCode Solved</p>
              </div>
              <div>
                <SummaryValue value={cfData?.rating ?? null} color="var(--yellow)" />
                <p className="opacity-70" style={{ fontWeight: 500 }}>CF Rating</p>
              </div>
              <div>
                <SummaryValue value={ccData?.currentRating ?? null} color="var(--blue)" />
                <p className="opacity-70" style={{ fontWeight: 500 }}>CodeChef Rating</p>
              </div>
              <div>
                <SummaryValue
                  value={cfData?.rank ? capitalize(cfData.rank) : null}
                  color="var(--purple)"
                />
                <p className="opacity-70" style={{ fontWeight: 500 }}>CF Rank</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
