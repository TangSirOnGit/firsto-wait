import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function Launch() {
  return (
    <section id="launch" className="section bg-primary-600 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Launch Your Product</h2>
          <p className="text-xl mb-8 text-primary-100">
            Ready to showcase your innovation to the world? Get featured on Firsto and connect with your first enthusiastic users.
          </p>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Submit Your Product</h3>
            <p className="text-gray-600 mb-6">
              Click the button below to submit your product for launch. Our platform gives your innovation the spotlight it deserves.
            </p>
            
            <Link 
              href="https://tally.so" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 btn-primary w-full sm:w-auto"
            >
              Submit Product <FiArrowRight />
            </Link>
            
            <p className="mt-4 text-sm text-gray-500">
              Launching on Firsto gives you visibility, feedback, and connections with early adopters who are eager to discover new products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
