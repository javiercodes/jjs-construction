"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import CTASection from "@/components/CTASection";

const serviceOptions = [
  "General Contracting",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Room Additions",
  "Commercial Construction",
  "Roofing",
  "Painting",
  "Flooring",
  "Outdoor & Landscaping",
  "Residential Remodeling",
  "Other",
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    honeypot: "", // Spam protection
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Honeypot check
    if (formData.honeypot) return;

    setSending(true);
    // TODO: Connect to actual form handler (e.g., Formspree, SendGrid, or custom API)
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="/images/Commercial Construction/commercial-360ten-exterior-01.jpeg"
          alt="Contact JJ's Construction"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container-custom mx-auto px-4">
          <nav className="text-gray-300 text-sm mb-4">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
          <p className="text-gray-200 text-lg mt-3 max-w-xl">
            Ready to start your project? Get in touch for a free estimate.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">
                Get a Free Estimate
              </h2>
              <p className="text-charcoal/70 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    We&apos;ve received your request and will contact you within 24 hours.
                    For immediate assistance, call us at{" "}
                    <a href="tel:+16266463423" className="font-bold underline">(626) 646-3423</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot - hidden from users */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block font-heading font-semibold text-sm text-primary mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-charcoal min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-heading font-semibold text-sm text-primary mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(626) 555-0123"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-charcoal min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block font-heading font-semibold text-sm text-primary mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-charcoal min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block font-heading font-semibold text-sm text-primary mb-1.5">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-charcoal min-h-[44px] bg-white"
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-heading font-semibold text-sm text-primary mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project — scope, timeline, budget, etc."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-charcoal resize-vertical"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full md:w-auto text-lg !py-4 !px-12 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending..." : "Send Request"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Phone */}
              <div className="bg-gray-light rounded-xl p-6">
                <h3 className="font-heading font-bold text-primary mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Call Us
                </h3>
                <a href="tel:+16266463423" className="text-2xl font-heading font-bold text-accent hover:text-accent-dark transition-colors">
                  (626) 646-3423
                </a>
                <p className="text-charcoal/60 text-sm mt-1">Available during business hours</p>
              </div>

              {/* Email */}
              <div className="bg-gray-light rounded-xl p-6">
                <h3 className="font-heading font-bold text-primary mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Email Us
                </h3>
                <a href="mailto:john@jjs-construction.org" className="text-accent font-semibold hover:text-accent-dark transition-colors">
                  john@jjs-construction.org
                </a>
                <p className="text-charcoal/60 text-sm mt-1">We respond within 24 hours</p>
              </div>

              {/* Location */}
              <div className="bg-gray-light rounded-xl p-6">
                <h3 className="font-heading font-bold text-primary mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Location
                </h3>
                <p className="text-charcoal/80 font-semibold">La Verne, California</p>
                <p className="text-charcoal/60 text-sm mt-1">Serving La Verne, San Dimas, Glendora, Claremont &amp; surrounding areas</p>
              </div>

              {/* Hours */}
              <div className="bg-gray-light rounded-xl p-6">
                <h3 className="font-heading font-bold text-primary mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Business Hours
                </h3>
                {/* TODO: Confirm actual business hours */}
                <div className="text-sm space-y-1 text-charcoal/70">
                  <div className="flex justify-between"><span>Monday - Friday</span><span className="font-semibold text-charcoal">7:00 AM - 6:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="font-semibold text-charcoal">8:00 AM - 2:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="font-semibold text-charcoal">Closed</span></div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-md h-[250px]">
                {/* TODO: Replace with actual Google Maps embed with API key */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26510.65614483627!2d-117.78!3d34.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32df893f0e46b%3A0x7530f8c5b9ebff76!2sLa%20Verne%2C%20CA!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JJ's Construction - La Verne, CA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Prefer to Talk?"
        subtext="Give us a call anytime during business hours. We're happy to discuss your project over the phone and schedule an on-site consultation."
      />
    </div>
  );
}
