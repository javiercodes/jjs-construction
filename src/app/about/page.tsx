import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about JJ's Construction — La Verne's trusted general contractor with 15+ years of experience in residential remodeling and commercial construction across Southern California.",
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

/* TODO: Replace with actual team members */
const teamMembers = [
  {
    name: "JJ Martinez",
    role: "Owner / General Contractor",
    initials: "JJ",
    bio: "With over 15 years in the construction industry, JJ founded the company with a vision of quality-first construction in Southern California.",
    color: "bg-primary",
  },
  {
    name: "Sarah Chen",
    role: "Project Manager",
    initials: "SC",
    bio: "Sarah ensures every project runs smoothly from start to finish, coordinating teams and keeping clients informed every step of the way.",
    color: "bg-accent",
  },
  {
    name: "Mike Rodriguez",
    role: "Lead Foreman",
    initials: "MR",
    bio: "Mike brings 20+ years of hands-on construction experience, leading our skilled crew with precision and dedication.",
    color: "bg-primary-light",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        {/* TODO: Replace with actual about hero image */}
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
          alt="About JJ's Construction"
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
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {/* TODO: Replace with actual team photo */}
              <Image
                src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&q=80"
                alt="JJ's Construction team"
                width={800}
                height={600}
                className="object-cover w-full h-[400px] md:h-[500px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="text-accent font-heading font-semibold text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                From Humble Beginnings to SoCal&apos;s Trusted Builder
              </h2>
              {/* TODO: Replace with actual company history */}
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Founded in La Verne, California, JJ&apos;s Construction began with a simple mission: to
                deliver exceptional construction services with integrity and transparency. What started
                as a small residential remodeling operation has grown into a full-service general
                contracting firm serving communities across Southern California.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Over the past 15 years, we&apos;ve completed hundreds of projects ranging from kitchen
                and bathroom remodels to major commercial builds. Our growth is built on a foundation
                of satisfied clients who trust us with their most important investments — their homes
                and businesses.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                Today, JJ&apos;s Construction continues to set the standard for quality, reliability,
                and customer service in the industry. We&apos;re proud to call La Verne home and to
                serve the communities that have supported us from day one.
              </p>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="text-accent mx-auto mb-4 flex justify-center">{value.icon}</div>
                <h3 className="font-heading font-bold text-lg text-primary mb-3">{value.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
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
              {/* TODO: Replace with actual team description */}
              Our talented team of professionals brings decades of combined experience in construction,
              project management, and design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* TODO: Replace with actual license/certification info */}
            {[
              { label: "CA Contractor's License", detail: "License #XXXXXX", icon: "📋" },
              { label: "General Liability Insurance", detail: "Fully Covered", icon: "🛡️" },
              { label: "Workers' Compensation", detail: "All Employees Covered", icon: "👷" },
              { label: "BBB Accredited", detail: "A+ Rating", icon: "⭐" },
            ].map((cert) => (
              <div key={cert.label} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h3 className="font-heading font-bold text-primary text-sm mb-1">{cert.label}</h3>
                <p className="text-charcoal/60 text-xs">{cert.detail}</p>
              </div>
            ))}
          </div>
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
