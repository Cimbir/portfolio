import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          {/* Terminal-style intro */}
          <div className="font-mono space-y-4">
            <div className="text-muted-foreground text-sm">
              <span className="text-primary">$</span> ./welcome.sh
            </div>
            
            <div className="border border-primary/30 p-6 bg-card">
              <pre className="text-primary text-xs md:text-sm mb-6 overflow-x-auto">
{`
  ██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
  ██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
  ██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  
  ██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  
  ╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
   ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
`}
              </pre>
              
              <div className="space-y-2 text-sm md:text-base">
                <p>
                  <span className="text-muted-foreground">name:</span>{" "}
                  <span className="text-foreground">&quot;Dachi Suramelashvili&quot;</span>
                </p>
                <p>
                  <span className="text-muted-foreground">role:</span>{" "}
                  <span className="text-foreground">&quot;Software Developer&quot;</span>
                </p>
                <p>
                  <span className="text-muted-foreground">experience:</span>{" "}
                  <span className="text-foreground">&quot;SW Dev, ML&quot;</span>
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Here you will be able to find out more about me and my work.
            </p>

            <div className="text-muted-foreground text-sm">
              <span className="text-primary">$ cd</span>{" "}
              <span className="blink">_</span>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <Button asChild>
                <Link href="/about">./about</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/projects">./projects</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/extra">./extra</Link>
              </Button>
              <Button variant="link" asChild>
                <Link href="/contact">./contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
