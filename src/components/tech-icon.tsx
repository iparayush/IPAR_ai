import React from 'react';
import { JavaIcon } from './icons/java-icon';
import { JavascriptIcon } from './icons/javascript-icon';
import { ReactIcon } from './icons/react-icon';
import { PythonIcon } from './icons/python-icon';
import { FirebaseIcon } from './icons/firebase-icon';
import { NextjsIcon } from './icons/nextjs-icon';
import { TailwindcssIcon } from './icons/tailwindcss-icon';
import { NodejsIcon } from './icons/nodejs-icon';

type TechIconProps = {
  name: string;
};

export function TechIcon({ name }: TechIconProps) {
  const iconProps = { className: "h-10 w-10 text-muted-foreground group-hover:text-foreground transition-colors" };
  
  switch (name.toLowerCase()) {
    case 'java':
      return <JavaIcon {...iconProps} />;
    case 'javascript':
      return <JavascriptIcon {...iconProps} />;
    case 'react':
      return <ReactIcon {...iconProps} />;
    case 'python':
      return <PythonIcon {...iconProps} />;
    case 'firebase':
      return <FirebaseIcon {...iconProps} />;
    case 'next.js':
      return <NextjsIcon {...iconProps} />;
    case 'tailwind css':
      return <TailwindcssIcon {...iconProps} />;
    case 'node.js':
      return <NodejsIcon {...iconProps} />;
    default:
      return null;
  }
}
