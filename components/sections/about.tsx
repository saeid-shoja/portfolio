"use client";

import Image from "next/image";
import { FadeIn } from "../animations";

export function About() {
  return (
    <section id="about" className="bg-secondary/30 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="mb-8 text-3xl font-bold text-foreground">About</h2>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-[1fr_300px]">
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {"I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                With over <span className="font-semibold text-foreground">6 years of production experience</span> since 2019, plus 2 years as full-stack, I specialize in{" "}
                <span className="text-primary">React</span>,{" "}
                <span className="text-primary">Next.js</span>,{" "}
                <span className="text-primary">TypeScript</span>, and modern state management like Zustand, Redux, and Recoil.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {"I've proven ability to migrate large codebases (e.g., Next.js v10 to v16), implement micro-frontends, and optimize performance. I deliver clean, scalable code for remote teams worldwide while actively mentoring junior developers and leading code reviews to maintain high-quality standards."}
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} direction="left">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-card">
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="text-center">
                    <Image src='/saeid.jpg' alt='user-pic' width={300} height={300} className="mt-12" />
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -right-2 -top-2 h-20 w-20 rounded-xl border border-primary/30 bg-primary/20" />
              <div className="absolute -bottom-2 -left-2 h-16 w-16 rounded-xl border border-primary/20 bg-primary/25" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
