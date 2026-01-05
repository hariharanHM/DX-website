import {
  Heading,
  Text,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
  Line,
  Icon,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { HeroSection, Mailchimp, Services, Testimonials } from "@/components";
import { Projects } from "@/components/work/Projects";
import { withBasePath } from "@/utils/withBasePath";
import styles from "@/components/services/Services.module.scss";
export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column fillWidth gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        // Static hosting (GitHub Pages) can't run the OG image generation API route.
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {/* Hero */}
      <RevealFx translateY="16" delay={0.4}>
        <HeroSection />
      </RevealFx>

      {/* Customized Subscription Model (above services) */}
      <Column fillWidth maxWidth="l" gap="l" paddingX="l" s={{ paddingX: "m" }}>
        <div
          className={`${styles.serviceCard} brand-card`}
          style={{ backgroundColor: "var(--scheme-brand-800)" }}
        >
          <div className={styles.gradientAccent} />
          <div className={styles.serviceInner}>
            {/* Left: content */}
            <div className={styles.serviceContent}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIcon}>
                  <Icon
                    name={"sparkle" as any}
                    size="m"
                    onBackground="brand-strong"
                  />
                </div>
                <Heading
                  as="h3"
                  variant="heading-strong-xl"
                  className={styles.spa}
                >
                  Customized Subscription Model
                </Heading>
              </div>

              <Text variant="body-default-l" onBackground="neutral-weak">
                We do not offer fixed, one-size-fits-all packages. Each brand has different
                goals, audiences, and growth stages. Our subscription plans are custom-built
                based on your marketing objectives, content requirements, and execution scope.
              </Text>

              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
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
                    Strategically aligned marketing efforts
                  </Text>
                </li>
                <li className={styles.featureItem}>
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
                    Focused creative execution
                  </Text>
                </li>
                <li className={styles.featureItem}>
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
                    Flexible scalability based on performance
                  </Text>
                </li>
                <li className={styles.featureItem}>
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
                    Measurable and outcome-driven results
                  </Text>
                </li>
              </ul>

              <Text
                variant="body-default-m"
                onBackground="neutral-weak"
                style={{ marginTop: "0.75rem" }}
              >
                Our subscriptions are designed as long-term partnerships, ensuring
                consistent quality, dedicated attention, and sustainable brand growth.
              </Text>
            </div>

            {/* Right: keep layout balanced with an illustrative image */}
            <div className={styles.serviceImage}>
              <img
                src={withBasePath("/images/projects/project-01/cover-04.jpg")}
                alt="Customized Subscription Model"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Column>

      {/* Services */}
      <Services />

      {/* Testimonials */}
      <Testimonials />

      {/* Featured Projects */}
      <Column
        id="projects"
        fillWidth
        maxWidth="m"
        gap="24"
        marginBottom="l"
        horizontal="center"
      >
        <Row fillWidth paddingLeft="l" paddingTop="24">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Featured Projects
          </Heading>
        </Row>
        <Projects range={[1, 4]} />
      </Column>

      {/* Newsletter */}
      <Mailchimp />
    </Column>
  );
}
