const steps = [
  {
    id: 1,
    emoji: "🎭",
    title: "Choose a Genre",
    description: "Pick a theme for your adventure."
  },
  {
    id: 2,
    emoji: "💡",
    title: "Enter Your Idea",
    description: "Describe your character or plot."
  },
  {
    id: 3,
    emoji: "📖",
    title: "Watch Your Story Appear",
    description: "Our AI brings your imagination to life."
  },
  {
    id: 4,
    emoji: "🏆",
    title: "Earn Certificates & Grow",
    description: "Celebrate your creative milestones."
  }
];

export default function HowItWorks() {
  return (
    <div className="py-16">
      <h2 className="text-[#1d140c] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5 text-center">
        How It Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center gap-3">
            <div className="text-5xl text-primary">{step.emoji}</div>
            <h3 className="font-bold text-[#1d140c] dark:text-white">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

