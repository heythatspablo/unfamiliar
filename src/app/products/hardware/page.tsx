import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hardware Solutions | unfamiliar.id',
  description: 'Enterprise-ready ID scanners, kiosks, and handheld devices for physical point-of-entry verification.',
};

const products = [
  {
    title: 'Desktop ID Scanners',
    description: 'High-speed document scanners for retail counters, reception desks, and point-of-sale.',
    features: ['Full-page scanning', 'UV/IR imaging', 'Barcode reading', 'Compact design'],
  },
  {
    title: 'Self-Service Kiosks',
    description: 'Standalone verification stations for lobbies, entrances, and high-traffic areas.',
    features: ['Touchscreen interface', 'Camera integration', 'Badge printing', 'ADA compliant'],
  },
  {
    title: 'Handheld Devices',
    description: 'Portable scanners for mobile verification, events, and field operations.',
    features: ['Wireless connectivity', 'Long battery life', 'Rugged design', 'Real-time sync'],
  },
];

export default function HardwarePage() {
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
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Hardware Solutions</h1>
            <p className="text-xl text-gray-700 mb-8">
              Enterprise-ready scanners, kiosks, and handheld devices for physical point-of-entry verification. 
              Full integration with our software platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-white bg-teal-900 hover:bg-teal-800 rounded-full transition duration-200"
              >
                Request Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 border border-teal-900 hover:bg-teal-900 hover:text-white rounded-full transition duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <div key={index} className="p-8 bg-white border border-gray-200 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <div className="flex flex-wrap gap-3">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="px-4 py-2 bg-lime-500/20 text-teal-900 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-16 lg:py-24 bg-lime-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl mb-6 text-gray-900">Fully Integrated</h2>
            <p className="text-xl mb-8">
              All hardware solutions connect seamlessly with our cloud platform. 
              Real-time verification, centralized management, and unified reporting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white/20 rounded-xl">
                <div className="text-2xl mb-2">☁️</div>
                <p className="font-medium">Cloud Connected</p>
              </div>
              <div className="p-4 bg-white/20 rounded-xl">
                <div className="text-2xl mb-2">🔄</div>
                <p className="font-medium">Real-time Sync</p>
              </div>
              <div className="p-4 bg-white/20 rounded-xl">
                <div className="text-2xl mb-2">📊</div>
                <p className="font-medium">Unified Dashboard</p>
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
