const CTASection = () => {
  return (
    <section className="p-4">
      <div className="max-w-xl lg:max-w-5xl mx-auto xl:max-w-none px-5 md:px-12 xl:px-24 py-16 bg-teal-900 rounded-2xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
              <div className="max-w-md xl:max-w-none">
                <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl tracking-sm text-white mb-6">Ready to Automate Trust?</h2>
                <p className="text-lg text-white opacity-80">Start verifying identities in minutes. No manual checks. No fraud slipping through.</p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 lg:text-right">
              <a className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200" href="/contact">Request a Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;