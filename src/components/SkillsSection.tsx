import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  BarChart3, 
  PieChart, 
  FileSpreadsheet, 
  Database, 
  Code2, 
  Sparkles,
  FileText,
  Wand2
} from 'lucide-react';

const skills = [
  { name: 'Power BI', icon: BarChart3, category: 'BI Tools' },
  { name: 'Tableau', icon: PieChart, category: 'BI Tools' },
  { name: 'Data Visualization', icon: Sparkles, category: 'Core Skills' },
  { name: 'Excel', icon: FileSpreadsheet, category: 'Tools' },
  { name: 'Microsoft Office', icon: FileText, category: 'Tools' },
  { name: 'AI Powered Web Development', icon: Wand2, category: 'Web Development' },
  { name: 'Python (Basics)', icon: Code2, category: 'Programming' },
  { name: 'SQL (Basics)', icon: Database, category: 'Programming' },
];

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A comprehensive toolkit for data analysis, visualization, and business intelligence
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`glass-card p-6 card-hover ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span className="text-xs text-muted-foreground">{skill.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
