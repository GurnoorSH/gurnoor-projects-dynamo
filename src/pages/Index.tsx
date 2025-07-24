import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Main Content */}
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-card-border">
        <div className="container mx-auto px-6">
          <p>&copy; 2024 Gurnoor Singh. Built with React, TypeScript, and lots of ☕</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
