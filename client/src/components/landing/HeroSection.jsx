import { useState, useEffect } from "react";

export default function HeroSection() {
  const fullText = "Create Magical Stories With Your Imagination ✨";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50); // Adjust speed here (lower = faster)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="w-full @container">
      <div className="flex flex-col-reverse items-center gap-10 px-4 py-16 text-center @[864px]:flex-row @[864px]:text-left">
        <div className="flex flex-col gap-4">
          <h1 className="text-[#1d140c] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl min-h-[4.5rem] @[480px]:min-h-[8rem]">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h1>
          <h2 className="text-base font-normal leading-normal text-gray-600 dark:text-gray-400 @[480px]:text-lg">
            A joyful story world where creativity grows and values blossom.
          </h2>
        </div>
        <div className="w-full max-w-md @[864px]:w-2/3 flex-shrink-0">
          <img 
            className="w-full h-auto object-cover rounded-xl" 
            alt="A whimsical illustration of a child reading a glowing book surrounded by friendly characters and stars." 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhwJAGOupJ5YAP4klLx7cFvmTPkP2Z_kbJqgphT2AX6u9q0edBuaL1kpiX0FB7uibhHroG2Tgc7G_fIzsyvQh506L-EXw9m71YahDfdMdbCmbxQwhHuzqU25zWSthUWB-ESO7EOKZe7dnSv3PiPEfXTFODPxL-4MlMTMXCoH-Rr0mEByIrWs7_IVBklt8rcCp_4nhB5q-yUbrVtcHO0gTiJWbWbtTjVAQmpS9OL1mZJO11h_QGIUmdIS9MoynOVThTnhX8IGd9MKoU"
          />
        </div>
      </div>
    </div>
  );
}

