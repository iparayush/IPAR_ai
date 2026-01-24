'use client';

import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export type Contact = {
  typeOfContact: string;
  value: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
};

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  email: Mail,
  phone: Phone,
  linkedin: Linkedin,
  github: Github,
};

export function useContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const docRef = doc(db, 'users', 'main-user');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const fetchedContacts: Contact[] = [];
          
          if (data.email) {
            fetchedContacts.push({
              typeOfContact: 'email',
              value: data.email,
              link: `mailto:${data.email}`,
              icon: iconMap.email,
            });
          }
          if (data.phone) {
            fetchedContacts.push({
              typeOfContact: 'phone',
              value: data.phone,
              link: `tel:${data.phone}`,
              icon: iconMap.phone,
            });
          }
           if (data.linkedin) {
            fetchedContacts.push({
              typeOfContact: 'linkedin',
              value: 'LinkedIn',
              link: data.linkedin,
              icon: iconMap.linkedin,
            });
          }
           if (data.github) {
            fetchedContacts.push({
              typeOfContact: 'github',
              value: 'GitHub',
              link: data.github,
              icon: iconMap.github,
            });
          }

          setContacts(fetchedContacts);
        } else {
          console.log("No such document in Firestore! Please create it.");
          setError(new Error("Contact information not found."));
        }
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return { contacts, loading, error };
}
