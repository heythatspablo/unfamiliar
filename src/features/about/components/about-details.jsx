const AboutDetails = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mb-24">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <div>
              <h1 className="font-heading text-6xl">Our Mission</h1>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="lg:max-w-lg md:ml-auto">
              <p className="text-xl font-medium mb-10">
                To make identity verification instant, accurate, and accessible for every business. We believe trust should be automated, not assumed. Whether remote or in-store, we eliminate human error and automate trust with AI-driven fraud detection that outperforms manual ID checks.
              </p>
              <a className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 hover:text-lime-500 border border-lime-500 hover:border-teal-900 bg-lime-500 hover:bg-teal-900 rounded-full transition duration-300" href="/about/careers">
                View Careers
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;