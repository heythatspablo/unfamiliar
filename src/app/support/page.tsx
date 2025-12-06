import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support | unfamiliar.id',
  description: 'Get help with identity verification. Documentation, FAQs, and contact support.',
};

const supportOptions = [
  {
    title: 'Documentation',
    description: 'API reference, SDK guides, and integration tutorials.',
    href: '/docs',
    icon: '📚',
  },
  {
    title: 'FAQ',
    description: 'Answers to common questions about identity verification.',
    href: '/#faq',
    icon: '❓',
  },
  {
    title: 'Contact Support',
    description: 'Get help from our support team.',
    href: '/contact',
    icon: '💬',
  },
  {
    title: 'Status Page',
    description: 'Check system status and uptime.',
    href: '#',
    icon: '🟢',
  },
];

const faqs = [
  {
    question: 'How do I get an API key?',
    answer: 'Contact our sales team to get started with a free trial and API key.',
  },
  {
    question: 'What document types are supported?',
    answer: 'We support 200+ document types including driver\'s licenses, passports, and national IDs from countries worldwide.',
  },
  {
    question: 'How long does verification take?',
    answer: 'Average verification time is 18 seconds, including document parsing, authentication, and face match.',
  },
  {
    question: 'Is there a sandbox environment?',
    answer: 'Yes, we provide a sandbox environment for testing your integration before going live.',
  },
];

export default function SupportPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Support</h1>
            <p className="text-xl text-gray-700">
              Get help with identity verification. We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {supportOptions.map((option) => (
              <Link
                key={option.title}
                href={option.href}
                className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-teal-900/20 hover:shadow-lg transition-all duration-300 text-center"
              >
                <span className="text-4xl mb-4 block">{option.icon}</span>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-900 transition-colors">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl text-center mb-12 text-gray-900">Common Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-white rounded-xl">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 lg:py-24 bg-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl mb-6 text-white">Still Need Help?</h2>
            <p className="text-white/80 mb-8">
              Our support team is available Monday-Friday, 9am-6pm PST.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-teal-900 bg-lime-500 hover:bg-lime-400 rounded-full transition duration-200"
              >
                Contact Support
              </Link>
              <a
                href="mailto:support@unfamiliar.id"
                className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-white border border-white hover:bg-white hover:text-teal-900 rounded-full transition duration-200"
              >
                support@unfamiliar.id
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
