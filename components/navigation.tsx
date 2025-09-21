import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="p-6 z-10 relative">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Button
            variant="ghost"
            className="text-white hover:text-white text-2xl font-medium relative overflow-hidden group"
            style={{ fontFamily: "var(--font-neon)" }}
            asChild
          >
            <Link href="/">
              <span className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              Home
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-white text-2xl font-medium relative overflow-hidden group"
            style={{ fontFamily: "var(--font-neon)" }}
            asChild
          >
            <Link href="/about">
              <span className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              About
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-white text-2xl font-medium relative overflow-hidden group"
            style={{ fontFamily: "var(--font-neon)" }}
            asChild
          >
            <Link href="/resume">
              <span className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              Resume
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white/80 hover:bg-white/10 rounded-full"
            asChild
          >
            <a href="https://www.linkedin.com/in/felixpeng24/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-7 w-7" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white/80 hover:bg-white/10 rounded-full"
            asChild
          >
            <a href="https://github.com/felixpeng24" target="_blank" rel="noopener noreferrer">
              <Github className="h-7 w-7" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
