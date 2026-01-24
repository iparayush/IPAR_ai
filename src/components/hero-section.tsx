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
        <div className="flex justify-center mb-8">
          <Avatar className="h-32 w-32 border-4 border-secondary shadow-lg">
            {avatarImage && 
              <AvatarImage src={avatarImage.imageUrl} alt={personalData.name} data-ai-hint={avatarImage.imageHint} />
            }
            <AvatarFallback className="text-4xl font-headline">{personalData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
          Hi, I'm {personalData.name}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-primary font-semibold font-headline">
          {personalData.title}
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          {personalData.summary}
        </p>
        <div id="contact" className="mt-8 flex justify-center items-center gap-4">
          {contacts.map((contact) => (
             <Button key={contact.typeOfContact} variant="outline" asChild>
                <Link href={contact.link} target="_blank" rel="noopener noreferrer">
                  <contact.icon className="mr-2 h-4 w-4" />
                  {contact.typeOfContact.charAt(0).toUpperCase() + contact.typeOfContact.slice(1)}
                </Link>
             </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
