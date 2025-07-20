import React from 'react';
import { Testimonial } from '../types';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager at TechCorp',
      content: "Zahoor's designs are always clean and intuitive. His attention to detail and user-centric approach made our project a huge success. A pleasure to work with!",
      avatar: 'SJ'
    },
    {
      name: 'Ahmed Ali',
      role: 'CEO at StartupXYZ',
      content: "Working with Zahoor was an exceptional experience. His UI/UX skills and front-end development expertise helped us create a stunning website that our users love.",
      avatar: 'AA'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Marketing Director',
      content: "Zahoor delivered outstanding graphic design work for our campaign. His creativity and professionalism exceeded our expectations. Highly recommended!",
      avatar: 'MR'
    }
  ];

  const getAvatarColor = (index: number) => {
    const colors = [
      'from-indigo-500 to-purple-600',
      'from-cyan-500 to-blue-600',
      'from-amber-500 to-orange-600'
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Feedback from clients and colleagues I've had the pleasure to work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-slate-200 dark:text-slate-700">
                <Quote size={32} />
              </div>
              
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-amber-400 fill-current"
                  />
                ))}
              </div>
              
              {/* Testimonial Content */}
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${getAvatarColor(index)} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Want to work together?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              I'm always excited to take on new challenges and create amazing digital experiences. 
              Let's discuss how I can help bring your project to life.
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;