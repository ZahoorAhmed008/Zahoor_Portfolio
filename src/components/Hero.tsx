import React from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 pt-16 overflow-hidden"
    >
      {/* Animated circles background */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <span
            key={i}
            className={`absolute bg-indigo-300 dark:bg-indigo-500 rounded-full opacity-20 animate-bounce-slow`}
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 6}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-900 dark:text-white">
        <div className="animate-fade-in">
          {/* Greeting */}
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Zahoor Ahmed
          </h1>

          {/* Title */}
          <div className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">UI/UX Designer</span>
            <span className="mx-2">|</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Graphic Designer</span>
            <span className="mx-2">|</span>
            <span className="text-amber-600 dark:text-amber-400 font-semibold">Front-End Developer</span>
          </div>

          {/* Description */}
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            I craft clean, user-friendly interfaces and stunning visuals that engage and inspire users.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <button
              onClick={() =>
                window.open(
                  'https://mail.google.com/mail/?view=cm&fs=1&to=za0389188@gmail.com&su=Project Inquiry&body=Hello Zahoor, I want to hire you.',
                  '_blank'
                )
              }
              className="inline-flex items-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Mail size={20} className="mr-2" />
              Hire Me
            </button>

            <button
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('/assets/Zahoor_Ahmed_CV.pdf', '_blank')}
            >
              <Download size={20} className="mr-2" />
              Download CV
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <button
              onClick={scrollToAbout}
              className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
