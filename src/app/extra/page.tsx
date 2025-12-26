import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ExtraPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <span className="text-primary font-mono">$ cat</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            ~/extra.md
          </h1>
        </div>

        <div className="grid gap-6 max-w-4xl">
          {/* Achievements Section */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary font-mono">
                {">"} cat achievements.log
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-primary font-mono">2024 Dec</p>
                  <h3 className="font-semibold">Open Southern Caucasus Championship</h3>
                  <p className="text-muted-foreground text-sm">Certificate of High Achievement (Personal Competition) + Certificate of Achievement (Team Competition)</p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <p className="text-sm text-muted-foreground font-mono">2023 Dec</p>
                  <h3 className="font-semibold">Regional ICPC programming competition</h3>
                  <p className="text-muted-foreground text-sm">7th place</p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <p className="text-sm text-muted-foreground font-mono">2022 - present</p>
                  <h3 className="font-semibold">Leetcode</h3>
                  <p className="text-muted-foreground text-sm">800+ problems solved</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interests */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary font-mono">
                {">"} cat interests.txt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Hiking",
                  "Crocheting",
                  "Maths",
                ].map((interest) => (
                  <div
                    key={interest}
                    className="border border-muted px-3 py-2 text-sm font-mono hover:border-primary/50 transition-colors"
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fun Facts */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary font-mono">
                {">"} fortune
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-mono text-sm space-y-3 text-muted-foreground">
                <p className="border-l-2 border-primary pl-4">
                  &quot;Where is the kid?&quot; - Vasilich, "What you love the most"
                </p>
                <p className="border-l-2 border-muted pl-4">
                  Preferred OS: <span className="text-primary">Linux</span> (but slowly turning to macOS)
                </p>
                <p className="border-l-2 border-muted pl-4">
                  Favorite game genres: <span className="text-primary">Rogue-like, Souls-like</span>
                </p>
                <p className="border-l-2 border-muted pl-4">
                  Crocheting hot take: <span className="text-primary">Following the pattern is overrated</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Downloads/Resume */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary font-mono">
                {">"} ls downloads/
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between border border-muted p-3 hover:border-primary/50 transition-colors">
                  <div className="font-mono text-sm">
                    <span className="text-muted-foreground">-rw-r--r--</span>
                    <span className="ml-4">resume.pdf</span>
                  </div>
                  <Button variant="outline" size="sm" className="font-mono" asChild>
                    <a href="#" download>$ wget</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
