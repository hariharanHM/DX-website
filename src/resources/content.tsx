import {
  About,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Hariharan",
  lastName: "C",
  name: "HARIHARAN C",
  role: "Founder & CEO",
  avatar: "/images/avatar.jpg",
  email: "designerx1111@gmail.com",
  // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'.
  // Use your own time zone (for India, "Asia/Kolkata").
  location: "Asia/Kolkata",
  // optional: Leave the array empty if you don't want to display languages
  languages: ["English"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Let’s Build a Scalable Marketing System</>,
  description: (
    <>
      Book a strategy call and get clarity on what your brand needs next.
    </>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/profile.php?id=61579692912958",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/hariharan-c-4159121a7",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – Quality-Driven Partnerships`,
  description: `We work with a limited number of clients at a time to ensure strategic focus, quality execution, and measurable marketing outcomes.`,
  headline: <>Quality-Driven Partnerships</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Digital Marketing</strong>
        {/* <Line background="brand-alpha-strong" vert height="20" /> */}
        {/* <Text marginRight="4" onBackground="brand-medium">
          Performance‑first campaigns for measurable growth
        </Text> */}
      </Row>
    ),
    // Link to the Meta Advertising service page
    href: "/work/meta-advertising-services",
  },
  subline: (
    <>
      We work with a limited number of clients at a time to ensure strategic
      focus, quality execution, and measurable marketing outcomes.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a ${person.role} helping brands grow online`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        DesignerX is a digital marketing and design studio helping brands solve real business problems with measurable results. We specialize in strategic brand positioning, high-performing campaigns, and data-driven growth — all built on the belief that good design and marketing should be practical, scalable, and honest.
      </>
    ),
  },
  story: {
    display: true,
    title: "Our Story",
    description: (
      <>
        DesignerX was founded with a simple belief — good design and marketing should be practical, measurable, and scalable. What started as a solo creative journey has evolved into a growing design studio working with brands across industries. We partner with businesses that value clarity, quality execution, and real results over noise and shortcuts.
      </>
    ),
  },
  team: {
    display: true,
    title: "Our Team",
    members: [
      {
        name: "Kowshik",
        role: "Video Editor & Web Developer",
        strength: "Motion visuals & functional web builds",
      },
      {
        name: "Suriya Giri",
        role: "Photography & Video Specialist",
        strength: "Visual storytelling & post-production",
      },
      {
        name: "David",
        role: "Brand Design Expert",
        strength: "Brand identity & visual systems",
      },
      {
        name: "Nandhitha",
        role: "Digital Marketing Expert",
        strength: "Campaign strategy & performance marketing",
      },
      {
        name: "Gokila",
        role: "UI/UX Developer & Social Media Handler",
        strength: "User experience & content execution",
      },
    ],
  },
  beliefs: {
    display: true,
    title: "What We Believe",
    values: [
      "Design should solve business problems, not just look pretty",
      "Marketing should be measurable and ROI-focused",
      "Simplicity beats noise every time",
      "Long-term partnerships matter more than quick wins",
      "Direct communication builds trust",
    ],
  },
  process: {
    display: true,
    title: "How We Work",
    steps: [
      {
        number: "1",
        title: "Understand the Brand",
        description: "We dive deep into your business, audience, and goals to create a solid foundation for strategy.",
      },
      {
        number: "2",
        title: "Define Strategy",
        description: "Clear positioning, messaging, and a roadmap that aligns with your business objectives.",
      },
      {
        number: "3",
        title: "Design & Execute",
        description: "Beautiful, functional designs and campaigns built to perform, whether it's ads, content, or branding.",
      },
      {
        number: "4",
        title: "Measure & Optimize",
        description: "We track what matters, share insights, and continuously improve for better results.",
      },
    ],
  },
  industries: {
    display: true,
    title: "Industries We Work With",
    sectors: [
      "Education & Institutes",
      "Textiles & Manufacturing",
      "Real Estate",
      "E-commerce & Startups",
      "Personal Brands & Creators",
      "Services & Consulting",
    ],
  },
  why: {
    display: true,
    title: "Why Clients Choose DesignerX",
    reasons: [
      "Direct communication — no gatekeeping, just honest conversations",
      "Limited clients = better focus on your success",
      "Clean, modern execution that reflects quality",
      "Transparent timelines and straightforward pricing",
      "Strategic thinking paired with hands-on execution",
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Case studies",
  title: `Case studies – ${person.name}`,
  description: `Selected digital marketing campaigns managed by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, work };
