import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['Full Stack Developer', 'Data Analyst', 'AI Enthusiast', 'Problem Solver'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[currentRoleIndex];
      
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentRole.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, currentRoleIndex, isDeleting, roles]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                Hi, I'm{' '}
                <span className="gradient-text">Gurnoor Singh</span>
              </h1>
              
              <div className="text-2xl lg:text-3xl text-muted-foreground min-h-[2.5rem]">
                I'm a{' '}
                <span className="text-primary font-semibold typing-cursor">
                  {typedText}
                </span>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl">
                BTech Computer Science student at Punjab Engineering College, currently interning as a 
                Full Stack Developer at CSIO-CSIR. Passionate about creating innovative solutions through 
                code, data analysis, and AI technologies.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>gurnoor1523@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>9780444913</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                variant="neon" 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="hover-lift"
              >
                View My Work
              </Button>
              <Button 
                variant="cyber" 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="hover-lift"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button 
                variant="glass" 
                size="icon" 
                className="hover-lift"
                onClick={() => window.open('https://linkedin.com/in/gurnoorsingh09', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="glass" 
                size="icon" 
                className="hover-lift"
                onClick={() => window.open('https://github.com/GurnoorSH?tab=repositories', '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                variant="glass" 
                size="icon" 
                className="hover-lift"
                onClick={() => window.open('https://www.youtube.com/@NoBsTech09', '_blank')}
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-15 animate-pulse" />
              <div className="relative w-80 h-80 rounded-full overflow-hidden glass p-2 hover-lift">
                <img 
                  src={profilePhoto} 
                  alt="Gurnoor Singh" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Floating particles */}
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-primary rounded-full animate-ping" />
              <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -left-8 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => scrollToSection('about')}
            className="rounded-full"
          >
            <ChevronDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;