"use client";

import {
  Column,
  Row,
  Heading,
  Text,
  RevealFx,
  Button,
  Icon,
} from "@once-ui-system/core";
import { withBasePath } from "@/utils/withBasePath";
import styles from "./Services.module.scss";
import { MdVerified } from "react-icons/md";

interface Service {
  title: string;
  description: string;
  icon: string;
  features: { text: string; icon: string }[];
  href: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Digital Marketing & Growth Strategy",
    description:
      "We help brands grow with data-driven digital marketing strategies designed for visibility, engagement, and consistent lead generation. Our marketing-first approach ensures every creative decision supports measurable business outcomes.",
    icon: "rocket",
    href: "/work/digital-marketing",
    image: "/images/projects/project-01/cover-01.jpg",
    features: [
      { text: "Digital Marketing Strategy & Planning", icon: "fb-verified" },
      { text: "Social Media Marketing & Management", icon: "fb-verified" },
      { text: "Performance-Oriented Content Strategy", icon: "fb-verified" },
      { text: "Lead Generation & Funnel-Based Content", icon: "fb-verified" },
      { text: "Campaign Planning & Optimization Support", icon: "fb-verified" },
    ],
  },
  {
    title: "Brand Strategy & Visual Identity",
    description:
      "We create strong, cohesive brand systems that support long-term recognition and trust, ensuring your brand communicates with clarity and consistency.",
    icon: "sparkle",
    href: "/work/brand-strategy",
    image: "/images/projects/project-01/cover-02.jpg",
    features: [
      { text: "Brand Identity Design", icon: "fb-verified" },
      { text: "Logo Design & Brand Guidelines", icon: "fb-verified" },
      { text: "Visual Communication Systems", icon: "fb-verified" },
      { text: "Marketing & Brand Collaterals", icon: "fb-verified" },
    ],
  },
  {
    title: "Website Design & Development",
    description:
      "We design conversion-focused websites that align with your marketing goals and provide seamless user experiences across all platforms.",
    icon: "code",
    href: "/work/website-design",
    image: "/images/projects/project-01/cover-03.jpg",
    features: [
      { text: "UI/UX Design", icon: "fb-verified" },
      { text: "Custom Website Design & Development", icon: "fb-verified" },
      { text: "Business, Portfolio & Landing Pages", icon: "fb-verified" },
      { text: "Website Maintenance & Content Updates", icon: "fb-verified" },
    ],
  },
  {
    title: "Content Creation & SEO Writing",
    description:
      "We develop high-quality, search-optimized content that strengthens your brand voice while supporting digital marketing performance.",
    icon: "document",
    href: "/work/content-seo",
    image: "/images/projects/project-01/cover-04.jpg",
    features: [
      { text: "SEO Content Writing", icon: "fb-verified" },
      { text: "Website & Landing Page Content", icon: "fb-verified" },
      { text: "Ad Copy & Social Media Captions", icon: "fb-verified" },
    ],
  },
  {
    title: "Video Production & Creative Media",
    description:
      "We produce refined, high-impact video content crafted for marketing, advertising, and brand storytelling.",
    icon: "play",
    href: "/work/video-production",
    image: "/images/projects/project-01/cover-01.jpg",
    features: [
      { text: "Short-Form Videos (Reels, Shorts & Ads)", icon: "fb-verified" },
      { text: "Brand & Promotional Videos", icon: "fb-verified" },
      { text: "Long-Form & YouTube Video Editing", icon: "fb-verified" },
    ],
  },
  {
    title: "Creative Direction & Marketing Consulting",
    description:
      "We partner with brands as strategic advisors, providing creative leadership and marketing guidance aligned with growth objectives.",
    icon: "lightbulb",
    href: "/work/consulting",
    image: "/images/projects/project-01/cover-02.jpg",
    features: [
      { text: "Creative & Marketing Direction", icon: "fb-verified" },
      { text: "Campaign & Ad Creative Guidance", icon: "fb-verified" },
      { text: "Content & Growth Consulting", icon: "fb-verified" },
    ],
  },
];

export const Services = () => {
  return (
    <Column id="services" fillWidth gap="xl" paddingY="xl" horizontal="center">
      {/* Section header */}
      <Column
        fillWidth
        gap="m"
        paddingX="l"
        s={{ paddingX: "m" }}
        horizontal="center"
        align="center"
        style={{ textAlign: "center" }}
      >
        <RevealFx translateY="16" delay={0.2} style={{ width: "100%" }}>
          <Heading
            as="h2"
            variant="display-strong-l"
            align="center"
            wrap="balance"
            style={{ textAlign: "center", width: "100%" }}
          >
            Our Services
          </Heading>
        </RevealFx>
        <RevealFx translateY="16" delay={0.3} style={{ width: "100%" }}>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
            wrap="balance"
            style={{ textAlign: "center", width: "100%" }}
          >
            End-to-end digital marketing solutions designed to scale your
            business
          </Text>
        </RevealFx>
      </Column>

      {/* Services list */}
      <Column fillWidth maxWidth="l" gap="l" paddingX="l" s={{ paddingX: "m" }}>
        {services.map((service, index) => (
          <RevealFx
            key={service.title}
            translateY="16"
            delay={0.35 + index * 0.1}
          >
            <div className={styles.serviceCard}>
              {/* Gradient accent */}
              <div className={styles.gradientAccent} />

              <div className={styles.serviceInner}>
                {/* Left: content */}
                <div className={styles.serviceContent}>
                  {/* Icon + Title row */}
                  <div className={styles.serviceHeader}>
                    <div className={styles.serviceIcon}>
                      {service.title === "Meta Advertising" ? (
                        <span className={styles.metaLogoWrap}>
                          <img
                            src={withBasePath("/images/meta-logo.png")}
                            alt="Meta logo"
                            className={styles.metaLogo}
                            width={40}
                            height={40}
                            loading="lazy"
                          />
                        </span>
                      ) : service.title === "SEO Services" ? (
                        <span className={styles.metaLogoWrap}>
                          <img
                            src={withBasePath("/images/seo-logo.png")}
                            alt="SEO logo"
                            className={styles.seoLogo}
                            width={40}
                            height={40}
                            loading="lazy"
                          />
                        </span>
                      ) : service.title === "Social Media Management" ? (
                        <span className={styles.metaLogoWrap}>
                          <img
                            src={withBasePath("/images/social-logo.png")}
                            alt="Social logo"
                            className={styles.socialLogo}
                            width={40}
                            height={40}
                            loading="lazy"
                          />
                        </span>
                      ) : service.title === "Content Creation" ? (
                        <span className={styles.metaLogoWrap}>
                          <img
                            src={withBasePath("/images/camera-logo.png")}
                            alt="Content logo"
                            className={styles.cameraLogo}
                            width={40}
                            height={40}
                            loading="lazy"
                          />
                        </span>
                      ) : (
                        <Icon
                          name={service.icon as any}
                          size="m"
                          onBackground="brand-strong"
                        />
                      )}
                    </div>
                    <Heading
                      as="h3"
                      variant="heading-strong-xl"
                      className={styles.spa}
                    >
                      {service.title}
                    </Heading>
                  </div>

                  <Text variant="body-default-l" onBackground="neutral-weak">
                    {service.description}
                  </Text>

                  {/* Features */}
                  <ul className={styles.featureList}>
                    {service.features.map((feature) => (
                      <li key={feature.text} className={styles.featureItem}>
                        <span
                          className={`${styles.featureIconWrap} ${styles.featureIconWrapNoBg}`}
                        >
                          <img
                            src={withBasePath("/images/verified-logo.png")}
                            alt="verified"
                            className={styles.featureVerified}
                            width={18}
                            height={18}
                            loading="lazy"
                          />
                        </span>
                        <Text
                          variant="body-default-m"
                          onBackground="neutral-medium"
                        >
                          {feature.text}
                        </Text>
                      </li>
                    ))}
                  </ul>

                  {/* CTA removed per request */}
                </div>

                {/* Right: image */}
                <div className={styles.serviceImage}>
                  <img
                    src={withBasePath(service.image)}
                    alt={service.title}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </RevealFx>
        ))}
      </Column>
    </Column>
  );
};
