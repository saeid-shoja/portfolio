"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "../animations";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-5xl">
        <FadeIn delay={0.3}>
          <div className="mb-6 flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Yerevan/ Armenia</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            Saeid Shoja
          </h1>
        </FadeIn>

        <FadeIn delay={0.5}>
          <h2 className="mb-6 text-2xl font-medium text-primary md:text-3xl">
            Senior Frontend Developer
          </h2>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-justify">
            I build accessible, pixel-perfect digital experiences for the web. Specialized in{" "}
            <span className="text-foreground">React</span>,{" "}
            <span className="text-foreground">Next.js</span>,{" "}
            <span className="text-foreground">TypeScript</span>, and modern state management.
            6+ years of production experience delivering clean, scalable code for remote teams worldwide.
          </p>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/saeid-shoja"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/saeid-shoja-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:saeidshoja0074@gmail.com"
              className="group flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
            <a
              href="tel:+989333092013"
              className="group flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              <span>Phone</span>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.9}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-16 flex justify-center"
          >
            <a href="#about" className="text-muted-foreground transition-colors hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
          </motion.div>
        </FadeIn>
      </div>

      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  );
}
