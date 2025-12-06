import AnnouncementBar from '@/components/layout/announcement-bar';
import CTASection from '@/components/layout/cta-section';
import { Navigation, Footer } from '@/components/ui';
import StatsSection from '@/features/home/components/stats-section';
import SolutionsSection from '@/features/home/components/solutions-section';
import FAQSection from '@/features/home/components/faq-section';
import TestimonialCarousel from '@/features/home/components/testimonial-carousel';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'unfamiliar.id | Identity Verified. Trust Automated.',
};

export default function HomePage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <Navigation
        variant="hero"
        backgroundImage="/images/header-bg-waves.png"
        hero={{
          title: "Identity Verified. Trust Automated.",
          subtitle: "AI-powered identity verification for any scenario. Scan, authenticate, and verify government-issued IDs instantly. Eliminate human error and automate trust.",
          ctaText: "Request Demo",
          ctaLink: "/contact"
        }}
      />
      <main>
        <StatsSection />
        <SolutionsSection />
        <FAQSection />
        <TestimonialCarousel />
      </main>
      <CTASection />
      <Footer
        variant="detailed"
        backgroundImage="/images/footer-waves-left-bottom.png"
        companyName="unfamiliar.id"
      />
    </div>
  );
}
