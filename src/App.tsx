import * as React from 'react';
import { useEffect, useState, type ReactNode } from 'react';
import { SectionMarker } from './components/sections/SectionMarker';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { TrustBar } from './components/sections/TrustBar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloat } from './components/layout/WhatsAppFloat';
import { siteConfig } from './config/site.config';
import { BookingProvider } from './lib/bookingContext';

type LazyComponent = () => JSX.Element;
const { lazy, Suspense } = React as unknown as {
  lazy<T extends LazyComponent>(loader: () => Promise<{ default: T }>): T;
  Suspense: (props: { fallback: ReactNode; children?: ReactNode }) => JSX.Element;
};

const HowItWorks = lazy(() => import('./components/sections/HowItWorks').then(({ HowItWorks }) => ({ default: HowItWorks })));
const Gallery = lazy(() => import('./components/sections/Gallery').then(({ Gallery }) => ({ default: Gallery })));
const Testimonials = lazy(() => import('./components/sections/Testimonials').then(({ Testimonials }) => ({ default: Testimonials })));
const FAQ = lazy(() => import('./components/sections/FAQ').then(({ FAQ }) => ({ default: FAQ })));
const Location = lazy(() => import('./components/sections/Location').then(({ Location }) => ({ default: Location })));
const BookingForm = lazy(() => import('./components/sections/BookingForm').then(({ BookingForm }) => ({ default: BookingForm })));

function DeferredSections({ children }: { children: ReactNode }) {
  const [sentinel, setSentinel] = useState<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sentinel;
    if (!element) return;
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: '200px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, [sentinel]);

  return <div ref={setSentinel}>{isVisible && <Suspense fallback={null}>{children}</Suspense>}</div>;
}

function renderSection(id: (typeof siteConfig.sections)[number]['id']) {
  switch (id) {
    case 'hero': return <Hero key={id} />;
    case 'trust': return <TrustBar key={id} />;
    case 'services': return <Services key={id} />;
    case 'howItWorks': return <HowItWorks key={id} />;
    case 'gallery': return <Gallery key={id} />;
    case 'testimonials': return <Testimonials key={id} />;
    case 'faq': return <FAQ key={id} />;
    case 'location': return <Location key={id} />;
    case 'booking': return <BookingForm key={id} />;
    default: return <SectionMarker key={id} sectionId={id} />;
  }
}

export function App() {
  const enabledSections = siteConfig.sections.filter(({ enabled }) => enabled);

  return (
    <BookingProvider>
      <Header />
      <div className="pb-20 md:pb-0">
        <main>
          {enabledSections.slice(0, 3).map(({ id }) => renderSection(id))}
          <DeferredSections>{enabledSections.slice(3).map(({ id }) => renderSection(id))}</DeferredSections>
        </main>
        <Footer />
      </div>
      <WhatsAppFloat />
    </BookingProvider>
  );
}
