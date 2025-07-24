import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Trophy, Users, Code, Brain } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Sports Excellence",
      description: "Played at District level in Hockey, demonstrating teamwork and competitive spirit"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Led multiple team projects and collaborative development initiatives"
    },
    {
      icon: Code,
      title: "Technical Innovation",
      description: "Developed full-stack applications with modern technologies and best practices"
    },
    {
      icon: Brain,
      title: "AI & Data Science",
      description: "Specialized in machine learning, data analysis, and automation solutions"
    }
  ];

  const education = {
    degree: "BTech Computer Science",
    institution: "Punjab Engineering College",
    status: "Currently Pursuing",
    highlights: [
      "Strong foundation in Computer Science fundamentals",
      "Focus on Full Stack Development and Data Science",
      "Active participation in coding competitions and tech events"
    ]
  };

  const currentRole = {
    position: "Full Stack Developer Intern",
    company: "CSIO-CSIR",
    description: "Working on cutting-edge projects involving web development, data analysis, and automation solutions",
    technologies: ["React", "Node.js", "Python", "MongoDB", "Machine Learning"]
  };

  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer combining technical expertise with creative problem-solving. 
            From sports fields to coding challenges, I bring the same dedication and teamwork to everything I do.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Current Role */}
          <Card className="glass p-8 hover-lift">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">{currentRole.position}</h3>
                <p className="text-lg text-secondary font-semibold">{currentRole.company}</p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {currentRole.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Technologies I work with:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentRole.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Education */}
          <Card className="glass p-8 hover-lift">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-2">{education.degree}</h3>
                <p className="text-lg text-accent font-semibold">{education.institution}</p>
                <p className="text-sm text-muted-foreground">{education.status}</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Academic Highlights:</h4>
                <ul className="space-y-2">
                  {education.highlights.map((highlight, index) => (
                    <li key={index} className="text-muted-foreground flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="glass p-6 text-center hover-lift group"
            >
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="relative w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-3 gradient-text">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Personal Quote */}
        <div className="mt-16 text-center">
          <Card className="glass p-8 max-w-4xl mx-auto">
            <blockquote className="text-xl lg:text-2xl font-light italic text-muted-foreground mb-4">
              "Success is not just about individual achievement, but about how we can use technology 
              to solve real-world problems and make a positive impact on society."
            </blockquote>
            <cite className="text-primary font-semibold">— Gurnoor Singh</cite>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;