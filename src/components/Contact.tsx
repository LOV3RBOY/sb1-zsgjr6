import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-offwhite">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-charcoal text-center">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-charcoal mb-2">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <div>
                <label htmlFor="email" className="block text-charcoal mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <div>
                <label htmlFor="message" className="block text-charcoal mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-gold" size={24} />
              <span className="text-charcoal">info@loverboy.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-gold" size={24} />
              <span className="text-charcoal">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-gold" size={24} />
              <span className="text-charcoal">123 Fashion St, New York, NY 10001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;