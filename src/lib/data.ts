import type { Icon } from "lucide-react";
import { Mail, Linkedin, Github } from "lucide-react";

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export type Contact = {
  typeOfContact: 'email' | 'linkedin' | 'github';
  value: string;
  link: string;
  icon: Icon;
};


export const personalData = {
  name: 'Ayush Ipar',
  title: 'Software Engineer & Google Developer Expert - Firebase',
  summary: 'I am a passionate Software Engineer with a knack for building robust and scalable web applications. I have a strong foundation in Java and JavaScript, and I am a Google Developer Expert for Firebase.',
};

export const contacts: Contact[] = [
    { typeOfContact: 'email', value: 'IPARAYUSH@gmail.com', link: 'mailto:IPARAYUSH@gmail.com', icon: Mail },
    { typeOfContact: 'github', value: 'iparayush', link: 'https://github.com/iparayush', icon: Github },
    { typeOfContact: 'linkedin', value: 'iparayush', link: 'https://www.linkedin.com/in/iparayush/', icon: Linkedin },
];

export const experiences: Experience[] = [
  {
    company: 'Addepar',
    role: 'Software Engineer',
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
