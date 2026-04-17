import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "JJ's Construction | Premier General Contractor in La Verne, CA",
    template: "%s | JJ's Construction",
  },
  description:
    "JJ's Construction is a trusted general contractor in La Verne, California specializing in residential remodeling, commercial construction, kitchen & bathroom remodels, room additions, roofing, and more. Get a free estimate today!",
  keywords: [
    "general contractor La Verne",
    "construction company La Verne CA",
    "kitchen remodeling La Verne",
    "bathroom remodeling",
    "room additions",
    "residential remodeling Southern California",
    "commercial construction",
    "JJs Construction SoCal",
  ],
  openGraph: {
    title: "JJ's Construction | Premier General Contractor in La Verne, CA",
    description:
      "Trusted general contractor in La Verne, CA. Residential remodeling, commercial construction, and more.",
    locale: "en_US",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "JJ's Construction",
  alternateName: "JJs Construction SoCal",
  url: "https://jjsconstructionsocal.com",
  telephone: "+1-626-646-3423",
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Verne",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.1008,
    longitude: -117.7678,
  },
  /* TODO: Replace with actual business hours */
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  /* TODO: Replace with actual aggregate rating data */
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
  },
  areaServed: [
    "La Verne",
    "San Dimas",
    "Glendora",
    "Claremont",
    "Pomona",
    "Covina",
    "West Covina",
  ],
  serviceType: [
    "General Contracting",
    "Residential Remodeling",
    "Commercial Construction",
    "Kitchen Remodeling",
    "Bathroom Remodeling",
    "Room Additions",
    "Roofing",
    "Painting",
    "Flooring",
    "Outdoor & Landscaping",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="font-body text-charcoal bg-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
