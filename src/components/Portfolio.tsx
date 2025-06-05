
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'GreenTech Solutions',
      category: 'Website Redesign',
      description: 'Complete sustainable rebrand for a renewable energy company, reducing site carbon footprint by 40%.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      color: 'bg-forest-500'
    },
    {
      title: 'Ocean Conservation',
      category: 'Mobile App',
      description: 'Interactive app promoting marine conservation with gamified eco-challenges.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      color: 'bg-coral-500'
    },
    {
      title: 'Urban Gardens',
      category: 'E-commerce Platform',
      description: 'Sustainable marketplace connecting urban gardeners with local, eco-friendly suppliers.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      color: 'bg-cream-600'
    },
    {
      title: 'Climate Action Hub',
      category: 'Community Platform',
      description: 'Digital platform empowering local communities to organize environmental initiatives.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      color: 'bg-forest-400'
    },
    {
      title: 'Sustainable Fashion',
      category: 'Brand Identity',
      description: 'Complete rebrand for ethical fashion startup with eco-friendly packaging design.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
      color: 'bg-coral-400'
    },
    {
      title: 'Zero Waste Tracker',
      category: 'Mobile App',
      description: 'Personal sustainability tracking app helping users reduce waste and carbon footprint.',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80',
      color: 'bg-cream-500'
    }
  ];

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-forest-800 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg lg:text-xl text-forest-600 max-w-3xl mx-auto">
            Discover how we've helped organizations create meaningful digital experiences
            while minimizing their environmental impact.
          </p>
        </div>

        {/* LG: 3-column grid, MD: 2-column, SM: 1-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden card-hover border-forest-200 hover:border-coral-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className={`${project.color} p-2 rounded-lg`}>
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/90 text-forest-700 text-sm font-medium rounded-full mb-2">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-forest-800 mb-3 group-hover:text-coral-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-forest-600 leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
