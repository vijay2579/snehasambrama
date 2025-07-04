import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

import faqsBackgroundImage from '@/images/background-faqs.jpg';

const members = [
  {
    name: 'Sri Tejasvi Kattimni T. R.',
    role: 'President',
    image: '/assets/img/tej.jpeg',
    description: 'Dedicated leader guiding the foundation\'s operations with efficiency and care.',
    social: {
      linkedin: '#',
      twitter: '#',
    }
  },
  {
    name: 'Sri Shivakumar H. M.',
    role: 'Vice President',
    image: '/assets/img/sir.jpeg',
    description: 'Bringing valuable experience and support to the leadership team.',
    social: {
      linkedin: '#',
      twitter: '#',
    }
  },
  {
    name: 'Sri Ramanagouda D. B.',
    role: 'Secretary',
    image: '/assets/img/sir2.jpeg',
    description: 'Managing the foundation\'s operations with efficiency and care.',
    social: {
      linkedin: '#',
      twitter: '#',
    }
  },
  {
    name: 'Sri Pakkirappa Rangappa Basapura',
    role: 'Joint Secretary',
    image: '/assets/img/king.jpeg',
    description: 'Assisting in administrative duties and supporting the team.',
    social: {
      linkedin: '#',
      twitter: '#',
    }
  },
  {
    name: 'Sri E. Vishwanathaih',
    role: 'Treasurer',
    image: '/assets/img/king2.jpeg',
    description: 'Ensuring financial transparency and stability for the foundation.',
    social: {
      linkedin: '#',
      twitter: '#',
    }
  },
];

function MemberCard({ member, index, className = '' }) {
  const [isHovered, setIsHovered] = useState(false);

  const isLastThree = member.role === 'Secretary' || member.role === 'Joint Secretary' || member.role === 'Treasurer';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group mx-auto mb-8 w-full md:max-w-sm ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-black/5 backdrop-blur-1xl">
        <div className="aspect-[4/6] relative">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
          <h3 className="font-serif text-2xl font-bold text-white mb-1 drop-shadow-lg">{member.name}</h3>
          <p className="font-serif text-lg font-medium text-amber-400 mb-2 drop-shadow-lg">{member.role}</p>
          <p className="font-sans text-white/90 text-sm mb-4 drop-shadow-lg">{member.description}</p>
          
          {!isLastThree && (
            <div className="flex gap-4">
              {member.social?.linkedin && (
                <a
                  href={member.social.linkedin}
                  className="text-white hover:text-amber-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Icon icon="mdi:linkedin" className="h-6 w-6" />
                </a>
              )}
              {member.social?.twitter && (
                <a
                  href={member.social.twitter}
                  className="text-white hover:text-amber-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Twitter</span>
                  <Icon icon="mdi:twitter" className="h-6 w-6" />
                </a>
              )}
              {member.social?.instagram && (
                <a
                  href={member.social.instagram}
                  className="text-white hover:text-amber-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Instagram</span>
                  <Icon icon="mdi:instagram" className="h-6 w-6" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function CommitteeMembers() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const president = members[0];
  const vicePresident = members[1];
  const secretary = members[2];
  const jointSecretary = members[3];
  const treasurer = members[4];

  return (
    <section className="relative py-32 overflow-hidden bg-slate-50">
      <Image
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none"
        src={faqsBackgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      
      <Container className="relative flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">
          EXCLUSIVE COMMITTEE MEMBERS 
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto">
            Meet the dedicated individuals leading our foundation with passion and purpose
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-4xl mb-8">
          {president && <MemberCard member={president} index={0} className="w-full md:w-1/2" />}
          {vicePresident && <MemberCard member={vicePresident} index={1} className="w-full md:w-1/2" />}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-6xl">
          {secretary && <MemberCard member={secretary} index={2} className="w-full md:w-1/3" />}
          {jointSecretary && <MemberCard member={jointSecretary} index={3} className="w-full md:w-1/3" />}
          {treasurer && <MemberCard member={treasurer} index={4} className="w-full md:w-1/3" />}
        </div>
      </Container>
    </section>
  );
}