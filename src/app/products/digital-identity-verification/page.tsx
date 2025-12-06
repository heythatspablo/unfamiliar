import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Identity Verification | unfamiliar.id',
  description: 'AI-powered document scanning, parsing, and OCR for driver\'s licenses, passports, and 200+ global document types.',
};

const features = [
  {
    title: 'Document Parsing & OCR',
    description: 'Extract all data fields from IDs including name, DOB, address, and document numbers with 99%+ accuracy.',
  },
  {
    title: 'Barcode & MRZ Extraction',
    description: 'Read PDF417 barcodes and Machine Readable Zones for instant data extraction and cross-validation.',
  },
  {
    title: '200+ Document Templates',
    description: 'Support for driver\'s licenses, passports, national IDs, and other government-issued documents worldwide.',
  },
  {
    title: 'Real-time JSON Responses',
    description: 'Get structured data back in milliseconds. Easy to integrate with any backend system.',
  },
  {
    title: 'Auto-capture & Edge Detection',
    description: 'SDK automatically detects document edges and captures when the image is clear and complete.',
  },
  {
    title: 'Multi-language Support',
    description: 'OCR engine supports documents in multiple languages and character sets.',
  },
];

export default function DigitalIdentityVerificationPage() {
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
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Digital Identity Verification</h1>
            <p className="text-xl text-gray-700 mb-8">
              Multi-step authentication for driver's licenses, passports, and 200+ global document types. 
              AI-powered parsing and OCR with JSON responses.
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
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Capture</h3>
                <p>User captures front and back of ID using our SDK or uploads images.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Process</h3>
                <p>AI extracts data, reads barcodes, and validates document authenticity.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Respond</h3>
                <p>Receive structured JSON with all extracted data and verification status.</p>
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
