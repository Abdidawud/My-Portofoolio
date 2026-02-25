export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
}

export interface MainData {
  name: string;
  occupation: string;
  description: string;
  image: string;
  bio: string;
  contactmessage: string;
  email: string;
  phone: string;
  address: Address;
  website: string;
  resumedownload: string;
  social: Social[];
}

export interface Education {
  school: string;
  degree: string;
  graduated: string;
}

export interface Work {
  company: string;
  title: string;
  years: string;
  description: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
  url: string;
  githubLink?: string;
}

export interface Testimonial {
  text: string;
  user: string;
  role: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface PortfolioData {
  main: MainData;
  resume: {
    skillmessage: string;
    education: Education[];
    work: Work[];
    skills: SkillCategory[];
  };
  portfolio: {
    projects: Project[];
  };
  testimonials: Testimonial[];
  stats: Stat[];
}
