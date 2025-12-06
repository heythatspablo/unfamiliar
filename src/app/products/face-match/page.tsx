import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biometric Face Match | unfamiliar.id',
  description: 'One-to-one face matching with liveness detection and anti-spoofing technology.',
};

const features = [
  {
    title: '1:1 Face Matching',
    description: 'Compare a live selfie against the photo on the ID document with high accuracy.',
  },
  {
    title: 'Liveness Detection',
    description: 'Ensure the person is physically present and not using a photo or video.',
  },
  {
    title: 'Anti-Spoofing',
    description: 'Detect masks, printed photos, screen displays, and deepfake attempts.',
  },
  {
    title: 'Passive Mode',
    description: 'Verify liveness without requiring user actions like blinking or head turns.',
  },
  {
    title: 'Active Mode',
    description: 'Challenge-response verification for highest security requirements.',
  },
  {
    title: 'Match Scoring',
    description: 'Get a confidence score with configurable thresholds for your risk tolerance.',
  },
];

export default function FaceMatchPage() {
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
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Biometric Face Match</h1>
            <p className="text-xl text-gray-700 mb-8">
              One-to-one face matching with liveness detection and anti-spoofing. 
              Ensure the document belongs to the person submitting it.
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

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-lime-500">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl text-center mb-12 text-gray-900">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Capture Selfie</h3>
                <p>User takes a selfie using our SDK with guided capture.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Liveness Check</h3>
                <p>AI verifies the person is real and physically present.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Face Match</h3>
                <p>Compare selfie to ID photo and return match score.</p>
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
