
import { Leaf, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-800 text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-coral-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">EcoDesign</span>
            </div>
            <p className="text-forest-200 mb-6 leading-relaxed">
              Creating sustainable digital experiences that make a positive impact on both your business and our planet.
            </p>
            <div className="text-sm text-forest-300">
              © 2024 EcoDesign Studio. All rights reserved.
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-forest-200">
              <li><a href="#" className="hover:text-coral-400 transition-colors">Sustainable Branding</a></li>
              <li><a href="#" className="hover:text-coral-400 transition-colors">Green Web Development</a></li>
              <li><a href="#" className="hover:text-coral-400 transition-colors">Digital Optimization</a></li>
              <li><a href="#" className="hover:text-coral-400 transition-colors">Impact Consulting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-forest-200">
              <li><a href="#" className="hover:text-coral-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-coral-400 transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-coral-400 transition-colors">Sustainability Report</a></li>
              <li><a href="#" className="hover:text-coral-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-forest-200">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-coral-400" />
                <span>hello@ecodesign.studio</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-coral-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-coral-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
