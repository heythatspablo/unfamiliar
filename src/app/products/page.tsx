import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | unfamiliar.id',
  description: 'AI-powered identity verification products. Document authentication, face match, access control, and hardware solutions.',
};

const products = [
  {
    id: 'digital-identity-verification',
    title: 'Digital Identity Verification',
    description: 'Multi-step authentication for driver\'s licenses, passports, and 200+ global document types. AI-powered parsing, OCR, and barcode/MRZ extraction with JSON responses.',
    features: ['Document parsing & OCR', 'Barcode/MRZ extraction', '200+ document templates', 'Real-time JSON responses'],
    href: '/products/digital-identity-verification',
  },
  {
    id: 'document-authentication',
    title: 'Document Authentication',
    description: 'AI-powered fraud detection with template matching, security feature validation, and tamper detection. Cross-check visual elements against barcode data.',
    features: ['Template matching', 'Security feature detection', 'Tamper detection', 'Visual/barcode cross-check'],
    href: '/products/document-authentication',
  },
  {
    id: 'face-match',
    title: 'Biometric Face Match',
    description: 'One-to-one face matching with liveness detection and anti-spoofing. Ensures the document belongs to the person submitting it.',
    features: ['1:1 face matching', 'Liveness detection', 'Anti-spoofing', 'Passive & active modes'],
    href: '/products/face-match',
  },
  {
    id: 'access',
    title: 'Access & Visitor Management',
    description: 'Verify guests, manage entry, and enforce watchlists. Integrates with door systems for complete access control.',
    features: ['Visitor check-in', 'Watchlist enforcement', 'Door integrations', 'Complete audit logs'],
    href: '/products/access',
  },
  {
    id: 'hardware',
    title: 'Hardware + Software Bundles',
    description: 'Enterprise-ready scanners, kiosks, and handheld devices for physical point-of-entry verification.',
    features: ['ID scanners', 'Kiosk solutions', 'Handheld devices', 'Full integration support'],
    href: '/products/hardware',
  },
];

export default function ProductsPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Products</h1>
            <p className="text-xl text-gray-700">
              Everything you need to verify identity. From document scanning to biometric face match, 
              our AI-powered platform handles it all.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="group block p-8 bg-white border border-gray-200 rounded-2xl hover:border-teal-900/20 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-teal-900 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-lime-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-teal-900 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 lg:py-24 bg-lime-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl sm:text-5xl mb-6 text-gray-900">Built for Developers</h2>
            <p className="text-xl mb-8">
              RESTful APIs, SDKs for web and mobile, webhooks, and comprehensive documentation. 
              Integrate identity verification in hours, not weeks.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/developers"
                className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-white bg-teal-900 hover:bg-teal-800 rounded-full transition duration-200"
              >
                View Documentation
              </Link>
              <Link
                href="/contact"
                className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 border border-teal-900 hover:bg-teal-900 hover:text-white rounded-full transition duration-200"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
