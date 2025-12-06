import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import AboutHero from '@/features/about/components/about-hero';
import AboutDetails from '@/features/about/components/about-details';
import JobListings from '@/features/about/components/job-listings';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import jobsData from '@/data/jobs.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | unfamiliar.id',
};

export default function AboutPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      <AboutHero />

      <AboutDetails />

      <JobListings jobs={jobsData} />

      <CTASection />
      <Footer backgroundImage="images/footer-waves-left-bottom.png" />
    </div>
  );
}