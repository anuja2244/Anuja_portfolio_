import { BarChart3, Database, LineChart, Lightbulb } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const highlights = [
  {
    icon: BarChart3,
    title: 'Data Analysis',
    description: 'Expert in extracting actionable insights from complex datasets',
  },
  {
    icon: LineChart,
    title: 'Business Intelligence',
    description: 'Creating powerful BI solutions that drive business decisions',
  },
  {
    icon: Database,
    title: 'Dashboard Design',
    description: 'Building interactive, user-friendly dashboards in Power BI',
  },
  {
    icon: Lightbulb,
    title: 'Data Storytelling',
    description: 'Transforming numbers into compelling visual narratives',
  },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <div
            className={`space-y-6 ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            <div className="inline-block">
              <span className="text-primary font-mono text-sm">// About Me</span>
            </div>
            
            <h2 className="section-title">
              Turning Data Into
              <span className="gradient-text"> Strategic Assets</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                I'm a passionate <span className="text-foreground font-medium">Data Analyst & BI Developer</span> with a keen eye for transforming raw data into actionable business intelligence. My expertise lies in creating comprehensive dashboards that tell compelling data stories.
              </p>
              <p>
                With hands-on experience in Power BI, Tableau, SQL, and Excel, I specialize in data visualization, analysis, and reporting. I'm dedicated to helping organizations make data-driven decisions through clear, interactive, and insightful dashboards.
              </p>
              <p>
                My approach combines technical proficiency with business acumen, ensuring that every visualization serves a strategic purpose and delivers measurable value.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: '10+', label: 'Projects' },
                { value: '5+', label: 'Dashboards' },
                { value: '8+', label: 'Skills' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`glass-card p-6 card-hover ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
