import { Eye, ArrowDown, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';
import profilePhoto from '@/assets/profile-photo.jpeg';

const socialLinks = [
  { icon: Mail, href: 'mailto:anujakrishnasamy@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+918122795448', label: 'Phone' },
  { icon: Linkedin, href: 'https://linkedin.com/in/anuja-k', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/anuja-k', label: 'GitHub' },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient-bg" />
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl floating" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/10 rounded-full blur-2xl floating" style={{ animationDelay: '4s' }} />

      <div className="container relative z-10 px-4 md:px-6 text-center">
        {/* Main Content */}
        <div className="space-y-6 animate-slide-up">
          {/* Profile Photo */}
          <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-2">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-lg opacity-50" />
            <img
              src={profilePhoto}
              alt="Anuja K - Data Analyst & BI Developer"
              className="relative w-full h-full rounded-full object-cover border-4 border-primary/30 shadow-2xl"
              style={{ objectPosition: '50% 18%' }}
            />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block text-foreground">Anuja K</span>
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold gradient-text">
            Aspiring Data Analyst & BI Developer
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Transforming raw data into meaningful insights and interactive dashboards
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="neon" size="xl" className="w-full sm:w-auto" asChild>
              <a href="/resume/ANUJA-K-Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </Button>
            <Button variant="glass" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#projects">
                View Projects
                <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 glass-card rounded-full hover:scale-110 hover:border-primary/50 transition-all duration-300 group"
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
