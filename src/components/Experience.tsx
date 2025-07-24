import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Building, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'Full Stack Developer Intern',
      company: 'CSIO-CSIR (Council of Scientific & Industrial Research)',
      location: 'Chandigarh, India',
      duration: 'June 2024 - Present',
      type: 'Internship',
      description: 'Working on cutting-edge research projects involving full-stack web development, data analysis, and automation solutions for scientific applications.',
      achievements: [
        'Developed responsive web applications using React.js and Node.js',
        'Implemented data visualization dashboards for research analytics',
        'Automated research workflows reducing manual effort by 40%',
        'Collaborated with senior scientists on technology integration projects'
      ],
      technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'Express.js', 'Data Visualization'],
      highlight: true
    },
    {
      id: 2,
      position: 'Student Researcher',
      company: 'Punjab Engineering College',
      location: 'Chandigarh, India',
      duration: 'January 2024 - May 2024',
      type: 'Academic',
      description: 'Conducted research in machine learning and data analysis as part of academic curriculum, focusing on practical applications in real-world scenarios.',
      achievements: [
        'Developed machine learning models for predictive analytics',
        'Published research findings in college technical journal',
        'Mentored junior students in programming and data science',
        'Led team project on AI-based document processing'
      ],
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Jupyter'],
      highlight: false
    },
    {
      id: 3,
      position: 'Web Development Freelancer',
      company: 'Independent Contractor',
      location: 'Remote',
      duration: 'September 2023 - December 2023',
      type: 'Freelance',
      description: 'Provided web development services to local businesses and startups, creating custom websites and web applications.',
      achievements: [
        'Delivered 5+ successful web development projects',
        'Achieved 100% client satisfaction rate',
        'Implemented e-commerce solutions for small businesses',
        'Created responsive designs for mobile-first approach'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress', 'PHP'],
      highlight: false
    },
    {
      id: 4,
      position: 'Hockey Team Captain',
      company: 'District Sports Committee',
      location: 'Punjab, India',
      duration: '2022 - 2023',
      type: 'Sports Leadership',
      description: 'Led the district hockey team in regional competitions, demonstrating leadership skills and team coordination.',
      achievements: [
        'Captained team to regional championship semifinals',
        'Organized training sessions and strategy meetings',
        'Developed team communication and coordination protocols',
        'Mentored younger players in skill development'
      ],
      technologies: ['Leadership', 'Team Management', 'Strategic Planning', 'Communication'],
      highlight: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Academic':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'Freelance':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'Sports Leadership':
        return 'bg-muted/10 text-muted-foreground border-muted/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of continuous learning and growth through diverse experiences in technology, 
            research, and leadership. Each role has contributed to my comprehensive skill set.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background z-10" />
                  
                  {/* Experience Card */}
                  <div className="ml-20">
                    <Card 
                      className={`glass p-8 hover-lift ${
                        exp.highlight ? 'ring-2 ring-primary/20 shadow-primary' : ''
                      }`}
                    >
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold gradient-text">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                            <Building className="w-5 h-5" />
                            {exp.company}
                          </div>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <CalendarDays className="w-4 h-4" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        
                        <Badge className={getTypeColor(exp.type)}>
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-muted-foreground flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16">
          <Card className="glass p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">What I Bring to the Table</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto">
                  <Building className="w-6 h-6" />
                </div>
                <h4 className="font-semibold">Technical Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  Strong foundation in modern web technologies and data analysis
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-semibold">Leadership Skills</h4>
                <p className="text-sm text-muted-foreground">
                  Proven ability to lead teams and manage complex projects
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mx-auto">
                  <CalendarDays className="w-6 h-6" />
                </div>
                <h4 className="font-semibold">Continuous Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Always adapting to new technologies and industry trends
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;