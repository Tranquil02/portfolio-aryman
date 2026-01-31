import { motion } from "framer-motion";
import { SectionHeading } from "./ui";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function ProjectSection() {
  const projects = [
    {
      title: "Nyagrik",
      description: "Legal consultation platform providing information and services for citizens with document templates.",
      tech: ["React", "Next.js", "MongoDB", "TailwindCSS", "TypeScript"],
      link: "https://www.nyagrik.com/",
      category: "Full Stack",
      
      featured: true,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop"
    },
    {
      title: "JARVIS",
      description: "Your Advanced AI Assistant",
      tech: ["Next.js","TypeScript", "MongoDb","python", "TensorFlow", "NLP"],
      link: "https://jarvis-silk-six.vercel.app/",
      category: "Full Stack, AI-ML",
      
     image: "https://www.codewithrandom.com/wp-content/uploads/2024/04/image-3-1024x606.png"
    },
    {
      title: "WorkConnect",
      description: "An app for connecting labourers with employers and for finding jobs.",
      tech: ["React-Native", "EXPO", "Firebase", "Python"],
      link: "https://github.com/harshrana14-fi/WorkConnect-app",
      category: "Mobile App",
      featured: true,
      image: "/images/app.jpg"
    },
    {
      title: "JALGENE",
      description: "AI-powered marine biodiversity research platform processing environmental DNA data to identify marine species.",
      tech: ["Next.js", "TypeScript", "Firebase", "AI-ML", "Python", "AWS"],
      link: "https://deapsea-edna.vercel.app/",
      category: "Full Stack",
      image: "https://images-ctf.baslerweb.com/dg51pdwahxgw/l2E65iVFyhk3Uz00XptIy/b7107fb832030ab009b82fcc8646aa9d/sea-ai-from-camera-input-to-alerts-on-screen.webp?w=1200&fit=pad&bg=rgb:ffffff&q=80&fm=jpg"
    },
    
    {
      title: "WasteFlow",
      description: "AI-powered waste management platform connecting producers with recyclers using smart matching algorithms.",
      tech: ["Next.js", "MongoDB", "OpenAI", "Python", "YOLOv8"],
      link: "https://waste-market-place.vercel.app/",
      category: "AI/ML",
      
      image: "/images/waste99.jpg"
    },
    {
      title: "LEXHAVEN",
      description: "Law internship portal connecting students with opportunities and companies with talent.",
      tech: ["React", "Next.js", "MongoDB", "TailwindCSS", "TypeScript"],
      link: "https://law-interns-portal.vercel.app/",
      category: "Full Stack",
    
      image: "/images/law.jpeg"
    },
    {
      title: "StocKentra",
      description: "Smart stock market analysis platform with real-time trends and AI-powered insights.",
      tech: ["React", "Next.js", "MongoDB", "TailwindCSS", "API Integration"],
      link: "https://stoc-kentra.vercel.app/",
      category: "Full Stack",
 
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop"
    },
    {
      title: "EDUFOX",
      description: "AI-powered personalized learning platform with ML-driven study path recommendations.",
      tech: ["Python", "Next.js", "Firebase", "TailwindCSS", "API Integration"],
      link: "https://ai-tuition.vercel.app/",
      category: "AI/ML",
     
      image: "/images/aitut.jpeg"
    },
    
    
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading>My Projects</SectionHeading>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. <br />
            Crafting innovative digital experiences through code, design, and creativity
          </p>
        </motion.div>

        {/* Featured Projects - Bento Grid Style */}
        <div className="grid md:grid-cols-12 gap-6 mb-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`${index === 0 ? 'md:col-span-7' : 'md:col-span-5'} group relative`}
            >
              <div className="relative h-[500px] bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500">
                {/* Image with Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 rounded-full text-sm font-medium text-emerald-400">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 text-gray-300 rounded-lg">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 text-xs text-gray-400">+{project.tech.length - 4} more</span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20"
                    >
                      View Project
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 rounded-xl transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-400" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regular Projects - Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-slate-800/60 border border-slate-700/50 text-gray-400 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-500">+{project.tech.length - 3}</span>
                    )}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors group/link"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 group hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-800/80 border border-slate-700/50 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Github className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Explore More Projects</h4>
                  <p className="text-sm text-gray-400">View complete portfolio on GitHub</p>
                </div>
              </div>
              <a
                href="https://github.com/harshrana14-fi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 whitespace-nowrap"
              >
                Visit GitHub
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}