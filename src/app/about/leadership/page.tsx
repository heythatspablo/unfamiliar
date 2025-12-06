import AnnouncementBar from '@/components/layout/announcement-bar';
import SimpleNavigation from '@/components/layout/simple-navigation';
import CTASection from '@/components/layout/cta-section';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import Link from 'next/link';
import teamData from '@/data/team.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leadership | unfamiliar.id',
  description: 'Meet the team building the future of identity verification.',
};

export default function LeadershipPage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/about" className="text-teal-900 hover:text-teal-700 mb-4 inline-block">
              ← Back to About
            </Link>
            <h1 className="font-heading text-5xl sm:text-6xl mb-6 text-gray-900">Leadership</h1>
            <p className="text-xl text-gray-700">
              The team building the future of identity verification.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamData.map((member) => (
              <div key={member.id} className="text-center">
                <div className="mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">{member.name}</h3>
                <p className="text-teal-900 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 lg:py-24 bg-lime-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl mb-6 text-gray-900">Join Our Team</h2>
            <p className="text-xl mb-8">
              We're building something big and looking for talented people to join us.
            </p>
            <Link
              href="/about/careers"
              className="inline-flex py-4 px-8 items-center justify-center text-lg font-medium text-white bg-teal-900 hover:bg-teal-800 rounded-full transition duration-200"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="/images/footer-waves-left-bottom.png" />
    </div>
  );
}
