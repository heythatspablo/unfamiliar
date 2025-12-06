import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security | unfamiliar.id',
  description: 'Security practices and certifications for unfamiliar.id identity verification.',
};

const certifications = [
  { name: 'SOC 2 Type II', description: 'Annual audit of security controls' },
  { name: 'ISO 27001', description: 'Information security management' },
  { name: 'PCI DSS', description: 'Payment card data security' },
  { name: 'GDPR', description: 'EU data protection compliance' },
];

const practices = [
  { title: 'Encryption', description: 'All data encrypted in transit (TLS 1.3) and at rest (AES-256).' },
  { title: 'Access Control', description: 'Role-based access control with multi-factor authentication.' },
  { title: 'Monitoring', description: '24/7 security monitoring and incident response.' },
  { title: 'Penetration Testing', description: 'Regular third-party security assessments.' },
];

export default function SecurityPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/legal" className="text-teal-900 hover:text-teal-700 mb-4 inline-block">
            ← Back to Legal
          </Link>
          
          <h1 className="font-heading text-4xl mb-4 text-gray-900">Security Overview</h1>
          <p className="text-xl text-gray-700 mb-12">
            Security is at the core of everything we do. We implement industry-leading 
            practices to protect your data.
          </p>

          {/* Certifications */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Certifications & Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div key={cert.name} className="p-6 bg-lime-500/20 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{cert.name}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Security Practices */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Security Practices</h2>
            <div className="space-y-6">
              {practices.map((practice) => (
                <div key={practice.title} className="p-6 bg-white border border-gray-200 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{practice.title}</h3>
                  <p className="text-gray-600">{practice.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Report Vulnerability */}
          <section className="bg-teal-900 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Report a Vulnerability</h2>
            <p className="text-white/80 mb-6">
              We take security seriously. If you discover a vulnerability, please report it 
              responsibly to our security team.
            </p>
            <a
              href="mailto:security@unfamiliar.id"
              className="inline-flex py-3 px-6 items-center justify-center font-medium text-teal-900 bg-lime-500 hover:bg-lime-400 rounded-full transition duration-200"
            >
              security@unfamiliar.id
            </a>
          </section>
        </div>
      </div>

      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
