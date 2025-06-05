
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="h-full card-hover bg-white border-forest-200 hover:border-coral-300">
      <CardContent className="p-6 lg:p-8">
        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-coral-100 rounded-xl flex items-center justify-center mb-6">
          <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-coral-500" />
        </div>
        <h3 className="text-xl lg:text-2xl font-bold text-forest-800 mb-4">{title}</h3>
        <p className="text-forest-600 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm lg:text-base text-forest-700">
              <div className="w-1.5 h-1.5 bg-coral-500 rounded-full mt-2 mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
