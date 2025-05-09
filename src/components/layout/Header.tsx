
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/images/avatar.png" alt="Gabuzando Avatar" data-ai-hint="person cartoon" />
              <AvatarFallback>G</AvatarFallback>
            </Avatar>
            <span className="font-bold sm:inline-block">
              Gabuzando
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Home
            </Link>
            <Link
              href="#"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              CV
            </Link>
            <Link
              href="#"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Blog
            </Link>
          </nav>
          <div className="flex items-center space-x-3 pl-4">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
