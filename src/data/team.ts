export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleBadge: string;
  description: string;
  image: string;
  iconType: "vision" | "strategy" | "product" | "embedded" | "hardware";
}

/* Leadership hierarchy: each tier renders as its own row, top to bottom. */
export const TEAM_TIERS: { label: string; role: string }[] = [
  { label: "Co-Founders", role: "Co-Founder" },
  { label: "Technical Team", role: "Technical Member" },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "aryan-jaiswal",
    name: "Aryan Jaiswal",
    role: "Co-Founder",
    roleBadge: "Co-Founder",
    description: "Vision, Research and Product Development",
    image: "/images/team/aryan-jaiswal.webp",
    iconType: "vision"
  },
  {
    id: "lal-awnish-nath-shadeo",
    name: "Lal Awnish Nath Shadeo",
    role: "Co-Founder",
    roleBadge: "Co-Founder",
    description: "Strategy, Growth and Operations",
    image: "/images/team/lal-awnish-nath-shadeo.webp",
    iconType: "strategy"
  },
  {
    id: "gaurang-jadoun",
    name: "Gaurang Jadoun",
    role: "Co-Founder",
    roleBadge: "Co-Founder",
    description: "Product Development and Technical Planning",
    image: "/images/team/gaurang-jadoun.webp",
    iconType: "product"
  },
  {
    id: "kaushlesh-sharma",
    name: "Kaushlesh Sharma",
    role: "Technical Member",
    roleBadge: "Technical Member",
    description: "Embedded Systems and IoT Development",
    image: "/images/team/kaushlesh-sharma.webp",
    iconType: "embedded"
  },
  {
    id: "divyansh-lahoni",
    name: "Divyansh Lahoni",
    role: "Technical Member",
    roleBadge: "Technical Member",
    description: "Hardware Design and Prototyping",
    image: "/images/team/divyansh-lahoni.webp",
    iconType: "hardware"
  }
];
