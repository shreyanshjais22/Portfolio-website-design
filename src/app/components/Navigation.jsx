import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Coding", href: "#coding-platforms" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl" style={{ fontWeight: 700 }}>
            <span className="text-[var(--dark-navy)]">Shreyansh</span>
            <span className="text-[var(--coral)]">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="relative group"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500 }}
              >
                <span className="group-hover:text-[var(--coral)] transition-colors duration-300">
                  {link.label}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--coral)] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-[var(--dark-navy)] text-white rounded-lg hover:bg-[var(--coral)] transition-all duration-300 hover:scale-105"
              style={{ fontWeight: 600 }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-xl shadow-lg">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="block px-6 py-3 hover:bg-[var(--soft-gray)] transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mx-6 mt-3 px-6 py-3 bg-[var(--dark-navy)] text-white rounded-lg text-center hover:bg-[var(--coral)] transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ fontWeight: 600 }}
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
