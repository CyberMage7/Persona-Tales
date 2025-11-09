const genres = [
  { id: 1, name: "Adventure", icon: "explore" },
  { id: 2, name: "Nature Care", icon: "park" },
  { id: 3, name: "Mythology", icon: "fort" },
  { id: 4, name: "Gratitude", icon: "favorite" },
  { id: 5, name: "Perseverance", icon: "flag" },
  { id: 6, name: "Honesty", icon: "balance" },
  { id: 7, name: "Humor", icon: "sentiment_very_satisfied" },
  { id: 8, name: "Mystery", icon: "search" },
  { id: 9, name: "Respect", icon: "escalator_warning" },
  { id: 10, name: "Science Fiction", icon: "rocket_launch" }
];

export default function GenreHighlights() {
  return (
    <div className="py-16">
      <h2 className="text-[#1d140c] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5 text-center">
        Choose Your Adventure 🎨
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {genres.map((genre) => (
          <div 
            key={genre.id}
            className="flex flex-col items-center gap-3 text-center p-4 rounded-lg bg-cream/50 dark:bg-background-dark/50 hover:shadow-soft transition-shadow cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-primary text-3xl">
              <span className="material-symbols-outlined">{genre.icon}</span>
            </div>
            <div>
              <p className="text-[#1d140c] dark:text-gray-200 text-sm font-medium leading-normal">
                {genre.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

