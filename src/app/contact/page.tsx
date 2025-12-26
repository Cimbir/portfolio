"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "dachis@outlook.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <span className="text-primary font-mono">$ cat</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            ~/contact.txt
          </h1>
        </div>

        <div className="grid gap-6 max-w-4xl">
          {/* Primary Contact */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary font-mono">
                {">"} echo $CONTACT_INFO
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div 
                  onClick={copyEmail}                
                  className="border border-primary/30 p-4 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 border border-primary flex items-center justify-center">
                      <span className="text-primary text-xs font-mono">@</span>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">EMAIL</span>
                  </div>
                  $ {email}
                  {emailCopied && (
                    <span className="ml-2 text-xs text-green-500">copied!</span>
                  )}
                </div>

                <div className="border border-muted p-4 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 border border-muted flex items-center justify-center">
                      <span className="text-muted-foreground text-xs font-mono">📍</span>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">LOCATION</span>
                  </div>
                  <span className="font-mono text-foreground">Tbilisi, Georgia</span>
                </div>

                <div className="border border-muted p-4 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 border border-muted flex items-center justify-center">
                      <span className="text-muted-foreground text-xs font-mono">⏰</span>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">TIMEZONE</span>
                  </div>
                  <span className="font-mono text-foreground">UTC+4 (GET)</span>
                </div>

                <div className="border border-muted p-4 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 border border-muted flex items-center justify-center">
                      <span className="text-muted-foreground text-xs font-mono">🌐</span>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">LANGUAGE</span>
                  </div>
                  <span className="font-mono text-green-500">English, Georgian</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="font-mono" asChild>
                  <a href="mailto:dachis@outlook.com">$ mail --compose</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary font-mono">
                {">"} ls -la ~/.social/
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    name: "github",
                    url: "https://github.com/yourusername",
                    description: "drwxr-xr-x  repositories & contributions",
                  },
                  {
                    name: "linkedin", 
                    url: "https://linkedin.com/in/yourusername",
                    description: "drwxr-xr-x  professional network",
                  },
                ].map((social) => (
                  <div
                    key={social.name}
                    className="flex items-center justify-between border border-muted p-3 hover:border-primary/50 transition-colors"
                  >
                    <div className="font-mono text-sm">
                      <span className="text-muted-foreground">{social.description}</span>
                      <span className="ml-4 text-primary">{social.name}/</span>
                    </div>
                    <Button variant="outline" size="sm" className="font-mono" asChild>
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        $ open
                      </a>
                    </Button>
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