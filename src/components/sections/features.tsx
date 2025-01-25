'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Zap, MapPin, PiggyBank, Users, Eye, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Efficiency',
    description: 'Swift operations ensure timely deliveries and minimal delays.',
  },
  {
    icon: PiggyBank,
    title: 'Affordability',
    description: 'Optimized processes reduce costs, passing savings to customers.',
  },
  {
    icon: MapPin,
    title: 'Reach',
    description: 'Extend services to every corner of Kerala, including hard-to-reach areas.',
  },
  {
    icon: Users,
    title: 'Empowerment',
    description: 'Foster growth by creating opportunities for local entrepreneurs.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Track every order with clear, real-time updates.',
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description: 'Promote eco-friendly practices for a greener Kerala.',
  },
];

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-lg font-semibold text-blue-600 tracking-wider uppercase mb-3">
            Key Advantages
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Why Mission Kerala 2025 Leads the Way
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Explore the unique features that make our initiative stand out in transforming Kerala&apos;s distribution landscape.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-gray-300 text-center"
            >
              {/* Icon */}
              <div className="bg-blue-50 p-4 rounded-xl w-fit mx-auto mb-5">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button size="lg">Join the Movement</Button>
        </motion.div>
      </div>
    </section>
  );
}
