const features = [
  {
    id: 1,
    icon: "spark",
    title: "AI Story Creator",
    description: "Turn your ideas into wonderful stories."
  },
  {
    id: 2,
    icon: "school",
    title: "Learn Good Values",
    description: "Stories are built to inspire kindness and growth."
  },
  {
    id: 3,
    icon: "shield_person",
    title: "Safe for Kids",
    description: "Content is carefully filtered and child-friendly."
  },
  {
    id: 4,
    icon: "military_tech",
    title: "Earn Achievements",
    description: "Receive certificates as you grow your storytelling journey."
  }
];

export default function WhatMakesUsSpecial() {
  return (
    <div className="py-16">
      <h2 className="text-[#1d140c] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5 text-center">
        What Makes Us Special
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div 
            key={feature.id}
            className="p-6 rounded-lg bg-white dark:bg-background-dark/50 shadow-soft flex flex-col items-start gap-4"
          >
            <div className="p-3 rounded-full bg-primary/10 text-primary text-3xl">
              <span className="material-symbols-outlined">{feature.icon}</span>
            </div>
            <h3 className="font-bold text-lg text-[#1d140c] dark:text-white">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

