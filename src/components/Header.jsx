import { Fragment, useState } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { NavLink } from '@/components/NavLink';
import { Icon } from '@iconify/react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/#about-us' },
  { name: 'Services', href: '/#achievements' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Contact', href: '/#contact' },
];

function MobileNavLink({ href, children }) {
  const handleClick = (e) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2" onClick={handleClick}>
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx('origin-center transition', open && 'scale-90 opacity-0')}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx('origin-center transition', !open && 'scale-90 opacity-0')}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            {navigation.map((item) => (
              <MobileNavLink key={item.name} href={item.href}>
                {item.name}
              </MobileNavLink>
            ))}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6">
      <Container>
        <nav className="relative flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" aria-label="Home">
              <Image
                src="/assets/img/logos/logopng.png"
                alt="Sneha Sambrama Charity Foundation Logo"
                width={60}
                height={60}
                className="h-16 sm:h-24 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="flex items-center gap-x-8">
            <div className="hidden md:flex md:gap-x-6">
              {navigation.map((item) => (
                <NavLink key={item.name} href={item.href} onClick={(e) => handleNavigation(e, item.href)}>
                  {item.name}
                </NavLink>
              ))}
            </div>
            <Button href="/donate" color="green">
              <Icon icon="mdi:heart" className="mr-2 h-5 w-5" />
              <span>Donate</span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Sneha Sambrama Charity Foundation</span>
              <Image
                className="h-8 w-auto"
                src="/assets/img/logos/logopng.png"
                alt=""
                width={32}
                height={32}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <Icon icon="mdi:close" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
