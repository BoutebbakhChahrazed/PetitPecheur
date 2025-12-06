import React, { useState } from 'react';
import { ImageWithFallback } from '../assets/images/ImageWithFallback';
import { Input } from '../Components/input';
import { Textarea } from '../Components/textarea'


const ContactPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  try {
    const response = await fetch('http://localhost:8000/api/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Thank you! We will get back to you shortly.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } else {
      alert('Error submitting form. Please try again.');
    }
  } catch (error) {
    alert('Network error. Please check your connection.');
  }
  setIsSubmitting(false);
};


  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="relative py-32 bg-secondary overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
            alt="Contact us"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/80 to-secondary"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative">
          <div className="inline-block mb-6">
            <p className="text-primary text-sm tracking-[0.3em] uppercase">Get In Touch</p>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-background mb-8 tracking-tight">
            Contact Us
          </h1>
          <p className="text-background/80 text-lg max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Whether you have questions, feedback, or special requests.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl mb-8 tracking-tight">Visit Us</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We're located in the heart of downtown, easily accessible and ready to welcome you.
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex items-start space-x-5">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 tracking-wide text-lg">Address</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      123 Trendy Avenue<br />
                      Downtown District<br />
                      City, State 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 tracking-wide text-lg">Phone</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Main: (555) 123-4567<br />
                      Reservations: (555) 123-4568
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 tracking-wide text-lg">Email</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      General: info@petitpecheur.com<br />
                      Reservations: reservations@petitpecheur.com<br />
                      Events: events@petitpecheur.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 tracking-wide text-lg">Hours</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Monday - Thursday: 5:00 PM - 10:00 PM<br />
                      Friday - Saturday: 5:00 PM - 11:00 PM<br />
                      Sunday: 5:00 PM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="mb-4 tracking-wide text-lg">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-muted p-8 lg:p-12 border border-border">
              <div className="mb-10">
                <h3 className="text-2xl lg:text-3xl mb-3 tracking-tight">Send Us a Message</h3>
                <p className="text-muted-foreground">Fill out the form and we'll be in touch soon.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm tracking-wider uppercase mb-3">
                    Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm tracking-wider uppercase mb-3">
                      Email <span className="text-primary">*</span>
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm tracking-wider uppercase mb-3">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm tracking-wider uppercase mb-3">
                    Subject <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-background"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm tracking-wider uppercase mb-3">
                    Message <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-background resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-10 py-5 bg-primary text-secondary tracking-widest uppercase text-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-sm tracking-wider uppercase">Back to Home</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
