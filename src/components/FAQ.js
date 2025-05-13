'use client';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function FAQ() {
  const faqs = [
    {
      question: 'When will Firsto.co officially launch?',
      answer:
        "We're planning to launch in Q3 2025. Join our waitlist to be the first to know the exact date and get early access.",
    },
    {
      question: 'How does the waitlist work?',
      answer:
        "When you join our waitlist, you'll secure your spot in line for early access to Firsto.co. You'll receive updates about our progress and be notified when we're ready to onboard new users.",
    },
    {
      question: 'Are there any benefits to joining the waitlist early?',
      answer:
        'Absolutely! Early waitlist members will get priority access, special pricing, and exclusive features when we launch. The earlier you join, the better your benefits.',
    },
    {
      question: 'Can I pre-order Firsto.co now?',
      answer:
        'Yes! We offer pre-launch pricing for early adopters. Check out our pricing section for details on our pre-order packages.',
    },
    // {
    //   question: "What makes Firsto.co different from other launch platforms?",
    //   answer: "Firsto.co is specifically designed for product launches with features like waitlist management, referral systems, and presale capabilities all in one platform. Our focus is on helping you build anticipation and validate your product before launch."
    // },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee on all pre-orders.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Firsto.co and our product
            launch platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <span className="ml-6 flex-shrink-0 text-primary-600">
                  {openIndex === index ? (
                    <FiChevronUp size={24} />
                  ) : (
                    <FiChevronDown size={24} />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-3 pr-12">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
