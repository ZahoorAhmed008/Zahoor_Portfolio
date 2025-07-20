import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">Zahoor Ahmed</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              UI/UX Designer, Graphic Designer, and Front-End Developer passionate about 
              creating beautiful and functional digital experiences.
            </p>
            <div className="flex space-x-4">
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Services', 'Projects', 'Certificates', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-400 hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>UI/UX Design</li>
              <li>Graphic Design</li>
              <li>Front-End Development</li>
              <li>WordPress Development</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 flex items-center">
              Made with <Heart size={16} className="text-red-500 mx-2" /> by Zahoor Ahmed
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
              <button
                onClick={scrollToTop}
                className="p-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;