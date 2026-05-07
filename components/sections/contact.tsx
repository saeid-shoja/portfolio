"use client";

import { FadeIn } from "../animations";
import { Github, Linkedin, Mail, Phone, ExternalLink, Hand } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="mb-4 text-3xl font-bold text-foreground">Get In Touch</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mb-8 max-w-xl text-lg text-muted-foreground">
            {"If you'd like to discuss a project or just say hi, I'm always down to chat. Feel free to reach out through any of the channels below."}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:saeidshoja0074@gmail.com"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-secondary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Mail</p>
                <p className="font-medium text-foreground">saeidshoja0074@gmail.com</p>
              </div>
              <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </a>

            <a
              href="tel:+989333092013"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-secondary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium text-foreground">+98 933 309 2013</p>
              </div>
              <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </a>

            <a
              href="https://www.linkedin.com/in/saeid-shoja-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-secondary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-medium text-foreground">@saeid-shoja-developer</p>
              </div>
              <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </a>

            <a
              href="https://github.com/saeid-shoja"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-secondary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">GitHub</p>
                <p className="font-medium text-foreground">@saeid-shoja</p>
              </div>
              <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              <a href="mailto:saeidshoja0074@gmail.com">
                Say Hello <Hand />
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
