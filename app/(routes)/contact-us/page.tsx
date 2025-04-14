import Contact from "@/app/_components/sections/contact/Contact";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us | Sova Creative Studio",
  description:
    "Get in touch with Sova Creative Studio - whether you need branding, design, or visual communication expertise, we’re here to help. Let’s make your brand fly!",
};
export default function ContactPage() {
  return <Contact />;
}
