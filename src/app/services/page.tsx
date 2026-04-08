import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore JJ's Construction services: general contracting, kitchen & bathroom remodeling, room additions, commercial construction, roofing, painting, flooring, and outdoor/landscaping in La Verne, CA.",
};

const services = [
  {
    id: "general-contracting",
    title: "General Contracting",
    description: "As a full-service general contractor, we manage every aspect of your construction project from permits to final inspection. Our experienced team coordinates all trades, materials, and timelines to deliver results that exceed expectations.",
    features: ["Complete project management", "Permit acquisition & compliance", "Subcontractor coordination", "Budget management & reporting", "Quality assurance inspections"],
    image: "https://picsum.photos/seed/general/600/400",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  },
  {
    id: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    description: "Transform the heart of your home with a custom kitchen remodel. From contemporary open concepts to classic designs, we work with you to create a space that's both beautiful and functional.",
    features: ["Custom cabinetry & countertops", "Appliance installation", "Lighting design", "Flooring & backsplash", "Plumbing & electrical upgrades"],
    image: "https://picsum.photos/seed/kitchen2/600/400",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>,
  },
  {
    id: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    description: "Create your personal retreat with a complete bathroom renovation. From spa-like master baths to efficient guest bathrooms, we deliver stunning results with premium materials and expert installation.",
    features: ["Shower & tub installation", "Tile work & stone", "Vanity & fixture upgrades", "Heated flooring", "Accessibility modifications"],
    image: "https://picsum.photos/seed/bath2/600/400",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 6l6-3v18l-6-3z"/><path d="M3 6h6"/><path d="M3 18h6"/><path d="M21 12H9"/></svg>,
  },
  {
    id: "room-additions",
    title: "Room Additions",
    description: "Need more space? Our room additions seamlessly extend your home's footprint while matching existing architecture. Whether it's a new bedroom, family room, or home office, we build it right.",
    features: ["Architectural design integration", "Foundation & structural work", "Electrical & plumbing extension", "Interior finishing", "Permit & code compliance"],
    image: "https://picsum.photos/seed/addition2/600/400",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>,
  },
  {
    id: "commercial",
    title: "Commercial Construction",
    description: "From tenant improvements to ground-up commercial builds, we deliver professional results that meet your business requirements and timeline. Our team has experience across retail, office, and industrial sectors.",
    features: ["Tenant improvements", "Office buildouts", "Retail spaces", "Restaurant construction", "ADA compliance"],
    image: "https://picsum.photos/seed/commercial/600/400",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="6" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
  },
  {
    id: "roofing",
    title: "Roofing",
    description: "Protect your investment with professional roofing services. Whether you need repairs, a complete reroof, or a new installation, our team delivers quality workmanship with durable materials.",
    features: ["Roof replacement", "Repair & maintenance", "Tile, shingle & flat roof", "Gutter installation", "Leak detection & repair"],
    image: "https://picsum.photos/seed/roofing/600/400",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 2 12 5 12 5 22 19 22 19 12 22 12 12 2"/></svg>,
  },
  {
    id: "painting",
    title: "Painting",
    description: "Refresh your space with professional interior and exterior painting services. We use premium paints and meticulous preparation to deliver flawless, long-lasting results.",
    features: ["Interior & exterior painting", "Surface preparation", "Color consultation", "Cabinet painting", "Staining & finishing"],
    image: "https://picsum.photos/seed/painting/600/400",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path d="M12 11v8"/><path d="M8 19h8"/></svg>,
  },
  {
    id: "flooring",
    title: "Flooring",
    description: "Upgrade your floors with expert installation services. From hardwood and tile to luxury vinyl and natural stone, we provide beautiful, durable flooring solutions for every room.",
    features: ["Hardwood installation", "Tile & stone", "Luxury vinyl plank", "Carpet installation", "Subfloor preparation"],
    image: "https://picsum.photos/seed/flooring/600/400",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="9"/><line x1="15" y1="9" x2="15" y2="15"/><line x1="9" y1="15" x2="9" y2="21"/></svg>,
  },
  {
    id: "outdoor",
    title: "Outdoor & Landscaping",
    description: "Extend your living space outdoors with custom patios, decks, pergolas, and landscaping. We create outdoor environments perfect for entertaining and relaxation.",
    features: ["Patio & deck construction", "Pergolas & gazebos", "Outdoor kitchens", "Hardscaping", "Landscape design"],
    image: "https://picsum.photos/seed/outdoor/600/400",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    id: "residential-remodeling",
    title: "Residential Remodeling",
    description: "Whole-home renovations that transform your living space. We handle everything from design consultation to final finishing, ensuring a cohesive result that increases your home's value and comfort.",
    features: ["Whole-home renovation", "Open floor plan conversion", "Structural modifications", "Energy-efficient upgrades", "Smart home integration"],
    image: "https://picsum.photos/seed/residential/600/400",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    description: "We start with a free on-site visit to discuss your vision, assess the space, and understand your goals and budget.",
  },
  {
    step: "02",
    title: "Design & Planning",
    description: "Our team creates detailed plans, selects materials, obtains permits, and provides a comprehensive project estimate.",
  },
  {
    step: "03",
    title: "Construction",
    description: "Our skilled crew brings the plan to life with quality craftsmanship, regular updates, and strict timeline management.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    description: "We conduct a thorough inspection together, ensure everything meets your standards, and hand over your completed project.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        {/* TODO: Replace with actual services hero image */}
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
          alt="JJ's Construction Services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container-custom mx-auto px-4">
          <nav className="text-gray-300 text-sm mb-4">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white">Services</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h1>
          <p className="text-gray-200 text-lg mt-3 max-w-xl">
            Comprehensive construction and remodeling solutions for every project.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? "bg-white" : "bg-gray-light"}`}
        >
          <div className="container-custom mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="text-accent mb-4">{service.icon}</div>
                <h2 className="font-heading text-3xl font-bold text-primary mb-4">
                  {service.title}
                </h2>
                {/* TODO: Replace with actual service descriptions */}
                <p className="text-charcoal/70 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-charcoal/80 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="btn-primary text-sm inline-flex items-center gap-2"
                >
                  Get a Quote
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
              <div className={`relative rounded-2xl overflow-hidden shadow-xl ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                {/* TODO: Replace with actual service images */}
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-[300px] md:h-[400px]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Our Process */}
      <section className="section-padding bg-primary">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">How It Works</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Our Process
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From first call to final walkthrough, we make the construction process simple and stress-free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-white text-xl">{step.step}</span>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-accent/30" />
                )}
                <h3 className="font-heading font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar variant="light" />

      {/* CTA */}
      <CTASection
        heading="Need Help With Your Project?"
        subtext="Contact us today for a free consultation. We'll help you plan your project, understand costs, and get started on making your vision a reality."
      />
    </div>
  );
}
