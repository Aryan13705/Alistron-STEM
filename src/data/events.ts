export interface AlistronEvent {
  id: string;
  name: string;
  slug: string;
  activityType: string;
  category: "Workshops" | "Robotics" | "Arduino" | "School Outreach";
  categories: ("Workshops" | "Robotics" | "Arduino" | "School Outreach")[];
  shortDescription: string;
  fullDescription: string;
  topicsCovered: string[];
  date: string;
  venue: string;
  status: "Completed Edition" | "Flagship Program" | "School Outreach" | "Upcoming / Scheduled";
  targetAudience: string;
  highlights: string[];
  hasOriginalPhoto: boolean;
  image?: string;
  verificationNotice: string;
}

export const ALISTRON_EVENTS: AlistronEvent[] = [
  {
    id: "ardubotics",
    name: "Ardubotics",
    slug: "ardubotics",
    activityType: "Arduino & Robotics Learning Activity",
    category: "Robotics",
    categories: ["Robotics", "Arduino", "Workshops"],
    shortDescription: "An Arduino and robotics learning activity.",
    fullDescription:
      "Ardubotics is an Arduino and robotics learning activity organized by Alistron. The initiative focuses on introducing practical electronics, microcontroller programming, and basic autonomous robotics fundamentals through hands-on experimentation.",
    topicsCovered: [
      "Microcontroller basics (Arduino platform overview)",
      "Breadboard circuit prototyping & electronic component wiring",
      "Digital input/output and analog sensor readings",
      "DC motor drivers and motor actuation principles",
      "Basic obstacle and edge detection concepts"
    ],
    date: "Date on record (exact schedule to be confirmed)",
    venue: "Venue & institution details to be confirmed",
    status: "Flagship Program",
    targetAudience: "Students & robotics beginners",
    highlights: [
      "Hands-on microcontroller breadboard wiring",
      "Introduction to physical computing logic",
      "Modular hardware kit experimentation"
    ],
    hasOriginalPhoto: false,
    verificationNotice: "Specific session dates, batch schedules, and institutional venue records are subject to archival confirmation."
  },
  {
    id: "algo-2-arduino",
    name: "Algo 2 Arduino",
    slug: "algo-2-arduino",
    activityType: "Algorithms & Microcontroller Workshop",
    category: "Workshops",
    categories: ["Workshops", "Arduino"],
    shortDescription: "A workshop connecting algorithmic thinking with Arduino-based learning.",
    fullDescription:
      "Algo 2 Arduino is a workshop connecting algorithmic thinking with Arduino-based learning. The session explores how computational logic, conditional branches, and state machines translate directly into physical microcontroller behavior and sensor responsiveness.",
    topicsCovered: [
      "Algorithmic decision trees and logic flowcharts",
      "Translating pseudocode into embedded C++ instructions",
      "State-machine logic for robotic behaviors",
      "Handling real-time sensor inputs and thresholds",
      "Debugging logic routines with Serial Monitor"
    ],
    date: "Date on record (exact schedule to be confirmed)",
    venue: "Venue & institution details to be confirmed",
    status: "Completed Edition",
    targetAudience: "High school & collegiate students exploring coding & hardware",
    highlights: [
      "Direct bridge between abstract code and physical outputs",
      "State machine programming exercises",
      "Logic optimization for microcontrollers"
    ],
    hasOriginalPhoto: false,
    verificationNotice: "Session records, participant documentation, and exact hosting dates are currently undergoing verification."
  },
  {
    id: "ardubotics-2-0",
    name: "Ardubotics 2.0",
    slug: "ardubotics-2-0",
    activityType: "Subsequent Robotics Edition",
    category: "Robotics",
    categories: ["Robotics", "Arduino", "Workshops"],
    shortDescription: "A subsequent edition of the Ardubotics initiative.",
    fullDescription:
      "Ardubotics 2.0 is a subsequent edition of the Ardubotics initiative. Building upon initial Arduino and robotics learning, this edition extends into multi-sensor integration, chassis assembly mechanics, and closed-loop motion control.",
    topicsCovered: [
      "Multi-sensor array integration and threshold tuning",
      "Chassis balance, gear ratios, and motor selection",
      "Differential drive speed control via PWM modulation",
      "Refined line-following and boundary detection routines",
      "Hardware troubleshooting and circuit debugging"
    ],
    date: "Date on record (subsequent edition)",
    venue: "Venue & institution details to be confirmed",
    status: "Completed Edition",
    targetAudience: "Intermediate students & robotics hobbyists",
    highlights: [
      "Extended multi-sensor integration challenges",
      "Differential drive PWM motor control",
      "Iterative chassis and circuit refinement"
    ],
    hasOriginalPhoto: false,
    verificationNotice: "Edition logs and verified historical session archives are currently being documented."
  },
  {
    id: "ardubotics-3-0",
    name: "Ardubotics 3.0",
    slug: "ardubotics-3-0",
    activityType: "Advanced Robotics & Wireless Edition",
    category: "Robotics",
    categories: ["Robotics", "Arduino", "Workshops"],
    shortDescription: "A further edition of the Ardubotics initiative.",
    fullDescription:
      "Ardubotics 3.0 represents a further edition of the Ardubotics initiative. This activity explores advanced robotics architectures, introductory wireless serial control interfaces, and autonomous obstacle navigation logic.",
    topicsCovered: [
      "Introduction to wireless communication protocols (Bluetooth / RF)",
      "UART serial command parsing for remote vehicular motion",
      "Ultrasonic distance sensing with servo scanning turrets",
      "Fail-safe emergency stop and watchdog routines",
      "Collaborative robotics challenge execution"
    ],
    date: "Date on record (further edition)",
    venue: "Venue & institution details to be confirmed",
    status: "Completed Edition",
    targetAudience: "Advanced student teams & robotics enthusiasts",
    highlights: [
      "Wireless command decoding over serial RF",
      "Autonomous spatial obstacle avoidance",
      "System integration and challenge testing"
    ],
    hasOriginalPhoto: false,
    verificationNotice: "Event records, photo archives, and institutional venue details are awaiting confirmation."
  },
  {
    id: "stem-training-kv",
    name: "STEM Training for Kendriya Vidyalaya Students",
    slug: "stem-training-kv",
    activityType: "School Outreach STEM Program",
    category: "School Outreach",
    categories: ["School Outreach", "Workshops"],
    shortDescription: "Training delivered to school students, with exact topics and institution details to be confirmed.",
    fullDescription:
      "STEM Training for Kendriya Vidyalaya Students represents training delivered to school students, with exact topics and institution details to be confirmed. The outreach aims to encourage practical science, electronics, and technology awareness among young learners.",
    topicsCovered: [
      "Foundational electronics and physical computing concepts",
      "Interactive hardware demonstrations with microcontrollers",
      "Introduction to robotics and real-world engineering thinking",
      "Practical science experimentation activities",
      "Exact syllabus modules to be confirmed with school administration"
    ],
    date: "Date to be confirmed",
    venue: "Kendriya Vidyalaya (Specific school branch to be confirmed)",
    status: "School Outreach",
    targetAudience: "School students (Kendriya Vidyalaya)",
    highlights: [
      "School-level practical STEM awareness",
      "Hands-on demonstration of hardware engineering concepts",
      "Encouraging curiosity in electronics and robotics"
    ],
    hasOriginalPhoto: false,
    verificationNotice: "Specific Kendriya Vidyalaya branch name, dates, participant details, and exact syllabus topics are pending formal institutional confirmation. Alistron does not claim institutional endorsement."
  }
];
