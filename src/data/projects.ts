export type ProjectStatus = "complete" | "in-progress" | "planned";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription?: string;        // for future individual project pages
  techStack: string[];
  status: ProjectStatus;
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  screenshot?: string;             // path relative to /public/assets/screenshots/
  highlights?: string[];           // bullet points for future project pages
}

export const projects: Project[] = [
  {
    slug: "betwise",
    title: "BetWise — Sports Betting Backtester",
    shortDescription: "Won first place in Advanced Databases. A web app for inputting and analyzing the historical performance of sports betting strategies.",
    techStack: ["Python", "SQL", "Flask", "JavaScript"],
    status: "complete",
    featured: true,
    githubUrl: "https://github.com/willarms/BetWise",  // update URL
    // screenshot: "betwise.png",
  },
  {
    slug: "pos-evm",
    title: "Positive EV Model",
    shortDescription: "Algorithm that scrapes lines across online sportsbooks to identify statistical outliers and positive expected value bets.",
    techStack: ["Python"],
    status: "in-progress",
    featured: true,
    githubUrl: "https://github.com/willarms/posEVM",  // update URL
  },
  {
    slug: "game-of-life",
    title: "Conway's Game of Life",
    shortDescription: "Interactive implementation of Conway's Game of Life.",
    techStack: ["Java"],        // update if different
    status: "complete",
    featured: false,
    githubUrl: "https://github.com/willarms/gameofLife",  // update URL
  },
  {
    slug: "turtle-connect",
    title: "TurtleConnect",
    shortDescription: "TODO: add description",
    techStack: ["Python"],      // update tech stack
    status: "complete",
    featured: false,
    githubUrl: "https://github.com/willarms/turtleConnect",  // update URL
  },
  {
    slug: "web3-db",
    title: "Web3 Database",
    shortDescription: "TODO: add description",
    techStack: ["SQL"],         // update tech stack
    status: "complete",
    featured: false,
    githubUrl: "https://github.com/willarms/web3DB",  // update URL
  },
  {
    slug: "scheme-tictactoe",
    title: "Scheme Tic-Tac-Toe",
    shortDescription: "Tic-Tac-Toe implemented in Scheme, a functional Lisp dialect.",
    techStack: ["Scheme"],
    status: "complete",
    featured: false,
    githubUrl: "https://github.com/willarms/schemeTicTacToe",  // update URL
  },

  // --- Projects to add later ---
  // {
  //   slug: "cbb-model",
  //   title: "CBB Prediction Model",
  //   shortDescription: "...",
  //   techStack: ["Python", "pandas", "scikit-learn"],
  //   status: "in-progress",
  //   featured: false,
  // },
  // {
  //   slug: "whale-tracker",
  //   title: "Whale Tracker",
  //   ...
  // },
];

// Helper: get only projects you want on the homepage grid
export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = projects;
