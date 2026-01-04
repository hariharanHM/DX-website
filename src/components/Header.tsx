"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Fade, Flex, Line, Row, ToggleButton } from "@once-ui-system/core";

import { routes, display } from "@/resources";
import { withBasePath } from "@/utils/withBasePath";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  locale = "en-GB",
}) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade
        s={{ hide: true }}
        fillWidth
        position="fixed"
        height="80"
        zIndex={9}
      />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        vertical="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        {/* Logo on the left - part of the header row so it scrolls/sticks with navbar */}
        <Row paddingLeft="12" fillWidth vertical="center">
          <a href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={withBasePath("/images/DesignerX-logo.png")}
              alt="DesignerX logo"
              width={160}
              height={40}
              priority
              style={{ objectFit: "contain" }}
            />
          </a>
        </Row>
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row
              gap="4"
              vertical="center"
              textVariant="body-default-s"
              suppressHydrationWarning
            >
              {/* Home */}
              {routes["/"] && (
                <ToggleButton
                  prefixIcon="home"
                  href="/"
                  selected={pathname === "/"}
                />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />

              {/* Services (in-page anchor) */}
              <Row s={{ hide: true }}>
                <ToggleButton
                  prefixIcon="grid"
                  href="/#services"
                  label="Services"
                />
              </Row>
              <Row hide s={{ hide: false }}>
                <ToggleButton prefixIcon="grid" href="/#services" />
              </Row>

              {/* Testimonials (in-page anchor) */}
              <Row s={{ hide: true }}>
                <ToggleButton
                  prefixIcon="star"
                  href="/#testimonials"
                  label="Testimonials"
                />
              </Row>
              <Row hide s={{ hide: false }}>
                <ToggleButton prefixIcon="star" href="/#testimonials" />
              </Row>

              {/* Projects (in-page anchor) */}
              <Row s={{ hide: true }}>
                <ToggleButton
                  prefixIcon="briefcase"
                  href="/#projects"
                  label="Projects"
                />
              </Row>
              <Row hide s={{ hide: false }}>
                <ToggleButton prefixIcon="briefcase" href="/#projects" />
              </Row>

              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Row>
          </Row>
        </Row>
        <Flex fillWidth horizontal="end" vertical="center">
          {/* Right spacer to keep navbar centered */}
        </Flex>
      </Row>
    </>
  );
};
