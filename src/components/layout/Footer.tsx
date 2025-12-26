export function Footer() {
  return (
    <footer className="w-full py-6 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-sm">
          <p className="text-muted-foreground">
            <span className="text-primary">$</span> echo &quot;© {new Date().getFullYear()} Dachi S.&quot;
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Cimbir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              [github]
            </a>
            <a
              href="https://www.linkedin.com/in/dachi-suramelashvili-77042b305/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              [linkedin]
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
