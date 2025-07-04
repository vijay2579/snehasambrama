import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';

import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Button';

import faqsBackgroundImage from '@/images/background-faqs.jpg';

export default function JoinUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! (Form submission logged to console)');
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>Join Us - Sneha Sambrama Charity Foundation</title>
        <meta name="description" content="Join Sneha Sambrama Charity Foundation by volunteering or donating. Contact us for more information." />
      </Head>

      <div className="relative bg-slate-50 overflow-hidden">
        {/* Background Image */}
        <Image
          className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
          src={faqsBackgroundImage}
          alt="Background Image"
          width={1558}
          height={946}
          unoptimized
        />

        <Header />

        <main className="relative py-20 sm:py-32">
          <Container className="relative z-10">
            {/* Join Us Section */}
            <div className="mx-auto max-w-3xl text-center bg-white/60 backdrop-blur-lg rounded-xl p-8 mb-12">
              <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">
                Join Us
              </h2>
              <p className="mt-4 text-lg tracking-tight text-slate-700 mb-8">
                Your support can help us reach more people in need. Join us in our mission by volunteering or donating. If you'd like to be part of our efforts, get in touch:
              </p>

              <div className="space-y-2 text-slate-700 text-lg tracking-tight mb-8">
                <p>📞 Phone: +91-XXXXXXXXXX</p>
                <p>📧 Email: yourfoundation@email.com</p>
                <p>🏠 Address: Bhanuvalli, Haveri District</p>
              </div>

              <div className="flex justify-center gap-x-6">
                 {/* Placeholder link for Donate button - replace with your Razorpay integration URL */}
                 <Button href="/donate" color="green">
                    Donate Now
                 </Button>
                 <Button href="#contact-form" variant="outline" color="green">
                    Contact Us
                 </Button>
              </div>
            </div>

            {/* Contact Us Section with Form */}
            <div id="contact-form" className="mx-auto max-w-xl mt-16 bg-white/60 backdrop-blur-lg rounded-xl p-8">
              <h2 className="mb-8 text-center font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Contact Us
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <div>
                  {/* Frontend submit button - backend needed for actual submission */}
                  <Button type="submit" color="green">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>

            {/* Closing Note */}
            <div className="mx-auto max-w-3xl text-center mt-16 text-slate-700 bg-white/60 backdrop-blur-lg rounded-xl p-8">
              <p className="mb-4">—</p>
              <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 mb-4">
                Closing Note
              </h3>
              <p>Thank you for your interest and support.</p>
            </div>
          </Container>
        </main>

        <Footer />
      </div>
    </>
  );
} 