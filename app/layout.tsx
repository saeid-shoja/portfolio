import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: 'Saeid Shoja | Senior Frontend Developer',
  description: 'Senior Frontend Developer with 6+ years of experience specializing in React, Next.js, TypeScript, and modern state management. Building scalable, performant web applications.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Full Stack Developer'],
  authors: [{ name: 'Saeid Shoja' }],
  openGraph: {
    title: 'Saeid Shoja | Senior Frontend Developer',
    description: 'Senior Frontend Developer with 6+ years of experience specializing in React, Next.js, TypeScript.',
  },
  icons: {
    icon: [
      {
        url: '/saeid.jpg',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
