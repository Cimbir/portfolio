"use client";

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
import { GITHUB_URL} from '@/constants'

enum ProjectStatus {
  ACTIVE = "active",
  FINISHED = "finished",
  TO_BE_CONTINUED = "to be continued",
}

const projectSections = [
  {
    field: "swd",
    projects: [      
      {
        title: "API Scoring App",
        description:
          "A lightweight application that takes an OpenAPI (v3.x) spec (in YAML or JSON), evaluates its structure and content against industry best practices, and produces a comprehensive scorecard (0–100) with actionable feedback.",
        tags: ["Java", "Spring Boot", "Open API spec"],
        liveUrl: "#",
        githubUrl: "https://github.com/Cimbir/API-Scoring-App",
        status: ProjectStatus.FINISHED,
      },
      {
        title: "LogC",
        description:
          "A blogging website for me to upload some stuff",
        tags: ["Go", "Fiber", "SQLite"],
        liveUrl: "#",
        githubUrl: "https://github.com/Cimbir/LogC",
        status: ProjectStatus.TO_BE_CONTINUED,
      },
    ]
  },
  {
    field: "ml",
    projects: [
      {
        title: "Store Sales Forecasting",
        description:
          "Multiple time series model implementation and training in pytorch for kaggle competition: Walmart Recruiting - Store Sales Forecasting",
        tags: ["Python", "PyTorch", "Time Series"],
        liveUrl: "#",
        githubUrl: "https://github.com/Cimbir/Store-Sales-Forecasting",
        status: ProjectStatus.FINISHED,
      },
      {
        title: "Style-NN",
        description:
          "Style-NN is an implementation of neural style transfer paper, allowing you to blend the artistic style of one image with the content of another using deep learning.",
        tags: ["Python", "PyTorch", "Deep Learning"],
        liveUrl: "#",
        githubUrl: "https://github.com/Cimbir/Style-NN",
        status: ProjectStatus.FINISHED,
      },
    ]
  },
  {
    field: "for_fun",
    projects: [
      {
        title: "RISC-V Emulator",
        description:
          "A simple emulator for RISC-V assembly written in C++",
        tags: ["C++", "RISC-V", "Emulator"],
        liveUrl: "#",
        githubUrl: "https://github.com/Cimbir/RISC-V-Emulator",
        status: ProjectStatus.FINISHED,
      },
      {
        title: "Simple Graphics Engine",
        description:
          "Simple graphics engine using linear algebra implemented in C++ using SFML",
        tags: ["C++", "SFML", "Graphics"],
        liveUrl: "#",
        githubUrl: "https://github.com/Cimbir/Simple-Graphics-Engine",
        status: ProjectStatus.FINISHED,
      },
    ]
  },
];

const HEADER_OFFSET = 80;

export default function ProjectsPage() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case ProjectStatus.ACTIVE:
      case "active":
        return "default";
      case ProjectStatus.FINISHED:
      case "finished":
        return "secondary";
      case ProjectStatus.TO_BE_CONTINUED:
      case "to be continued":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <span className="text-primary font-mono">$ ls -la</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            ~/projects/
          </h1>
        </div>

        {/* Quick Navigation */}
        <div className="mb-8 p-4 border border-primary/20 bg-background/50">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-primary">$ cd</span>{" "}
            <span className="blink">_</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {projectSections.map((section) => (
              <Button
                key={section.field}
                variant="outline"
                size="sm"
                className="font-mono"
                onClick={() => scrollToSection(section.field)}
              >
                ./{section.field}/
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {projectSections.map((section) => (
            <div key={section.field} id={section.field} className="space-y-6">
              <div className="border-l-4 border-primary pl-4">
                <h2 className="text-2xl font-bold font-mono text-primary">
                  ./{section.field}/
                </h2>
                <p className="text-muted-foreground font-mono text-sm">
                  drwxr-xr-x {section.projects.length} projects
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {section.projects.map((project) => (
                  <Card key={`${section.field}-${project.title}`} className="border-primary/20 flex flex-col">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary font-mono text-sm">-rw-r--r--</span>
                        <Badge
                          variant={getStatusVariant(project.status)}
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
                      {project.liveUrl !== "#" && (
                        <Button size="sm" className="font-mono" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            $ ./run
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
              {/* View More Button */}
              <div className="flex justify-end pt-2">
                <Button
                  variant="ghost"
                  className="font-mono"
                  asChild
                >
                  <a
                    href={`${GITHUB_URL}?tab=repositories`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View more on GitHub &rarr;
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}