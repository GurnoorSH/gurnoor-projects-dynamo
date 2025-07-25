import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Youtube,
  Send,
  Clock,
  Globe,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // TODO: Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_99ns43j';  // e.g., 'service_abc123'
  const EMAILJS_TEMPLATE_ID = 'template_va5dyro'; // e.g., 'template_xyz789'
  const EMAILJS_PUBLIC_KEY = 'o4dUw0nI5j4n9-smm';   // e.g., 'abcdefghijklmnop'

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gurnoor1523@gmail.com',
      href: 'mailto:gurnoor1523@gmail.com',
      color: 'primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9780444913',
      href: 'tel:+919780444913',
      color: 'secondary'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Punjab, India',
      href: null,
      color: 'accent'
    },
    {
      icon: Clock,
      label: 'Availability',
      value: 'Open to opportunities',
      href: null,
      color: 'primary'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/gurnoorsingh09',
      color: 'primary'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/gurnoorsingh',
      color: 'secondary'
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://youtube.com/@gurnoorsingh',
      color: 'accent'
    },
    {
      icon: Globe,
      label: 'Portfolio',
      href: '#',
      color: 'primary'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: 'Name Required',
        description: 'Please enter your name.',
        variant: 'destructive'
      });
      return false;
    }

    if (!formData.email.trim()) {
      toast({
        title: 'Email Required',
        description: 'Please enter your email address.',
        variant: 'destructive'
      });
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
        variant: 'destructive'
      });
      return false;
    }

    if (!formData.subject.trim()) {
      toast({
        title: 'Subject Required',
        description: 'Please enter a subject.',
        variant: 'destructive'
      });
      return false;
    }

    if (!formData.message.trim()) {
      toast({
        title: 'Message Required',
        description: 'Please enter your message.',
        variant: 'destructive'
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if EmailJS is configured
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      toast({
        title: 'Configuration Required',
        description: 'Please configure your EmailJS credentials first.',
        variant: 'destructive'
      });
      console.error('EmailJS not configured. Please update the credentials in the component.');
      return;
    }

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        to_email: 'gurnoor1523@gmail.com', // Your email
        reply_to: formData.email.trim()
      };

      console.log('Sending email with params:', templateParams);

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('EmailJS Response:', response);

      // Success notification
      toast({
        title: 'Message Sent Successfully! ✅',
        description: 'Thank you for reaching out. I\'ll get back to you within 24 hours!',
      });
      
      // Reset form
      setFormData({ 
        name: '', 
        email: '', 
        subject: '', 
        message: '' 
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Error notification
      toast({
        title: 'Failed to Send Message ❌',
        description: 'Something went wrong. Please try again or contact me directly via email.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 text-primary';
      case 'secondary':
        return 'bg-secondary/10 text-secondary';
      case 'accent':
        return 'bg-accent/10 text-accent';
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  return (
    <section id="contact" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'm always eager to connect with fellow developers, potential employers, and innovators.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently seeking full-time opportunities in software development, 
                data analysis, or AI/ML roles. Whether you're looking for a dedicated 
                team member or have an exciting project in mind, I'd love to hear from you.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className={`w-12 h-12 ${getColorClasses(item.color)} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-card-border">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="glass"
                      size="icon"
                      className="hover-lift"
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      <social.icon className="w-5 h-5" />
                    </Button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="glass p-6">
              <h4 className="font-semibold mb-4 gradient-text">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">10+</div>
                  <div className="text-sm text-muted-foregoing">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Commitment</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass p-8">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="glass"
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glass"
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="glass"
                  placeholder="What's this about?"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="glass min-h-[120px]"
                  placeholder="Tell me about your project or opportunity..."
                  disabled={isSubmitting}
                />
              </div>

              <Button 
                type="submit" 
                variant="neon" 
                size="lg" 
                className="w-full hover-lift"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              I typically respond within 24 hours. Looking forward to hearing from you!
            </p>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Start Something Amazing?</h3>
            <p className="text-muted-foreground mb-6">
              Whether it's a full-time position, freelance project, or just a conversation about technology, 
              I'm always excited to explore new opportunities and challenges.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                variant="neon" 
                onClick={() => window.open('mailto:gurnoor1523@gmail.com', '_blank')}
                className="hover-lift"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
              <Button 
                variant="cyber" 
                onClick={() => window.open('https://linkedin.com/in/gurnoorsingh09', '_blank')}
                className="hover-lift"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;