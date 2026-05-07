"use client";

import Link from "next/link";
import { motion } from "motion/react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed left-1/2 -translate-x-1/2 top-6 z-50 w-max"
    >
      <div className="flex items-center justify-around gap-1 rounded-full border border-border/50 bg-card/80 px-2 py-2 backdrop-blur-sm w-sm lg:w-3xl">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full px-4 py-2 text-xs md:text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
