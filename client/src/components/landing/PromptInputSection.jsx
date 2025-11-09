import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PromptInputSection() {
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const handleGenerate = () => {
    if (!token) {
      // If not logged in, redirect to signup
      navigate("/signup");
    } else {
      // If logged in, navigate to story generation (to be implemented)
      console.log("Generate story with prompt:", prompt);
      // navigate("/generate", { state: { prompt } });
    }
  };

  return (
    <div className="w-full @container py-10">
      <div className="flex flex-col justify-end items-center gap-6 px-4">
        <label className="flex flex-col w-full h-16 max-w-[720px]">
          <div className="flex w-full flex-1 items-stretch rounded-full h-full shadow-soft dark:shadow-none">
            <input 
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-[#1d140c] dark:text-white placeholder:text-gray-500 focus:outline-0 focus:ring-2 focus:ring-primary/50 border-2 border-transparent bg-white dark:bg-background-dark/50 h-full px-6 text-base font-normal leading-normal" 
              placeholder="Type your story idea or character..." 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
        </label>
        <button 
          className="flex min-w-[84px] w-full max-w-[720px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-5 bg-primary text-white dark:text-[#1d140c] text-lg font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity shadow-soft-orange"
          onClick={handleGenerate}
        >
          <span className="truncate">Generate My Story ✨</span>
        </button>
      </div>
    </div>
  );
}

