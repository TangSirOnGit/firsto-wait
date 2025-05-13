export default function Testimonials() {
  const testimonials = [
    {
      quote: "Firsto.co helped us build a waitlist of over 5,000 people before our launch. The platform was incredibly easy to use and the analytics were invaluable.",
      author: "Sarah Johnson",
      role: "Founder, TechStart",
      avatar: "/images/avatar-1.png"
    },
    {
      quote: "We secured over $50,000 in pre-orders using Firsto.co's presale features. It was a game-changer for our product launch strategy.",
      author: "Michael Chen",
      role: "CEO, InnovateCo",
      avatar: "/images/avatar-2.png"
    },
    {
      quote: "The referral system helped our waitlist grow exponentially. We saw a 300% increase in signups within just two weeks.",
      author: "Emily Rodriguez",
      role: "Marketing Director, LaunchPad",
      avatar: "/images/avatar-3.png"
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900">What Early Users Are Saying</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our beta testers who have already experienced the power of our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
