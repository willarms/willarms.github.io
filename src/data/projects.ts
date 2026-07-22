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
    // screenshot: "betwise.png",
  },
  {
    slug: "pos-evm",
    title: "Positive EV Model",
    shortDescription: "Algorithm that scrapes lines across online sportsbooks to identify statistical outliers and positive expected value bets.",
    techStack: ["Python"],
    status: "in-progress",
    featured: true,
    githubUrl: "https://github.com/willarms/posEVM",  // update URL if needed
  },
  {
    slug: "game-of-life",
    title: "Conway's Game of Life",
    shortDescription: "Command-line implementation of Conway's Game of Life, built around a custom life-simulation library with a Makefile-driven build.",
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
    // NOTE: README documents an unresolved Google OAuth 500 error — fix or note as a known issue before showcasing a live demo
  },
  {
    slug: "web3-db",
    title: "Web3 Database",
    shortDescription: "A decentralized file-storage system: a Solidity smart contract for on-chain metadata paired with a FastAPI backend and web frontend for uploading and browsing files.",
    techStack: ["Solidity", "Hardhat", "Python", "FastAPI", "JavaScript"],
    status: "complete",
    featured: false,
    githubUrl: "https://github.com/willarms/web3DB",  // update URL
    video: "web3db-demo.mp4",  // compressed from devBox/web3DB/tests/fs-demo.mp4 (10MB → ~625KB, 1280w/30fps/no audio)
    // screenshot: "web3db.png",  // source: devBox/web3DB/tests/Screenshot 2025-09-28 at 3.21.04 PM.png
    highlights: [
      "Team project — this entry covers your contribution",
      "On-chain file metadata via a Hardhat-managed Solidity contract",
      "Early stages end-to-end demo recorded (see devBox/web3DB/tests/)",
      "Check updated project url for project's progress"
    ],
  },
  {
    slug: "scheme-tictactoe",
    title: "Scheme Tic-Tac-Toe",
    shortDescription: "Tic-Tac-Toe implemented in Scheme, a functional Lisp dialect.",
    techStack: ["Scheme"],
    status: "complete",
    featured: false,
    // No dedicated GitHub repo — lives in devBox/nd-files/scheme-tictactoe/
  },
  {
    slug: "java-game",
    title: "Java Arcade Game",
    shortDescription: "A small Java arcade-style game built around a Strategy-pattern collider system (easy/medium/hard difficulty variants).",
    techStack: ["Java"],
    status: "complete",
    featured: false,
    // No dedicated GitHub repo — lives in devBox/nd-files/javaGame/. Checklist marks this "might not include."
  },

  // --- Projects to add later ---
  // {
  //   slug: "cbb-model",
  //   title: "CBB Prediction Model",
  //   shortDescription: "Monte Carlo March Madness bracket model blending KenPom/Torvik ratings with market odds and public pick rates.",
  //   techStack: ["Python", "pandas", "scikit-learn"],
  //   status: "in-progress",
  //   featured: false,
  // },
  // {
  //   slug: "whale-tracker",
  //   title: "Whale Tracker",
  //   ...  // not started — no local code found yet
  // },
  // {
  //   slug: "cherrypy-movie-rec",
  //   title: "Movie Recommender (CherryPy)",
  //   shortDescription: "A CherryPy-based movie recommendation web app with a full test suite, built on a MovieLens-style dataset.",
  //   techStack: ["Python", "CherryPy"],
  //   status: "complete",
  //   featured: false,
  //   // lives in devBox/nd-files/cherrypy-movieRec/ — added to checklist, not yet decided for the site
  // },
];

// Helper: get only projects you want on the homepage grid
export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = projects;
