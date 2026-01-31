import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, home, person, social } from "@/resources";
import { withBasePath } from "@/utils/withBasePath";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    // Static hosting (GitHub Pages) can't run the OG image generation API route.
    image: home.image,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    // {
    //   title: about.story.title,
    //   display: about.story.display,
    //   items: [],
    // },
    {
      title: about.team.title,
      display: about.team.display,
      items: about.team.members.map((member) => member.name),
    },
    // {
    //   title: about.beliefs.title,
    //   display: about.beliefs.display,
    //   items: [],
    // },
    {
      title: about.process.title,
      display: about.process.display,
      items: about.process.steps.map((step) => step.title),
    },
    {
      title: about.industries.title,
      display: about.industries.display,
      items: [],
    },
    {
      title: about.why.title,
      display: about.why.display,
      items: [],
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        // Static hosting (GitHub Pages) can't run the OG image generation API route.
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column"}} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            {/* <Avatar src={withBasePath(person.avatar)} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )} */}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            <Row
              fitWidth
              border="brand-alpha-medium"
              background="brand-alpha-weak"
              radius="full"
              padding="4"
              gap="8"
              marginBottom="m"
              vertical="center"
              className={styles.blockAlign}
              style={{
                backdropFilter: "blur(var(--static-space-1))",
              }}
            >
              <Icon paddingLeft="12" name="whatsapp" onBackground="brand-weak" />
              <Row paddingX="8">Chat on WhatsApp</Row>
              <IconButton
                href="https://wa.me/916381346237"
                target="_blank"
                rel="noopener noreferrer"
                data-border="rounded"
                variant="secondary"
                icon="chevronRight"
              />
            </Row>
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                      .filter((item) => item.essential)
                      .map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.story.display && (
            <Column fillWidth gap="m" marginBottom="xl">
              <Heading as="h2" id={about.story.title} variant="display-strong-s" marginBottom="m">
                {about.story.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {about.story.description}
              </Text>
            </Column>
          )}

          {about.team.display && (
            <Column fillWidth gap="l" marginBottom="xl">
              <Heading as="h2" id={about.team.title} variant="display-strong-s" marginBottom="m">
                {about.team.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.team.members.map((member, index) => (
                  <Column key={`${member.name}-${index}`} fillWidth>
                    <Text variant="heading-strong-l">{member.name}</Text>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="4">
                      {member.role}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {member.strength}
                    </Text>
                  </Column>
                ))}
              </Column>
            </Column>
          )}

          {about.beliefs.display && (
            <Column fillWidth gap="l" marginBottom="xl">
              <Heading as="h2" id={about.beliefs.title} variant="display-strong-s" marginBottom="m">
                {about.beliefs.title}
              </Heading>
              <Column as="ul" gap="12">
                {about.beliefs.values.map((value, index) => (
                  <Text
                    as="li"
                    key={`${value}-${index}`}
                    variant="body-default-m"
                  >
                    {value}
                  </Text>
                ))}
              </Column>
            </Column>
          )}

          {about.process.display && (
            <Column fillWidth gap="l" marginBottom="xl">
              <Heading as="h2" id={about.process.title} variant="display-strong-s" marginBottom="m">
                {about.process.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.process.steps.map((step, index) => (
                  <Column key={`${step.title}-${index}`} fillWidth>
                    <Row gap="12" vertical="start" marginBottom="8">
                      <Text variant="display-strong-m" onBackground="brand-weak">
                        {step.number}
                      </Text>
                      <Column fillWidth>
                        <Text id={step.title} variant="heading-strong-l" marginBottom="4">
                          {step.title}
                        </Text>
                        <Text variant="body-default-m" onBackground="neutral-weak">
                          {step.description}
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                ))}
              </Column>
            </Column>
          )}

          {about.industries.display && (
            <Column fillWidth gap="l" marginBottom="xl">
              <Heading as="h2" id={about.industries.title} variant="display-strong-s" marginBottom="m">
                {about.industries.title}
              </Heading>
              <Row wrap gap="8">
                {about.industries.sectors.map((sector, index) => (
                  <Tag key={`${sector}-${index}`} size="l" style={{ backgroundColor: "var(--scheme-brand-800)", color: "#000000" }}>
                    {sector}
                  </Tag>
                ))}
              </Row>
            </Column>
          )}

          {about.why.display && (
            <Column fillWidth gap="l" marginBottom="xl">
              <Heading as="h2" id={about.why.title} variant="display-strong-s" marginBottom="m">
                {about.why.title}
              </Heading>
              <Column as="ul" gap="12">
                {about.why.reasons.map((reason, index) => (
                  <Text
                    as="li"
                    key={`${reason}-${index}`}
                    variant="body-default-m"
                  >
                    {reason}
                  </Text>
                ))}
              </Column>
            </Column>
          )}

          {/* Call to Action Section */}
          <Column fillWidth gap="m" marginTop="xl" padding="l" border="brand-alpha-medium" background="brand-alpha-weak" radius="l" marginBottom="xl" align="center" horizontal="center">
            <Heading variant="heading-strong-l" align="center">
              Looking for a creative partner who actually understands your business?
            </Heading>
            <Row gap="12" wrap horizontal="center" marginTop="m">
              <Button
                href="https://wa.me/916381346237"
                target="_blank"
                rel="noopener noreferrer"
                size="m"
                variant="secondary"
                prefixIcon="whatsapp"
              >
                Chat on WhatsApp
              </Button>
              <Button
                href="/#services"
                size="m"
                variant="secondary"
                prefixIcon="briefcase"
              >
                View Services
              </Button>
            </Row>
          </Column>
        </Column>
      </Row>
    </Column>
  );
}