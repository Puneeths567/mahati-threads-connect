
import { 
  Users,
  Shirt, 
  Warehouse,
  Utensils,
  Building,
  Forklift,
  Package
} from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

const ServiceCard = ({ title, description, icon: Icon, delay }: ServiceCardProps) => {
  return (
    <AnimatedSection animation="fade-in" delay={delay}>
      <div className="service-card bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-border/40 h-full flex flex-col">
        <div className="rounded-full bg-primary/5 w-12 h-12 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm flex-grow">{description}</p>
      </div>
    </AnimatedSection>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Manpower Supply',
      description: 'Comprehensive skilled workforce solutions tailored for businesses across various industries including manufacturing, warehousing, and logistics.',
      icon: Users,
      delay: 100
    },
    {
      title: 'Warehouse Staffing',
      description: 'Specialized pickers, loaders, and warehouse staff to optimize your storage and distribution operations.',
      icon: Warehouse,
      delay: 200
    },
    {
      title: 'Food Industry Workers',
      description: 'Skilled staff for food processing, packaging, and warehouse operations in the food industry.',
      icon: Utensils,
      delay: 300
    },
    {
      title: 'Garment Refinishing',
      description: 'Expert finishing touches that elevate the quality and appearance of garments to professional standards.',
      icon: Shirt,
      delay: 400
    },
    {
      title: 'Manufacturing Support',
      description: 'Skilled operators and laborers for manufacturing facilities across various production processes.',
      icon: Building,
      delay: 500
    },
    {
      title: 'Loading & Logistics',
      description: 'Efficient logistics support personnel for handling merchandise and materials with care and precision.',
      icon: Forklift,
      delay: 600
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium uppercase tracking-wide text-primary/70">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mt-2 mb-4">
            Manpower Solutions
          </h2>
          <p className="text-muted-foreground">
            Mahati Enterprises is your solution for professional manpower supply needs. We provide skilled workers across various industries, ensuring efficient operations and quality service.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
