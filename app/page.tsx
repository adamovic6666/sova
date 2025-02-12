import Contact from "./_components/sections/contact/Contact";
import Hero from "./_components/sections/hero/Hero";
import OurWork from "./_components/sections/our-work/OurWork";
import WhoWeAre from "./_components/sections/who-we-are/WhoWeAre";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <OurWork />
      <Contact />
    </>
  );
}
