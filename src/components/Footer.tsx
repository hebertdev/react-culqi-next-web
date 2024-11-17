import { Container, Text, Anchor, Group } from "@mantine/core";

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#111", padding: "20px 0", color: "#fff" }}
    >
      <Container size="sm">
        <Group
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text size="sm">
            &copy; {new Date().getFullYear()} - All rights reserved.
          </Text>
          <Anchor
            href="https://hebertdev.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#49a19d",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
              transition: "color 0.3s",
            }}
          >
            hebertdev.com
          </Anchor>
        </Group>
      </Container>
    </footer>
  );
}
