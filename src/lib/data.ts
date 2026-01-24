import type { Icon } from "lucide-react";
import { Mail, Phone, Linkedin } from "lucide-react";

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export type Contact = {
  typeOfContact: 'email' | 'phone' | 'linkedin';
  value: string;
  link: string;
  icon: Icon;
};


export const personalData = {
  name: 'Ayush Ipar',
  title: 'Software Engineer & Google Developer Expert - Firebase',
  summary: 'A passionate Software Engineer with experience in building robust and scalable web applications. Expertise in Java, JavaScript, and cloud technologies, with a strong focus on the Firebase ecosystem.',
};

export const contacts: Contact[] = [
    { typeOfContact: 'email', value: 'IPARAYUSH@gmail.com', link: 'mailto:IPARAYUSH@gmail.com', icon: Mail },
    { typeOfContact: 'phone', value: '7020578889', link: 'tel:+917020578889', icon: Phone },
    { typeOfContact: 'linkedin', value: 'iparayush', link: 'https://www.linkedin.com/in/iparayush/', icon: Linkedin },
];

export const experiences: Experience[] = [
  {
    company: 'Addepar',
    role: 'Software Engineer 2',
    period: 'July 2024 - Present',
    description: 'Developing and maintaining high-quality software solutions in the fintech domain, contributing to a platform that manages complex financial portfolios.'
  },
  {
    company: 'Bajaj Finserv Health Ltd',
    role: 'Software Development Engineer',
    period: 'August 2022 - June 2024',
    description: 'Contributed to the development of health-tech products, focusing on backend services and application logic to improve healthcare accessibility.'
  },
  {
    company: 'Bajaj Finserv Health Ltd',
    role: 'Associate Software Development Engineer',
    period: 'August 2021 - September 2022',
    description: 'Began my professional journey by learning and applying software development principles in a real-world environment, contributing to various modules of the application.'
  }
];

export const technologies: string[] = [
  'Java', 
  'JavaScript', 
  'React', 
  'Python', 
  'Firebase', 
  'Next.js', 
  'Tailwind CSS', 
  'Node.js'
];
