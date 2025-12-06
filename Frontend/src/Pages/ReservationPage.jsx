import React, { useState } from 'react';
import { ImageWithFallback } from '../assets/images/ImageWithFallback';

const ReservationPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

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
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            alt="Restaurant table setting" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative">
          <div className="inline-block mb-6">
            <p className="text-primary text-sm tracking-[0.3em] uppercase">Book Your Experience</p>
          </div>
          <h1 className="text-6xl md:text-7xl text-background mb-8 tracking-tight">Reservations</h1>
          <p className="text-background/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Reserve your table and prepare for an unforgettable culinary journey 
            along the French coastline.
          </p>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto">
            {/* Left Column - Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl mb-8 tracking-tight">Plan Your Visit</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether it's an intimate dinner for two or a celebration with friends, 
                  we're here to make your dining experience exceptional.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 tracking-wide">Opening Hours</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Monday - Thursday: 5:00 PM - 10:00 PM<br />
                      Friday - Saturday: 5:00 PM - 11:00 PM<br />
                      Sunday: 5:00 PM - 9:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 tracking-wide">Location</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      123 Trendy Avenue<br />
                      Downtown District<br />
                      City, State 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 tracking-wide">Contact</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Phone: (555) 123-4567<br />
                      Email: reservations@petitpecheur.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For parties larger than 8 guests or private dining inquiries, 
                  please call us directly at (555) 123-4567.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-muted p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm tracking-wider uppercase mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm tracking-wider uppercase mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm tracking-wider uppercase mb-3">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm tracking-wider uppercase mb-3">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm tracking-wider uppercase mb-3">
                      Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm tracking-wider uppercase mb-3">
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm tracking-wider uppercase mb-3">
                    Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-6 py-4 bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Dietary restrictions, occasion, seating preferences..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full px-10 py-5 bg-primary text-secondary tracking-widest uppercase text-sm transition-all duration-300 hover:bg-primary/90"
                >
                  Confirm Reservation
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  You will receive a confirmation email within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home Link */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <button 
            onClick={() => onNavigate('home')}
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm tracking-wider uppercase">Back to Home</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ReservationPage;