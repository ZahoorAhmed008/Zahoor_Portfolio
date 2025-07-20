import React from 'react';
import { Certificate } from '../types';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certificates: React.FC = () => {
  const certificates: Certificate[] = [
    {
      title: 'GrownIntern Internship',
      organization: 'GrownIntern',
      year: '2024',
      image: '/assets/MindLuster.png'
    },
    {
      title: 'Ui/Ux Design Internship',
      organization: 'NextGenDev',
      year: '2024',
      image: '/assets/NextGenDev.png'
    },
    {
      title: 'Ui/Ux Design Certificate',
      organization: 'CognoRIse',
      year: '2023',
      image: '/assets/CognoRise.png'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Certificates & Achievements
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional certifications and achievements that showcase my commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-r-4 hover:border-b-4 hover:border-indigo-600 dark:hover:border-indigo-400 relative"
            >
              {/* Header with Image */}
              <div
                className="h-40 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${certificate.image})` }}
              >
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Award className="text-white" size={32} />
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full font-medium">
                    {certificate.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {certificate.title}
                </h3>

                <div className="flex items-center text-slate-600 dark:text-slate-400 mb-6">
                  <Calendar size={16} className="mr-2" />
                  <span className="font-medium">{certificate.organization}</span>
                </div>

                <button className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-200 group">
                  <ExternalLink size={16} className="mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                  View Certificate
                </button>
              </div>

              <div className="absolute bottom-4 right-4 w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full opacity-10"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Continuous Learning
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            I believe in continuous improvement and staying updated with the latest technologies and design trends. 
            These certificates represent my commitment to professional growth.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">3+</div>
              <div className="text-slate-600 dark:text-slate-400">Certificates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">2+</div>
              <div className="text-slate-600 dark:text-slate-400">Internships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">1</div>
              <div className="text-slate-600 dark:text-slate-400">Leadership Role</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

