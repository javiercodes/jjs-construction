import Image from "next/image";
import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="relative z-10 container-custom mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-accent/90 text-white font-heading font-semibold text-sm px-4 py-2 rounded-full mb-6 tracking-wide uppercase">
              La Verne&apos;s Trusted Contractor
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Building Dreams in{" "}
              <span className="text-accent">Southern California</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              {/* TODO: Replace with actual company tagline */}
              From kitchen remodels to commercial builds, JJ&apos;s Construction delivers
              exceptional craftsmanship and reliable service you can count on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-lg !px-10 !py-4">
                Get a Free Estimate
              </Link>
              <Link href="/portfolio" className="btn-outline text-lg">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar variant="dark" />

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Our Services
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              From concept to completion, we offer comprehensive construction and remodeling services
              tailored to your needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-primary group-hover:text-accent transition-colors duration-300 mb-4">
                  {service.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Custom Home Build - Luxury Estate/luxury-estate-framing.jpeg"
                alt="JJ's Construction - luxury estate under construction"
                width={800}
                height={600}
                className="object-cover w-full h-[400px] md:h-[500px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                <p className="text-white font-heading font-bold text-lg">
                  {/* TODO: Replace with actual stat */}
                  Serving La Verne &amp; Surrounding Communities
                </p>
              </div>
            </div>
            <div>
              <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Why JJ&apos;s Construction</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                Your Vision, Our Expertise
              </h2>
              <p className="text-charcoal/70 mb-8 leading-relaxed">
                {/* TODO: Replace with actual company differentiators */}
                We believe every project deserves the highest level of attention, quality materials,
                and skilled craftsmanship. That&apos;s why homeowners and businesses across Southern
                California trust JJ&apos;s Construction.
              </p>
              <div className="space-y-5">
                {[
                  { title: "Experienced & Licensed", desc: "Fully licensed, bonded, and insured with 15+ years of experience." },
                  { title: "On-Time & On-Budget", desc: "We respect your time and your investment with reliable project timelines." },
                  { title: "Transparent Communication", desc: "Regular updates and open dialogue throughout every phase of your project." },
                  { title: "Quality Craftsmanship", desc: "Premium materials and meticulous attention to detail on every build." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-primary">{item.title}</h3>
                      <p className="text-charcoal/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Our Work</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Featured Projects
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Take a look at some of our recent residential and commercial projects across Southern California.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project) => (
              <Link
                href="/portfolio"
                key={project.title}
                className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  {/* TODO: Replace with actual project images */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-xs font-heading font-bold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-heading font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/portfolio" className="btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-accent/30 mb-6" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z"/></svg>
            {/* TODO: Replace with actual client testimonial */}
            <blockquote className="font-heading text-xl md:text-2xl text-primary leading-relaxed mb-6 italic">
              &ldquo;JJ&apos;s Construction exceeded our expectations on every level. The team was professional,
              communicated throughout the entire process, and delivered a kitchen that is beyond
              what we imagined. Highly recommend!&rdquo;
            </blockquote>
            <div>
              {/* TODO: Replace with actual client info */}
              <p className="font-heading font-bold text-primary">Maria & David R.</p>
              <p className="text-charcoal/60 text-sm">Kitchen Remodel — La Verne, CA</p>
            </div>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
