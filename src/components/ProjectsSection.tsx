import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Import project images
import flightsDashboard from '@/assets/projects/flights-dashboard.png';
import titanicDashboard from '@/assets/projects/titanic-dashboard.png';
import financialDashboard from '@/assets/projects/financial-dashboard.png';
import hrDashboard from '@/assets/projects/hr-dashboard.png';
import retailDashboard from '@/assets/projects/retail-dashboard.png';
import salesDashboard from '@/assets/projects/sales-dashboard.png';
import stackoverflowDashboard from '@/assets/projects/stackoverflow-dashboard.png';
import covidTableauDashboard from '@/assets/projects/covid-tableau-dashboard.jpeg';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tools: string[];
  image: string;
  demoLink?: string;
  githubLink?: string;
  videoLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Flights Delay & Cancellation Dashboard',
    description: 'Comprehensive analysis of airline delays and cancellations with interactive filters',
    longDescription: 'An interactive Power BI dashboard analyzing flight delays and cancellations across multiple airlines. Features include delay breakdowns by type (weather, security, departure, arrival, airline), monthly trends, cancellation counts, and average delay metrics with year and airline filters.',
    tools: ['Power BI', 'Excel'],
    image: flightsDashboard,
  },
  {
    id: 2,
    title: 'Titanic Survival Analysis Dashboard',
    description: 'Historical data visualization of Titanic passenger survival statistics',
    longDescription: 'A visually striking Power BI dashboard analyzing Titanic passenger data. Includes survival rates by class, age distribution by cabin, passenger demographics by embarkation point, gender distribution, and total passenger/survivor counts with interactive filters.',
    tools: ['Power BI', 'Excel'],
    image: titanicDashboard,
  },
  {
    id: 3,
    title: 'Financial Analysis Dashboard',
    description: 'Multi-dimensional revenue and sales performance tracking',
    longDescription: 'A comprehensive financial dashboard tracking revenue across products, stores, and regions. Features include revenue by product category, regional performance analysis, quarterly breakdowns, sales representative performance tables, and comparative revenue visualizations.',
    tools: ['Power BI', 'Excel', 'Power Query'],
    image: financialDashboard,
  },
  {
    id: 4,
    title: 'HR Headcount Analysis Dashboard',
    description: 'Employee demographics and workforce analytics visualization',
    longDescription: 'An HR analytics dashboard providing insights into workforce composition. Tracks employee headcount trends, age group distributions, gender ratios, geographic distribution by country, business unit breakdown, and job title filters for detailed analysis.',
    tools: ['Power BI', 'Excel'],
    image: hrDashboard,
  },
  {
    id: 5,
    title: 'Retail Sales Dashboard',
    description: 'Product category sales analysis with customer segmentation',
    longDescription: 'A retail analytics dashboard analyzing sales performance across product categories (Electronics, Clothing, Beauty). Includes customer transaction analysis, gender-based purchasing patterns, price trends, and quantity metrics with year-over-year comparisons.',
    tools: ['Power BI', 'Excel', 'Data Visualization'],
    image: retailDashboard,
  },
  {
    id: 6,
    title: 'Sales Dashboard - Monthly',
    description: 'Monthly sales tracking with category-wise breakdown',
    longDescription: 'A monthly sales performance dashboard tracking item amounts, cost prices, quantities, and selling prices. Features category-wise analysis (Casual Wear, Semi Formal, Formal), daily trends, and detailed item-level breakdowns for comprehensive sales insights.',
    tools: ['Power BI', 'Excel'],
    image: salesDashboard,
  },
  {
    id: 7,
    title: 'Stack Overflow Developer Survey Dashboard',
    description: 'Global developer demographics and work preference analysis',
    longDescription: 'An insightful dashboard analyzing Stack Overflow developer survey data. Visualizes employee age distribution, global geographic distribution, work preferences (freelancer, full-time, part-time), AI tool usage statistics, and coding experience correlations.',
    tools: ['Power BI', 'Excel', 'Data Analysis'],
    image: stackoverflowDashboard,
  },
  {
    id: 8,
    title: 'COVID-19 Dashboard Analysis in India',
    description: 'Comprehensive analysis of COVID-19 cases, vaccinations, and testing across Indian states',
    longDescription: 'A detailed Tableau dashboard analyzing COVID-19 pandemic data across India. Features include state-wise case trends, gender distribution, age group analysis, first vs second dose vaccination comparison, vaccine-wise administration (Covaxin, CoviShield, Sputnik V), ICMRT testing labs distribution, state-wise testing details, and an interactive map showing total deaths by state.',
    tools: ['Tableau', 'Excel', 'Data Visualization'],
    image: covidTableauDashboard,
  },
  {
    id: 9,
    title: 'Desert Travel Website',
    description: 'A modern, responsive travel website built with AI-powered web development',
    longDescription: 'A fully responsive travel website showcasing desert destinations, built using AI-powered web development tools. Features modern UI design, smooth animations, interactive sections, and an engaging user experience optimized for all devices.',
    tools: ['React', 'Tailwind CSS', 'AI-Powered Development'],
    image: '/placeholder.svg',
    demoLink: 'https://desertwebsite.lovable.app',
  },
  {
    id: 10,
    title: 'Voice Assistant AI',
    description: 'Python-based voice assistant that opens apps and browsers via voice commands',
    longDescription: 'A simple yet powerful voice assistant built with Python that listens to user voice commands and performs actions like opening applications, launching websites in the browser, and more. Built using speech recognition libraries to convert voice into actionable commands.',
    tools: ['Python', 'Speech Recognition', 'AI'],
    image: '/placeholder.svg',
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
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A showcase of Power BI and Tableau dashboards and data visualization projects
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
