import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { BlurBG } from './BlurBG';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export function CallToAction() {
  return (
    <section id="about-us" className="relative overflow-hidden w-full min-h-[200px] py-8 sm:py-24 lg:py-32">
      <BlurBG />
      <div className="w-full h-full">
        <Container className="relative w-full sm:w-4/5 mx-auto px-4 sm:px-6">
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 rounded-none sm:rounded-3xl p-[2px] bg-gradient-to-r from-white-400/50 via-green-900/50 to-teal-900/50 animate-gradient-x">
            <div className="absolute inset-0 rounded-none sm:rounded-4xl bg-gradient-to-r from-white-400/50 via-green-900/50 to-teal-900/50 animate-gradient-x blur-xl" />
          </div>
          
          {/* Content Container */}
          <div className="relative p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-12 items-center">
                {/* Left side - Logo (hidden on mobile) */}
                <div className="relative order-2 lg:order-1 hidden lg:block">
                  <div className="relative w-full aspect-square flex items-center justify-center">
                    <Image
                      src="/assets/img/logos/logopng.png"
                      alt="Sneha Sambrama Logo"
                      width={800}
                      height={800}
                      className="w-64 sm:w-80 md:w-96 lg:w-[500px] h-auto object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="text-white order-1 lg:order-2">
                  <div className="flex flex-col lg:block">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-4 lg:hidden">
                      <Image
                        src="/assets/img/logos/logopng.png"
                        alt="Sneha Sambrama Logo"
                        width={120}
                        height={120}
                        className="w-20 h-20 sm:w-32 sm:h-32 object-contain"
                        priority
                      />
                      <h2 className="font-display text-xl sm:text-3xl font-bold tracking-tight">
                        About Us
                      </h2>
                    </div>
                    <h2 className="hidden lg:block font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 lg:mb-8">
                      About Us
                    </h2>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-6 text-sm sm:text-lg md:text-xl tracking-tight text-white/90">
                    <p className="leading-relaxed">
                      Sneha Sambrama Charity Foundation (R.), Bhanuvalli is built on the values of selfless service and community care. Established in 20XX, our foundation has been actively involved in empowering underprivileged children with education, healthcare support, food distribution, and various social welfare activities.
                    </p>
                    <p className="leading-relaxed">
                      Our mission is driven by a spirit of compassion and dedication to uplift society.
                    </p>
                  </div>

                  <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col items-center gap-3 sm:gap-4">
                    {/* <Button 
                      href="/donate" 
                      color="white" 
                      className="hidden sm:inline-flex w-full sm:w-auto transform hover:scale-105 transition-transform"
                    >
                      Donate Now
                    </Button> */}
                    {/* <Button 
                      href="/volunteer" 
                      variant="outline" 
                      className="hidden sm:inline-flex w-full sm:w-auto transform hover:scale-105 transition-transform"
                    >
                      Join as Volunteer
                    </Button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
