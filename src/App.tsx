import { SectionMarker } from './components/sections/SectionMarker';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { TrustBar } from './components/sections/TrustBar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { StickyBookBar } from './components/layout/StickyBookBar';
import { WhatsAppFloat } from './components/layout/WhatsAppFloat';
import { HowItWorks } from './components/sections/HowItWorks';
import { Gallery } from './components/sections/Gallery';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Location } from './components/sections/Location';
import { siteConfig } from './config/site.config';
import { BookingProvider } from './lib/bookingContext';

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
    case 'booking': return <SectionMarker key={id} sectionId={id} />;
    default: return <SectionMarker key={id} sectionId={id} />;
  }
}

export function App() {
  return (
    <BookingProvider>
      <Header />
      <div className="pb-20 md:pb-0">
        <main>
          {siteConfig.sections
            .filter(({ enabled }) => enabled)
            .map(({ id }) => renderSection(id))}
        </main>
        <Footer />
      </div>
      <WhatsAppFloat />
      <StickyBookBar />
    </BookingProvider>
  );
}
