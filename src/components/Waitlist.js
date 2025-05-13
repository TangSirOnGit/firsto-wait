import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function Waitlist() {
  return (
    <section id="waitlist" className="section bg-primary-600 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Pre-Sale Now Open</h2>
          <p className="text-xl mb-8 text-primary-100">
            Join our waitlist to get notified when we launch, or pre-order our
            Early Bird Special for just $19.
          </p>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Two Options to Get Started
            </h3>
            <p className="text-gray-600 mb-6">
              Join our waitlist for free updates, or pre-order our Early Bird
              Special to get 3 Premium Launches for just $19 ($87 value).
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://tally.so/r/3jpA5a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 btn-secondary w-full sm:w-auto"
              >
                Join Waitlist <FiArrowRight />
              </Link>

              <Link
                href="https://buy.stripe.com/fZe17n0zl4Iigy4cMM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 btn-primary w-full sm:w-auto"
              >
                Pre-order Now <FiArrowRight />
              </Link>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Pre-sale purchases confirm real demand and help us build exactly
              what you need. Your early support gives you premium benefits at a
              significant discount.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
