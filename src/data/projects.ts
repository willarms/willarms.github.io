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
  video?: string;                  // path relative to /public/assets/screen-recordings/, only rendered on the project detail page
  highlights?: string[];           // bullet points for future project pages
}

export const projects: Project[] = [
  {
    slug: "betwise",
    title: "BetWise — Sports Betting Historical Backtester",
    shortDescription: "Won first place in Advanced Databases course. A web app for inputting and analyzing the historical performance of NBA sportsbetting strategies.",
    techStack: ["Python", "SQL", "Flask", "JavaScript"],
    status: "complete",
    featured: true,
    githubUrl: "https://github.com/willarms/sportsbetting-historical-backtester",
    screenshot: "betwise-screenshot.png",
    video: "betwise-demo.mp4",  // compressed from 33.8MB .mov (3024x1652/120fps) → ~1.5MB, 1280w/30fps/no audio
  },
  {
    slug: "pos-evm",
    title: "Positive EV Model",
    shortDescription: "Model pairs web scraping online sportsbooks with an algorithm to identify positive expected value bets",
    techStack: ["Python"],
    status: "in-progress",
    featured: false,
    githubUrl: "https://github.com/willarms/posEVM",  // update URL if needed
  },
  {
    slug: "game-of-life",
    title: "Conway's Game of Life",
    shortDescription: "Command-line implementation of Conway's Game of Life, built around a simulation library with a Makefile-driven build.",
    techStack: ["C"],
    status: "complete",
    featured: false,
    githubUrl: "https://github.com/willarms/gameOfLife",
  },
  {
    slug: "turtle-connect",
    title: "TurtleConnect",
    shortDescription: "A social app designed for elderly users built for a Human-AI Collaboration course project.",
    techStack: ["Python", "FastAPI", "Socket.IO", "SQLite", "Alembic", "React"],
    status: "complete",
    featured: false,
    githubUrl: "https://github.com/willarms/turtle-connect",
    highlights: [
      "FastAPI + Socket.IO backend with SQLAlchemy/Alembic-managed SQLite database",
      "React frontend with a guardian/group activity dashboard",
      "JWT-based auth with a documented test account for demos",
      "Uses Google OAuth to support seamless transition to video calls for groups"
    ],
  },
  {
    slug: "web3-db",
    title: "Web3 Database",
    shortDescription: "Undergraduate research project building a decentralized file-storage system. Uses a Solidity smart contract for on-chain metadata paired with a FastAPI backend and web frontend for uploading and browsing files.",
    techStack: ["Solidity", "Hardhat", "Python", "FastAPI", "React"],
    status: "complete",
    featured: true,
    githubUrl: "https://github.com/willarms/web3DB",  // update URL
    video: "web3db-demo.mp4",  // compressed from devBox/web3DB/tests/fs-demo.mp4 (10MB → ~625KB, 1280w/30fps/no audio)
    screenshot: "web3db-fs-ss.png",
    highlights: [
      "Project I worked on as a memeber of Notre Dame's Data Security and Privacy Lab",
      "File system built for Web3 database",
      "On-chain file metadata via a Hardhat-managed Solidity contract",
      "Early stages end-to-end demo recorded (see devBox/web3DB/tests/)",
      "See project's progress here: https://fs.web3db.org/"
    ],
  },
  {
    slug: "scheme-tictactoe",
    title: "Scheme Tic-Tac-Toe",
    shortDescription: "Course project implementing Tic-Tac-Toe game in Scheme, a functional Lisp dialect.",
    techStack: ["Scheme"],
    status: "complete",
    featured: false,
    githubUrl: "https://github.com/willarms/scheme-tictactoe",
  },
  {
    slug: "java-game",
    title: "Java Arcade Game",
    shortDescription: "A small Java arcade-style game built around a Strategy-pattern collider system with multiple difficulties.",
    techStack: ["Java"],
    status: "complete",
    featured: false,
    githubUrl: "https://github.com/willarms/javaGame",
  },

  // --- Projects to add later ---
  // {
  //   slug: "cbb-model",
  //   title: "CBB Prediction Model",
  //   shortDescription: "Compares implied winning % (from Monte Carlo sims and betting odds to advance) and public pick % to provide recommended bracket pool strategy",
  //   techStack: ["Python", "pandas", "scikit-learn"],
  //   status: "in-progress",
  //   featured: false,
  // },
  // {
  //   slug: "cherrypy-movie-rec",
  //   title: "Movie Recommender (CherryPy)",
  //   shortDescription: "Movie recommendation web app built on a Movie-Lens database.",
  //   techStack: ["Python", "CherryPy"],
  //   status: "complete",
  //   featured: false,
  //   // lives in devBox/nd-files/cherrypy-movieRec/ — added to checklist, not yet decided for the site
  // },
];

// Helper: get only projects you want on the homepage grid
export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = projects;
