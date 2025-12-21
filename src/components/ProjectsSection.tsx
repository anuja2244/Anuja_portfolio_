import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tools: string[];
  image: string;
  demoLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Sales Performance Dashboard',
    description: 'Interactive Power BI dashboard analyzing sales trends and KPIs',
    longDescription: 'A comprehensive Power BI dashboard that provides real-time insights into sales performance across multiple regions and product categories. Features include trend analysis, YoY comparisons, and predictive forecasting.',
    tools: ['Power BI', 'Excel', 'DAX'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'HR Analytics Dashboard',
    description: 'Employee analytics and workforce insights visualization',
    longDescription: 'An HR analytics solution that tracks employee metrics, attrition rates, performance indicators, and diversity statistics. Helps HR teams make data-driven decisions about workforce planning.',
    tools: ['Power BI', 'SQL', 'Excel'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    demoLink: '#',
  },
  {
    id: 3,
    title: 'Financial Reporting Dashboard',
    description: 'Comprehensive financial KPIs and budget analysis',
    longDescription: 'A financial reporting dashboard that consolidates budget vs actual analysis, expense tracking, revenue trends, and profitability metrics. Designed for executive-level reporting with drill-down capabilities.',
    tools: ['Power BI', 'Excel', 'Power Query'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
    githubLink: '#',
  },
  {
    id: 4,
    title: 'Customer Analytics Platform',
    description: 'Customer segmentation and behavior analysis',
    longDescription: 'A customer analytics platform that segments customers based on purchasing behavior, identifies high-value customers, and tracks customer lifetime value. Includes cohort analysis and churn prediction.',
    tools: ['Tableau', 'SQL', 'Python'],
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=500&fit=crop',
    demoLink: '#',
  },
  {
    id: 5,
    title: 'Supply Chain Dashboard',
    description: 'Inventory and logistics performance tracking',
    longDescription: 'A supply chain analytics dashboard monitoring inventory levels, supplier performance, delivery metrics, and warehouse efficiency. Features real-time alerts for stock-outs and delays.',
    tools: ['Power BI', 'Excel', 'DAX'],
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=500&fit=crop',
  },
  {
    id: 6,
    title: 'Marketing Campaign Analytics',
    description: 'Campaign performance and ROI analysis',
    longDescription: 'A marketing analytics dashboard that tracks campaign performance across channels, measures ROI, and provides insights into customer acquisition costs and conversion rates.',
    tools: ['Power BI', 'Excel', 'Google Analytics'],
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=500&fit=crop',
    demoLink: '#',
    githubLink: '#',
  },
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-50" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <span className="text-primary font-mono text-sm">// My Work</span>
          <h2 className="section-title mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A showcase of Power BI dashboards and data visualization projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-card overflow-hidden card-hover cursor-pointer group ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 glass-card rounded-full hover:bg-destructive/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <p className="text-muted-foreground">{selectedProject.longDescription}</p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-sm font-mono bg-primary/10 text-primary rounded-lg"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                {selectedProject.demoLink && (
                  <Button variant="neon" asChild>
                    <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Dashboard
                    </a>
                  </Button>
                )}
                {selectedProject.githubLink && (
                  <Button variant="glass" asChild>
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
