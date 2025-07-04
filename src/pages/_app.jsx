import 'focus-visible';
import PlausibleProvider from 'next-plausible';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import '@/styles/tailwind.css';
import '@/styles/carbon-ads.css';

export default function App({Component, pageProps}) {
  const router = useRouter();

  useEffect(() => {
    // Prevent automatic scrolling on page load
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <PlausibleProvider domain="responsively.app">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}
