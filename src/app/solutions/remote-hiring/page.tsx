import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Remote Hiring & Workforce | unfamiliar.id',
  description: 'Verify candidate identity during hiring. Ensure I-9 compliance and prevent identity fraud.',
};

export default function RemoteHiringPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/solutions" className="text-teal-900 hover:text-teal-700 mb-4 inline-block">
              ← Back to Solutions
            </Link>
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Remote Hiring & Workforce</h1>
            <p className="text-xl text-gray-700 mb-8">
              Verify candidate identity during hiring. 
              Ensure I-9 compliance and prevent identity fraud.
            </p>
            <Link
              href="/contact"
              className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-white bg-teal-900 hover:bg-teal-800 rounded-full transition duration-200"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">I-9 Compliance</h3>
              <p className="text-gray-600">Verify identity documents for employment eligibility verification.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Remote Onboarding</h3>
              <p className="text-gray-600">Verify new hires remotely before their first day.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Fraud Prevention</h3>
              <p className="text-gray-600">Catch identity fraud before it becomes an HR problem.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
