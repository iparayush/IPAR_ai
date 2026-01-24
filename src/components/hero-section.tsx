import { contacts, personalData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";

export function HeroSection() {
  const avatarImage = PlaceHolderImages.find(img => img.id === 'ayush-ipar-avatar');

  return (
    <section id="home" className="w-full py-20 md:py-32">
      <div className="container text-center">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="h-24 w-24 shadow-lg">
            {avatarImage && 
              <AvatarImage src={avatarImage.imageUrl} alt={personalData.name} data-ai-hint={avatarImage.imageHint} />
            }
            <AvatarFallback className="text-3xl">{personalData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter">
              {personalData.name}
            </h1>
            <p className="text-muted-foreground">
              {personalData.title}
            </p>
          </div>
          <div id="contact" className="flex justify-center items-center gap-4">
            {contacts.map((contact) => (
               <Button key={contact.typeOfContact} variant="outline" asChild>
                  <Link href={contact.link} target="_blank" rel="noopener noreferrer">
                    <contact.icon className="mr-2 h-4 w-4" />
                    {contact.typeOfContact.charAt(0).toUpperCase() + contact.typeOfContact.slice(1)}
                  </Link>
               </Button>
            ))}
          </div>
           <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            {personalData.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
