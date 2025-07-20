import React from 'react';
import { Service } from '../types';
import { Palette, Layout, Code, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'UI/UX Design',
      description: 'Crafting seamless and engaging interfaces that provide exceptional user experiences.',
      icon: 'layout'
    },
    {
      title: 'Graphic Design',
      description: 'Creating stunning posters, banners, and branding assets that capture attention.',
      icon: 'palette'
    },
    {
      title: 'Front-End Development',
      description: 'Building responsive websites with modern HTML, CSS, and JavaScript technologies.',
      icon: 'code'
    },
    {
      title: 'WordPress Development',
      description: 'Developing custom WordPress solutions tailored to your business needs.',
      icon: 'globe'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'layout':
        return <Layout size={48} />;
      case 'palette':
        return <Palette size={48} />;
      case 'code':
        return <Code size={48} />;
      case 'globe':
        return <Globe size={48} />;
      default:
        return <Layout size={48} />;
    }
  };

  const getGradient = (index: number) => {
    const gradients = [
      'from-indigo-500 to-purple-600',
      'from-cyan-500 to-blue-600',
      'from-amber-500 to-orange-600',
      'from-emerald-500 to-teal-600'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Services I Offer
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional services to help bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(index)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-8 text-center">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${getGradient(index)} text-white rounded-full mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(service.icon)}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Learn More Button */}
                <div className="mt-6">
                  <button className={`inline-flex items-center text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${getGradient(index)} hover:underline transition-all duration-200`}>
                    Learn More →
                  </button>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full opacity-20"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-slate-100 dark:bg-slate-700 rounded-full opacity-20"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Let's work together to create something amazing. I'm here to help bring your ideas to life.
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-slate-50 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;