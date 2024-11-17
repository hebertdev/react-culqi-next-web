import { Container, Box, Title, Button, Center } from "@mantine/core";
import { IconBrandNpm } from "@tabler/icons-react";
import classes from "./About.module.css"; // Importa el archivo CSS módulo

//assets
import banner from "assets/banner_infojobs.webp";

export function About() {
  return (
    <Box
      className={classes.container}
      style={{ backgroundImage: `url('${banner.src}')` }} // El fondo se maneja a través de la clase CSS
    >
      <Box className={classes.content}>
        <Container size={"md"}>
          <Box>
            <Title order={1} className={classes.title}>
              Una{" "}
              <span className={classes.highlightText}>biblioteca de React</span>{" "}
              para la integración con el{" "}
              <span className={classes.orangeText}>
                procesador de pagos Culqi
              </span>
              , compatible con{" "}
              <span className={classes.highlightText}>Next.js</span>
            </Title>
            <Demo />
            <Center className={classes.buttonWrapper}>
              <a
                href="https://www.npmjs.com/package/react-culqi-next"
                target="_blank"
                rel="noreferrer"
              >
                <Button mt={"md"} leftSection={<IconBrandNpm />} bg={"orange"}>
                  npm
                </Button>
              </a>
            </Center>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

import { CodeHighlight } from "@mantine/code-highlight";

const demoCode = `npm install react-culqi-next`;

function Demo() {
  return (
    <CodeHighlight
      code={demoCode}
      language="tsx"
      copyLabel="Copy button code"
      copiedLabel="Copied!"
      className={classes.demoContainer} // Agregar una clase para el contenedor del demo
    />
  );
}
