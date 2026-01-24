'use client';

import { useContacts } from '@/hooks/use-contacts';
import { Skeleton } from './ui/skeleton';
import { Mail, Phone } from 'lucide-react';

export function ContactSection() {
  const { contacts, loading, error } = useContacts();

  const emailContact = contacts.find(c => c.typeOfContact === 'email');
  const phoneContact = contacts.find(c => c.typeOfContact === 'phone');

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-slate-900/50">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        {loading && (
          <div className="flex flex-col items-center gap-4">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-8 w-48" />
          </div>
        )}
        {error && <p className="text-red-500">Could not load contact information.</p>}
        {!loading && !error && (
          <div className="flex flex-col items-center gap-4 text-lg">
            {emailContact && (
              <a href={emailContact.link} className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <Mail className="h-6 w-6" />
                <span>{emailContact.value}</span>
              </a>
            )}
            {phoneContact && (
              <a href={phoneContact.link} className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <Phone className="h-6 w-6" />
                <span>{phoneContact.value}</span>
              </a>
            )}
            {!emailContact && !phoneContact && <p>Contact information will be displayed here.</p>}
          </div>
        )}
      </div>
    </section>
  );
}
