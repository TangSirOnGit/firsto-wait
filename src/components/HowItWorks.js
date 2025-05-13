export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Your First Impression',
      description: 'Design a captivating first impression with our customizable launch templates built for impact.',
    },
    {
      number: '02',
      title: 'Gather First Followers',
      description: 'Attract your first community of early adopters who will champion your vision from day one.',
    },
    {
      number: '03',
      title: 'Collect First Feedback',
      description: 'Gain invaluable insights from your first users to refine your product before full launch.',
    },
    {
      number: '04',
      title: 'Secure First Revenue',
      description: 'Turn early enthusiasm into your first revenue stream with our presale and early-access tools.',
    },
  ];

  return (
    <section id="how-it-works" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900">Your First-to-Market Journey</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            From creation to launch, Firsto guides you through the complete cycle—where being first creates the greatest impact.
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
