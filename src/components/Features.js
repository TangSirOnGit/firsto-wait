import {
  FiUsers,
  FiTrendingUp,
  FiCreditCard,
  FiBarChart2,
} from 'react-icons/fi';

const features = [
  {
    name: 'First Move Advantage',
    description:
      'Turn your creation into reality with a dedicated platform that celebrates the crucial first step of your product journey.',
    icon: FiUsers,
  },
  {
    name: 'Ship-First Community',
    description:
      'Join a community of makers, developers, and indie hackers who believe in shipping early and iterating based on real feedback.',
    icon: FiTrendingUp,
  },
  {
    name: 'Launch Momentum',
    description:
      'Transform the emotional high of shipping into tangible momentum with early adopters who appreciate your courage to launch.',
    icon: FiCreditCard,
  },
  // {
  //   name: 'Launch Analytics',
  //   description: 'Track your launch performance with detailed metrics on views, engagement, and user interest.',
  //   icon: FiBarChart2,
  // },
];

export default function Features() {
  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900">
            Where Your Product Journey Begins
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Firsto is the starting point that turns ideas into launched products. 
            We embrace the "ship-first" philosophy that makers and developers live by, 
            providing the perfect launchpad for your creation's first steps into the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
