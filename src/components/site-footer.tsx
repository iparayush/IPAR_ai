import { contacts, personalData } from "@/lib/data";
import Link from "next/link";
import { Button } from "./ui/button";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {contacts.map((contact) => (
            <Button key={contact.typeOfContact} variant="ghost" size="icon" asChild>
              <Link href={contact.link} target="_blank" rel="noopener noreferrer" aria-label={contact.value}>
                <contact.icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
