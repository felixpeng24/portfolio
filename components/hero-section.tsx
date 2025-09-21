"use client"

import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ProjectsGrid } from "./projects-grid"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative">
        {/* Fixed background */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/tropical-sunset.png')",
          }}
        />

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 w-full">
          {/* Text content */}
          <div className="text-white mb-8 md:mb-0 md:flex-1">
            <p
              className="text-4xl md:text-5xl font-light mb-6 text-balance"
              style={{
                fontFamily: "var(--font-neon)",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              Hi, I'm
            </p>
            <div className="ml-12 mb-8">
              <div className="flex gap-8 items-center">
                <h1
                  className="text-6xl md:text-8xl font-bold text-balance leading-tight"
                  style={{
                    fontFamily: "var(--font-neon)",
                    textShadow: "3px 3px 6px rgba(0,0,0,0.9)",
                    transform: `translateX(-${scrollY * 0.3}px)`,
                    transition: "transform 0.1s ease-out",
                  }}
                >
                  Felix
                </h1>
                <h1
                  className="text-6xl md:text-8xl font-bold text-balance leading-tight"
                  style={{
                    fontFamily: "var(--font-neon)",
                    textShadow: "3px 3px 6px rgba(0,0,0,0.9)",
                    transform: `translateX(${scrollY * 0.3}px)`,
                    transition: "transform 0.1s ease-out",
                  }}
                >
                  Peng
                </h1>
              </div>
            </div>
          </div>

          <div className="md:flex-1 flex justify-center md:justify-end">
            <div className="relative">
              <Image
                src="/images/felix-profile.png"
                alt="Felix Peng"
                width={300}
                height={300}
                className="rounded-full border-4 border-white/20 shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center text-white">
            <p
              className="text-2xl md:text-3xl font-medium mb-4"
              style={{
                fontFamily: "var(--font-neon)",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              my work
            </p>
            <ChevronDown className="h-8 w-8 animate-bounce" />
          </div>
        </div>
      </section>

      <ProjectsGrid />
    </>
  )
}
