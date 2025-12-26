"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/extra", label: "extra" },
  { href: "/contact", label: "contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between mx-auto px-4">
        <Link href="/" className="font-mono text-primary hover:text-primary/80 transition-colors">
          <span className="text-muted-foreground">cim@portfolio</span>
          <span className="text-primary">:~$</span>
        </Link>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 font-mono text-sm transition-colors hover:text-primary ${
                pathname === item.href
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground"
              }`}
            >
              ./{item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
