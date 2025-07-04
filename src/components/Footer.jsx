import Link from 'next/link';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { NavLink } from '@/components/NavLink';
import { Icon } from '@iconify/react';
import { Button } from './Button';
import { useState, useEffect } from 'react';

// Array of quotes
const quotes = [
  {
    text: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Alone we can do so little; together we can do so much.",
    author: "Helen Keller",
  },
  {
    text: "What we have done for ourselves alone dies with us; what we have done for others and the world remains and is immortal.",
    author: "Albert Pike",
  },
  {
    text: "No one has ever become poor by giving.",
    author: "Anne Frank",
  },
  {
    text: "The service you do for others is the rent you pay for your room here on Earth.",
    author: "Muhammad Ali",
  },
  // Add more quotes here
];

export function Footer() {
  const [currentQuote, setCurrentQuote] = useState({});

  useEffect(() => {
    // Select a random quote on component mount
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, []);

  function goToTop(){
    let rootElement = document.documentElement;
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <footer className="relative z-10 bg-slate-50">
      <Container>
        <div className="py-8">
          {/* <div className="mx-auto h-10 w-auto flex items-center justify-center text-slate-900 font-bold text-2xl">
            Sneha Sambrama Foundation
            </div> */}
          <div className="mt-5 text-center text-lg italic text-slate-700">
            <p>{`"${currentQuote.text}" - ${currentQuote.author}`}</p>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-6 md:flex-row-reverse md:justify-between">
          <div className="flex items-center gap-x-6">
            <Link
              href="#"
              className="group"
              aria-label="Foundation on Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10px"
                height="10px"
                fill="currentColor"
                className="h-5 w-5 fill-slate-500 group-hover:fill-emerald-600"
                viewBox="0 0 16 16"
              >
                <path d="M12.6 .75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601 .75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="group"
              aria-label="Foundation on Facebook"
            >
              <Icon icon="mdi:facebook" className="h-6 w-6 text-slate-500 group-hover:text-emerald-600" />
            </Link>
            <Link href="#" className="group" aria-label="Foundation on Instagram">
              <Icon icon="mdi:instagram" className="h-6 w-6 text-slate-500 group-hover:text-emerald-600" />
            </Link>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Sneha Sambrama Charity Foundation. All rights reserved.
          </p>
        </div>
      </Container>
      <Button className='fixed right-2 bottom-2 goToTop'  color="green" style={{width: '40px', height: '40px', padding: '4px 8px'}} onClick={goToTop}>
        <svg xmlns="http://www.w3.org/2000/svg" width={'40px'} height={'40px'} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
      </Button>
    </footer>
  );
}
