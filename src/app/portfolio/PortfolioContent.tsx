"use client";

import { useState } from "react";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Custom Home", "Deck & Patio", "Pool Deck", "Bathroom", "Commercial", "Outdoor Living", "Pergola", "Home Renovation"];

const projects = [
  // Custom Home - Mediterranean
  { id: 1, title: "Mediterranean Estate — Front Facade", category: "Custom Home", description: "Grand Mediterranean custom home build with stone archway entrance, stucco exterior, and Spanish tile roof.", image: "/images/Custom Home Build - Mediterranean/mediterranean-home-front-facade.jpeg", location: "Southern California" },
  { id: 2, title: "Mediterranean Home — Exterior", category: "Custom Home", description: "Two-story Mediterranean custom build featuring stone veneer accents and clay tile roof.", image: "/images/Custom Home Build - Mediterranean/mediterranean-home-exterior-01.jpeg", location: "Southern California" },
  { id: 3, title: "Mediterranean Home — Rear Exterior", category: "Custom Home", description: "Rear exterior view showcasing stucco finish, arched balcony, and Spanish-style detailing.", image: "/images/Custom Home Build - Mediterranean/mediterranean-home-exterior-02.jpeg", location: "Southern California" },
  { id: 4, title: "Mediterranean Home — Side Elevation", category: "Custom Home", description: "Side elevation of a completed Mediterranean-style custom home with tile roof and stucco finish.", image: "/images/Custom Home Build - Mediterranean/mediterranean-home-exterior-03.jpeg", location: "Southern California" },
  { id: 5, title: "Mediterranean Home — Exterior Detail", category: "Custom Home", description: "Exterior detail showing white stucco, black-framed windows, and classic Spanish tile roof.", image: "/images/Custom Home Build - Mediterranean/mediterranean-home-exterior-04.jpeg", location: "Southern California" },
  { id: 6, title: "Mediterranean Home — Exterior View", category: "Custom Home", description: "Full exterior view of a Mediterranean custom home near completion.", image: "/images/Custom Home Build - Mediterranean/mediterranean-home-exterior-05.jpeg", location: "Southern California" },
  { id: 7, title: "Mediterranean Home — Grand Entrance", category: "Custom Home", description: "Arched entryway with stone surround, steps, and pergola — signature Mediterranean design.", image: "/images/Custom Home Build - Mediterranean/mediterranean-home-entrance.jpeg", location: "Southern California" },
  // Custom Home - Luxury Estate
  { id: 8, title: "Luxury Estate — Completed Exterior", category: "Custom Home", description: "Sprawling luxury estate with ornate ironwork balconies, arched windows, and resort-style grounds.", image: "/images/Custom Home Build - Luxury Estate/luxury-estate-exterior.jpeg", location: "Southern California" },
  { id: 9, title: "Luxury Estate — Framing Stage", category: "Custom Home", description: "Two-story custom luxury home at framing stage, showing scale and structural complexity.", image: "/images/Custom Home Build - Luxury Estate/luxury-estate-framing.jpeg", location: "Southern California" },
  { id: 10, title: "Luxury Estate — Concrete Wall Forms", category: "Custom Home", description: "Large-scale ICF concrete wall construction on a hillside luxury estate with pool below.", image: "/images/Custom Home Build - Luxury Estate/luxury-estate-concrete-wall-forms.jpeg", location: "Southern California" },
  // Custom Home - Modern
  { id: 11, title: "Modern Home — Completed", category: "Custom Home", description: "Sleek modern home featuring stone veneer accent, glass garage door, and clean landscaping.", image: "/images/Custom Home Build - Modern/modern-home-completed.jpeg", location: "Southern California" },
  // Custom Home - General
  { id: 12, title: "Custom Home — Interior Completed", category: "Custom Home", description: "Open-concept interior with hardwood flooring, teal accent wall, and modern finishes.", image: "/images/Custom Home Build - General/custom-home-interior-completed.jpeg", location: "Southern California" },
  { id: 13, title: "Custom Home — Window Installation", category: "Custom Home", description: "Large-format aluminum-framed window installation during new custom home construction.", image: "/images/Custom Home Build - General/custom-home-window-installation.jpeg", location: "Southern California" },
  { id: 14, title: "Custom Home — Glass Skylight", category: "Custom Home", description: "Interior view of a full glass roof/skylight system installed in a modern custom home.", image: "/images/Custom Home Build - General/custom-home-glass-skylight.jpeg", location: "Southern California" },
  { id: 15, title: "Custom Home — Stained Glass Windows", category: "Custom Home", description: "Custom stained glass window installation featuring colorful geometric panels.", image: "/images/Custom Home Build - General/custom-home-stained-glass-windows.jpeg", location: "Southern California" },
  { id: 16, title: "Custom Home — Interior Framing", category: "Custom Home", description: "Structural wood framing of a two-story custom home interior.", image: "/images/Custom Home Build - General/custom-home-interior-framing-01.jpeg", location: "Southern California" },
  { id: 17, title: "Custom Home — Interior Framing Detail", category: "Custom Home", description: "Detailed view of staircase and floor framing during custom home construction.", image: "/images/Custom Home Build - General/custom-home-interior-framing-02.jpeg", location: "Southern California" },
  { id: 18, title: "Custom Home — Wood Siding", category: "Custom Home", description: "Horizontal cedar wood siding installation on a custom home exterior.", image: "/images/Custom Home Build - General/custom-home-wood-siding.jpeg", location: "Southern California" },
  { id: 19, title: "Custom Home — Entrance Tile", category: "Custom Home", description: "Completed modern home entrance with large-format tile, concrete driveway, and turf.", image: "/images/Custom Home Build - General/custom-home-entrance-tile-completed.jpeg", location: "Southern California" },
  // Deck & Patio
  { id: 20, title: "Multi-Level Wood Deck", category: "Deck & Patio", description: "Tiered multi-level wood deck with step landings, attached to a modern concrete home.", image: "/images/Deck Construction - Wood/wood-deck-multilevel-01.jpeg", location: "Southern California" },
  { id: 21, title: "Multi-Level Deck — Wide View", category: "Deck & Patio", description: "Wider angle of the multi-level cedar deck showing full scope and stepped design.", image: "/images/Deck Construction - Wood/wood-deck-multilevel-02.jpeg", location: "Southern California" },
  { id: 22, title: "Pool-Side Diagonal Deck", category: "Deck & Patio", description: "Wood deck with diagonal herringbone pattern boards alongside a pool.", image: "/images/Deck Construction - Wood/wood-deck-pool-diagonal.jpeg", location: "Southern California" },
  { id: 23, title: "Wood Deck Landing", category: "Deck & Patio", description: "Cedar deck landing off sliding glass doors — clean and minimal.", image: "/images/Deck Construction - Wood/wood-deck-landing.jpeg", location: "Southern California" },
  { id: 24, title: "LED Deck — Night View", category: "Deck & Patio", description: "Multi-level wood deck with amber LED strip lighting under each riser — stunning at night.", image: "/images/Deck Construction - LED Lighting/led-deck-01.jpeg", location: "Southern California" },
  { id: 25, title: "LED Deck — Alternate Angle", category: "Deck & Patio", description: "Alternate angle of the LED-lit deck showing full width and warm ambient glow.", image: "/images/Deck Construction - LED Lighting/led-deck-02.jpeg", location: "Southern California" },
  // Pool Deck
  { id: 26, title: "Composite Pool Deck & Spa", category: "Pool Deck", description: "Completed composite pool deck with circular brick spa surround — resort-style finish.", image: "/images/Pool Deck - Composite Decking/pool-deck-composite-completed-01.jpeg", location: "Southern California" },
  { id: 27, title: "Pool Deck — Full View", category: "Pool Deck", description: "Full-width composite deck running alongside the pool with clean lines and warm tones.", image: "/images/Pool Deck - Composite Decking/pool-deck-composite-completed-02.jpeg", location: "Southern California" },
  { id: 28, title: "Pool Deck — Installation", category: "Pool Deck", description: "Composite pool deck boards being laid during installation.", image: "/images/Pool Deck - Composite Decking/pool-deck-composite-installation.jpeg", location: "Southern California" },
  { id: 29, title: "Pool Deck & Spa — View 3", category: "Pool Deck", description: "Another angle of the composite pool deck with circular brick spa surround.", image: "/images/Pool Deck - Composite Decking/pool-deck-composite-spa-03.jpeg", location: "Southern California" },
  { id: 30, title: "Pool Deck & Spa — View 4", category: "Pool Deck", description: "Close-up showing the composite deck surface quality and spa surround detailing.", image: "/images/Pool Deck - Composite Decking/pool-deck-composite-spa-04.jpeg", location: "Southern California" },
  { id: 31, title: "Pool Deck — Wood Fence Wall", category: "Pool Deck", description: "Horizontal wood slat fence wall alongside a composite pool deck.", image: "/images/Pool Deck - Composite Decking/pool-deck-wood-fence-wall.jpeg", location: "Southern California" },
  // Bathroom
  { id: 32, title: "Luxury Marble Bathroom", category: "Bathroom", description: "Full spa-style remodel with Calacatta marble slab walls, frameless glass shower, and freestanding tub.", image: "/images/Bathroom Remodel/bathroom-luxury-marble-01.jpeg", location: "Southern California" },
  { id: 33, title: "Luxury Bathroom — Alternate View", category: "Bathroom", description: "Another view of the marble master bath showing soaking tub and glass shower enclosure.", image: "/images/Bathroom Remodel/bathroom-luxury-marble-02.jpeg", location: "Southern California" },
  { id: 34, title: "Herringbone Tile Bathroom", category: "Bathroom", description: "Custom tile work featuring herringbone chevron walls, penny mosaic accents, and glass shower.", image: "/images/Bathroom Remodel/bathroom-tile-herringbone-01.jpeg", location: "Southern California" },
  { id: 35, title: "Tile Bathroom — Alternate View", category: "Bathroom", description: "Full view of the herringbone tile bathroom showcasing ceiling detail and fixture placement.", image: "/images/Bathroom Remodel/bathroom-tile-herringbone-02.jpeg", location: "Southern California" },
  // Commercial
  { id: 36, title: "360 Ten — Completed Exterior", category: "Commercial", description: "Commercial tenant improvement — completed blue facade exterior of the 360 Ten building.", image: "/images/Commercial Construction/commercial-360ten-exterior-01.jpeg", location: "Southern California" },
  { id: 37, title: "360 Ten — Exterior View 2", category: "Commercial", description: "Side elevation of the completed 360 Ten commercial building with signage.", image: "/images/Commercial Construction/commercial-360ten-exterior-02.jpeg", location: "Southern California" },
  { id: 38, title: "360 Ten — Exterior View 3", category: "Commercial", description: "Full exterior view of the 360 Ten commercial buildout.", image: "/images/Commercial Construction/commercial-360ten-exterior-03.jpeg", location: "Southern California" },
  { id: 39, title: "360 Ten — Under Construction", category: "Commercial", description: "360 Ten commercial building during active construction phase.", image: "/images/Commercial Construction/commercial-360ten-under-construction.jpeg", location: "Southern California" },
  { id: 40, title: "Dental Arts Plaza", category: "Commercial", description: "Commercial renovation project — Dental Arts Plaza building exterior.", image: "/images/Commercial Construction/commercial-dental-arts-plaza-before.jpeg", location: "Southern California" },
  { id: 41, title: "Commercial Metal Panel Siding", category: "Commercial", description: "Modern commercial building with gray metal panel siding installation.", image: "/images/Commercial Construction/commercial-metal-panel-siding.jpeg", location: "Southern California" },
  { id: 42, title: "Metal Roof Installation", category: "Commercial", description: "Standing seam metal roofing installed on a commercial building.", image: "/images/Commercial Construction/commercial-metal-roof-installation.jpeg", location: "Southern California" },
  // Outdoor Living
  { id: 43, title: "Outdoor Fireplace — Completed", category: "Outdoor Living", description: "Stunning outdoor fireplace with Talavera tile surround, stucco finish, and herringbone terracotta pavers.", image: "/images/Outdoor Fireplace & BBQ/outdoor-fireplace-talavera-completed.jpeg", location: "Southern California" },
  { id: 44, title: "Outdoor Fireplace — Construction", category: "Outdoor Living", description: "Custom outdoor fireplace being built with Talavera tile accent and stucco exterior.", image: "/images/Outdoor Fireplace & BBQ/outdoor-fireplace-talavera-construction.jpeg", location: "Southern California" },
  { id: 45, title: "Outdoor Fireplace — Close-Up", category: "Outdoor Living", description: "Detail shot of the Talavera tile surround and herringbone firebox interior.", image: "/images/Outdoor Fireplace & BBQ/outdoor-fireplace-talavera-detail.jpeg", location: "Southern California" },
  { id: 46, title: "Wood Fence — Privacy Gate", category: "Outdoor Living", description: "Custom cedar privacy fence and gate with warm stain finish.", image: "/images/Fencing & Gates/wood-fence-gate.jpeg", location: "Southern California" },
  { id: 47, title: "Wood Fence — Diagonal Panel", category: "Outdoor Living", description: "Diagonal herringbone wood fence panel alongside a pool deck.", image: "/images/Fencing & Gates/wood-fence-diagonal-panel.jpeg", location: "Southern California" },
  { id: 48, title: "ADU Wood Structure", category: "Outdoor Living", description: "Small accessory dwelling unit with wood siding and metal roof.", image: "/images/ADU & Outbuildings/adu-wood-structure.jpeg", location: "Southern California" },
  // Pergola
  { id: 49, title: "Pergola with Composite Deck", category: "Pergola", description: "Wood pergola with modern black hardware over a composite deck — perfect outdoor living space.", image: "/images/Pergola & Patio Covers/pergola-with-composite-deck-01.jpeg", location: "Southern California" },
  { id: 50, title: "Pergola — Alternate Angle", category: "Pergola", description: "Alternate view of the pergola and composite deck with lush backyard setting.", image: "/images/Pergola & Patio Covers/pergola-with-composite-deck-02.jpeg", location: "Southern California" },
  { id: 51, title: "Curved Wood Pergola Ceiling", category: "Pergola", description: "Stunning curved tongue-and-groove wood ceiling inside a custom pergola or gazebo.", image: "/images/Pergola & Patio Covers/pergola-curved-wood-ceiling-01.jpeg", location: "Southern California" },
  { id: 52, title: "Curved Wood Ceiling — View 2", category: "Pergola", description: "Another angle of the curved wood ceiling pergola — exceptional carpentry detail.", image: "/images/Pergola & Patio Covers/pergola-curved-wood-ceiling-02.jpeg", location: "Southern California" },
  { id: 53, title: "Pergola — Mediterranean Garden", category: "Pergola", description: "Wood pergola under construction alongside a Mediterranean-style home with fountain garden.", image: "/images/Pergola & Patio Covers/pergola-mediterranean-garden.jpeg", location: "Southern California" },
  { id: 54, title: "Pergola — Under Construction", category: "Pergola", description: "Pergola framing with wood beams and ornate stone columns being assembled.", image: "/images/Pergola & Patio Covers/pergola-construction.jpeg", location: "Southern California" },
  // Home Renovation
  { id: 55, title: "Exterior Renovation — Scaffolding", category: "Home Renovation", description: "Home exterior renovation underway with full scaffolding setup.", image: "/images/Home Renovation - Exterior/home-renovation-scaffolding-01.jpeg", location: "Southern California" },
  { id: 56, title: "Exterior Renovation — Scaffolding 2", category: "Home Renovation", description: "Exterior renovation project showing dark board-and-batten siding application.", image: "/images/Home Renovation - Exterior/home-renovation-scaffolding-02.jpeg", location: "Southern California" },
  { id: 57, title: "Modern Exterior — New Siding", category: "Home Renovation", description: "Modern home exterior renovation with new dark siding and updated windows.", image: "/images/Home Renovation - Exterior/home-renovation-modern-siding.jpeg", location: "Southern California" },
  { id: 58, title: "Home Renovation — Exterior Framing", category: "Home Renovation", description: "Exterior framing and house wrap installation during a home renovation project.", image: "/images/Home Renovation - Exterior/home-renovation-framing.jpeg", location: "Southern California" },
  { id: 59, title: "Interior Remodel — Painting", category: "Home Renovation", description: "Interior remodel with fresh paint, new drywall, and updated lighting.", image: "/images/Home Renovation - Interior/interior-remodel-painting-01.jpeg", location: "Southern California" },
  { id: 60, title: "Interior Remodel — Painting 2", category: "Home Renovation", description: "Interior hallway remodel with skylight above and fresh paint throughout.", image: "/images/Home Renovation - Interior/interior-remodel-painting-02.jpeg", location: "Southern California" },
  { id: 61, title: "Interior Remodel — Insulation & Drywall", category: "Home Renovation", description: "Interior renovation showing insulation board and drywall preparation stage.", image: "/images/Home Renovation - Interior/interior-remodel-insulation-drywall.jpeg", location: "Southern California" },
  { id: 62, title: "Concrete Foundation — Slab Pour", category: "Home Renovation", description: "Concrete foundation slab being poured and leveled with rebar anchor bolts set.", image: "/images/Concrete & Foundation Work/concrete-foundation-slab-pour.jpeg", location: "Southern California" },
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
        <Image
          src="/images/Deck Construction - LED Lighting/led-deck-01.jpeg"
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
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-heading font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 min-h-[44px] border ${
                  activeFilter === cat
                    ? "bg-accent text-white border-accent shadow-lg shadow-accent/20"
                    : "bg-white text-charcoal border-gray-200 hover:border-accent hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="group rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 bg-white"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white text-xs font-heading font-bold px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm leading-snug">{project.description}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-base text-primary mb-1 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-charcoal/50 text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {project.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-charcoal/50 font-heading text-lg">No projects found in this category yet.</p>
            </div>
          )}
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
