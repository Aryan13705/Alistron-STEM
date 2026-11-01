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
  /** Shown only when known. */
  date?: string;
  venue: string;
  status: "Completed Edition" | "Flagship Program" | "School Outreach" | "Upcoming / Scheduled";
  targetAudience: string;
  highlights: string[];
  hasOriginalPhoto: boolean;
  image?: string;
}

const SRMIST = "SRM Institute of Science and Technology (SRMIST)";

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
    venue: SRMIST,
    status: "Flagship Program",
    targetAudience: "Students & robotics beginners",
    highlights: [
      "Hands-on microcontroller breadboard wiring",
      "Introduction to physical computing logic",
      "Modular hardware kit experimentation"
    ],
    hasOriginalPhoto: false
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
    venue: SRMIST,
    status: "Completed Edition",
    targetAudience: "High school & collegiate students exploring coding & hardware",
    highlights: [
      "Direct bridge between abstract code and physical outputs",
      "State machine programming exercises",
      "Logic optimization for microcontrollers"
    ],
    hasOriginalPhoto: false
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
    venue: SRMIST,
    status: "Completed Edition",
    targetAudience: "Intermediate students & robotics hobbyists",
    highlights: [
      "Extended multi-sensor integration challenges",
      "Differential drive PWM motor control",
      "Iterative chassis and circuit refinement"
    ],
    hasOriginalPhoto: false
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
    venue: SRMIST,
    status: "Completed Edition",
    targetAudience: "Advanced student teams & robotics enthusiasts",
    highlights: [
      "Wireless command decoding over serial RF",
      "Autonomous spatial obstacle avoidance",
      "System integration and challenge testing"
    ],
    hasOriginalPhoto: false
  },
  {
    id: "stem-training-kv",
    name: "STEM Training for Kendriya Vidyalaya Students",
    slug: "stem-training-kv",
    activityType: "School Outreach STEM Program",
    category: "School Outreach",
    categories: ["School Outreach", "Workshops"],
    shortDescription: "Hands-on STEM training for Kendriya Vidyalaya students, hosted at SRMIST.",
    fullDescription:
      "STEM Training for Kendriya Vidyalaya Students is a hands-on outreach programme delivered by Alistron at SRM Institute of Science and Technology (SRMIST). The training encourages practical science, electronics, and technology awareness among young learners.",
    topicsCovered: [
      "Foundational electronics and physical computing concepts",
      "Interactive hardware demonstrations with microcontrollers",
      "Introduction to robotics and real-world engineering thinking",
      "Practical science experimentation activities"
    ],
    venue: SRMIST,
    status: "School Outreach",
    targetAudience: "School students (Kendriya Vidyalaya)",
    highlights: [
      "School-level practical STEM awareness",
      "Hands-on demonstration of hardware engineering concepts",
      "Encouraging curiosity in electronics and robotics"
    ],
    hasOriginalPhoto: true,
    image: "/images/events/kv-stem-auditorium.webp"
  }
];
