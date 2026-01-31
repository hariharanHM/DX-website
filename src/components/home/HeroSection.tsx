"use client";

import React from "react";
import Image from "next/image";
import {
  Column,
  Row,
  Heading,
  Text,
  Avatar,
  Button,
  IconButton,
} from "@once-ui-system/core";
import { about, person, social, home } from "@/resources";
import { withBasePath } from "@/utils/withBasePath";
import styles from "./HomeSections.module.scss";

// Business contact number
const CONTACT_PHONE_DISPLAY = "+91 63813 46237";
// Digits only, including country code (used for https://wa.me/<number>)
const WHATSAPP_NUMBER = "916381346237";

export const HeroSection = () => {
  if (!about.intro.display) return null;

  return (
    <Column
      fillWidth
      gap="l"
      horizontal="center"
      className={styles.heroSection}
      paddingY="16"
      paddingX="l"
    >
      {/* Logo in top left */}
      <Row fillWidth paddingBottom="l" horizontal="start">
        <Image
          src={withBasePath("/images/DesignerX-logo.png")}
          alt="DesignerX logo"
          width={120}
          height={67}
          priority={false}
          style={{ objectFit: "contain", display: "block" }}
        />
      </Row>

      {/* Centered content */}
      <Column
        fillWidth
        gap="m"
        horizontal="center"
        align="center"
        style={{ textAlign: "center" }}
      >
        <Heading
          variant="display-strong-xl"
          align="center"
          className={styles.brandTitle}
          // style={{ color: "#000000" }}
        >
          DESIGNERX
        </Heading>
        <Heading
          variant="display-strong-m"
          align="center"
          className={styles.heroHeadline}
        >
          {home.headline}
        </Heading>
        <Text
          variant="heading-default-l"
          onBackground="neutral-weak"
          align="center"
        >
          {home.subline}
        </Text>
      </Column>

      {/* Right: social and CTA - kept for contact info */}
      <Column
        gap="m"
        horizontal="center"
        align="center"
        paddingTop="l"
        className={styles.heroProfile}
      >
          {social.length > 0 && (
            <Row
              gap="8"
              wrap
              horizontal="center"
              paddingTop="12"
              className={`${styles.socialLinks} `}
            >
              {social
                .filter((item) => item.essential)
                .map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="m"
                            variant="secondary"
                            className={`${styles.socialButton} ${styles[
                              item.name.toLowerCase().replace(/\s+/g, "")
                            ]}`}
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                            className={`${styles.socialButton} ${styles[
                              item.name.toLowerCase().replace(/\s+/g, "")
                            ]}`}
                          />
                        </Row>
                      </React.Fragment>
                    )
                )}
            </Row>
          )}

          <Row
            gap="8"
            wrap
            horizontal="center"
            paddingTop="12"
            className={`${styles.heroContactButtons} `}
          >
            <Button
              href={`mailto:${person.email}`}
              size="m"
              variant="secondary"
              prefixIcon="email"
              label={person.email}
              className={`${styles.ctaButton} ${styles.emailButton}`}
            />
            <Button
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              size="m"
              variant="primary"
              prefixIcon="whatsapp"
              label={`Call / WhatsApp: ${CONTACT_PHONE_DISPLAY}`}
              className={styles.ctaButton}
            />
          </Row>
        </Column>
      
    </Column>
  );
};
