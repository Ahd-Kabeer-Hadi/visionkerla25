"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Globe, Users, Zap } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: Globe,
    title: "Centralized Platform",
    description:
      "Revolutionize logistics by directly connecting manufacturers, agents, and customers with seamless technology.",
  },
  {
    icon: Users,
    title: "Empowered Local Drivers",
    description:
      "Turn auto drivers into franchise partners, bridging the last-mile delivery gap with precision and care.",
  },
  {
    icon: Zap,
    title: "Smart Logistics Integration",
    description:
      "Harness real-time tracking, automated workflows, and actionable insights to minimize delays and cut costs.",
  },
];

export function Solution() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="solution" className="max-w-7xl mx-auto py-10 md:py-20 ">
      <div className="w-full py-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-lg font-semibold text-teal-500 tracking-wider uppercase mb-4">
            The Solution
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            A Unified, <span className="text-gradient">Technology-Driven</span>{" "}
            Ecosystem
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mt-4">
            Addressing Kerala&apos;s distribution challenges with an innovative,
            scalable approach that integrates technology and empowers local
            communities.
          </p>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-hover bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow border"
            >
              {/* Icon */}
              <div className="bg-teal-100 p-4 rounded-xl w-fit mb-6">
                <solution.icon className="h-10 w-10 text-teal-600" />
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {solution.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link href="/become-a-delivery-partner">
            <Button
              size="lg"
              className="px-8 py-4 text-white bg-teal-500 hover:bg-teal-600 rounded-full font-bold shadow-lg transition-all"
            >
              Discover the Difference
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
