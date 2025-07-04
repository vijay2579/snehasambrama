import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

// Remove backgroundSVG import
// import backgroundSVG from '@/images/background-hero.svg';

// Import the faqs background image
import faqsBackgroundImage from '@/images/background-faqs.jpg';

import { CallToAction } from '@/components/CallToAction';
import { JoinUsAndContact } from '@/components/Faqs';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PrimaryFeatures } from '@/components/PrimaryFeatures';
import { SecondaryFeatures } from '@/components/SecondaryFeatures';
import { Testimonials } from '@/components/Testimonials';
import { Gallery } from '@/components/Gallery';
import { CommitteeMembers } from '@/components/CommitteeMembers';

export default function Home() {
  useEffect(() => {
    // Force scroll to top on initial load and clear hash
    window.history.scrollRestoration = 'manual';

    // Check if there's a hash in the URL and remove it
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // Scroll to top with a small delay
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Keep a small delay

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className="relative bg-slate-50 overflow-hidden">
      {/* Add the background image from Faqs */}
      <Image
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none"
        src={faqsBackgroundImage}
        alt="Background Image"
        width={1558}
        height={946}
        unoptimized
      />

      <Head>
        <title>Sneha Sambrama Charity Foundation</title>
        <meta
          name="description"
          content="Sneha Sambrama Charity Foundation - Dedicated to spreading kindness and heartfelt service."
        />
        <link rel="canonical" href="/" />
      </Head>

      <main className="relative">
        <div className="relative">
          <div className="relative z-10">
            <Header />
            <Hero />
          </div>
        </div>
        <div id="about-us">
         
        <CallToAction />
          <CommitteeMembers />
        </div>
        
        <div id="achievements">
        <SecondaryFeatures />
          <Gallery />
        </div>
      
        <div id="contact">
          {/* <Testimonials /> */}
        </div>
        <JoinUsAndContact />
      </main>

      {/* Gradient Feather Effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />

      <Footer />
    </div>
  );
}
