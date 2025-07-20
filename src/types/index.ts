export interface Skill {
  category: string;
  skills: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  category: string;
  link?: string;
   image: string;
}

export interface Certificate {
  title: string;
  organization: string;
  year: string;
   image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}