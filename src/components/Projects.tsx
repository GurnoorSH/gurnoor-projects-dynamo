import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Youtube, 
  BarChart3, 
  Code, 
  Brain,
  Filter
} from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('ai-automation');

  const categories = [
    { id: 'all', name: 'All Projects', icon: Filter, count: 12 },
    { id: 'data-analytics', name: 'Data Analytics', icon: BarChart3, count: 4 },
    { id: 'full-stack', name: 'Full Stack', icon: Code, count: 4 },
    { id: 'ai-automation', name: 'AI & Automation', icon: Brain, count: 4 }
  ];

  const projects = [
    // Data Analytics Projects
    {
      id: 1,
      title: 'Clothing Store Dashboard',
      description: 'Comprehensive Excel dashboard analyzing sales performance, customer demographics, and inventory management for a retail clothing store with advanced pivot tables and interactive charts.',
      category: 'data-analytics',
      techStack: ['Excel', 'VBA', 'Pivot Tables', 'Data Visualization'],
      githubUrl: 'https://github.com/gurnoorsingh/clothing-store-dashboard',
      youtubeUrl: 'https://youtube.com/@gurnoorsingh',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Zepto Inventory Analysis',
      description: 'Advanced inventory analysis for Zepto using SQL and Excel, optimizing stock levels, identifying demand patterns, and reducing waste through data-driven insights.',
      category: 'data-analytics',
      techStack: ['SQL', 'Excel', 'Power BI', 'Data Analysis'],
      githubUrl: 'https://github.com/gurnoorsingh/zepto-inventory',
      youtubeUrl: 'https://youtube.com/@gurnoorsingh',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Credit Risk Scoring Model',
      description: 'Machine learning model for credit risk assessment using historical data, feature engineering, and ensemble methods to predict loan default probability.',
      category: 'data-analytics',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost'],
      githubUrl: 'https://github.com/gurnoorsingh/credit-risk-model',
      youtubeUrl: 'https://youtube.com/@gurnoorsingh',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'United Air Calls Analysis',
      description: 'Call center performance analysis for United Airlines, identifying efficiency bottlenecks, customer satisfaction patterns, and agent performance metrics.',
      category: 'data-analytics',
      techStack: ['Excel', 'Power BI', 'SQL', 'Statistical Analysis'],
      githubUrl: 'https://github.com/gurnoorsingh/united-air-analysis',
      youtubeUrl: 'https://youtube.com/@gurnoorsingh',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop'
    },

    // Full Stack Projects
    {
      id: 5,
      title: 'MERN Student Management System',
      description: 'Complete student management system with attendance tracking, grade management, course enrollment, and real-time notifications using the MERN stack.',
      category: 'full-stack',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      githubUrl: 'https://github.com/gurnoorsingh/student-management-mern',
      youtubeUrl: 'https://youtube.com/@gurnoorsingh',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop'
    },
    {
      id: 6,
      title: 'E-ComAssist Chatbot',
      description: 'AI-powered e-commerce chatbot providing product recommendations, order tracking, and customer support with natural language processing capabilities.',
      category: 'full-stack',
      techStack: ['React', 'Node.js', 'OpenAI API', 'MongoDB', 'Socket.io'],
      githubUrl: 'https://github.com/gurnoorsingh/ecom-assist-chatbot',
      youtubeUrl: 'https://youtube.com/@gurnoorsingh',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop'
    },
    {
      id: 7,
      title: 'WealthWise Finance Tracker',
      description: 'Personal finance management application with expense tracking, budget planning, investment portfolio monitoring, and financial goal setting.',
      category: 'full-stack',
      techStack: ['React', 'TypeScript', 'Supabase', 'Charts.js', 'Tailwind'],
      githubUrl: 'https://github.com/gurnoorsingh/wealthwise-tracker',
      youtubeUrl: 'https://youtube.com/@gurnoorsingh',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop'
    },
    {
      id: 8,
      title: 'HTML to DOCX Converter',
      description: 'Web application that converts HTML documents to DOCX format while preserving formatting, images, and styling with batch processing capabilities.',
      category: 'full-stack',
      techStack: ['Node.js', 'Express', 'Mammoth.js', 'Multer', 'React'],
      githubUrl: 'https://github.com/gurnoorsingh/html-docx-converter',
      youtubeUrl: 'https://youtube.com/@gurnoorsingh',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop'
    },

    // AI & Automation Projects
    {
      id: 9,
      title: 'Stable Diffusion Pipeline',
      description: 'Automated image generation pipeline using Stable Diffusion with custom training, prompt optimization, and batch processing for creative workflows.',
      category: 'ai-automation',
      techStack: ['Python', 'Stable Diffusion', 'PyTorch', 'Gradio', 'Docker'],
      githubUrl: 'https://github.com/gurnoorsingh/stable-diffusion-pipeline',
      youtubeUrl: 'https://youtube.com/@gurnoorsingh',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop'
    },
    {
      id: 10,
      title: 'AI Legal Research Assistant',
      description: 'Intelligent legal research tool using NLP to analyze case documents, extract key insights, and provide relevant precedent recommendations.',
      category: 'ai-automation',
      techStack: ['Python', 'BERT', 'spaCy', 'FastAPI', 'PostgreSQL'],
      githubUrl: 'https://github.com/gurnoorsingh/legal-ai-assistant',
      youtubeUrl: 'https://youtube.com/@gurnoorsingh',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop'
    },
    {
      id: 11,
      title: 'Smart Document Processor',
      description: 'OCR and NLP-powered document processing system that extracts, categorizes, and analyzes text from various document formats automatically.',
      category: 'ai-automation',
      techStack: ['Python', 'Tesseract', 'OpenCV', 'NLTK', 'FastAPI'],
      githubUrl: 'https://github.com/gurnoorsingh/smart-doc-processor',
      youtubeUrl: 'https://youtube.com/@gurnoorsingh',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=250&fit=crop'
    },
    {
      id: 12,
      title: 'Automated Trading Bot',
      description: 'Machine learning-based trading bot that analyzes market patterns, executes trades, and manages risk using algorithmic strategies.',
      category: 'ai-automation',
      techStack: ['Python', 'Pandas', 'Scikit-learn', 'Alpaca API', 'TensorFlow'],
      githubUrl: 'https://github.com/gurnoorsingh/trading-bot',
      youtubeUrl: 'https://youtube.com/@gurnoorsingh',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'data-analytics':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'full-stack':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'ai-automation':
        return 'bg-accent/10 text-accent border-accent/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work across data analytics, full-stack development, and AI automation. 
            Each project represents a real-world problem solved through innovative technology solutions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeFilter === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`
                  flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 border
                  ${isActive 
                    ? getCategoryColor(category.id.replace('all', 'primary')) + ' shadow-lg scale-105' 
                    : 'bg-card hover:bg-card/80 text-muted-foreground hover:text-foreground border-card-border'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
                <Badge variant="outline" className="ml-1">
                  {category.count}
                </Badge>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="glass overflow-hidden hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category.replace('-', ' ')}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 gradient-text">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="cyber" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="neon" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.youtubeUrl, '_blank')}
                  >
                    <Youtube className="w-4 h-4 mr-2" />
                    Watch
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Want to See More?</h3>
            <p className="text-muted-foreground mb-6">
              These are just highlights of my work. I'm always building new projects and 
              experimenting with cutting-edge technologies.
            </p>
            <Button 
              variant="neon" 
              size="lg"
              onClick={() => window.open('https://github.com/gurnoorsingh', '_blank')}
              className="hover-lift"
            >
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;