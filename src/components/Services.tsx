
import { Palette, Code, Zap, Leaf } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Sustainable Branding',
      description: 'Create eco-friendly brand identities that resonate with conscious consumers while maintaining visual impact.',
      features: [
        'Eco-conscious color palettes',
        'Sustainable material guidelines',
        'Carbon-neutral print solutions',
        'Green certification support'
      ]
    },
    {
      icon: Code,
      title: 'Green Web Development',
      description: 'Build fast, efficient websites optimized for minimal energy consumption without sacrificing functionality.',
      features: [
        'Optimized code architecture',
        'Green hosting solutions',
        'Performance optimization',
        'Accessibility compliance'
      ]
    },
    {
      icon: Zap,
      title: 'Digital Optimization',
      description: 'Enhance existing digital products to reduce environmental impact while improving user experience.',
      features: [
        'Performance auditing',
        'Carbon footprint analysis',
        'UX/UI improvements',
        'Technical optimization'
      ]
    },
    {
      icon: Leaf,
      title: 'Impact Consulting',
      description: 'Strategic guidance on implementing sustainable practices across your entire digital ecosystem.',
      features: [
        'Sustainability roadmaps',
        'Team training programs',
        'Vendor assessment',
        'Impact measurement'
      ]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-forest-800 mb-6">
            Our Sustainable Services
          </h2>
          <p className="text-lg lg:text-xl text-forest-600 max-w-3xl mx-auto">
            We offer comprehensive eco-friendly design solutions that help your business
            thrive while protecting our planet for future generations.
          </p>
        </div>

        {/* LG Breakpoint: 4-column grid with precise spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
