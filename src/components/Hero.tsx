import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import bgImg from '../assets/images/dark_water_sunset_1782575742137.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImg} 
          alt="Dark water at sunset" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-terra font-medium tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Psychological Wellness</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream leading-tight mb-6 drop-shadow-lg">
            Embrace Your <br />
            <span className="italic text-cream/90">Authentic Self</span>
          </h1>
          <p className="text-lg md:text-xl text-cream/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
            A safe space to explore your mind, heal your heart, and empower your future. Discover the courage to simply be you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="bg-cream text-charcoal px-8 py-3.5 rounded-full hover:bg-sage hover:text-cream transition-colors duration-300 font-medium flex items-center justify-center gap-2 group">
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="border border-cream text-cream px-8 py-3.5 rounded-full hover:bg-cream/20 backdrop-blur-sm transition-colors duration-300 font-medium text-center">
              Our Philosophy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
