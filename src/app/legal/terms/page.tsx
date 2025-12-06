import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | unfamiliar.id',
  description: 'Terms of service for unfamiliar.id identity verification services.',
};

export default function TermsPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/legal" className="text-teal-900 hover:text-teal-700 mb-4 inline-block">
            ← Back to Legal
          </Link>
          
          <h1 className="font-heading text-4xl mb-4 text-gray-900">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: December 2024</p>

          <div className="prose prose-lg max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using unfamiliar.id services, you agree to be bound by these 
              Terms of Service. If you do not agree to these terms, do not use our services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              unfamiliar.id provides identity verification services including document 
              authentication, biometric face matching, and related APIs and SDKs.
            </p>

            <h2>3. Account Registration</h2>
            <p>
              To use our services, you must register for an account and provide accurate 
              information. You are responsible for maintaining the security of your account 
              credentials.
            </p>

            <h2>4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use our services for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of our services</li>
              <li>Resell or redistribute our services without authorization</li>
            </ul>

            <h2>5. Fees and Payment</h2>
            <p>
              You agree to pay all fees associated with your use of our services as described 
              in your service agreement. Fees are non-refundable unless otherwise specified.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              All intellectual property rights in our services remain with unfamiliar.id. 
              You are granted a limited license to use our services in accordance with these terms.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, unfamiliar.id shall not be liable for 
              any indirect, incidental, special, consequential, or punitive damages.
            </p>

            <h2>8. Termination</h2>
            <p>
              We may terminate or suspend your access to our services at any time for any 
              reason, including violation of these terms.
            </p>

            <h2>9. Contact</h2>
            <p>
              For questions about these Terms, contact us at{' '}
              <a href="mailto:legal@unfamiliar.id" className="text-teal-900">
                legal@unfamiliar.id
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
