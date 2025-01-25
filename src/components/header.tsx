"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full ] right-0 z-50 bg-white/90 backdrop-blur-lg border-b shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-3xl text-black hover:text-gray-800 transition-colors"
        >
          MK25
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Problem", "Solution", "Features", "FAQ"].map((section) => (
            <Link
              key={section}
              href={`#${section.toLowerCase()}`}
              className="nav-link text-lg font-medium text-gray-700 hover:text-black transition-colors"
            >
              {section}
            </Link>
          ))}
          <Button
            className="rounded-2xl px-6 py-3 text-sm font-semibold"
            variant="outline"
          >
            Join Now
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden"
              aria-label="Open Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-6 mt-16 text-center">
              {["Problem", "Solution", "Features", "FAQ"].map((section) => (
                <Link
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="text-xl font-medium text-gray-800 hover:text-gray-600 transition-colors"
                >
                  {section}
                </Link>
              ))}
              <Link
                href="/become-a-delivery-partner"
                className="text-xl font-medium text-gray-800 hover:text-gray-600 transition-colors"
              >
                <Button className="w-full rounded-2xl py-4 text-lg font-semibold">
                  Join Now
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
