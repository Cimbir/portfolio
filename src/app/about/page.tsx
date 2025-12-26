import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <span className="text-primary font-mono">$ cat</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            ~/about.txt
          </h1>
        </div>

        <div className="grid gap-6 max-w-4xl">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary font-mono">
                {">"} whoami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a university student who is actively participating in software development projects.
                My current focus, apart from skills required for the job, is the study about ML. Also have
                experience in implementing various data structures and algorithms for complex coding problems
                which I have demonstrated during competitive programming contests.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary font-mono">
                {">"} cat experience.log
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-primary font-mono">2025 Jul - Present</p>
                  <h3 className="font-semibold">Software Developer</h3>
                  <p className="text-foreground text-sm">Theneo</p>
                  <p className="text-muted-foreground text-sm">Maintenance and improvement of product, primarily authorization and AI features</p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <p className="text-sm text-muted-foreground font-mono">2025 Feb - 2025 Dec</p>
                  <h3 className="font-semibold">Software Developer</h3>
                  <p className="text-foreground text-sm">Zerobyte</p>
                  <p className="text-muted-foreground text-sm">Assistance in designing and implementing fintech problem solutions</p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <p className="text-sm text-muted-foreground font-mono">2023 Sept - 2024 Jul</p>
                  <h3 className="font-semibold">TA for Programming Courses</h3>
                  <p className="text-foreground text-sm">Free University of Tbilisi</p>
                  <p className="text-muted-foreground text-sm">Student support, Assignment grading, Course material preparation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary font-mono">
                {">"} ls skills/
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Java(Spring Boot)",
                  "C/C++",
                  "Python",
                  "Pandas/Sklearn/Pytorch",
                  "DSA",
                  "PostgreSQL",
                  "TypeScript",
                  "MongoDB",
                  "React",
                  "Docker",
                  "Git",
                  "Linux",
                  "OS Development",
                  "Networking",
                  "OOP"
                ].map((skill) => (
                  <div
                    key={skill}
                    className="border border-primary/30 px-3 py-2 text-sm font-mono hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
