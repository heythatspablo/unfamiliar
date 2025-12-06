import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Document Authentication | unfamiliar.id',
  description: 'AI-powered fraud detection with template matching, security feature validation, and tamper detection.',
};

const features = [
  {
    title: 'Template Matching',
    description: 'Compare documents against our database of 200+ official templates to detect forgeries.',
  },
  {
    title: 'Security Feature Detection',
    description: 'Validate holograms, microprinting, UV features, and other security elements.',
  },
  {
    title: 'Tamper Detection',
    description: 'AI detects photo substitution, text alterations, and digital manipulation.',
  },
  {
    title: 'Visual/Barcode Cross-Check',
    description: 'Automatically compare printed data against encoded barcode data to catch inconsistencies.',
  },
  {
    title: 'Expiration Validation',
    description: 'Automatically check if documents are expired or will expire soon.',
  },
  {
    title: 'Fraud Scoring',
    description: 'Get a confidence score for each verification with detailed reasons for any flags.',
  },
];

export default function DocumentAuthenticationPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/products" className="text-teal-900 hover:text-teal-700 mb-4 inline-block">
              ← Back to Products
            </Link>
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Document Authentication</h1>
            <p className="text-xl text-gray-700 mb-8">
              AI-powered fraud detection with template matching, security feature validation, and tamper detection. 
              Stop fake IDs before they cause problems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-white bg-teal-900 hover:bg-teal-800 rounded-full transition duration-200"
              >
                Request Demo
              </Link>
              <Link
                href="/developers"
                className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 border border-teal-900 hover:bg-teal-900 hover:text-white rounded-full transition duration-200"
              >
                View API Docs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl text-center mb-12 text-gray-900">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-lime-500 mb-2">99.2%</div>
                <p className="text-white/80">Fraud Detection Rate</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-lime-500 mb-2">&lt;2s</div>
                <p className="text-white/80">Authentication Time</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-lime-500 mb-2">200+</div>
                <p className="text-white/80">Document Templates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
