import { motion } from 'motion/react';
import { User, Users, Flower2, Lightbulb } from 'lucide-react';
import bgImg from '../assets/images/green_water_reflection_1782576078341.jpg';

const services = [
  {
    title: 'Individual Therapy',
    description: 'One-on-one sessions tailored to your unique psychological landscape, fostering deep personal growth and healing.',
    icon: User,
  },
  {
    title: 'Couples Counseling',
    description: 'Navigate relationship challenges and build stronger, more resilient connections with your partner.',
    icon: Users,
  },
  {
    title: 'Mindfulness Coaching',
    description: 'Learn grounding techniques and presence practices to manage anxiety and enhance daily well-being.',
    icon: Flower2,
  },
  {
    title: 'Wellness Workshops',
    description: 'Group sessions focused on emotional intelligence, stress management, and building bold confidence.',
    icon: Lightbulb,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-terra font-medium tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Our Offerings</span>
          <h2 className="text-4xl font-serif text-cream mb-6 drop-shadow-lg">Pathways to Healing</h2>
          <p className="text-cream/90 drop-shadow-md">
            We provide comprehensive support tailored to your unique journey. Each service is designed to help you uncover your inner strength.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream p-8 rounded-2xl shadow-sm border border-sage/10 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mb-6 text-sage group-hover:bg-sage group-hover:text-cream transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-serif text-charcoal mb-3">{service.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
