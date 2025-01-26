'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, MapPin, TrendingDown, Ban } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Disconnected Supply Chains',
    description: 'Inefficient layers causing delays and communication breakdowns.',
  },
  {
    icon: MapPin,
    title: 'Limited Reach',
    description: 'Rural communities struggle with inconsistent deliveries.',
  },
  {
    icon: TrendingDown,
    title: 'High Overheads',
    description: 'Traditional models inflate operational costs.',
  },
  {
    icon: Ban,
    title: 'Growth Challenges',
    description: 'Lack of scalable systems restricts expansion.',
  },
];

export function Problem() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="problem" className="max-w-7xl mx-auto py-10 md:py-20  bg-gray-50/50">
      <div className="w-full py-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-lg font-semibold text-blue-600 tracking-wider uppercase mb-3">
            The Challenge
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Roadblocks in Kerala&apos;s{' '}
            
              Distribution System
            
          </h2>
          <p className="text-lg md:text-xl text-balance text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Identifying key obstacles that hinder supply chain efficiency and limit growth.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-gray-300"
            >
              {/* Icon */}
              <div className="bg-blue-50 p-4 rounded-xl w-fit mb-5">
                <problem.icon className="h-8 w-8 text-blue-600" />
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">{problem.title}</h3>
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
