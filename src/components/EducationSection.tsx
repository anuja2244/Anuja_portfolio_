import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const education = [
  {
    id: 1,
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Periyar University',
    location: 'Salem, Tamil Nadu',
    duration: '2023 - 2025',
    description: 'Specialized in Data Analytics and Business Intelligence. Gained expertise in database management, programming, and data visualization.',
  },
  {
    id: 2,
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Periyar University',
    location: 'Salem, Tamil Nadu',
    duration: '2020 - 2023',
    description: 'Foundation in computer science fundamentals, programming languages, and software development.',
  },
  {
    id: 3,
    degree: 'Higher Secondary Education (HSC)',
    institution: 'State Board of Tamil Nadu',
    location: 'Namakkal, Tamil Nadu',
    duration: '2018 - 2020',
    description: 'Completed higher secondary education with focus on Computer Science and Mathematics.',
  },
];

export function EducationSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <span className="text-primary font-mono text-sm">// Academic Background</span>
          <h2 className="section-title mt-2">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Academic journey that shaped my expertise in data analytics
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative pl-8 pb-12 last:pb-0 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />

              {/* Card */}
              <div className="glass-card p-6 ml-4 card-hover group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground font-medium mt-1">
                      {edu.institution}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-primary" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-primary" />
                        {edu.location}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mt-3">
                      {edu.description}
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
