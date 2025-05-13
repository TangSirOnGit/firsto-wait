export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Product Page',
      description: 'Build an eye-catching product page that showcases your innovation with our easy-to-use tools.',
    },
    {
      number: '02',
      title: 'Submit For Launch',
      description: 'Schedule your product launch and get featured on our platform to maximize visibility.',
    },
    {
      number: '03',
      title: 'Engage With Users',
      description: 'Connect with interested users, answer questions, and build relationships with your first customers.',
    },
    {
      number: '04',
      title: 'Analyze & Iterate',
      description: 'Use launch data and user feedback to improve your product and plan your growth strategy.',
    },
  ];

  return (
    <section id="how-it-works" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900">How to Launch on Firsto</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple four-step process helps you showcase your product, connect with early adopters, and gain momentum from day one.
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
