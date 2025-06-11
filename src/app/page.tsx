import ExperienceSection from "@app/components/ExperineceSection";
import SkillsSection from "@app/components/SkillsSection";
import TerminalHeader from "@app/components/TerminalHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TerminalHeader />

      <main>
        <SkillsSection />
        <ExperienceSection />
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="terminal-border rounded-lg p-6 bg-card/30">
            <h3 className="text-xl font-semibold terminal-glow mb-4">
              {">"} Ready to collaborate?
            </h3>
            <p className="text-muted-foreground mb-6">
              {`Let's build something amazing together`}
            </p>
            <nav
              className="flex flex-col sm:flex-row gap-4 justify-center"
              aria-label="Contact links"
            >
              <a
                href="mailto:rezaheydari.dev@gmail.com"
                className="terminal-border px-6 py-3 bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Send email"
              >
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/reza-heydarii"
                className="terminal-border px-6 py-3 hover:bg-card transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/RezaHeydarii"
                className="terminal-border px-6 py-3 hover:bg-card transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                GitHub
              </a>
            </nav>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>{">"} © 2025 Reza Heydari Portfolio</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
