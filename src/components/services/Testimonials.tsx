"use client";

import { Column, Heading, Text, RevealFx } from "@once-ui-system/core";
import styles from "./Testimonials.module.scss";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  result?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Working with DesignerX was a smooth and strategic experience. They understood our brand vision deeply and translated it into a strong, confident logo for DarkThread Co. Beyond design, their marketing consultation helped us structure our ad approach and improve lead quality. The guidance was practical, data-driven, and focused on long-term growth. It truly felt like a partnership rather than a service.",
    author: "Vaibhav",
    role: "Founder",
    company: "DarkThread Co",
    result: "Clear Brand Positioning",
  },
  {
    quote:
      "DesignerX handled our content shoots, graphic design, and overall marketing strategy with a lot of clarity. The visuals felt premium and consistent, and the content was aligned with what our customers actually respond to. Their strategic input helped us plan better instead of posting randomly. The process was professional, smooth, and effective.",
    author: "Sriram Karthik",
    role: "Founder",
    company: "KTS Fabrics",
    result: "Premium visuals, clear marketing direction",
  },
  {
    quote:
      "DesignerX played a key role in strengthening our digital presence. From content shoots and video editing to scriptwriting and Meta ads strategy, everything was well planned and professionally executed. Their understanding of educational marketing and social media content helped us communicate our programs clearly and reach the right audience. The consistency and strategic approach made a noticeable difference.",
    author: "Maayan Skill Development Center",
    role: "Team",
    company: "Coimbatore",
    result: "Improved reach, better lead quality",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className={styles.card}>
    {testimonial.result && (
      <div className={styles.resultBadge}>
        <Text variant="label-default-s">
          {testimonial.result}
        </Text>
      </div>
    )}

    <Text
      variant="body-default-l"
      onBackground="neutral-strong"
      className={styles.quote}
    >
      "{testimonial.quote}"
    </Text>

    <div className={styles.authorInfo}>
      <Text variant="body-default-m">
        {testimonial.author}
      </Text>
      <Text variant="body-default-s" onBackground="neutral-weak">
        {testimonial.role} at {testimonial.company}
      </Text>
    </div>
  </div>
);

export const Testimonials = () => {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <Column
      id="testimonials"
      fillWidth
      gap="xl"
      paddingY="xl"
      paddingX="l"
      s={{ paddingX: "m" }}
    >
      <Column fillWidth gap="m" horizontal="center" align="center">
        <RevealFx translateY="16" delay={0.2}>
          <Heading
            as="h2"
            variant="display-strong-l"
            align="center"
            wrap="balance"
          >
            What Our Clients Say
          </Heading>
        </RevealFx>
        <RevealFx translateY="16" delay={0.3}>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
            style={{ maxWidth: "32rem" }}
          >
            Real results from real businesses we've helped grow
          </Text>
        </RevealFx>
      </Column>

      <RevealFx translateY="16" delay={0.4}>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.author}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </RevealFx>
    </Column>
  );
};
