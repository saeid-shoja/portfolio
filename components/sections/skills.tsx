"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "../animations";
import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 95 },
      { name: "React", level: 95 },
      { name: "Next.js (CSR/SSR)", level: 95 },
      { name: "HTML5 / CSS3", level: 90 },
    ],
  },
  {
    title: "Styling",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "Sass / SCSS", level: 90 },
      { name: "Styled Components", level: 85 },
      { name: "Ant Design", level: 85 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "Zustand", level: 90 },
      { name: "Redux", level: 90 },
      { name: "Jotai", level: 85 },
      { name: "React Query", level: 90 },
      { name: "Context API", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Fastify / Express", level: 80 },
      { name: "NestJS", level: 70 },
      { name: "Prisma", level: 80 },
      { name: "PostgreSQL / MongoDB", level: 75 },
    ],
  },
  {
    title: "Testing & Tools",
    skills: [
      { name: "Jest", level: 80 },
      { name: "Playwright", level: 75 },
      { name: "React Testing Library", level: 80 },
      { name: "Storybook", level: 85 },
      { name: "Docker", level: 70 },
    ],
  },
  {
    title: "Architecture",
    skills: [
      { name: "Turborepo", level: 85 },
      { name: "Monorepo", level: 85 },
      { name: "Micro-frontend", level: 80 },
      { name: "GraphQL", level: 75 },
      { name: "AI Integrations", level: 80 },
    ],
  },
];

const softSkills = [
  "Team mentoring & code review",
  "Cross-functional collaboration",
  "Conflict resolution & constructive feedback",
  "Agile delivery (Scrum/Kanban)",
];

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/30 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="mb-12 text-3xl font-bold text-foreground">Skills</h2>
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50">
                <h3 className="mb-4 text-lg font-medium text-primary">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.5}>
          <div className="mt-12 rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 text-lg font-medium text-primary">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-primary/10 px-4 py-2 text-sm text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6">
            <h3 className="mb-2 text-lg font-medium text-foreground">Performance Highlights</h3>
            <p className="text-muted-foreground">
              Reduced bundle size by <span className="font-semibold text-primary">+30%</span> through code splitting and lazy loading.
              Improved Lighthouse scores from <span className="font-semibold text-primary">65 to 94</span>.
              Experienced in AI-integrated features and real-time dashboards.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
