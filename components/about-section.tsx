export function AboutSection() {
  return (
    <section className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                {
                  "I'm a passionate developer who loves creating beautiful, functional web experiences. With a background in both design and development, I bring a unique perspective to every project."
                }
              </p>
              <p>
                {
                  "My expertise spans modern web technologies including React, Next.js, TypeScript, and various backend frameworks. I believe in writing clean, maintainable code that not only works well but is also a joy to work with."
                }
              </p>
              <p>
                {
                  "When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying the great outdoors."
                }
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "Docker", "AWS", "Vercel", "Figma"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
