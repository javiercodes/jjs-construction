import Link from "next/link";

interface CTASectionProps {
  heading?: string;
  subtext?: string;
}

export default function CTASection({
  heading = "Ready to Start Your Project?",
  subtext = "Get a free, no-obligation estimate for your construction or remodeling project. Our team is ready to bring your vision to life.",
}: CTASectionProps) {
  return (
    <section className="bg-primary border-t-4 border-accent">
      <div className="container-custom mx-auto px-4 md:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {heading}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {subtext}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <Link href="/contact" className="btn-primary text-base !px-8 !py-4 text-center">
              Get a Free Estimate
            </Link>
            <a
              href="tel:+16266463423"
              className="btn-outline flex items-center justify-center gap-2 text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              (626) 646-3423
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
