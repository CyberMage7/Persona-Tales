import { useNavigate } from "react-router-dom";

export default function LandingNavbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 py-3">
          <div className="flex items-center gap-3 text-[#1d140c] dark:text-white cursor-pointer" onClick={() => navigate("/")}>
            <div className="size-6 text-primary">
              <span className="material-symbols-outlined text-3xl">auto_stories</span>
            </div>
            <h2 className="text-[#1d140c] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              My Story World
            </h2>
          </div>
          
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-8">
              <a 
                className="text-sm font-medium leading-normal text-[#1d140c] dark:text-gray-300 hover:text-primary dark:hover:text-primary cursor-pointer" 
                onClick={() => navigate("/")}
              >
                Home
              </a>
              <a 
                className="text-sm font-medium leading-normal text-[#1d140c] dark:text-gray-300 hover:text-primary dark:hover:text-primary cursor-pointer" 
                href="#"
              >
                About
              </a>
              <a 
                className="text-sm font-medium leading-normal text-[#1d140c] dark:text-gray-300 hover:text-primary dark:hover:text-primary cursor-pointer" 
                href="#"
              >
                Genres
              </a>
            </div>
            <div className="flex gap-2">
              <button 
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30"
                onClick={() => navigate("/login")}
              >
                <span className="truncate">Login</span>
              </button>
              <button 
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white dark:text-[#1d140c] text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90"
                onClick={() => navigate("/signup")}
              >
                <span className="truncate">Sign Up</span>
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button className="p-2 rounded-full hover:bg-primary/10">
              <span className="material-symbols-outlined text-[#1d140c] dark:text-white">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

