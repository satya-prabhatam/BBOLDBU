import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <span className="font-serif text-3xl font-bold tracking-wider mb-6 block">BE BOLD<span className="text-terra"> B U</span></span>
            <p className="text-cream/70 max-w-sm mb-8 leading-relaxed">
              Dedicated to psychological wellness, radical authenticity, and compassionate growth. Start your journey toward your truest self today.
            </p>
            <a href="mailto:Bboldbu061@gmail.com" className="inline-flex items-center gap-2 text-terra hover:text-cream transition-colors">
              Bboldbu061@gmail.com
            </a>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-cream/90">Quick Links</h4>
            <ul className="space-y-3 text-cream/70">
              <li><a href="/#home" className="hover:text-terra transition-colors">Home</a></li>
              <li><a href="/#introduction" className="hover:text-terra transition-colors">Welcome</a></li>
              <li><a href="/#services" className="hover:text-terra transition-colors">Services</a></li>
              <li><a href="/#about" className="hover:text-terra transition-colors">Philosophy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-cream/90">Location</h4>
            <address className="text-cream/70 not-italic space-y-2">
              <p>Pune, Maharashtra</p>
              <p>India</p>
              <p className="pt-4">Available for virtual sessions globally.</p>
            </address>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/50">
          <p>&copy; {new Date().getFullYear()} BE BOLD B U. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/book" className="hover:text-cream transition-colors">Book a Session</Link>
            <p className="flex items-center gap-1">
              Made with <Heart size={14} className="text-terra" /> for wellness
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
