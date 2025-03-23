
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

const Clients = () => {
  const clients = [
    {
      name: "EasyBuy",
      description: "A new-age youthful fashion brand under Landmark Group, one of the largest multinational retailers in the country.",
      logo: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      alt: "EasyBuy logo - fashion retail brand"
    },
    {
      name: "Maersk",
      description: "Global leader in Transportation, Logistics, Supply Chain and Storage solutions.",
      logo: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      alt: "Maersk logo - global logistics company"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/5 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-12">
            <span className="text-sm font-medium uppercase tracking-wide text-primary/70">
              Our Trusted Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mt-2 mb-4">
              Prestigious Clients We Serve
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We take immense pride in our partnerships with industry leaders, delivering excellence that meets the highest standards.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {clients.map((client, index) => (
            <AnimatedSection key={index} animation="slide-in-right" delay={index * 100}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-1 scale-[1.01] opacity-70 transition-all duration-500 group-hover:scale-[1.03] group-hover:rotate-2 group-hover:opacity-100 -z-10"></div>
                <div className={cn(
                  "relative rounded-xl overflow-hidden",
                  "bg-card/50 backdrop-blur-sm",
                  "border border-primary/10",
                  "p-6 md:p-8",
                  "transition-all duration-300",
                  "hover:shadow-xl hover:shadow-primary/5",
                  "group-hover:transform group-hover:-translate-y-1"
                )}>
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-lg overflow-hidden bg-black/5">
                      <img 
                        src={client.logo} 
                        alt={client.alt}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-medium mb-2 group-hover:text-primary transition-colors">
                        {client.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {client.description}
                      </p>
                      <div className="inline-flex">
                        <span className={cn(
                          "flex items-center text-sm font-medium",
                          "text-primary/70 group-hover:text-primary",
                          "transition-colors duration-200"
                        )}>
                          Trusted Partnership
                          <ExternalLink className="ml-1 h-3 w-3 opacity-70" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
