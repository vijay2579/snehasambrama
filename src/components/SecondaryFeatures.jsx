import { Container } from '@/components/Container';
import { Icon } from '@iconify/react';
import Image from 'next/image';

import faqsBackgroundImage from '@/images/background-faqs.jpg';

const services = [
  {
    name: 'Educational Support',
    description: 'Providing quality education and resources to underprivileged children',
    icon: <Icon icon="mdi:school" className="w-8 h-8" />,
  },
  {
    name: 'Health Camps',
    description: 'Organizing health camps and distributing free medicines to those in need',
    icon: <Icon icon="mdi:medical-bag" className="w-8 h-8" />,
  },
  {
    name: 'Food Distribution',
    description: 'Regular food distribution programs for needy families',
    icon: <Icon icon="mdi:food" className="w-8 h-8" />,
  },
  {
    name: 'Women Empowerment',
    description: 'Skill development and livelihood support for women',
    icon: <Icon icon="mdi:account-group" className="w-8 h-8" />,
  },
  {
    name: 'Environmental Care',
    description: 'Conservation and cleanliness drives for a better environment',
    icon: <Icon icon="mdi:leaf" className="w-8 h-8" />,
  },
  {
    name: 'Senior Care',
    description: 'Special assistance and support for senior citizens',
    icon: <Icon icon="mdi:account-heart" className="w-8 h-8" />,
  }
];

const achievements = [
  {
    title: 'Educational Impact',
    description: 'Scholarships for many deserving students',
    icon: '🎓',
  },
  {
    title: 'Healthcare Milestone',
    description: 'Successful health camps in the community',
    icon: '🏥',
  },
  {
    title: 'Food Security',
    description: 'Food kits for needy families',
    icon: '🍲',
  },
  {
    title: 'Women Empowerment',
    description: "Women's training workshops and livelihood support",
    icon: '💪',
  }
];

function ServiceCard({ service }) {
  return (
    <div className="group relative bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:bg-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl sm:rounded-2xl" />
      <div className="relative">
        <div className="text-emerald-500 mb-3 sm:mb-4">{service.icon}</div>
        <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1 sm:mb-2">{service.name}</h3>
        <p className="text-sm sm:text-base text-slate-700">{service.description}</p>
      </div>
    </div>
  );
}

function AchievementCard({ achievement }) {
  return (
    <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-lg transition-all duration-300 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20" />
      <div className="relative p-4 sm:p-6">
        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{achievement.icon}</div>
        <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1 sm:mb-2">{achievement.title}</h3>
        <p className="text-sm sm:text-base text-slate-700">{achievement.description}</p>
      </div>
    </div>
  );
}

export function SecondaryFeatures() {
  return (
    <section className="relative py-0 sm:py-32 overflow-hidden bg-slate-50">
      {/* Add the background image from Faqs */}
      <Image
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none"
        src={faqsBackgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      
      {/* Services Section */}
      <Container className="relative">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">Our Services</h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto px-4 sm:px-0">
            Dedicated to making a difference in our community through various impactful initiatives
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 px-4 sm:px-0">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </Container>

      {/* Achievements Section */}
      <Container className="relative mt-16 sm:mt-32">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">Our Achievements</h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto px-4 sm:px-0">
            Celebrating our milestones and the positive impact we've made in our community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 px-4 sm:px-0">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.title} achievement={achievement} />
          ))}
        </div>
      </Container>
    </section>
  );
}
