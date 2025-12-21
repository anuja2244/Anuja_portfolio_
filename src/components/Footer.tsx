import { ArrowUp, Mail, Linkedin, Github, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Mail, href: 'mailto:anujakrishnasamy@gmail.com', label: 'Email' },
  { icon: Linkedin, href: 'https://linkedin.com/in/anuja-k', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/anuja-k', label: 'GitHub' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold gradient-text">
              AK
            </a>
            <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1 justify-center md:justify-start">
              Made with <Heart className="h-4 w-4 text-destructive" /> by Anuja K
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 glass-card rounded-full hover:scale-110 hover:border-primary/50 transition-all group"
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 glass-card rounded-full hover:scale-110 hover:border-primary/50 transition-all group"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
}
