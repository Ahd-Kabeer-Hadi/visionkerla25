"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can auto drivers become franchisees?",
    answer:
      "Auto drivers can join our platform through a simple registration process. We provide comprehensive training and support to help them get started.",
  },
  {
    question: "What benefits do manufacturers gain from this system?",
    answer:
      "Manufacturers benefit from reduced distribution costs, wider reach, real-time tracking, and improved efficiency in their supply chain.",
  },
  {
    question: "Is the software easy to use for first-time users?",
    answer:
      "Yes, our platform is designed to be user-friendly with intuitive interfaces and comprehensive onboarding support.",
  },
  {
    question: "What kind of support is provided to franchisees?",
    answer:
      "Franchisees receive end-to-end support, including onboarding, training, and technical assistance to ensure smooth operations.",
  },
  {
    question: "How does the system ensure timely deliveries?",
    answer:
      "Our software uses real-time tracking and optimized delivery routes to ensure products are delivered promptly and efficiently.",
  },
  {
    question: "Can the system handle bulk orders from manufacturers?",
    answer:
      "Yes, our platform is built to handle bulk orders seamlessly, ensuring smooth logistics and timely delivery for large-scale operations.",
  },
  {
    question:
      "What are the costs involved for auto drivers to join as franchisees?",
    answer:
      "Auto drivers are required to make a minimal upfront security deposit, which is fully refundable, and there are no hidden fees.",
  },
  {
    question: "How are payments processed for deliveries?",
    answer:
      "All payments are processed securely through our platform, with real-time updates for both manufacturers and delivery agents.",
  },
  {
    question:
      "What makes this distribution model different from traditional ones?",
    answer:
      "Unlike traditional models, this system eliminates middlemen, ensures direct communication between stakeholders, and leverages technology for real-time insights and scalability.",
  },
  {
    question:
      "How does the system handle rural areas with limited connectivity?",
    answer:
      "Our software is designed to work offline, synchronizing data when connectivity is restored, ensuring no disruptions in operations.",
  },
];

export function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="faq" className="py-24 bg-gray-50 max-w-7xl mx-auto px-4">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-lg font-semibold text-teal-500 tracking-wider uppercase mb-4">
            The FAQ
          </p>
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
            Common Questions About{" "} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
            Mission Kerala 2025
          </span>
          </h2>
          
          <p className="text-lg text-gray-600 text-center mb-8">
            Have questions? We&apos;ve got answers! Here&apos;s everything you
            need to know about our initiative.
          </p>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-lg shadow-md border border-gray-200 bg-white overflow-hidden"
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left px-6 py-4 text-lg font-medium text-gray-800 hover:bg-gray-100">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600 border-t border-gray-200">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
