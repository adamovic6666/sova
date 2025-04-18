import OurWorkPageContent from "@/app/_components/sections/our-work/page-content/OurWorkPageContent";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Work | Sova Creative Studio",
  description:
    "Explore our work at Sova Creative Studio - a showcase of innovative branding, design, and visual communication solutions for global brands and local startups",
};

export default function OurWorkPage() {
  return (
    <main className="main-content">
      <OurWorkPageContent />
    </main>
  );
}
