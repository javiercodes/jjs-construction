import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import FadeUp from "@/components/FadeUp";
import { StaggerGrid, StaggerItem } from "@/components/StaggerGrid";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about JJ's Construction — founded by brothers John and Adam Ramirez with 16+ years of experience in residential and commercial construction across Southern California.",
};

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: "Integrity",
    description: "We operate with honesty and transparency in every interaction, from the first estimate to the final walkthrough.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ),
    title: "Quality",
    description: "Premium materials and expert craftsmanship are non-negotiable. We build to last and to impress.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    ),
    title: "Communication",
    description: "Regular updates, responsive support, and open dialogue keep you informed at every stage of your project.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M9 12l2 2 4-4"/></svg>
    ),
    title: "Safety",
    description: "Strict adherence to safety protocols and building codes protects our team, our clients, and the community.",
  },
];

const teamMembers = [
  {
    name: "John Ramirez",
    role: "Co-Founder & Owner",
    initials: "JR",
    bio: "With over 16 years in the construction industry, John co-founded JJ's Construction with a clear purpose: to build a company rooted in craftsmanship, integrity, and long-term client relationships.",
    color: "bg-primary",
  },
  {
    name: "Adam Ramirez",
    role: "Co-Founder",
    initials: "AR",
    bio: "Adam brings deep field expertise and a commitment to quality control, helping lead a team equipped to handle projects of varying scale and complexity across residential and commercial construction.",
    color: "bg-accent",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="/images/Concrete & Foundation Work/concrete-foundation-slab-pour.jpeg"
          alt="About JJ's Construction - foundation work in progress"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container-custom mx-auto px-4">
          <nav className="text-gray-300 text-sm mb-4 font-body">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            About JJ&apos;s Construction
          </h1>
          <p className="text-gray-200 text-lg mt-3 max-w-xl">
            Building trust, one project at a time.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/Custom Home Build - Modern/modern-home-completed.jpeg"
                alt="JJ's Construction - completed modern home"
                width={800}
                height={600}
                className="object-cover w-full h-[400px] md:h-[500px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeUp>
            <FadeUp delay={0.15}>
              <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                Built on Craftsmanship, Integrity &amp; Long-Term Relationships
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                JJ&apos;s Construction was founded by brothers John and Adam Ramirez with a clear purpose: to build a company rooted in craftsmanship, integrity, and long-term client relationships. With over 16 years of experience in both residential and commercial construction, and a team that brings decades of combined field expertise, we are equipped to handle projects of varying scale and complexity.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Our approach is disciplined and detail-driven. We emphasize quality control, efficiency, and delivering work that meets the highest industry standards — while maintaining clear communication and accountability from start to finish.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                We partner closely with our clients to align their vision with our construction expertise, delivering functional, well-built spaces designed to perform and endure. When you work with JJ&apos;s Construction, you can be confident your project is in capable and experienced hands.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">What Drives Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Our Core Values
            </h2>
          </div>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300 border border-gray-100">
                  <div className="text-accent mx-auto mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="font-heading font-bold text-lg text-primary mb-3">{value.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">The People Behind the Projects</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Meet Our Team
            </h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Brothers John and Adam Ramirez founded JJ&apos;s Construction with a shared commitment to professionalism, transparency, and results without compromise. Together they lead a team with decades of combined field expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center group">
                {/* TODO: Replace with actual team photos */}
                <div className={`w-32 h-32 rounded-full ${member.color} mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                  <span className="text-white font-heading font-bold text-3xl">{member.initials}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-primary">{member.name}</h3>
                <p className="text-accent font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-charcoal/70 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Credentials</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Licensed, Bonded &amp; Insured
            </h2>
          </div>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                label: "California Licensed Contractor",
                detail: "Fully Licensed & Compliant",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
              },
              {
                label: "General Liability Insurance",
                detail: "Fully Covered",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
              },
              {
                label: "Workers' Compensation",
                detail: "All Employees Covered",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M12 7V4"/><path d="M8 7V5"/><path d="M16 7V5"/><circle cx="12" cy="12" r="2"/></svg>,
              },
              {
                label: "BBB Accredited",
                detail: "A+ Rating",
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
              },
            ].map((cert) => (
              <StaggerItem key={cert.label}>
                <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-accent mx-auto mb-3 flex justify-center">{cert.icon}</div>
                  <h3 className="font-heading font-bold text-primary text-sm mb-1">{cert.label}</h3>
                  <p className="text-charcoal/60 text-xs">{cert.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Let's Build Something Great Together"
        subtext="Whether you're planning a home remodel or a commercial build, our experienced team is ready to make your vision a reality."
      />
    </div>
  );
}
