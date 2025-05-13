import { FiUsers, FiTrendingUp, FiCreditCard, FiBarChart2 } from 'react-icons/fi';

const features = [
  {
    name: 'Build Your Audience',
    description: 'Collect emails and build a community of early adopters before your product launch.',
    icon: FiUsers,
  },
  {
    name: 'Validate Your Idea',
    description: 'Get real feedback from potential customers to refine your product before launch.',
    icon: FiTrendingUp,
  },
  {
    name: 'Secure Presales',
    description: 'Start generating revenue with presales and early-bird offers.',
    icon: FiCreditCard,
  },
  {
    name: 'Track Performance',
    description: 'Analyze your waitlist growth and conversion metrics with our analytics dashboard.',
    icon: FiBarChart2,
  },
];

export default function Features() {
  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900">Everything You Need for a Successful Launch</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides all the tools you need to build anticipation, validate your product, 
            and start generating revenue before your official launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
