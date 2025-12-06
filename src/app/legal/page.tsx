import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal | unfamiliar.id',
  description: 'Legal documents, privacy policy, terms of service, and compliance information.',
};

const legalDocs = [
  {
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your data.',
    href: '/legal/privacy',
    updated: 'December 2024',
  },
  {
    title: 'Terms of Service',
    description: 'Terms and conditions for using unfamiliar.id services.',
    href: '/legal/terms',
    updated: 'December 2024',
  },
  {
    title: 'Cookie Policy',
    description: 'How we use cookies and similar technologies.',
    href: '/legal/cookies',
    updated: 'December 2024',
  },
  {
    title: 'Security Overview',
    description: 'Our security practices and certifications.',
    href: '/legal/security',
    updated: 'December 2024',
  },
  {
    title: 'Data Processing Addendum',
    description: 'DPA for GDPR compliance.',
    href: '/legal/dpa',
    updated: 'December 2024',
  },
  {
    title: 'Service Level Agreement',
    description: 'SLA terms for enterprise customers.',
    href: '/legal/sla',
    updated: 'December 2024',
  },
];

export default function LegalPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Legal</h1>
            <p className="text-xl text-gray-700">
              Legal documents and compliance information for unfamiliar.id services.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Documents */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {legalDocs.map((doc) => (
              <Link
                key={doc.title}
                href={doc.href}
                className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-teal-900/20 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-900 transition-colors">
                  {doc.title}
                </h3>
                <p className="text-gray-600 mb-4">{doc.description}</p>
                <p className="text-sm text-gray-500">Updated: {doc.updated}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl mb-8 text-white">Compliance & Certifications</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="px-6 py-3 bg-white/10 rounded-full">SOC 2 Type II</div>
              <div className="px-6 py-3 bg-white/10 rounded-full">GDPR Compliant</div>
              <div className="px-6 py-3 bg-white/10 rounded-full">CCPA Compliant</div>
              <div className="px-6 py-3 bg-white/10 rounded-full">ISO 27001</div>
              <div className="px-6 py-3 bg-white/10 rounded-full">PCI DSS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl mb-4 text-gray-900">Questions?</h2>
            <p className="text-gray-700 mb-6">
              For legal inquiries, please contact our legal team.
            </p>
            <a
              href="mailto:legal@unfamiliar.id"
              className="text-teal-900 font-medium hover:text-teal-700"
            >
              legal@unfamiliar.id
            </a>
          </div>
        </div>
      </section>

      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
