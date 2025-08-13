export type Asset =
  | { type: "image"; url: string; caption?: string }
  | { type: "model"; url: string; caption?: string }
  | { type: "file"; url: string; filename: string };

export type Project = {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  cover: string;
  repo?: string;
  live?: string;
  assets?: Asset[];
  body?: string;
  technicalSkills: string[];
  keywords: string[];
  description: string;
  challenges: string[];
  outcomes: string[];
};

export const projects: Project[] = [
  {
    title: "Iron Man Watch Charger",
    slug: "iron-man-charger",
    summary: "3D-printed stand with embedded Apple Watch charger and cable routing.",
    tags: ["3D print", "CAD", "Product"],
    cover: "/images/ironman-cover.jpg",
    assets: [
      { type: "image", url: "/images/ironman-1.jpg" },
      { type: "model", url: "/models/ironman-stand.glb" },
      { type: "file", url: "/downloads/ironman-stand.stl", filename: "ironman-stand.stl" },
    ],
    body:
      "A printable watch charger desk stand themed after a repulsor hand. Designed for FDM, snap-fit cable path.",
    technicalSkills: ["Marketing", "3D Printing (FDM)", "Search Engine Optimization", "Etsy Selling", "Customer Service"],
    keywords: ["3D printing", "Apple Watch", "Desk Organizer", "Repulsor Design", "Cable Routing", "FDM Optimization"],
    description: "A 3D printed desk stand for Apple Watch charging, inspired by Iron Man's repulsor technology. The project involved optimizing a complex 3D model with integrated cable management for FDM printing with minimal supports, and ensuring proper fit for the wireless charger. Used for marketing and selling on Etsy.",
    challenges: [
      "Marketing the product to a niche audience",
      "Optimizing the model for FDM printing with minimal support material",
      "Integrating cable routing that maintained aesthetic appeal",
      "Ensuring proper alignment for wireless charging functionality",
      "Creating a unique product that showcases both technical skill and creativity"
    ],
    outcomes: [
      "Successfully created a functional, aesthetically pleasing charging stand",
      "Provided customers with a functional and unique product",
      "Created a unique product that showcases both technical skill and creativity"
    ]
  },
  {
    title: "Generator Prototype",
    slug: "generator-prototype",
    summary: "6-coil electromagnetic generator with optimized mechanical design, gear system, and FEA-validated housing.",
    tags: ["Electronics", "CAD", "Mechanical Design", "FEA Analysis", "Power Generation"],
    cover: "/images/generator-cover.png",
    assets: [
      { type: "model", url: "/models/generator.glb" },
      { type: "file", url: "/downloads/generator-gear-design.pdf", filename: "Gear Design Analysis.pdf" },
    ],
    technicalSkills: ["Circuit Design", "3D Printing", "Electronics", "CAD Modeling", "Power Generation", "Gear Design", "FEA Stress Analysis", "Mechanical Design", "SolidWorks", "ANSYS"],
    keywords: ["electromagnetic induction", "power generation", "3D printed housing", "rectifier circuit", "coil design", "renewable energy", "gear optimization", "stress analysis", "mechanical design", "FEA simulation"],
    description: "Developed a comprehensive electromagnetic generator prototype using 6-coil configuration with a dual-bridge rectifier for AC to DC conversion. The project integrated electrical engineering principles with advanced mechanical design, including custom gear systems for optimal power transmission and FEA stress analysis to ensure structural integrity under operational loads.",
    challenges: [
      "Designing an efficient coil configuration for maximum power output",
      "Creating a robust housing with FEA-validated stress distribution",
      "Implementing proper rectification for stable DC output",
      "Balancing power generation with mechanical efficiency",
      "Designing and optimizing gear ratios for optimal power transmission",
      "Analyzing stress concentrations and optimizing housing geometry"
    ],
    outcomes: [
      "Successfully generated measurable electrical output with optimized efficiency",
      "Created a durable, FEA-validated housing solution with 40% weight reduction",
      "Demonstrated practical application of electromagnetic and mechanical principles",
      "Integrated multiple engineering disciplines including FEA analysis and gear design",
      "Achieved 200% increase in output voltage through optimized 3:1 gear ratio implementation",
      "Validated design safety through comprehensive stress analysis"
    ]
  },
  {
    title: "QuickBites Food Delivery Startup",
    slug: "quickbites-startup",
    summary: "Student-oriented food delivery startup with optimized logistics and app development.",
    tags: ["Startup", "Logistics", "App Development", "Business"],
    cover: "/images/quickbites-cover.jpg",
    technicalSkills: ["Business Strategy", "Logistics Optimization", "App Development", "Data Analysis", "Market Research"],
    keywords: ["food delivery", "startup", "logistics", "student market", "app development", "business model"],
    description: "Founded and led a student-oriented food delivery startup that addresses the unique needs of college students. The project involved developing a comprehensive business strategy, optimizing delivery logistics, and creating a user-friendly mobile application.",
    challenges: [
      "Developing a sustainable business model for the student market",
      "Optimizing delivery routes to reduce costs and improve efficiency",
      "Creating an intuitive app interface for both customers and delivery partners",
      "Securing initial funding and building partnerships with local restaurants"
    ],
    outcomes: [
      "Reduced operational costs by 25% compared to traditional delivery services",
      "Secured funding through startup competitions and investor presentations",
      "Built a growing user base of satisfied customers",
      "Established partnerships with multiple local restaurants and delivery partners"
    ]
  },
  {
    title: "Unity Game Development Portfolio",
    slug: "unity-game-development",
    summary: "Collection of 2D games including Pong and custom QuickBites-themed Snake game using Unity and C#.",
    tags: ["Game Development", "C#", "Unity", "2D Games", "Mobile Development"],
    cover: "/images/qb-game.png",
    technicalSkills: ["C# Programming", "Unity Engine", "2D Game Development", "Rigidbody2D Physics", "Object-Oriented Design", "Mobile Game Development"],
    keywords: ["Unity games", "2D development", "C# programming", "mobile games", "Pong", "Snake game", "QuickBites", "game mechanics"],
    description: "Developed multiple 2D games using Unity and C#, including a classic Pong implementation and a custom Snake-like game themed around the QuickBites food delivery app. Projects demonstrate proficiency with Unity's built-in physics system (Rigidbody2D), game mechanics implementation, and mobile game development.",
    challenges: [
      "Implementing smooth paddle movement and ball physics using Rigidbody2D",
      "Creating engaging game mechanics for the QuickBites-themed Snake game",
      "Optimizing game performance for mobile devices",
      "Designing intuitive touch controls for mobile gameplay",
      "Integrating game mechanics with the QuickBites brand identity"
    ],
    outcomes: [
      "Successfully created two fully playable 2D games",
      "Demonstrated proficiency with Unity's physics system and C# programming",
      "Developed mobile-optimized games with touch controls",
      "Created branded content that supports the QuickBites startup",
      "Built a foundation for future game development projects"
    ]
  },
  {
    title: "Cornell Digital Agriculture Hackathon",
    slug: "cornell-hackathon",
    summary: "AI-powered solution for agricultural data literacy using ChatGPT and WhatsApp API integration.",
    tags: ["AI/ML", "Agriculture", "API Integration", "Hackathon"],
    cover: "/images/hackathon-board.jpg",
    technicalSkills: ["API Integration", "AI/ML", "Data Processing", "Business Model Development", "User Research"],
    keywords: ["artificial intelligence", "agriculture", "data literacy", "WhatsApp API", "ChatGPT", "hackathon", "social impact"],
    description: "Collaborated on an innovative solution to improve data literacy and availability for underprivileged agriculturalists. The project integrated ChatGPT LLM with WhatsApp Chat API to deliver processed satellite imaging data to users in an accessible format.",
    challenges: [
      "Integrating multiple APIs for seamless data flow",
      "Processing and simplifying complex agricultural data for end users",
      "Creating an intuitive chatbot interface for non-technical users",
      "Developing a sustainable business model for data acquisition"
    ],
    outcomes: [
      "Achieved finalist status at Cornell Digital Agriculture Hackathon",
      "Successfully integrated ChatGPT with WhatsApp API",
      "Created a scalable business model for agricultural data services",
      "Demonstrated ability to solve real-world problems with technology"
    ]
  }
];
