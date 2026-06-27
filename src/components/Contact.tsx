import { motion } from 'motion/react';
import { Phone, Mail, Instagram, Facebook, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-sage/10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-terra font-medium tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
          <h2 className="text-4xl font-serif text-charcoal mb-6">Connect With Us</h2>
          <p className="text-charcoal/70">
            Take the first step towards your psychological wellness journey. Reach out to schedule a consultation.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-sage/20 flex flex-col md:flex-row gap-12 items-center justify-between"
        >
          <div className="space-y-8 flex-1 w-full">
            <div>
              <h3 className="text-2xl font-serif text-charcoal mb-2">Mansi Mathur</h3>
              <p className="text-terra font-medium uppercase tracking-widest text-sm">Founder</p>
            </div>
            
            <div className="space-y-6">
              <a href="tel:813042035" className="flex items-center gap-4 text-charcoal/80 hover:text-terra transition-colors group">
                <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center group-hover:bg-terra/10 transition-colors">
                  <Phone className="w-5 h-5 text-charcoal group-hover:text-terra transition-colors" />
                </div>
                <span className="text-lg">813042035</span>
              </a>
              
              <a href="mailto:Bboldbu061@gmail.com" className="flex items-center gap-4 text-charcoal/80 hover:text-terra transition-colors group">
                <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center group-hover:bg-terra/10 transition-colors">
                  <Mail className="w-5 h-5 text-charcoal group-hover:text-terra transition-colors" />
                </div>
                <span className="text-lg">Bboldbu061@gmail.com</span>
              </a>

              <div className="flex items-start gap-4 text-charcoal/80">
                <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-charcoal" />
                </div>
                <div className="text-lg pt-2">
                  <p>Pune, Maharashtra</p>
                  <p>India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-charcoal/80">
                <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-charcoal" />
                </div>
                <span className="text-lg">Available for virtual sessions globally.</span>
              </div>
            </div>

            <div className="pt-6 border-t border-sage/20">
              <h4 className="font-medium text-charcoal mb-4">Follow Our Journey</h4>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/bboldbu?igsh=MTE1eDBmNDhiajlreQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center hover:bg-terra hover:text-white transition-all text-charcoal"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/share/1DsBGNP1tw/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center hover:bg-terra hover:text-white transition-all text-charcoal"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <div className="bg-sage/10 rounded-2xl p-8 h-full flex flex-col justify-center items-center text-center">
               <h4 className="text-2xl font-serif text-charcoal mb-4">Ready to Be Bold?</h4>
               <p className="text-charcoal/70 mb-8">
                 Your journey of self-discovery and psychological wellness begins with a single step. Reach out today.
               </p>
               <Link to="/book" className="bg-terra text-white px-8 py-3 rounded-full hover:bg-terra/90 transition-colors">
                 Book a Session
               </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
