import { experiences } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 bg-background">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:content-['']">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 transition-transform hover:-translate-y-1">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-card border-2 shadow-sm">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <Card className="shadow-sm hover:shadow-md transition-shadow bg-card">
                <CardHeader>
                  <CardTitle className="text-xl">{exp.role}</CardTitle>
                  <CardDescription className="font-semibold">{exp.company} | {exp.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
