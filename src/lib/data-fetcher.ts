
import { cache } from 'react';
import { getDatabase, ref, get } from "firebase/database";
import { app } from "@/lib/firebase";
import { personalData as staticPersonalData } from "@/lib/data";
import { Mail, Phone } from 'lucide-react';
// import { LinkedinIcon } from '@/components/icons/linkedin-icon';
// import type { Contact } from '@/lib/types';


const iconMap = {
 email: Mail,
 phone: Phone,
//  linkedin: LinkedinIcon,
};


export const getPersonalData = cache(async () => {
   const db = getDatabase(app);


   const userRef = ref(db, 'user');
   try {
       const snapshot = await get(userRef);


       if (snapshot.exists()) {
           const dbUser = snapshot.val();
          
           // Create a new contacts array from the fetched data
           const newContacts: Contact[] = [];


           if (dbUser.email) {
               newContacts.push({
                   type: 'email',
                   value: dbUser.email,
                   href: `mailto:${dbUser.email}`,
                   icon: Mail,
                   typeOfContact: 'email'
               });
           }
           if (dbUser.phone) {
               newContacts.push({
                   type: 'phone',
                   value: dbUser.phone,
                   href: `tel:${dbUser.phone}`,
                   icon: Phone,
                   typeOfContact: 'phone'
               });
           }


           // Keep the linkedin from static data if it exists
           const linkedinContact = staticPersonalData.contacts.find(c => c.type === 'linkedin');
           if (linkedinContact) {
               newContacts.push(linkedinContact);
           }


           return {
               ...staticPersonalData,
               name: dbUser.name || staticPersonalData.name,
               contacts: newContacts.length > 0 ? newContacts : staticPersonalData.contacts,
            };
       }
   } catch (error) {
       console.error("Firebase fetch error:", error);
   }
   return staticPersonalData; // Fallback to static data
});
