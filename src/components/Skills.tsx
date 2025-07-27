import React from 'react';
import { Skill } from '../types';
import { Palette, Monitor, Code, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      category: 'Design Tools',
      skills: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator']
    },
    {
      category: 'UI/UX',
      skills: ['Wireframing', 'Prototyping', 'User Research']
    },
    {
      category: 'Front-End Dev',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
    },
    {
      category: 'Other Skills',
      skills: ['WordPress Development', 'Graphic Design', 'Flutter Developer']
    }
  ];

  const getIcon = (category: string) => {
    switch (category) {
      case 'Design Tools':
        return <Palette className="text-indigo-600 dark:text-indigo-400" size={32} />;
      case 'UI/UX':
        return <Monitor className="text-cyan-600 dark:text-cyan-400" size={32} />;
      case 'Front-End Dev':
        return <Code className="text-amber-600 dark:text-amber-400" size={32} />;
      case 'Other Skills':
        return <Globe className="text-emerald-600 dark:text-emerald-400" size={32} />;
      default:
        return <Code className="text-indigo-600 dark:text-indigo-400" size={32} />;
    }
  };

  const getGradient = (category: string) => {
    switch (category) {
      case 'Design Tools':
        return 'from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20';
      case 'UI/UX':
        return 'from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20';
      case 'Front-End Dev':
        return 'from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20';
      case 'Other Skills':
        return 'from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20';
      default:
        return 'from-slate-50 to-slate-100 dark:from-slate-800/20 dark:to-slate-700/20';
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and design expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className={`bg-gradient-to-br ${getGradient(skillGroup.category)} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-slate-800 rounded-full shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="space-y-3">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="bg-white dark:bg-slate-700 px-4 py-2 rounded-lg shadow-sm text-center font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors duration-200"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              50+
            </div>
            <div className="text-slate-600 dark:text-slate-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
              3+
            </div>
            <div className="text-slate-600 dark:text-slate-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
              25+
            </div>
            <div className="text-slate-600 dark:text-slate-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              3
            </div>
            <div className="text-slate-600 dark:text-slate-400">Certificates</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;