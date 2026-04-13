import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import FoundersSection from "@/components/FoundersSection";
import ServicesSection from "@/components/ServicesSection";
// import HowSection from "@/components/HowSection";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: "ClickLens Antique | Studio on the Move",
  description: "Bringing Vintage Photography to You.",
};

export default function Home() {
  return (
    <>
      <div className="fixed-bg"></div>
      <main>
        <Hero />
        <StorySection />
        <FoundersSection />
        <ServicesSection />
        {/* <HowSection /> */}
        <FooterSection />
      </main>
    </>
  );
}

// EOF
