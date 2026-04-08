import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse JJ's Construction project portfolio featuring kitchen remodels, bathroom renovations, room additions, commercial builds, and more across Southern California.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
