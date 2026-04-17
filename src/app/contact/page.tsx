import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact JJ's Construction for a free estimate on your construction or remodeling project in La Verne, CA. Call (626) 646-3423 or fill out our online form.",
};

export default function ContactPage() {
  return <ContactContent />;
}
