
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useContactForm } from '@/utils/contactForm';
import { cn } from '@/lib/utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    submitContactForm
  } = useContactForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const success = await submitContactForm({
        ...formData
      });
      if (success) {
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          message: ''
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [{
    icon: Mail,
    title: 'Email',
    details: 'mahatienterprises09@gmail.com',
    link: 'mailto:mahatienterprises09@gmail.com'
  }, {
    icon: Phone,
    title: 'Phone',
    details: '+91 7975414686, +91 9380114195',
    link: 'tel:+917975414686'
  }, {
    icon: MapPin,
    title: 'Location',
    details: 'Bangalore, Karnataka, India',
    link: 'https://maps.google.com/?q=Bangalore,Karnataka,India'
  }];

  return <section id="contact" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium uppercase tracking-wide text-primary/70 bg-primary/5 px-4 py-1 rounded-full inline-block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mt-2 mb-4 relative inline-block">
            Contact Us
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary/20 rounded-full"></span>
          </h2>
          <p className="text-muted-foreground mt-6">
            Ready to elevate your business with our premium services? Reach out to us today.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <AnimatedSection animation="slide-in-left">
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-border/20">
              <h3 className="text-xl font-semibold mb-6 text-primary">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary/80 mb-1">
                      Full Name
                    </label>
                    <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2.5 bg-secondary/30 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200" placeholder="Your name" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary/80 mb-1">
                      Email Address
                    </label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 bg-secondary/30 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary/80 mb-1">
                      Phone Number
                    </label>
                    <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 bg-secondary/30 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200" placeholder="Your phone number" />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-primary/80 mb-1">
                      Location (Optional)
                    </label>
                    <input id="location" name="location" type="text" value={formData.location} onChange={handleChange} className="w-full px-4 py-2.5 bg-secondary/30 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200" placeholder="Your location" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary/80 mb-1">
                    How can we help you?
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-2.5 bg-secondary/30 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200" placeholder="Tell us about your requirements..."></textarea>
                </div>
                
                <button type="submit" disabled={isSubmitting} className={cn("inline-flex items-center justify-center rounded-md w-full", "bg-primary text-primary-foreground", "px-6 py-3 font-medium", "transition-all duration-300 ease-out-expo", "hover:shadow-lg hover:shadow-primary/20 hover:translate-y-[-2px]", "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2", isSubmitting && "opacity-70 cursor-not-allowed")}>
                  {isSubmitting ? <>Processing...</> : <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>}
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <AnimatedSection animation="slide-in-right">
              <div className="mb-8 bg-white/50 p-6 md:p-8 rounded-xl border border-primary/10 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-primary relative inline-block">
                  Contact Information
                  <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-primary/30 rounded-full"></span>
                </h3>
                <p className="text-muted-foreground mb-8">
                  Have questions or ready to start a conversation? 
                  Reach out to us directly through any of these channels.
                </p>
                
                <div className="space-y-6">
                  {contactDetails.map((item, index) => {
                  const Icon = item.icon;
                  return <div key={index} className="flex items-start group">
                        <div className="rounded-full bg-primary/10 p-3 mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-base font-medium">{item.title}</h4>
                          <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors group-hover:translate-x-1 inline-block duration-300" target="_blank" rel="noopener noreferrer">
                            {item.details}
                          </a>
                        </div>
                      </div>;
                })}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={300}>
              
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>;
};

export default Contact;
