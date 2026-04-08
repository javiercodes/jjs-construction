"use client";

import { useState } from "react";
import Image from "next/image";
import CTASection from "@/components/CTASection";

const categories = ["All", "Kitchen", "Bathroom", "Addition", "Commercial", "Roofing", "Outdoor"];

/* TODO: Replace all placeholder projects with actual project data and photos */
const projects = [
  {
    id: 1,
    title: "Contemporary Kitchen Overhaul",
    category: "Kitchen",
    description: "Complete kitchen transformation featuring custom white shaker cabinets, quartz waterfall island, and designer lighting.",
    image: "https://picsum.photos/seed/proj1/600/450",
    location: "La Verne, CA",
  },
  {
    id: 2,
    title: "Luxury Master Bathroom",
    category: "Bathroom",
    description: "Spa-inspired master bath with frameless glass shower, freestanding soaking tub, and heated marble floors.",
    image: "https://picsum.photos/seed/proj2/600/450",
    location: "Glendora, CA",
  },
  {
    id: 3,
    title: "Two-Story Home Addition",
    category: "Addition",
    description: "800 sq ft two-story addition including new master suite and expanded living area with seamless architectural integration.",
    image: "https://picsum.photos/seed/proj3/600/450",
    location: "San Dimas, CA",
  },
  {
    id: 4,
    title: "Restaurant Build-Out",
    category: "Commercial",
    description: "Full restaurant build-out including commercial kitchen, dining area, bar, and outdoor patio seating.",
    image: "https://picsum.photos/seed/proj4/600/450",
    location: "Claremont, CA",
  },
  {
    id: 5,
    title: "Complete Roof Replacement",
    category: "Roofing",
    description: "Full tear-off and replacement with architectural shingles, new underlayment, and improved ventilation system.",
    image: "https://picsum.photos/seed/proj5/600/450",
    location: "Pomona, CA",
  },
  {
    id: 6,
    title: "Outdoor Living Space",
    category: "Outdoor",
    description: "Custom outdoor kitchen, built-in BBQ, pergola with string lighting, and flagstone patio with fire pit.",
    image: "https://picsum.photos/seed/proj6/600/450",
    location: "La Verne, CA",
  },
  {
    id: 7,
    title: "Open Concept Kitchen Remodel",
    category: "Kitchen",
    description: "Wall removal to create open floor plan, new island with seating, and modern appliance package installation.",
    image: "https://picsum.photos/seed/proj7/600/450",
    location: "Covina, CA",
  },
  {
    id: 8,
    title: "Guest Bathroom Renovation",
    category: "Bathroom",
    description: "Compact bathroom maximized with walk-in tiled shower, floating vanity, and modern fixtures throughout.",
    image: "https://picsum.photos/seed/proj8/600/450",
    location: "West Covina, CA",
  },
  {
    id: 9,
    title: "Office Tenant Improvement",
    category: "Commercial",
    description: "3,500 sq ft office buildout with conference rooms, private offices, open workspace, and server room.",
    image: "https://picsum.photos/seed/proj9/600/450",
    location: "La Verne, CA",
  },
];

export default function PortfolioContent() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        {/* TODO: Replace with actual portfolio hero image */}
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="JJ's Construction Portfolio"
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
            <span className="text-white">Portfolio</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Our Portfolio
          </h1>
          <p className="text-gray-200 text-lg mt-3 max-w-xl">
            Browse our completed projects across Southern California.
          </p>
        </div>
      </section>

      {/* Filter + Projects */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-heading font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 min-h-[44px] ${
                  activeFilter === cat
                    ? "bg-accent text-white shadow-lg"
                    : "bg-gray-100 text-charcoal hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  {/* TODO: Replace with actual project images */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-xs font-heading font-bold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-3">{project.description}</p>
                  <div className="flex items-center gap-1 text-charcoal/50 text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-charcoal/50 font-heading text-lg">No projects found in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Before/After Teaser */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto text-center">
          <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Transformations</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            Before &amp; After
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto mb-10">
            See the dramatic transformations we&apos;ve delivered for our clients.
          </p>
          {/* TODO: Add actual before/after slider component with real images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="bg-charcoal/10 text-charcoal/40 font-heading font-bold text-center py-2 text-sm">BEFORE</div>
              <Image
                src="https://picsum.photos/seed/before1/600/400"
                alt="Before renovation"
                width={600}
                height={400}
                className="object-cover w-full h-[250px]"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="bg-accent text-white font-heading font-bold text-center py-2 text-sm">AFTER</div>
              <Image
                src="https://picsum.photos/seed/after1/600/400"
                alt="After renovation"
                width={600}
                height={400}
                className="object-cover w-full h-[250px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Love What You See?"
        subtext="Let's discuss your project. Whether it's a kitchen remodel or a full commercial build, we're ready to bring your vision to life."
      />
    </div>
  );
}
