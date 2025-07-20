import React, { useState } from 'react';
import { ContactForm } from '../types';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_iatai4l',     // Your service ID
        'template_w3fjxjo',    // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'n04UF7IbGu3RvjBYI'     // Your public key
      );

      alert('Message sent successfully! I\'ll get back to you soon.');
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again later.');
    }

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ready to start your next project? Let's work together to create something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                I'm always excited to discuss new opportunities and creative projects.
                Whether you have a specific project in mind or just want to chat about design and development,
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Email</p>
                  <p className="text-slate-600 dark:text-slate-400">za0389188@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Phone</p>
                  <p className="text-slate-600 dark:text-slate-400">+92 301 0822243</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Location</p>
                  <p className="text-slate-600 dark:text-slate-400">Jamshoro, Pakistan</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/zahoor-ahmed-410944232/" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/ZahoorAhmed008" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-300">
                  <Github size={20} />
                </a>
                <a href="https://www.behance.net/zahoorahmed22" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 text-slate-900 dark:text-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 text-slate-900 dark:text-white"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 text-slate-900 dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
