export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      color: "var(--coral)",
      skills: ["C++", "JavaScript (ES6+)", "SQL", "Python"]
    },
    {
      category: "Frontend",
      color: "var(--teal)",
      skills: ["React.js", "Next.js", "Vite", "Tailwind CSS", "HTML5", "CSS3", "Redux", "Framer Motion"]
    },
    {
      category: "Backend",
      color: "var(--blue)",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "WebSockets", "Mongoose", "Multer", "bcrypt"]
    },
    {
      category: "Databases & Cloud",
      color: "var(--purple)",
      skills: ["MongoDB", "MongoDB Atlas", "MySQL", "Cloudinary", "Firebase", "Vercel", "Render", "Netlify"]
    },
    {
      category: "Tools & DevOps",
      color: "var(--yellow-dark, #b8860b)",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Socket.io", "Figma"]
    },
    {
      category: "CS Fundamentals",
      color: "var(--coral)",
      skills: ["Data Structures", "Algorithms", "OOP", "OS Concepts", "DBMS"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[var(--soft-gray)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--coral)] uppercase tracking-[0.3em] mb-3" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.875rem', fontWeight: 600 }}>
            Technical Expertise
          </p>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 700 }}>
            Skills & Technologies
          </h2>
          <p className="max-w-2xl mx-auto opacity-70" style={{ fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 300 }}>
            A diverse toolkit built through real-world projects, competitive programming, and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
            >
              {/* Decorative element */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"
                style={{ backgroundColor: category.color }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3 className="text-2xl" style={{ fontWeight: 600 }}>
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-4 py-2 bg-white border-2 rounded-xl hover:bg-[var(--dark-navy)] hover:text-white hover:border-[var(--dark-navy)] transition-all duration-300 cursor-default"
                      style={{
                        borderColor: category.color,
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 500
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional skill highlights */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Data Structures & Algo", icon: "📊" },
            { label: "Competitive Programming", icon: "🏆" },
            { label: "Full Stack Development", icon: "⚡" },
            { label: "System Design", icon: "🏗️" },

            { label: "Payment Integration", icon: "💳" },
            { label: "Real-time Apps", icon: "🔄" },
            { label: "Open Source", icon: "🌐" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <p style={{ fontWeight: 600 }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
