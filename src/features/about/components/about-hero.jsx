import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="relative py-12 lg:py-24 overflow-hidden">
      <Image className="absolute bottom-0 left-0" src="/images/about-lines.svg" alt="" width={400} height={300} style={{ objectFit: 'contain' }} />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/images/UNFAMILIAR.ID.png"
            alt="unfamiliar.id"
            width={429}
            height={32}
            className="h-auto w-[400px] max-w-full mx-auto mb-8"
          />
          <h1 className="font-heading text-5xl sm:text-6xl mb-8">About unfamiliar.id</h1>
          <p className="text-2xl text-black font-medium mb-10">
            Identity fraud is accelerating. Businesses struggle to confidently verify who they're interacting with. We built unfamiliar.id to eliminate human error and automate trust. Our AI-powered platform scans, parses, and authenticates government-issued IDs, matches faces, detects spoofing, and confirms identity with precision.
          </p>
          <a className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200" href="/about/leadership">
            Meet the Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;