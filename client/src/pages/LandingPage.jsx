import HeroSection from "../components/landing/HeroSection";
import PromptInputSection from "../components/landing/PromptInputSection";
import GenreHighlights from "../components/landing/GenreHighlights";
import WhatMakesUsSpecial from "../components/landing/WhatMakesUsSpecial";
import HowItWorks from "../components/landing/HowItWorks";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <main className="flex-grow">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4">
              <HeroSection />
              <PromptInputSection />
              <GenreHighlights />
              <WhatMakesUsSpecial />
              <HowItWorks />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

