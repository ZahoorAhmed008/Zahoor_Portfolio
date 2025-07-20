import React from 'react';
import { Download, Mail, MapPin, GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="flex flex-col space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-100 to-cyan-100 dark:from-indigo-900 dark:to-cyan-900 rounded-2xl p-8 text-center">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
                <div className="w-32 h-32 mx-auto mb-6 relative overflow-hidden rounded-full shadow-lg">
                  <img 
                    src="/assets/Zahoor.png" 
                    alt="Zahoor Ahmed" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Zahoor Ahmed
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  UI/UX Designer & Developer
                </p>
                <div className="mt-6 flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-cyan-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-amber-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-indigo-600 rounded-lg opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-cyan-600 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Zahoor Ahmed</span>, 
              a creative and passionate designer & developer from Pakistan. I specialize in UI/UX Design, 
              Graphic Design, and Front-End Development.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Currently, I'm pursuing BE Software Engineering at MUET Jamshoro and leading as Director 
              of Graphic Design at the Software Engineering Society. I'm passionate about creating 
              digital experiences that are both beautiful and functional.
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="text-indigo-600 dark:text-indigo-400" size={24} />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Education</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">BE Software Engineering</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-indigo-600 dark:text-indigo-400" size={24} />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Location</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Pakistan</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Award className="text-indigo-600 dark:text-indigo-400" size={24} />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Role</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Director of Graphic Design</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="text-indigo-600 dark:text-indigo-400" size={24} />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Organization</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Software Engineering Society</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                <Download size={20} className="mr-2" />
                <a
                  href="/assets/Zahoor_Ahmed_CV.pdf"
                  download="Zahoor_Ahmed_CV.pdf"
                  className="flex items-center text-white"
                >
                  Download CV
                </a>
              </button>

              <button
                onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=za0389188@gmail.com&su=Project Inquiry&body=Hello Zahoor, I want to hire you.', '_blank')}
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                <Mail size={20} className="mr-2" />
                Contact Me
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
