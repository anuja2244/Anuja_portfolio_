import { Award, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const certificates = [
  {
    id: 1,
    title: 'Microsoft Power BI Data Analyst',
    issuer: 'Microsoft',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=400&h=300&fit=crop',
    credentialLink: '#',
  },
  {
    id: 2,
    title: 'Google Data Analytics Professional',
    issuer: 'Google',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=300&fit=crop',
    credentialLink: '#',
  },
  {
    id: 3,
    title: 'Tableau Desktop Specialist',
    issuer: 'Tableau',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    credentialLink: '#',
  },
  {
    id: 4,
    title: 'SQL for Data Science',
    issuer: 'Coursera',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop',
    credentialLink: '#',
  },
  {
    id: 5,
    title: 'Advanced Excel for Business',
    issuer: 'LinkedIn Learning',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    credentialLink: '#',
  },
  {
    id: 6,
    title: 'Python for Data Analysis',
    issuer: 'DataCamp',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
    credentialLink: '#',
  },
];

export function CertificatesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="certificates"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <span className="text-primary font-mono text-sm">// Achievements</span>
          <h2 className="section-title mt-2">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Recognized qualifications demonstrating expertise in data analytics and BI tools
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`glass-card overflow-hidden card-hover group ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Award Badge */}
                <div className="absolute top-4 right-4 p-2 glass-card rounded-full">
                  <Award className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                  </div>
                  <a
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    aria-label="View credential"
                  >
                    <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
