import { ActionIcon, Container, Group, Text } from "@mantine/core";
import classes from "./Header.module.css";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";

export function HeaderSimple() {
  return (
    <>
      <header className={classes.header}>
        <Container size="md" className={classes.inner}>
          <Text
            size="xl"
            style={{ fontWeight: "bold" }}
            component={Link}
            href="/"
          >
            React Culqi Next
          </Text>
          <Group gap={5}>
            <ActionIcon
              variant="transparent"
              component="a"
              href="https://github.com/hebertdev/react-culqi-next"
              target="_blank"
            >
              <IconBrandGithub />
            </ActionIcon>
          </Group>
        </Container>
      </header>
      <div style={{ height: "55px" }} />
    </>
  );
}
