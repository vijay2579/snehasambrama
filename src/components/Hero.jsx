import Image from 'next/image';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

import faqsBackgroundImage from '@/images/background-faqs.jpg';

export function Hero() {
  return (
    <section className="relative py-16 sm:py-32 overflow-hidden bg-slate-50 min-h-screen flex items-center">
      {/* Add the background image from Faqs */}
      <Image
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none"
        src={faqsBackgroundImage}
        alt="Background Image"
        width={1558}
        height={946}
        unoptimized
      />

      <Container className="relative text-center px-4 sm:px-6">
        <motion.h1 
          className="mx-auto font-display text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 sm:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="block text-3xl sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to
          </motion.span>
          <motion.span 
            className="relative inline-block mt-2 sm:mt-4 text-emerald-600 text-4xl sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Sneha Sambrama
            <motion.div 
              className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-emerald-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.span>
          <motion.span 
            className="block mt-2 sm:mt-4 text-3xl sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Charity Foundation (R.)
          </motion.span>
          <motion.span 
            className="block text-xl sm:text-2xl mt-2 sm:mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Bhanuvalli
          </motion.span>
        </motion.h1>

        <motion.div 
          className="mx-auto mt-6 sm:mt-12 max-w-2xl text-base sm:text-lg tracking-tight text-slate-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="leading-relaxed">
            Dedicated to spreading kindness and heartfelt service, we support underprivileged communities
            through education, healthcare, nutrition, and social initiatives. Join us in creating
            a compassionate and empowered society.
          </p>
        </motion.div>

        <motion.div 
          className="mt-6 sm:mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-x-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Button href="/donate" className="w-full sm:w-auto transform hover:scale-105 transition-transform">
            Donate Now
          </Button>
          <Button 
            variant="outline" 
            href="/about"
            className="hidden sm:inline-flex w-full sm:w-auto transform hover:scale-105 transition-transform"
          >
            <Icon icon="mdi:information-outline" className="h-5 w-5" />
            <span className="ml-2">About Us</span>
          </Button>
        </motion.div>
      </Container>

      {/* <div className="mt-12">
        <Image
          src="/images/hero-charity.jpg" // Replace with actual image path
          alt="Serving the community"
          width={800}
          height={500}
          className="mx-auto rounded-xl shadow-lg"
        />
      </div> */}
    </section>
  );
}
