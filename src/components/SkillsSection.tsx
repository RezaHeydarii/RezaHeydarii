import { Code, Database, Smartphone, Brain } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Code,
      technologies: ["React", "Next.js", "Vue.js", "TypeScript"],
      years: "6+",
    },
    {
      category: "Mobile",
      icon: Smartphone,
      technologies: ["React Native", "iOS", "Android", "New RN Architecture"],
      years: "6+",
    },
    {
      category: "Backend",
      icon: Database,
      technologies: ["Node.js", "NestJS", "PostgreSQL", "MongoDB"],
      years: "2+",
    },
    {
      category: "AI Engineering",
      icon: Brain,
      technologies: [
        "LLM Apis like openai",
        "RAG",
        "ReAct",
        "Hugging face interferer",
      ],
      years: "1+",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            id="skills-heading"
            className="text-3xl md:text-4xl font-bold terminal-glow mb-4"
          >
            {">"} Skills & Technologies
          </h2>
          <p className="text-muted-foreground">
            Building scalable applications with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <article
              key={skill.category}
              className="terminal-border rounded-lg p-6 bg-card/30 hover:bg-card/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <skill.icon
                  className="w-8 h-8 text-primary terminal-glow"
                  aria-hidden="true"
                />
                <span className="text-sm text-primary font-semibold">
                  {skill.years}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-primary">
                {skill.category}
              </h3>

              <ul className="space-y-2">
                {skill.technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <span className="text-primary" aria-hidden="true">
                      {">"}
                    </span>
                    <span className="text-sm">{tech}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
