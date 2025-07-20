import React from 'react';
import { Project } from '../types';
import { ExternalLink, Smartphone, Monitor, Music, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Food App UI/UX Design',
      description: 'Modern and intuitive mobile app interface design with smooth user experience.',
      category: 'UI/UX Design',
      link: 'https://www.behance.net/gallery/200579551/Food-App-Design',
      image: '/assets/App Design.png'
    },
    {
      title: 'Doctor Appointment Website',
      description: 'Complete website design focusing on user experience and modern aesthetics.',
      category: 'UI/UX Design',
      link: 'https://www.behance.net/gallery/199970395/Happy-Smile-Website-Design-For-Doctor-Appointment',
      image: '/assets/Home.png'
    },
    {
      title: 'Fitness Dashboard',
      description: 'Responsive Fitness Dashboard built with modern web design.',
      category: 'UI/UX Design',
      link: 'https://www.behance.net/gallery/198332585/Fitness-DashBoard',
      image: '/assets/Overview.png'
    },
    {
      title: 'Gaming Website',
      description: 'Gaming website UI/UX design with engaging visuals and smooth navigation.',
      category: 'UI/UX Design',
      link: 'https://www.behance.net/gallery/230760591/Gaming?share=1',
      image: '/assets/Gaming.png'
    },
    {
      title: 'Ecommerce',
      description: 'UI/UX design for a Ecommerce Website with search and categorization features.',
      category: 'UI/UX Design',
      link: 'https://www.behance.net/gallery/198265511/E-commerce',
      image: '/assets/2.png'
    },
    {
      title: 'Chocolate Day Design',
      description: 'Creative UI/UX design for a special Chocolate Day celebration platform.',
      category: 'UI/UX Design',
      link: 'https://www.behance.net/gallery/229826639/Happy-Chocolate-Day',
      image: '/assets/1.png'
    }
  ];

  const getIcon = (title: string) => {
    if (title.includes('Mobile')) return <Smartphone size={24} />;
    if (title.includes('Music')) return <Music size={24} />;
    return <Monitor size={24} />;
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of my latest work in UI/UX design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group border-2 border-purple-500 bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {getIcon(project.title)}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Explore More Designs
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Check out my full portfolio on Behance and GitHub.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.behance.net/yourbehanceprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  <ExternalLink size={20} className="mr-2" />
                  View on Behance
                </a>

                <a
                  href="https://github.com/yourgithubprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  <Github size={20} className="mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
