'use client';
import { personalData } from "@/lib/data";
import Link from "next/link";
import { Button } from "./ui/button";
import { useContacts } from "@/hooks/use-contacts";
import { Skeleton } from "./ui/skeleton";
import { useState, useEffect } from "react";

export function SiteFooter() {
  const { contacts, loading, error } = useContacts();
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {year} {personalData.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {loading && (
            <>
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
            </>
          )}
          {error && <p className="text-xs text-red-500">.</p>}
          {!loading && !error && contacts.map((contact) => (
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
