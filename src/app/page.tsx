import Image from "next/image";
import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import HeroSection from "./HeroSection";
import FadeUp from "@/components/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/StaggerGrid";

const services = [
  {
    title: "General Contracting",
    description: "Full-service general contracting for residential and commercial projects of any scale.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
    href: "/services#general-contracting",
  },
  {
    title: "Kitchen Remodeling",
    description: "Transform your kitchen into the heart of your home with custom designs and premium materials.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>
    ),
    href: "/services#kitchen-remodeling",
  },
  {
    title: "Bathroom Remodeling",
    description: "Create spa-like bathrooms with modern fixtures, tile work, and thoughtful layouts.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6-3v18l-6-3z"/><path d="M3 6h6"/><path d="M3 18h6"/><path d="M21 12H9"/></svg>
    ),
    href: "/services#bathroom-remodeling",
  },
  {
    title: "Room Additions",
    description: "Expand your living space with seamless additions that match your home's existing architecture.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
    ),
    href: "/services#room-additions",
  },
  {
    title: "Commercial Construction",
    description: "Professional commercial builds including tenant improvements, offices, and retail spaces.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/><line x1="6" y1="6" x2="6" y2="22"/><line x1="12" y1="6" x2="12" y2="22"/><line x1="18" y1="6" x2="18" y2="22"/></svg>
    ),
    href: "/services#commercial",
  },
  {
    title: "Roofing",
    description: "Expert roofing services from repair to full replacement, using top-quality materials.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 12 5 12 5 22 19 22 19 12 22 12 12 2"/></svg>
    ),
    href: "/services#roofing",
  },
];

const featuredProjects = [
  {
    title: "Pool Deck & Spa Transformation",
    category: "Outdoor Living",
    description: "Custom composite pool deck with integrated brick spa surround — a complete outdoor retreat.",
    image: "/images/Pool Deck - Composite Decking/pool-deck-composite-completed-01.jpeg",
  },
  {
    title: "Luxury Marble Bathroom",
    category: "Bathroom Remodel",
    description: "Full spa-style bathroom remodel with Calacatta marble slab, frameless glass shower, and soaking tub.",
    image: "/images/Bathroom Remodel/bathroom-luxury-marble-01.jpeg",
  },
  {
    title: "Custom Luxury Estate",
    category: "Custom Home Build",
    description: "Ground-up luxury estate build featuring ornate ironwork, arched windows, and resort-style grounds.",
    image: "/images/Custom Home Build - Luxury Estate/luxury-estate-exterior.jpeg",
  },
];

export default function HomePage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center">
        <Image
          src="/images/Custom Home Build - Mediterranean/mediterranean-home-front-facade.jpeg"
          alt="JJ's Construction - Custom Mediterranean home build"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        <div className="relative z-10 container-custom mx-auto px-4 py-20">
          <HeroSection />
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar variant="dark" />

      {/* Services Overview */}
      <section className="section-padding bg-[#F5F4F0]">
        <div className="container-custom mx-auto">
          <FadeUp className="text-center mb-12 md:mb-16">
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Our Services
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              From concept to completion, we offer comprehensive construction and remodeling services
              tailored to your needs and budget.
            </p>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <Link
                  href={service.href}
                  className="group flex flex-col bg-[#1C1917] rounded-xl p-8 border border-white/[0.06] hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 h-full"
                >
                  <div className="text-accent group-hover:text-accent-light transition-colors duration-300 mb-5">
                    {service.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
                    {service.description}
                  </p>
                  <span className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-3 transition-all mt-auto">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Custom Home Build - Luxury Estate/luxury-estate-framing.jpeg"
                alt="JJ's Construction - luxury estate under construction"
                width={800}
                height={600}
                className="object-cover w-full h-[400px] md:h-[500px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-heading font-bold text-lg">
                  Serving La Verne &amp; Surrounding Communities
                </p>
              </div>
              <div className="absolute top-6 right-6 bg-accent text-white rounded-xl px-4 py-3 text-center shadow-lg">
                <span className="font-heading font-bold text-2xl block">16+</span>
                <span className="text-xs font-semibold uppercase tracking-wide">Years</span>
              </div>
            </FadeUp>
            <div>
              <FadeUp delay={0.1}>
                <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Why JJ&apos;s Construction</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                  Your Vision, Our Expertise
                </h2>
                <p className="text-charcoal/70 mb-8 leading-relaxed">
                  Founded by brothers John and Adam Ramirez, JJ&apos;s Construction partners closely with clients to align their vision with our construction expertise — delivering functional, well-built spaces designed to perform and endure.
                </p>
              </FadeUp>
              <StaggerGrid className="space-y-5">
                {[
                  { title: "16+ Years of Experience", desc: "Residential and commercial construction across projects of varying scale and complexity." },
                  { title: "Precision & Quality Control", desc: "Every project executed with a disciplined, detail-driven approach to the highest industry standards." },
                  { title: "Clear Communication", desc: "Accountability and transparency from start to finish — you're never left guessing." },
                  { title: "Forward-Thinking Approach", desc: "We stay current with evolving building standards, materials, and construction practices." },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-primary">{item.title}</h3>
                        <p className="text-charcoal/70 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-[#F5F4F0]">
        <div className="container-custom mx-auto">
          <FadeUp className="text-center mb-12">
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Our Work</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Featured Projects
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Take a look at some of our recent residential and commercial projects across Southern California.
            </p>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.title}>
                <Link
                  href="/portfolio"
                  className="group rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 block"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white text-xs font-heading font-bold px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-heading font-bold text-lg text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-snug">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
          <div className="text-center mt-10">
            <Link href="/portfolio" className="btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-[#0F1C2E] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 font-serif text-[220px] leading-none text-accent/5 select-none pointer-events-none -mt-8">
          &ldquo;
        </div>
        <div className="container-custom mx-auto relative z-10">
          <FadeUp className="max-w-3xl mx-auto text-center">
            <blockquote className="font-heading text-xl md:text-2xl text-white leading-relaxed mb-8 italic font-medium">
              &ldquo;JJ&apos;s Construction exceeded our expectations on every level. The team was professional,
              communicated throughout the entire process, and delivered a kitchen that is beyond
              what we imagined. Highly recommend!&rdquo;
            </blockquote>
            <div className="w-16 h-0.5 bg-accent mx-auto mb-6" />
            <div>
              <p className="font-heading font-bold text-white">Maria &amp; David R.</p>
              <p className="text-gray-400 text-sm mt-1">Kitchen Remodel — La Verne, CA</p>
            </div>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
