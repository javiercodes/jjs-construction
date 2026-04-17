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
      <motion.p
        variants={item}
        className="text-gray-300 font-heading text-sm uppercase tracking-widest mb-5"
      >
        La Verne, California
      </motion.p>
      <motion.h1
        variants={item}
        className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-7"
      >
        Built on{" "}
        <span className="text-accent">craftsmanship.</span>
        <br />
        Driven by precision.
      </motion.h1>
      <motion.p
        variants={item}
        className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg"
      >
        General contractors serving Southern California for 16+ years — residential, commercial, and everything in between.
      </motion.p>
      <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 items-start">
        <Link href="/portfolio" className="btn-secondary text-base !px-8 !py-3.5">
          View Our Work
        </Link>
        <Link href="/contact" className="text-white font-heading font-semibold text-base flex items-center gap-2 hover:text-accent transition-colors py-3.5">
          Get a Free Estimate
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </motion.div>
    </motion.div>
  );
}
