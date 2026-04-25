import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const internships = [
  {
    id: 1,
    role: 'Data Science Intern',
    company: 'Skillcraft Technologies',
    duration: 'July 15 – August 14, 2025',
    status: 'Completed',
    description:
      'Worked on real-world data science projects involving data cleaning, exploratory data analysis, visualization, and building predictive models.',
  },
  {
    id: 2,
    role: 'Data Intern',
    company: 'Data Pattern',
    duration: 'Current',
    status: 'Ongoing',
    description:
      'Currently working as a Data Intern, contributing to data analysis, dashboard development, and turning datasets into actionable business insights.',
  },
];

export function InternshipSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="internships"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 md:px-6">
        <div
          className={`text-center mb-16 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Internships</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Hands-on experience building data-driven solutions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {internships.map((item, index) => (
            <div
              key={item.id}
              className={`relative pl-8 pb-12 last:pb-0 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />

              <div className="glass-card p-6 ml-4 card-hover group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {item.role}
                      </h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium mt-1">
                      {item.company}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-primary" />
                        {item.duration}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mt-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
