"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "../animations";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "Jun 2025 - Present",
    title: "Frontend Developer",
    company: "Radviser",
    link: 'https://radviser.com/',
    description: [
      "Developed and maintained Resume Scanner and Resume Analyzer panels",
      "Led major framework upgrades, migrating React and Next.js from v10 to v16",
      "Redesigned legacy pages and implemented new, modern UI components",
      "Collaborated on AI-integrated features for resume analysis and scoring",
      "Implemented a rich text editor for resume builder",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Sass/SCSS", "AI Integrations", "Turborepo", "Monorepo"],
  },
  {
    period: "Aug 2024 - May 2026",
    title: "Full-Stack Developer",
    company: "NEOKI (4+ Venture)",
    link: 'https://www.neoki.io/',
    description: [
      "Developed the fullstack Next.js NEXUS Admin Panel for Telegram clicky bots",
      "Contributed to multiple platforms including NEOKI, 4+ Venture, Blue Chain AI Bot, Minilauncher and Avantra",
      "Built backend services using Fastify, PostgreSQL & Prisma",
      "Worked on metaverse-related features and real-time interactive panels",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Fastify", "Prisma", "PostgreSQL", "Three.js", "Shadcn UI"],
  },
  {
    period: "Mar 2023 - Mar 2024",
    title: "Frontend Developer",
    company: "DynoTrust",
    link: 'https://www.dynotrust.com/',
    description: [
      "Developed reusable UI components using Bit.dev for cross-project consistency",
      "Improved performance and scalability using micro-frontend architecture",
      "Redesigned legacy pages and implemented new, modern UI components",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bit Cloud", "Micro-Frontend"],
  },
  {
    period: "Mar 2022 - Jan 2023",
    title: "Frontend Developer",
    company: "Humanshine",
    link: 'https://humanshine.com/',
    description: [
      "Developed and optimized HR web applications using React and TypeScript",
      "Implemented React Query for efficient server-state management and caching",
      "Contributed to SSR features and frontend testing",
    ],
    tech: ["React", "TypeScript", "Redux", "React Query", "Ant Design", "SSR"],
  },
  {
    period: "Apr 2021 - Feb 2022",
    title: "Frontend Developer",
    company: "Tetherland",
    link: 'https://tetherland.com/',
    description: [
      "Led the redesign of the user wallet interface to improve usability",
      "Developed and implemented the currency swap feature",
      "Redesigned the authentication flow to enhance UX and security",
      "Integrated charts and dashboards for financial data visualization",
    ],
    tech: ["Next.js", "TypeScript", "Redux", "Tailwind CSS", "MUI", "Chart.js"],
  },
  {
    period: "Nov 2019 - Feb 2021",
    title: "Frontend Developer",
    company: "Lenaco",
    description: [
      "Developed and optimized admin panels for internal systems",
    ],
    tech: ["React", "CSS", "Styled Components", "MUI"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="mb-12 text-3xl font-bold text-foreground">Experience</h2>
        </FadeIn>

        <StaggerContainer className="space-y-12" staggerDelay={0.15}>
          {experiences.map((exp, index) => (
            <StaggerItem key={index}>
              <div className="group relative grid gap-4 pb-1 transition-all md:grid-cols-[200px_1fr] md:gap-8">
                <div className="text-sm font-medium text-muted-foreground md:text-right">
                  {exp.period}
                </div>
                <div>
                  <a href={exp.link} className="mb-1 text-lg font-medium text-foreground transition-colors group-hover:text-primary cursor-pointer hover:underline">
                    {exp.title} <span className="text-primary">@ {exp.company}</span>
                  </a>
                  <ul className="mb-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2 text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
