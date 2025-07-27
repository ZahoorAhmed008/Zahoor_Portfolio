import React from 'react';
import { BlogPost } from '../types';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: 'Best UI/UX Trends in 2025',
      excerpt: 'Explore the latest design trends that are shaping user experiences in 2025, from AI-driven interfaces to sustainable design practices.',
      date: 'March 15, 2025',
      readTime: '5 min read',
      link: 'https://zahoordesign.hashnode.dev/best-uiux-trends-in-2025'
    },
    {
      title: 'Modern Front-End Development Practices',
      excerpt: 'A comprehensive guide to modern front-end development, covering the latest frameworks, tools, and best practices for building scalable web applications.',
      date: 'March 10, 2025',
      readTime: '8 min read',
      link: 'https://zahoordesign.hashnode.dev/best-uiux-trends-in-5'
    },
    {
      title: 'The Psychology of Color in Web Design',
      excerpt: 'Understanding how color psychology impacts user behavior and how to use it effectively in your web design projects.',
      date: 'March 5, 2025',
      readTime: '6 min read',
      link: 'https://zahoordesign.hashnode.dev/best-uiux-trends-in-5'
    }
  ];

  const getGradient = (index: number) => {
    const gradients = [
      'from-indigo-500 to-purple-600',
      'from-cyan-500 to-blue-600',
      'from-amber-500 to-orange-600'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Insights and thoughts on design, development, and career tips from my journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              {/* Featured Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${getGradient(index)} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white text-sm">
                    <Calendar size={16} className="mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock size={16} className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                {post.link ? (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-all duration-200 group"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                ) : (
                  <button className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-all duration-200 group">
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Blog CTA */}
        <div className="mt-16 text-center">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Want to Read More?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
              I regularly share insights about design, development, and career growth.
              Follow me for the latest updates and tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300">
                View All Posts
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white font-semibold rounded-lg transition-all duration-300">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
