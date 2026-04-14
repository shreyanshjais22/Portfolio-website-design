export default function Achievements() {
  const achievements = [
    {
      title: "Codeforces Expert — Global Rank 1675",
      description: "Achieved Expert rank on Codeforces, demonstrating advanced proficiency in Data Structures and Algorithms through competitive programming contests.",
      date: "Active",
      icon: "⚔️",
      color: "var(--blue)"
    },
    {
      title: "CodeChef 3-Star — Rating 1632",
      description: "Rated 1632 (3-Star) on CodeChef; consistently ranked in the top percentile of contest participants worldwide.",
      date: "Active",
      icon: "⭐",
      color: "var(--yellow)"
    },
    {
      title: "LeetCode — 500+ Problems Solved",
      description: "Solved 500+ problems on LeetCode covering Dynamic Programming, Graphs, Trees and advanced algorithmic concepts.",
      date: "Active",
      icon: "💡",
      color: "var(--coral)"
    },
    {
      title: "2nd Runner-Up — VisionX AI Hackathon, DTU",
      description: "Built a functional AI prototype within 24 hours at VisionX AI Hackathon hosted at Delhi Technological University.",
      date: "Feb 2025",
      icon: "🏆",
      color: "var(--purple)"
    },
    {
      title: "1st Prize — All India Radio Competition",
      description: "Recognized for excellence in public speaking and presentation at the All India Radio Competition.",
      date: "2024",
      icon: "🎯",
      color: "var(--teal)"
    },
    {
      title: "Design Lead — IIIT Kernel Alumni Club",
      description: "Spearheaded branding initiatives and led UI/UX workshops for the official Alumni Club at IIIT Kota.",
      date: "Ongoing",
      icon: "🎨",
      color: "var(--coral)"
    }
  ];

  const activities = [
    "Design Lead, IIIT Kernel — Branding & UI/UX Workshops",
    "Social Media Manager, QnS — 20% Engagement Growth",
    "MERN Stack Developer",
    "AI & SaaS Builder",
    "Competitive Programmer"
  ];

  return (
    <section id="achievements" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--coral)] uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.875rem', fontWeight: 600 }}>
            Recognition
          </p>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 700 }}>
            Achievements & Activities
          </h2>
          <p className="max-w-2xl mx-auto opacity-70" style={{ fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 300 }}>
            Milestones that reflect dedication, continuous learning, and leadership impact
          </p>
        </div>

        {/* Achievements Timeline */}
        <div className="mb-16 space-y-6">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              <div className="flex gap-6 items-start">
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: achievement.color }}
                >
                  {achievement.icon}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white border-2 border-gray-100 rounded-2xl p-6 group-hover:border-[var(--dark-navy)] group-hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                    <h3 className="text-2xl" style={{ fontWeight: 700 }}>
                      {achievement.title}
                    </h3>
                    <span
                      className="inline-block px-4 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: `${achievement.color}20`,
                        color: achievement.color,
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 600
                      }}
                    >
                      {achievement.date}
                    </span>
                  </div>
                  <p className="opacity-70" style={{ lineHeight: 1.7, fontWeight: 300 }}>
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Connector line */}
              {idx < achievements.length - 1 && (
                <div className="w-0.5 h-6 bg-gray-200 ml-8 my-2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Leadership & Activities */}
        <div className="bg-gradient-to-br from-[var(--soft-gray)] to-white p-10 rounded-3xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl mb-3" style={{ fontWeight: 700 }}>
              Leadership & Activities
            </h3>
            <p className="opacity-70" style={{ fontWeight: 300 }}>
              Beyond code — leading teams, driving engagement, building communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activities.map((activity, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border-2 border-transparent hover:border-[var(--coral)] transition-all duration-300 hover:shadow-lg flex items-center gap-3 group"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--coral)] group-hover:scale-150 transition-transform duration-300"></div>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>
                  {activity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
