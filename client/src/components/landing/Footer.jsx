export default function Footer() {
  return (
    <footer className="w-full bg-cream dark:bg-background-dark/70">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-[#1d140c] dark:text-white">
            <div className="size-6 text-primary">
              <span className="material-symbols-outlined text-3xl">auto_stories</span>
            </div>
            <h2 className="text-lg font-bold">My Story World</h2>
          </div>
          <div className="flex items-center gap-8">
            <a 
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary" 
              href="#"
            >
              About
            </a>
            <a 
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary" 
              href="#"
            >
              FAQ
            </a>
            <a 
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary" 
              href="#"
            >
              Contact
            </a>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 My Story World. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

