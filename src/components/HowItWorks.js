export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Prepare Your First Version',
      description: 'Package your MVP or beta version with a compelling story about why you built it and where it\'s heading.',
    },
    {
      number: '02',
      title: 'Ship With Confidence',
      description: 'Use our launch checklist and countdown tools to build anticipation and ship your product with pride.',
    },
    {
      number: '03',
      title: 'Celebrate The First Step',
      description: 'Mark this milestone with a community that understands the significance of turning creation into reality.',
    },
    {
      number: '04',
      title: 'Build Momentum',
      description: 'Convert the emotional energy of your first launch into relationships with early adopters and valuable feedback.',
    },
  ];

  return (
    <section id="how-it-works" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900">Your Product's First Steps</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            From creation to launch, Firsto guides you through the crucial first steps of your product journey with tools designed for the ship-first mindset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <div className="pt-8 pb-6 px-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
