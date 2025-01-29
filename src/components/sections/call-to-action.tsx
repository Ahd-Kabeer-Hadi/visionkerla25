"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CallToAction() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Be the Change Kerala Needs
          </h2>
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Join hands with us to transform distribution and empower
            communities. Early adopters gain exclusive access to personalized
            training and premium support.
          </p>
          {/* Call to Action Button */}
          <Link href="/become-a-delivery-partner">
            <Button
              size="lg"
              variant="outline"
              className="group  text-black hover:bg-gray-100 flex items-center justify-center mx-auto"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
