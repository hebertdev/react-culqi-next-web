"use client";

//components
import { Version3Culqi } from "./Version3";
import { Version4Culqi } from "./Version4";

//mantine
import { Container, Center, Text } from "@mantine/core";
import { useState } from "react";
import { SegmentedControl } from "@mantine/core";

export function Usage() {
  const [versionCulqi, setVersionCulqi] = useState("v4");

  return (
    <Container
      size={"xl"}
      style={{
        padding: "20px",
      }}
    >
      <Center>
        <SegmentedControl
          value={versionCulqi}
          onChange={setVersionCulqi}
          data={[
            { label: "v3", value: "v3" },
            { label: "v4", value: "v4" },
          ]}
        />
      </Center>
      <Text
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontWeight: "bold",
        }}
      >
        Por ahora el paquete solo sirve para cargos unicos por tarjetas y Yape.
        <br />
        (no suscripciones, no pagos en efectivos.)
      </Text>
      {versionCulqi === "v3" ? <Version3Culqi /> : <Version4Culqi />}
    </Container>
  );
}
