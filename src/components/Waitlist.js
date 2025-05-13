import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function Waitlist() {
  return (
    <section id="waitlist" className="section bg-primary-600 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Join Our Waitlist</h2>
          <p className="text-xl mb-8 text-primary-100">
            Be the first to know when Firsto.co launches. Get early access and exclusive benefits by joining our waitlist today.
          </p>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Reserve Your Spot</h3>
            <p className="text-gray-600 mb-6">
              Click the button below to join our waitlist. You'll be redirected to our signup form where you can provide your details.
            </p>
            
            <Link 
              href="https://tally.so" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 btn-primary w-full sm:w-auto"
            >
              Join Waitlist <FiArrowRight />
            </Link>
            
            <p className="mt-4 text-sm text-gray-500">
              By joining, you'll receive updates about our product launch and exclusive early-bird offers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
