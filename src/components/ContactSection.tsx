import { motion } from 'framer-motion';

// Simple icon components for visual flair
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;


const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-surface text-on-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold md:text-5xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-on-background/80 max-w-2xl mx-auto">
            We'd love to hear from you. Visit us or send us a message.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
          {/* Contact Info */}
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-start gap-4">
              <div className="text-primary mt-1"><MapPinIcon /></div>
              <div>
                <h3 className="font-bold text-lg">Our Location</h3>
                <p className="text-on-background/80">Beachfront Road, Nungwi, Zanzibar, Tanzania</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-primary mt-1"><PhoneIcon /></div>
              <div>
                <h3 className="font-bold text-lg">Call Us</h3>
                <p className="text-on-background/80">(+255) 777 123 456</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-primary mt-1"><MailIcon /></div>
              <div>
                <h3 className="font-bold text-lg">Email Us</h3>
                <p className="text-on-background/80">reservations@bistroflow.co.tz</p>
              </div>
            </div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div 
            className="w-full md:w-1/2 h-80 md:h-96 rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <iframe
              title="BistroFlow Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507885!3d-6.194741395490337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sNational%20Monument%20(Monas)!5e0!3m2!1sen!2sid!4v1622484539812!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;