import { useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_zuqrdqr';
const EMAILJS_TEMPLATE_ID = 'template_54fwfjp';  // corrected template ID
const EMAILJS_PUBLIC_KEY  = '9I23EyvNcO5j9onMH';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:    formData.name,               // matches {{name}} in template
          message: formData.message,            // matches {{message}} in template
          title:   `Message from ${formData.name} (${formData.email})`, // matches {{title}} in subject
          time:    new Date().toLocaleString(), // matches {{time}} in template
          reply_to: formData.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error('EmailJS error:', err?.text ?? err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }


  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/shreyanshjais22',
      color: 'var(--dark-navy)',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shreyansh-jaiswal-21a36628a/',
      color: 'var(--blue)',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Codeforces',
      url: 'https://codeforces.com/profile/shreyanshjais',
      color: 'var(--blue)',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:shreyanshjais2202@gmail.com',
      color: 'var(--coral)',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const buttonContent = {
    idle:    'Send Message',
    sending: (
      <span className="flex items-center justify-center gap-2">
        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        Sending…
      </span>
    ),
    success: '✅ Message Sent! I\'ll reply soon.',
    error:   '❌ Something went wrong. Try again.',
  };

  const buttonClass = {
    idle:    'bg-[var(--dark-navy)] hover:bg-[var(--coral)] hover:scale-105 hover:shadow-2xl',
    sending: 'bg-[var(--dark-navy)] opacity-70 cursor-not-allowed',
    success: 'bg-green-500 cursor-default',
    error:   'bg-red-500 hover:bg-red-600',
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-[var(--soft-gray)] via-white to-[var(--soft-gray)] relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--coral)] rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--teal)] rounded-full opacity-5 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p
            className="text-[var(--coral)] uppercase tracking-[0.3em] mb-3"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.875rem', fontWeight: 600 }}
          >
            Get In Touch
          </p>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 700 }}>
            Let's Connect
          </h2>
          <p
            className="max-w-2xl mx-auto opacity-70"
            style={{ fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 300 }}
          >
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-3xl mb-6" style={{ fontWeight: 700 }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  className="block mb-2 opacity-70"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500 }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[var(--soft-gray)] rounded-xl border-2 border-transparent focus:border-[var(--coral)] focus:outline-none transition-all duration-300"
                  placeholder="John Doe"
                  required
                  disabled={status === 'sending'}
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                />
              </div>

              <div>
                <label
                  className="block mb-2 opacity-70"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500 }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[var(--soft-gray)] rounded-xl border-2 border-transparent focus:border-[var(--coral)] focus:outline-none transition-all duration-300"
                  placeholder="john@example.com"
                  required
                  disabled={status === 'sending'}
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                />
              </div>

              <div>
                <label
                  className="block mb-2 opacity-70"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 500 }}
                >
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[var(--soft-gray)] rounded-xl border-2 border-transparent focus:border-[var(--coral)] focus:outline-none transition-all duration-300 min-h-32 resize-none"
                  placeholder="Your message here…"
                  required
                  disabled={status === 'sending'}
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`w-full py-4 text-white rounded-xl transition-all duration-300 ${buttonClass[status]}`}
                style={{ fontWeight: 600 }}
              >
                {buttonContent[status]}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[var(--coral)] to-[var(--coral)]/80 p-8 rounded-3xl text-white">
              <h3 className="text-3xl mb-4" style={{ fontWeight: 700 }}>
                Direct Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="opacity-80 text-sm">Email</p>
                    <p style={{ fontWeight: 600 }}>shreyanshjais2202@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="opacity-80 text-sm">Phone</p>
                    <p style={{ fontWeight: 600 }}>+91-8127223315</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="opacity-80 text-sm">Location</p>
                    <p style={{ fontWeight: 600 }}>Lucknow, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl mb-6" style={{ fontWeight: 700 }}>
                Connect on Social
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-100 hover:border-[var(--dark-navy)] hover:shadow-lg transition-all duration-300 group"
                  >
                    <div
                      className="group-hover:scale-110 transition-transform duration-300"
                      style={{ color: social.color }}
                    >
                      {social.icon}
                    </div>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
