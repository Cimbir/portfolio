import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "project-one",
    description:
      "A full-stack web application built with Next.js and a modern backend. Features include user authentication, real-time updates, and responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    status: "active",
  },
  {
    title: "project-two",
    description:
      "An e-commerce platform with payment integration, inventory management, and an admin dashboard for managing products and orders.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    status: "active",
  },
  {
    title: "project-three",
    description:
      "A mobile-first progressive web app for task management with offline support, push notifications, and cloud sync capabilities.",
    tags: ["React", "PWA", "Firebase", "Service Workers"],
    liveUrl: "#",
    githubUrl: "#",
    status: "completed",
  },
  {
    title: "cli-tool",
    description:
      "A command-line tool for automating development workflows, including scaffolding, testing, and deployment processes.",
    tags: ["Node.js", "CLI", "Bash", "npm"],
    liveUrl: "#",
    githubUrl: "#",
    status: "archived",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <span className="text-primary font-mono">$ ls -la</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            ~/projects/
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
          {projects.map((project) => (
            <Card key={project.title} className="border-primary/20 flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary font-mono text-sm">drwxr-xr-x</span>
                  <Badge
                    variant={project.status === "active" ? "default" : "secondary"}
                    className="font-mono text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="font-mono text-xl">
                  ./{project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-primary/30 px-2 py-1 text-xs font-mono text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm" className="font-mono" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    $ git clone
                  </a>
                </Button>
                <Button size="sm" className="font-mono" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    $ ./run
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
