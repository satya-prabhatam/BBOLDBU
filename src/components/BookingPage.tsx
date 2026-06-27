import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import grassBackground from '../assets/images/soft_grass_background_1782578651346.jpg';

export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      date: formData.get('date') || 'Not specified',
      time: formData.get('time') || 'Not specified',
      message: formData.get('message') || 'None',
      _subject: `New Booking Request from ${formData.get('name')}`,
      _template: 'table'
    };

    try {
      await fetch("https://formsubmit.co/ajax/bboldbu061@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Form submission error:", error);
      // Fallback to mailto
      const subject = `New Booking Request: ${data.service} - ${data.name}`;
      const body = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.service}\nDate: ${data.date}\nTime: ${data.time}\nMessage: ${data.message}`;
      window.location.href = `mailto:bboldbu061@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div 
        className="min-h-[80vh] pt-32 flex items-center justify-center px-4 relative bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${grassBackground})` }}
      >
        <div className="absolute inset-0 bg-cream/60 backdrop-blur-sm z-0"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-3xl shadow-xl max-w-lg text-center border border-sage/20 relative z-10"
        >
          <div className="w-20 h-20 bg-sage/20 text-sage rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-serif text-charcoal mb-4">Request Received</h2>
          <p className="text-charcoal/70 mb-8 text-lg">
            Thank you for reaching out. We will review your appointment request and contact you shortly to confirm the details.
          </p>
          <button 
            onClick={() => window.location.href = '/'} 
            className="bg-charcoal text-cream px-8 py-3 rounded-full hover:bg-terra transition-colors font-medium"
          >
            Return to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div 
      className="pt-32 pb-20 min-h-screen relative bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${grassBackground})` }}
    >
      <div className="absolute inset-0 bg-cream/60 backdrop-blur-sm z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-terra font-medium tracking-widest uppercase text-sm block mb-4">Take the First Step</span>
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">Book a Session</h1>
          <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">
            Please fill out the form below to request an appointment. Select your preferred service and we will get back to you to confirm availability.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-sage/20"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="space-y-2 relative">
                <label htmlFor="name" className="text-sm font-medium text-charcoal/80 uppercase tracking-wider block ml-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-charcoal/40" />
                  </div>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-cream/50 border border-sage/30 rounded-xl focus:ring-2 focus:ring-terra/50 focus:border-terra/50 transition-all outline-none text-charcoal"
                    placeholder="Your name"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-2 relative">
                <label htmlFor="email" className="text-sm font-medium text-charcoal/80 uppercase tracking-wider block ml-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-charcoal/40" />
                  </div>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-cream/50 border border-sage/30 rounded-xl focus:ring-2 focus:ring-terra/50 focus:border-terra/50 transition-all outline-none text-charcoal"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2 relative">
                <label htmlFor="phone" className="text-sm font-medium text-charcoal/80 uppercase tracking-wider block ml-1">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-charcoal/40" />
                  </div>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-cream/50 border border-sage/30 rounded-xl focus:ring-2 focus:ring-terra/50 focus:border-terra/50 transition-all outline-none text-charcoal"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2 relative">
                <label htmlFor="service" className="text-sm font-medium text-charcoal/80 uppercase tracking-wider block ml-1">Service Requested</label>
                <div className="relative">
                  <select 
                    id="service" 
                    name="service"
                    required
                    className="w-full pl-4 pr-10 py-3 bg-cream/50 border border-sage/30 rounded-xl focus:ring-2 focus:ring-terra/50 focus:border-terra/50 transition-all outline-none text-charcoal appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Individual Therapy">Individual Therapy</option>
                    <option value="Couples Counseling">Couples Counseling</option>
                    <option value="Mindfulness Coaching">Mindfulness Coaching</option>
                    <option value="Wellness Workshops">Wellness Workshops</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-charcoal/40" />
                  </div>
                </div>
              </div>

              {/* Preferred Date */}
              <div className="space-y-2 relative">
                <label htmlFor="date" className="text-sm font-medium text-charcoal/80 uppercase tracking-wider block ml-1">Preferred Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-charcoal/40" />
                  </div>
                  <input 
                    type="date" 
                    id="date" 
                    name="date"
                    className="w-full pl-11 pr-4 py-3 bg-cream/50 border border-sage/30 rounded-xl focus:ring-2 focus:ring-terra/50 focus:border-terra/50 transition-all outline-none text-charcoal"
                  />
                </div>
              </div>

              {/* Preferred Time */}
              <div className="space-y-2 relative">
                <label htmlFor="time" className="text-sm font-medium text-charcoal/80 uppercase tracking-wider block ml-1">Preferred Time</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Clock className="h-5 w-5 text-charcoal/40" />
                  </div>
                  <select 
                    id="time" 
                    name="time"
                    className="w-full pl-11 pr-10 py-3 bg-cream/50 border border-sage/30 rounded-xl focus:ring-2 focus:ring-terra/50 focus:border-terra/50 transition-all outline-none text-charcoal appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a time</option>
                    <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                    <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                    <option value="Evening (4PM - 7PM)">Evening (4PM - 7PM)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-charcoal/40" />
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2 relative">
              <label htmlFor="message" className="text-sm font-medium text-charcoal/80 uppercase tracking-wider block ml-1">Additional Information (Optional)</label>
              <div className="relative">
                <div className="absolute top-3 left-0 pl-4 flex items-start pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-charcoal/40" />
                </div>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  className="w-full pl-11 pr-4 py-3 bg-cream/50 border border-sage/30 rounded-xl focus:ring-2 focus:ring-terra/50 focus:border-terra/50 transition-all outline-none text-charcoal resize-none"
                  placeholder="Tell us a bit about what brings you here..."
                ></textarea>
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-terra text-white px-8 py-4 rounded-xl hover:bg-charcoal transition-colors duration-300 font-medium text-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Request...' : 'Request Appointment'}
              </button>
              <p className="text-center text-sm text-charcoal/50 mt-4">
                We'll contact you within 24 hours to confirm your appointment.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
