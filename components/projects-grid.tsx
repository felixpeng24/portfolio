import { Calendar, MapPin } from "lucide-react"

export function ProjectsGrid() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern shopping experience with React & Node.js",
      date: "Dec 15, 2024",
      day: "SUN",
      dayNum: "15",
      category: "Web Development",
      image: "/modern-ecommerce-interface.png",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure financial management with Flutter",
      date: "Nov 28, 2024",
      day: "THU",
      dayNum: "28",
      category: "Mobile App",
      image: "/mobile-banking-app.png",
    },
    {
      id: 3,
      title: "AI Chat Assistant",
      description: "Intelligent conversational AI with Python & TensorFlow",
      date: "Oct 12, 2024",
      day: "SAT",
      dayNum: "12",
      category: "AI/ML",
      image: "/ai-chatbot-interface-design.jpg",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Creative showcase built with Next.js & Tailwind",
      date: "Sep 5, 2024",
      day: "THU",
      dayNum: "5",
      category: "Web Design",
      image: "/creative-portfolio-website.png",
    },
    {
      id: 5,
      title: "Data Visualization Tool",
      description: "Interactive charts and analytics dashboard",
      date: "Aug 20, 2024",
      day: "TUE",
      dayNum: "20",
      category: "Data Science",
      image: "/data-visualization-dashboard.png",
    },
    {
      id: 6,
      title: "Social Media Platform",
      description: "Community-driven social network with real-time features",
      date: "Jul 8, 2024",
      day: "MON",
      dayNum: "8",
      category: "Full Stack",
      image: "/social-media-interface.png",
    },
  ]

  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              {/* Date badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center border border-white/30">
                  <div className="text-xs font-medium text-white/80 mb-1">{project.day}</div>
                  <div className="text-2xl font-bold text-white">{project.dayNum}</div>
                </div>
              </div>

              {/* Project image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-4 w-4 text-white/60" />
                  <span className="text-sm text-white/60">{project.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-white/80 text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="h-4 w-4 text-white/60" />
                  <span className="text-sm text-white/60">{project.category}</span>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105">
                    View Project
                  </button>
                  <button className="flex-1 bg-orange-500/80 hover:bg-orange-500 backdrop-blur-sm border border-orange-400/50 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
