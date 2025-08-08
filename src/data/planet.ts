export interface Planet {
  name: string;
  gravity: number; // Relative to Earth (1.0)
  color: string;
  videoUrl: string;
  description: string;
}

export const planetData: Planet[] = [
  {
    name: "Mercury",
    gravity: 0.378,
    color: "bg-gray-400",
    videoUrl: "/videos/mercury-tea.mp4", // Replace with your actual video path
    description: "The smallest planet with extreme temperature variations. Tea would pour very slowly here!"
  },
  {
    name: "Venus",
    gravity: 0.907,
    color: "bg-yellow-500",
    videoUrl: "/videos/venus-tea.mp4",
    description: "Similar gravity to Earth, but with crushing atmosphere and sulfuric acid clouds."
  },
  {
    name: "Earth",
    gravity: 1.0,
    color: "bg-blue-500",
    videoUrl: "/videos/earth-tea.mp4",
    description: "Our home planet - the perfect reference for tea making in space!"
  },
  {
    name: "Mars",
    gravity: 0.377,
    color: "bg-red-500",
    videoUrl: "/videos/mars-tea.mp4",
    description: "The Red Planet has weak gravity - tea would fall much slower than on Earth."
  },
  {
    name: "Jupiter",
    gravity: 2.36,
    color: "bg-orange-600",
    videoUrl: "/videos/jupiter-tea.mp4",
    description: "Massive gravity! Tea would fall more than twice as fast. Good luck lifting the teapot!"
  },
  {
    name: "Saturn",
    gravity: 0.916,
    color: "bg-yellow-600",
    videoUrl: "/videos/saturn-tea.mp4",
    description: "Despite its size, Saturn's low density means tea falls almost like Earth."
  },
  {
    name: "Uranus",
    gravity: 0.889,
    color: "bg-cyan-500",
    videoUrl: "/videos/uranus-tea.mp4",
    description: "The tilted planet with gravity slightly less than Earth's."
  },
  {
    name: "Neptune",
    gravity: 1.13,
    color: "bg-blue-700",
    videoUrl: "/videos/neptune-tea.mp4",
    description: "The windiest planet with gravity slightly stronger than Earth's."
  },
  {
    name: "Moon",
    gravity: 0.166,
    color: "bg-gray-300",
    videoUrl: "/videos/moon-tea.mp4",
    description: "Earth's satellite with very weak gravity - tea would fall in graceful slow motion!"
  }
];