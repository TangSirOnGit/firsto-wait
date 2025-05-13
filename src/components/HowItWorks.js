export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Landing Page',
      description: 'Set up your product landing page with customizable templates and branding options.',
    },
    {
      number: '02',
      title: 'Collect Waitlist Signups',
      description: 'Build your audience with our optimized waitlist forms and referral system.',
    },
    {
      number: '03',
      title: 'Engage Your Audience',
      description: 'Keep your waitlist engaged with updates, exclusive content, and early access opportunities.',
    },
    {
      number: '04',
      title: 'Launch With Confidence',
      description: 'Convert your waitlist to paying customers with our launch tools and analytics.',
    },
  ];

  return (
    <section id="how-it-works" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple four-step process helps you build anticipation and launch your product successfully.
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
