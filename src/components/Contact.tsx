
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
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { submitContactForm } = useContactForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const success = await submitContactForm({
        ...formData,
        // This would go to mahatienterprises@gmail.com in a real implementation
      });
      
      if (success) {
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          message: '',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      details: 'mahatienterprises@gmail.com',
      link: 'mailto:mahatienterprises@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 98765 43210',
      link: 'tel:+919876543210',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Bangalore, Karnataka, India',
      link: 'https://maps.google.com/?q=Bangalore,Karnataka,India',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium uppercase tracking-wide text-primary/70">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mt-2 mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            Ready to elevate your business with our premium services? Reach out to us today.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <AnimatedSection animation="slide-in-left">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-border/40">
              <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-secondary/50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-secondary/50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-secondary/50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-primary mb-1">
                      Location (Optional)
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-secondary/50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your location"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">
                    How can we help you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 bg-secondary/50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "inline-flex items-center justify-center rounded-md w-full",
                    "bg-primary text-primary-foreground",
                    "px-6 py-3 font-medium",
                    "transition-all duration-200 ease-out-expo",
                    "hover:shadow-lg hover:shadow-primary/10",
                    "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <AnimatedSection animation="slide-in-right">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8">
                  Have questions or ready to start a conversation? 
                  Reach out to us directly through any of these channels.
                </p>
                
                <div className="space-y-5">
                  {contactDetails.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <div className="rounded-full bg-primary/5 p-3 mr-4">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-base font-medium">{item.title}</h4>
                          <a 
                            href={item.link} 
                            className="text-muted-foreground hover:text-primary transition-colors"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            {item.details}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={300}>
              <div className="p-6 md:p-8 rounded-xl bg-primary/5 border border-primary/10">
                <h4 className="text-lg font-semibold mb-2">Business Hours</h4>
                <div className="space-y-1 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
