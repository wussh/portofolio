export interface Experience {
  id: string;
  title: string;
  company: string;
  type: string;
  technologies: string[];
  achievements: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
  gpa?: string;
  coursework?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  goals: string[];
  challenges: string[];
  solution: string[];
  results: string[];
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  about: string;
}
