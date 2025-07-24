import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Brain, 
  Palette, 
  Server, 
  BarChart3,
  Wrench,
  Cloud
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      icon: Code,
      title: 'Frontend Development',
      color: 'primary',
      skills: [
        { name: 'React.js', level: 90, experience: '2+ years' },
        { name: 'JavaScript/TypeScript', level: 85, experience: '3+ years' },
        { name: 'HTML/CSS', level: 95, experience: '3+ years' },
        { name: 'Tailwind CSS', level: 88, experience: '1+ year' },
        { name: 'Next.js', level: 75, experience: '1+ year' }
      ]
    },
    backend: {
      icon: Server,
      title: 'Backend Development',
      color: 'secondary',
      skills: [
        { name: 'Node.js', level: 85, experience: '2+ years' },
        { name: 'Express.js', level: 80, experience: '2+ years' },
        { name: 'Python', level: 90, experience: '3+ years' },
        { name: 'RESTful APIs', level: 85, experience: '2+ years' },
        { name: 'GraphQL', level: 65, experience: '6 months' }
      ]
    },
    database: {
      icon: Database,
      title: 'Database & Storage',
      color: 'accent',
      skills: [
        { name: 'MongoDB', level: 85, experience: '2+ years' },
        { name: 'PostgreSQL', level: 75, experience: '1+ year' },
        { name: 'MySQL', level: 80, experience: '2+ years' },
        { name: 'Redis', level: 60, experience: '6 months' },
        { name: 'Supabase', level: 70, experience: '1+ year' }
      ]
    },
    analytics: {
      icon: BarChart3,
      title: 'Data Analytics',
      color: 'primary',
      skills: [
        { name: 'Excel Advanced', level: 95, experience: '3+ years' },
        { name: 'SQL', level: 90, experience: '2+ years' },
        { name: 'Python (Pandas)', level: 85, experience: '2+ years' },
        { name: 'Tableau', level: 70, experience: '1+ year' },
        { name: 'Power BI', level: 75, experience: '1+ year' }
      ]
    },
    ai: {
      icon: Brain,
      title: 'AI & Machine Learning',
      color: 'secondary',
      skills: [
        { name: 'Machine Learning', level: 80, experience: '1.5+ years' },
        { name: 'TensorFlow', level: 70, experience: '1+ year' },
        { name: 'Scikit-learn', level: 75, experience: '1+ year' },
        { name: 'Natural Language Processing', level: 65, experience: '8 months' },
        { name: 'Computer Vision', level: 60, experience: '6 months' }
      ]
    },
    tools: {
      icon: Wrench,
      title: 'Tools & Technologies',
      color: 'accent',
      skills: [
        { name: 'Git/GitHub', level: 90, experience: '3+ years' },
        { name: 'Docker', level: 70, experience: '1+ year' },
        { name: 'VS Code', level: 95, experience: '3+ years' },
        { name: 'Postman', level: 85, experience: '2+ years' },
        { name: 'Figma', level: 75, experience: '1+ year' }
      ]
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20',
          progress: 'bg-primary'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary/10',
          text: 'text-secondary',
          border: 'border-secondary/20',
          progress: 'bg-secondary'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          text: 'text-accent',
          border: 'border-accent/20',
          progress: 'bg-accent'
        };
      default:
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20',
          progress: 'bg-primary'
        };
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning full-stack development, data analytics, and AI technologies. 
            Constantly learning and adapting to new technologies and industry trends.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;
            const isActive = activeCategory === key;
            
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`
                  flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300
                  ${isActive 
                    ? `${colors.bg} ${colors.text} ${colors.border} border shadow-lg scale-105` 
                    : 'bg-card hover:bg-card/80 text-muted-foreground hover:text-foreground border border-card-border'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          {Object.entries(skillCategories).map(([key, category]) => {
            const colors = getColorClasses(category.color);
            const isActive = activeCategory === key;
            
            return (
              <div
                key={key}
                className={`transition-all duration-500 ${
                  isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8 absolute'
                }`}
                style={{ display: isActive ? 'block' : 'none' }}
              >
                <Card className="glass p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                      <p className="text-muted-foreground">Professional proficiency levels</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-foreground">{skill.name}</h4>
                            <p className="text-sm text-muted-foreground">{skill.experience}</p>
                          </div>
                          <Badge variant="outline" className={`${colors.border} ${colors.text}`}>
                            {skill.level}%
                          </Badge>
                        </div>
                        
                        <div className="relative">
                          <Progress 
                            value={skill.level} 
                            className="h-2"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="glass p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-3 gradient-text">Always Learning</h3>
            <p className="text-muted-foreground">
              Technology evolves rapidly, and so do I. Currently exploring advanced AI concepts, 
              cloud technologies, and modern development practices to stay at the forefront of innovation.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;