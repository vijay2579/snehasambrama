import { useEffect, useState, useRef, memo } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';

import Image from 'next/image';
import { Container } from '@/components/Container';
import allDevicesSideBySide from '@/images/screenshots/all-devices-side-by-side.png';
import { BlurBG } from './BlurBG';

const features = [
  {
    title: 'All Devices at once',
    description:
      "See all devices at once, side-by-side. No more fiddling around with the devtools resizer. It's all there, at a glance.",
    image: allDevicesSideBySide,
  },
  {
    title: 'Mirrored Interactions',
    description:
      'Any click, scroll or navigation that you perform in one device will be replicated to all devices in real-time.',
    video:
      'https://responsively-org.github.io/responsively-app/assets/video/interactions-mirrored.mp4',
  },
  {
    title: 'Quick Context Switching',
    description:
      "Save your favorite device combinations as Preview Suits and quickly switch between them when you're testing.",
    video: 'https://responsively-org.github.io/responsively-app/assets/video/preview-suites.mp4',
  },
  {
    title: 'Extensive Device Profiles',
    description:
      'Responsively comes with a large collection of device profiles out of the box. You can also add your own custom devices.',
    video: 'https://responsively-org.github.io/responsively-app/assets/video/device-manager.mp4',
  },
];

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-[#0f172a] to-[#164e3f] text-white"
    >
      <BlurBG />
      <Container>
        <h2 className="text-4xl font-bold text-center text-emerald-300 mb-4">
          Our Standout Features
        </h2>
        <p className="text-center max-w-2xl mx-auto text-lg mb-12 text-emerald-100">
          Everything you need to create pixel-perfect, responsive websites with ease.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all"
            >
              <FeatureMedia feature={feature} />
              <h3 className="text-2xl font-semibold text-emerald-300 mt-4 text-center">
                {feature.title}
              </h3>
              <p className="text-md text-emerald-100 mt-2 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const FeatureMedia = memo(function FeatureMedia({ feature }) {
  const containerRef = useRef();
  const lockRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }

  useEffect(() => {
    if (lockRef.current) {
      setIsLoading(false);
    }
  }, [isIntersecting]);

  const handleVideoLoading = () => {
    setIsLoading(false);
  };

  return (
    <div
      className="w-full h-64 md:h-80 overflow-hidden rounded-xl bg-slate-50 shadow-md"
      ref={containerRef}
    >
      {lockRef.current &&
        (isLoading ? (
          <div className="flex h-full items-center justify-center bg-black/40">
            <svg
              className="h-12 w-12 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V2.83a1 1 0 012 0V4a8 8 0 018 8h2.83a1 1 0 010 2H20a8 8 0 01-8 8v2.83a1 1 0 01-2 0V20a8 8 0 01-8-8H4a1 1 0 010-2H2.83a1 1 0 010-2H4z"
              />
            </svg>
          </div>
        ) : feature.video ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoading}
            className="w-full h-full object-cover"
          >
            <source src={feature.video} type="video/mp4" />
          </video>
        ) : (
          <Image
            className="w-full h-full object-cover"
            src={feature.image}
            alt="Feature visual"
            priority
            sizes="(min-width: 1024px) 100vw, 100vw"
          />
        ))}
    </div>
  );
});
