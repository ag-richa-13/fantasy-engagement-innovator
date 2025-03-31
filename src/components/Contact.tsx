
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-pm-gray/50 relative">
      <div className="bg-blur-circle w-[300px] h-[300px] bg-pm-accent/10 bottom-20 right-20"></div>
      
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="inline-block text-gradient pb-2 mb-2">Contact Me</h2>
          <div className="h-1 w-20 bg-pm-accent/50 mx-auto"></div>
          <p className="text-pm-light/70 mt-4 max-w-2xl mx-auto">
            Let's connect! Feel free to reach out for any inquiries or opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-8 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-medium mb-6">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-pm-accent/20 text-pm-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:Kartikkhandelwal1104@gmail.com" 
                    className="text-pm-light/80 hover:text-pm-accent transition-colors"
                  >
                    Kartikkhandelwal1104@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-pm-accent/20 text-pm-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a 
                    href="tel:+919509264338" 
                    className="text-pm-light/80 hover:text-pm-accent transition-colors"
                  >
                    +91 9509264338
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-pm-accent/20 text-pm-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-pm-light/80">
                    78-Tulsi, Shalimar, Alwar
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 pt-4 border-t border-white/10">
              <a 
                href="https://www.linkedin.com/in/pm-kartik" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-pm-gray hover:bg-pm-accent/20 text-pm-light transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a 
                href="mailto:Kartikkhandelwal1104@gmail.com" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-pm-gray hover:bg-pm-accent/20 text-pm-light transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </div>
          
          <div className="glass p-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-medium mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-pm-light/90 mb-2 text-sm">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-pm-gray border border-white/5 text-pm-light focus:border-pm-accent/50 focus:outline-none focus:ring-1 focus:ring-pm-accent/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-pm-light/90 mb-2 text-sm">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-pm-gray border border-white/5 text-pm-light focus:border-pm-accent/50 focus:outline-none focus:ring-1 focus:ring-pm-accent/50 transition-colors"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-pm-light/90 mb-2 text-sm">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-pm-gray border border-white/5 text-pm-light focus:border-pm-accent/50 focus:outline-none focus:ring-1 focus:ring-pm-accent/50 transition-colors resize-none"
                  placeholder="Your message"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-pm-accent text-white font-medium hover:bg-pm-accent/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
