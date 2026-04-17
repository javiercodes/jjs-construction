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
    description: "Full-service project management from permits to final inspection — all trades, coordinated.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
    href: "/services#general-contracting",
  },
  {
    title: "Commercial Construction",
    description: "Tenant improvements, office buildouts, retail spaces, and ground-up commercial builds.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/><line x1="6" y1="6" x2="6" y2="22"/><line x1="12" y1="6" x2="12" y2="22"/><line x1="18" y1="6" x2="18" y2="22"/></svg>
    ),
    href: "/services#commercial",
  },
  {
    title: "Custom Home Builds",
    description: "Ground-up residential construction — from Mediterranean estates to modern builds.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
    ),
    href: "/services#room-additions",
  },
  {
    title: "Remodeling",
    description: "Kitchen, bathroom, and whole-home renovations with premium materials and expert installation.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    ),
    href: "/services#kitchen-remodeling",
  },
  {
    title: "Outdoor & Decking",
    description: "Custom decks, pergolas, pool surrounds, and outdoor living spaces built to last.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    href: "/services#outdoor",
  },
  {
    title: "Roofing & Specialty",
    description: "Roofing, flooring, painting, and specialty finishes handled with the same precision as every build.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 12 5 12 5 22 19 22 19 12 22 12 12 2"/></svg>
    ),
    href: "/services#roofing",
  },
];

const featuredProjects = [
  {
    title: "360 Ten Commercial Build",
    category: "Commercial",
    narrative: "A full exterior and facade build for a multi-tenant commercial property — executed on schedule with zero punch-list items at turnover.",
    image: "/images/Commercial Construction/commercial-360ten-exterior-01.jpeg",
  },
  {
    title: "Luxury Marble Master Bath",
    category: "Bathroom Remodel",
    narrative: "Complete spa-level remodel with Calacatta marble slab walls, frameless glass enclosure, and freestanding soaking tub. Every surface custom-fitted.",
    image: "/images/Bathroom Remodel/bathroom-luxury-marble-01.jpeg",
  },
  {
    title: "Mediterranean Estate",
    category: "Custom Home Build",
    narrative: "Ground-up luxury home build — stone archway entrance, Spanish tile roof, arched balconies, and resort-style grounds across a multi-year engagement.",
    image: "/images/Custom Home Build - Mediterranean/mediterranean-home-front-facade.jpeg",
  },
];

export default function HomePage() {
  return (
    <div className="pt-16 md:pt-20">

      {/* Hero */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center">
        <Image
          src="/images/Custom Home Build - Mediterranean/mediterranean-home-front-facade.jpeg"
          alt="JJ's Construction — Custom Mediterranean home build"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 container-custom w-full px-4 py-20">
          <HeroSection />
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar variant="dark" />

      {/* Mission / Values Statement — McCarthy-style "who we are before we sell" */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Who We Are</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-8 leading-tight">
                We build what others won&apos;t touch.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-charcoal/70 text-xl leading-relaxed max-w-3xl">
                JJ&apos;s Construction was founded on a simple belief: that quality construction and honest business are not mutually exclusive. Brothers John and Adam Ramirez built this company to be the contractor they wished existed — disciplined, transparent, and relentlessly precise. Sixteen years later, that hasn&apos;t changed.
              </p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <div className="mt-10 pt-10 border-t border-gray-100 flex flex-col sm:flex-row gap-8 sm:gap-12 items-start sm:items-center">
                <div>
                  <p className="font-heading font-bold text-4xl text-primary">16+</p>
                  <p className="text-charcoal/60 text-sm mt-1">Years in business</p>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gray-200" />
                <div>
                  <p className="font-heading font-bold text-xl text-primary">Residential &amp; Commercial</p>
                  <p className="text-charcoal/60 text-sm mt-1">General contracting</p>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gray-200" />
                <div>
                  <p className="font-heading font-bold text-xl text-primary">Southern California</p>
                  <p className="text-charcoal/60 text-sm mt-1">SGV &amp; Inland Empire</p>
                </div>
                <div className="sm:ml-auto">
                  <Link href="/about" className="inline-flex items-center gap-2 text-accent font-heading font-semibold hover:gap-3 transition-all">
                    Our story
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-gray-light">
        <div className="container-custom mx-auto px-4">
          <FadeUp className="mb-14">
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2">
              Built for every phase of construction.
            </h2>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <Link
                  href={service.href}
                  className="group flex flex-col bg-white p-8 md:p-10 hover:bg-accent/[0.03] transition-colors duration-300 h-full"
                >
                  <div className="text-accent mb-5">{service.icon}</div>
                  <h3 className="font-heading font-bold text-lg text-primary mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <span className="mt-6 text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom mx-auto px-4">
          <FadeUp className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Selected Work</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2">
                Projects that speak for themselves.
              </h2>
            </div>
            <Link href="/portfolio" className="text-accent font-heading font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap">
              View all work
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.title}>
                <Link href="/portfolio" className="group block">
                  <div className="relative h-80 overflow-hidden bg-gray-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white text-xs font-heading font-bold px-3 py-1">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="pt-5 pb-2">
                    <h3 className="font-heading font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed">
                      {project.narrative}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Why Us — stripped down, confidence over selling */}
      <section className="py-20 md:py-28 bg-gray-light">
        <div className="container-custom mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp className="relative">
              <Image
                src="/images/Custom Home Build - Luxury Estate/luxury-estate-framing.jpeg"
                alt="JJ's Construction — active build"
                width={800}
                height={600}
                className="object-cover w-full h-[480px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary/90 px-8 py-5">
                <p className="text-white font-heading font-semibold">Serving La Verne, San Dimas, Glendora, Claremont &amp; surrounding areas</p>
              </div>
            </FadeUp>
            <div>
              <FadeUp>
                <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Our Approach</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-8 leading-tight">
                  Precision and accountability — on every project.
                </h2>
              </FadeUp>
              <StaggerGrid className="divide-y divide-gray-200">
                {[
                  { title: "Detail-driven execution", desc: "We emphasize quality control at every phase. Projects are managed with the same rigor whether they're a bathroom remodel or a commercial build." },
                  { title: "Clear communication", desc: "You'll always know where your project stands. Regular updates, no surprises, and a team that picks up the phone." },
                  { title: "16+ years of expertise", desc: "John and Adam Ramirez built JJ's Construction on decades of field experience — residential and commercial, every scale." },
                  { title: "Forward-thinking practices", desc: "We stay current with evolving building standards, materials, and construction methods so your project benefits from the latest thinking." },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="py-6">
                      <h3 className="font-heading font-bold text-primary mb-1">{item.title}</h3>
                      <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32 bg-gray-light relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 font-serif text-[220px] leading-none text-primary/5 select-none pointer-events-none -mt-8">
          &ldquo;
        </div>
        <div className="container-custom mx-auto px-4 relative z-10">
          <FadeUp className="max-w-3xl mx-auto text-center">
            <blockquote className="font-heading text-xl md:text-2xl text-primary leading-relaxed mb-8 italic font-medium">
              &ldquo;JJ&apos;s Construction exceeded our expectations on every level. The team was professional,
              communicated throughout the entire process, and delivered a kitchen that is beyond
              what we imagined.&rdquo;
            </blockquote>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
            <p className="font-heading font-bold text-primary">Maria &amp; David R.</p>
            <p className="text-charcoal/60 text-sm mt-1">Kitchen Remodel — La Verne, CA</p>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
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
