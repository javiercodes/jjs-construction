"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function HeroSection() {
  return (
    <motion.div className="max-w-2xl" variants={container} initial="hidden" animate="show">
      <motion.span
        variants={item}
        className="inline-block bg-accent/90 text-white font-heading font-semibold text-sm px-4 py-2 rounded-full mb-6 tracking-wide uppercase"
      >
        La Verne&apos;s Trusted Contractor
      </motion.span>
      <motion.h1
        variants={item}
        className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
      >
        Built on Craftsmanship.{" "}
        <span className="text-accent">Driven by Precision.</span>
      </motion.h1>
      <motion.p
        variants={item}
        className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
      >
        16+ years of residential and commercial construction across Southern California. Detail-driven, accountable, and built to last.
      </motion.p>
      <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
        <Link href="/contact" className="btn-primary text-lg !px-10 !py-4">
          Get a Free Estimate
        </Link>
        <Link href="/portfolio" className="btn-outline text-lg">
          View Our Work
        </Link>
      </motion.div>
    </motion.div>
  );
}
