import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Secure Access & Entry Control | unfamiliar.id',
  description: 'Verify visitors, manage entry points, and enforce watchlists with complete audit trails.',
};

export default function SecureAccessPage() {
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
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Secure Access & Entry Control</h1>
            <p className="text-xl text-gray-700 mb-8">
              Verify visitors, manage entry points, and enforce watchlists. 
              Complete audit trails for compliance and security.
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

      {/* Features */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Visitor Management</h3>
              <p className="text-gray-600">Streamlined check-in with ID verification, badge printing, and host notification.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Watchlist Screening</h3>
              <p className="text-gray-600">Screen visitors against custom deny lists and receive instant alerts.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Access Control</h3>
              <p className="text-gray-600">Integrate with door systems to automate entry based on verification status.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
