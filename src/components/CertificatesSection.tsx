import { Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import powerbiNextgen from '@/assets/certificates/powerbi-nextgen.jpeg';
import powerbiOfficemaster from '@/assets/certificates/powerbi-officemaster.jpeg';
import excelChatgpt from '@/assets/certificates/excel-chatgpt.jpeg';
import dataAnalyticsNovitech from '@/assets/certificates/data-analytics-novitech.jpeg';
import powerbiGbtech from '@/assets/certificates/powerbi-gbtech.jpeg';
import icatParticipation from '@/assets/certificates/icat-participation.jpeg';

const certificates = [
  {
    id: 1,
    title: 'Mastering Power BI for Data Visualization and Business Intelligence',
    issuer: 'NextGen Technologies',
    date: 'December 2024',
    image: powerbiNextgen,
  },
  {
    id: 2,
    title: 'PowerBI Workshop - AI-Powered Interactive Dashboards',
    issuer: 'OfficeMaster',
    date: 'July 2025',
    image: powerbiOfficemaster,
  },
  {
    id: 3,
    title: 'Excel Automation using ChatGPT',
    issuer: 'Microsoft & Simplilearn SkillUp',
    date: 'July 2025',
    image: excelChatgpt,
  },
  {
    id: 4,
    title: '30 Days MasterClass in Data Analytics',
    issuer: 'NoviTech R&D Private Limited',
    date: 'October - December 2024',
    image: dataAnalyticsNovitech,
  },
  {
    id: 5,
    title: 'Hands-on Experience on Power BI Workshop',
    issuer: 'GB Tech Corp & NextGen Technologies',
    date: 'October 2024',
    image: powerbiGbtech,
  },
  {
    id: 6,
    title: 'Internship Common Aptitude Test (iCAT)',
    issuer: 'iCAT',
    date: 'June 2025',
    image: icatParticipation,
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
          <h2 className="section-title">
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
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                
                {/* Award Badge */}
                <div className="absolute top-4 right-4 p-2 glass-card rounded-full">
                  <Award className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
