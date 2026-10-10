export interface JourneyMilestone {
  id: string;
  year: string;
  phase: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  imageCaption?: string;
  isOriginalPhoto?: boolean;
  badge: string;
}

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: "college-club",
    year: "Phase 1: Student Club Origins",
    phase: "Grassroots Innovation",
    title: "Founded as a Student Tech & Robotics Club",
    tagline: "Started with late-night prototyping and open-hardware electronics experimentation",
    description:
      "ALISTRON began in a student workshop as an enthusiastic club of engineers and makers exploring open-hardware robotics, microcontrollers, and initial biosignal acquisition.",
    highlights: [
      "Built initial open-hardware robotics prototypes",
      "Participated in collegiate hackathons & technical symposiums",
      "Grew a student community dedicated to practical hardware innovation"
    ],
    image: "/images/journey/alistron-team-photo.jpg",
    imageCaption: "Original Student Tech & Robotics Club Team",
    isOriginalPhoto: true,
    badge: "Student Club Era"
  },
  {
    id: "first-prototype",
    year: "Phase 2: R&D Exploration",
    phase: "First NeuroTech Lab Work",
    title: "First Electromyography (EMG) Bionic Arm Prototype",
    tagline: "Transitioning from hobby projects to non-invasive neural signal research",
    description:
      "Recognizing the potential of surface muscle signal classification, the team developed an exploratory 3D-printed prosthetic hand controlled via sEMG sensors, laying the foundation for Alistron NeuroTech.",
    highlights: [
      "Custom sEMG signal processing & noise filtering circuits",
      "3D-printed multi-articulated bionic hand mechanics",
      "Presented research prototypes at collegiate technology expos"
    ],
    image: "/images/journey/bionic-arm-emblem.png",
    imageCaption: "Original Bionic Arm Prototype Emblem",
    isOriginalPhoto: true,
    badge: "NeuroTech Genesis"
  },
  {
    id: "stem-workshops",
    year: "Phase 3: Educational Outreach",
    phase: "School STEM Outreach",
    title: "Launching Practical School STEM Workshops",
    tagline: "Bringing real-world electronics & robotics to students",
    description:
      "Driven by requests from local student communities, the team began hosting hands-on Arduino and robotics learning sessions, helping students build real-world electronics intuition.",
    highlights: [
      "Piloting interactive hands-on robotics and electronics workshops",
      "Developing modular Arduino & sensor learning kits",
      "Structuring hands-on STEM curriculum frameworks for students"
    ],
    image: "/images/journey/kv-stem-auditorium.jpg",
    imageCaption: "Original School STEM Training Session",
    isOriginalPhoto: true,
    badge: "STEM Expansion"
  },
  {
    id: "full-company",
    year: "Phase 4: MSME / Udyam Registration",
    phase: "MSME-Registered Venture",
    title: "Building Alistron Into an Engineering & Technology Venture",
    tagline: "Structuring operations into specialized engineering & education divisions",
    description:
      "Alistron is an MSME-registered venture focused on practical STEM education and emerging NeuroTech research. Through Alistron STEM, we aim to support schools with STEM lab planning, Arduino workshops, and robotics learning. Alistron NeuroTech focuses on assistive technology concepts, biosignal engineering, and related research.",
    highlights: [
      "MSME/Udyam registration supporting Alistron's business identity.",
      "Two focused divisions: Alistron NeuroTech and Alistron STEM.",
      "Developing educational programs, engineering projects, and institutional collaborations."
    ],
    image: "/images/journey/venture-concept.jpg",
    imageCaption: "Illustrative Concept Image",
    badge: "MSME / UDYAM REGISTERED"
  }
];
