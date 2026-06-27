import { motion } from 'motion/react';
import bgImg from '../assets/images/green_water_reflection_about_1782576366965.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImg} 
          alt="Green water reflection" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl"
        >
          <div className="text-center mb-10">
            <span className="text-terra font-medium tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Our Philosophy</span>
            <h2 className="text-4xl font-serif text-cream drop-shadow-lg">Boldly Becoming Who You Are</h2>
          </div>
          
          <div className="space-y-6 text-cream/90 leading-relaxed text-lg max-w-3xl mx-auto drop-shadow-md">
            <p>
              At BE BOLD B U, we believe that psychological wellness isn't about fixing what's broken—it's about uncovering what's always been whole. We are a sanctuary for those ready to face their shadows and embrace their light.
            </p>
            <p>
              Our approach integrates evidence-based psychological practices with deep, empathetic listening. We recognize that every individual's journey is unique, requiring a custom approach to therapy and personal growth.
            </p>
            <div className="mt-10 pt-8 border-t border-white/20 text-center">
              <p className="font-medium text-cream italic text-xl mb-6">
                "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
              </p>
              <div>
                <h4 className="font-bold text-cream">Mansi Mathur</h4>
                <span className="text-sm text-cream/70 uppercase tracking-widest mt-1 block">Founder</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
