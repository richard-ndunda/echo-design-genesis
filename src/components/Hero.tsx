
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-gradient py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-forest-800 mb-6 animate-fade-in">
            Sustainable Design for a
            <span className="text-coral-500 block lg:inline"> Better Tomorrow</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-forest-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            We create beautiful, eco-conscious digital experiences that help brands
            connect with environmentally aware audiences while reducing their carbon footprint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button size="lg" className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 text-lg">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-forest-400 text-forest-700 hover:bg-forest-50 px-8 py-3 text-lg"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
