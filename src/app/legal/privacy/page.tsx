import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | unfamiliar.id',
  description: 'Privacy policy for unfamiliar.id identity verification services.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/legal" className="text-teal-900 hover:text-teal-700 mb-4 inline-block">
            ← Back to Legal
          </Link>
          
          <h1 className="font-heading text-4xl mb-4 text-gray-900">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: December 2024</p>

          <div className="prose prose-lg max-w-none">
            <h2>1. Introduction</h2>
            <p>
              unfamiliar.id ("we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you use our identity verification services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Identity documents (driver's licenses, passports, etc.)</li>
              <li>Biometric data (facial images for verification)</li>
              <li>Contact information (name, email, phone number)</li>
              <li>Account credentials</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide identity verification services</li>
              <li>Detect and prevent fraud</li>
              <li>Comply with legal obligations</li>
              <li>Improve our services</li>
              <li>Communicate with you about our services</li>
            </ul>

            <h2>4. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes 
              for which it was collected, or as required by law. Verification data is typically 
              retained for the duration specified in our agreement with our customers.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your 
              personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>

            <h2>7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@unfamiliar.id" className="text-teal-900">
                privacy@unfamiliar.id
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
