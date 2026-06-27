import { motion } from 'motion/react';
import bgImg from '../assets/images/warm_golden_grass_1782577712064.jpg';

export default function Introduction() {
  return (
    <section id="introduction" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImg} 
          alt="Warm golden grass" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center flex flex-col items-center bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl"
        >
          <span className="text-terra font-medium tracking-widest uppercase text-sm block drop-shadow-md">Welcome</span>
          <h2 className="text-4xl md:text-5xl font-serif text-cream leading-tight drop-shadow-lg">
            Lead. Inspire. <br />
            <span className="italic text-cream/90">Transform.</span>
          </h2>
          <div className="w-16 h-1 bg-terra rounded-full mb-8 shadow-sm"></div>
          
          <p className="text-cream/90 leading-relaxed text-lg max-w-2xl drop-shadow-md">
            Hello, I'm Mansi Mathur, the founder of BE BOLD B U. My mission is to guide you on a journey of psychological wellness and self-discovery, helping you uncover the strength and authenticity that already resides within you.
          </p>
          <p className="text-cream/90 leading-relaxed text-lg max-w-2xl drop-shadow-md">
            We provide a safe, empathetic space to explore your mind, face your challenges, and heal your heart. Whether you are navigating difficult transitions or simply looking to grow and realize your true potential, I am here to support you every step of the way.
          </p>
          
          <div className="pt-8">
            <h4 className="font-bold text-cream text-xl drop-shadow-md">Mansi Mathur</h4>
            <span className="text-sm text-terra uppercase tracking-widest mt-1 block drop-shadow-md">Founder</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
