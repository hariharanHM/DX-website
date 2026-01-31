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
        className={`${styles.position} brand-card`}
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
        {/* Left spacer to keep navbar centered */}
        <Row paddingLeft="12" fillWidth vertical="center" />
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
            style={{ backgroundColor: "var(--scheme-brand-800)" }}
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

              {/* About */}
              {routes["/about"] && (
                <Row s={{ hide: true }}>
                  <ToggleButton
                    prefixIcon="person"
                    href="/about"
                    label="About Us"
                    selected={pathname === "/about"}
                  />
                </Row>
              )}
              {routes["/about"] && (
                <Row hide s={{ hide: false }}>
                  <ToggleButton
                    prefixIcon="person"
                    href="/about"
                    selected={pathname === "/about"}
                  />
                </Row>
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
              {/* <Row s={{ hide: true }}>
                <ToggleButton
                  prefixIcon="briefcase"
                  href="/#projects"
                  label="Projects"
                />
              </Row> */}

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
