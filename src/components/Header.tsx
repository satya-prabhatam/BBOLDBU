import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-cream/90 backdrop-blur-md z-50 border-b border-sage/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <span className="font-serif text-2xl font-bold tracking-wider text-charcoal">BE BOLD<span className="text-terra"> B U</span></span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <a key={item} href={`/#${item.toLowerCase()}`} className="text-charcoal/80 hover:text-terra transition-colors font-medium">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link to="/book" className="bg-charcoal text-cream px-6 py-2.5 rounded-full hover:bg-sage transition-colors duration-300 font-medium">
              Book a Session
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-charcoal">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-cream border-b border-sage/20 px-4 pt-2 pb-6 space-y-4"
        >
          {['Home', 'Services', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`/#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="block text-charcoal/80 hover:text-terra font-medium"
            >
              {item}
            </a>
          ))}
          <Link to="/book" onClick={() => setIsOpen(false)} className="block text-center mt-4 bg-charcoal text-cream px-6 py-2.5 rounded-full hover:bg-sage transition-colors duration-300 font-medium">
            Book a Session
          </Link>
        </motion.div>
      )}
    </header>
  );
}
