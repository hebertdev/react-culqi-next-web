"use client";

import { ProductCardV3 } from "./ProductCardV3";
import { CodeHighlight } from "@mantine/code-highlight";
import { Box, Text, Card, Alert, Group, Button } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import { CulqiProviderV3 } from "react-culqi-next";
import { useState } from "react";
import classes from "./Version3.module.css"; // Importa el archivo CSS módulo

type Events = "closed" | "accepted" | "refused" | "noevent";

export function Version3Culqi() {
  const [events, setEvents] = useState<Events>("noevent");
  const [messageEvent, setMessageEvent] =
    useState(`Aqui se mostrarán los diferentes eventos del checkout. | Cierre
  del checkout | Tarjeta aceptada | Tarjeta rechazada`);

  const changeEvent = (events: Events, message: string) => {
    setEvents(events);
    setMessageEvent(message);
  };

  return (
    <CulqiProviderV3 publicKey="pk_test_87f7a99e65683920">
      <Box className={`${classes.container} ${classes.containerMobile}`}>
        <Card
          className={classes.productCardWrapper}
          shadow="sm"
          p="lg"
          radius="md"
          withBorder
        >
          <ProductCardV3 changeEvent={changeEvent} />
          <Box className={classes.alertBox}>
            <Group className={classes.buttonGroup}>
              <Button
                variant="outline"
                size="xs"
                component="a"
                href="https://docs.culqi.com/es/documentacion/checkout/"
                target="_blank"
                referrerPolicy="no-referrer"
                className={classes.docsButton}
              >
                Docs
              </Button>
              <Button
                variant="outline"
                size="xs"
                component="a"
                href="https://docs.culqi.com/es/documentacion/pagos-online/tarjetas-de-prueba/"
                target="_blank"
                referrerPolicy="no-referrer"
                className={classes.docsButton}
              >
                Tarjetas de prueba
              </Button>
              <Button
                variant="outline"
                size="xs"
                component="a"
                href="https://docs.culqi.com/es/documentacion/checkout/v3/culqi-checkout/"
                target="_blank"
                referrerPolicy="no-referrer"
                className={classes.docsButton}
              >
                API
              </Button>
            </Group>

            <Text className={classes.eventText}>Eventos del checkout</Text>
            <Alert
              icon={<IconAlertCircle size="1rem" />}
              title={
                events === "noevent"
                  ? "Eventos"
                  : events === "accepted"
                  ? "Tarjeta aceptada"
                  : events === "closed"
                  ? "Cancelado"
                  : events === "refused"
                  ? "Tarjeta rechazada"
                  : "Error"
              }
              color={
                events === "noevent"
                  ? "blue"
                  : events === "accepted"
                  ? "green"
                  : events === "closed"
                  ? "orange"
                  : events === "refused"
                  ? "red"
                  : "red"
              }
              className={classes.alertTitle}
            >
              <span className={classes.alertContent}>{messageEvent}</span>
            </Alert>
          </Box>
        </Card>
        <Card
          className={classes.cardWrapper}
          shadow="sm"
          radius="md"
          withBorder
        >
          <Text className={classes.cardHeader}>Culqi Checkout V3</Text>
          <Box>
            <Demo />
          </Box>
        </Card>
      </Box>
    </CulqiProviderV3>
  );
}

const demoCode = `import { useState } from 'react';
import { CulqiProviderV3, useCheckoutV3 } from 'react-culqi-next';

const MyApp = () => {
  return (
    <CulqiProviderV3 publicKey="pk_test_4YrVwTo....your_public_key">
      <MyButton />
    </CulqiProviderV3>
  );
};

const MyButton = () => {
  const [amount, setAmount] = useState(10000);
  const [title, setTitle] = useState('Orange T-shirt');

  const { openCulqi, token, error } = useCheckoutV3({
    settings: {
      title: title,
      currency: 'PEN',
      description: '',
      amount: amount,
      //optional
      options: {
        lang: 'auto',
        installments: false,
        customButton: '',
        modal: true,
        style: {
          buttontext: '',
          desctext: '',
          logo: '',
          maincolor: '',
          maintext: '',
        },
      },
    },
    onClose: () => {
      console.log('Handle the closing of the modal');
    },
    onToken: token => {
      console.log('Send your token to the backend', token);
    },
    onError: error => {
      console.log('handle the errors', error);
    },
  });

  return (
    <>
      <button onClick={openCulqi}>Pay now</button>
    </>
  );
};`;

function Demo() {
  return (
    <CodeHighlight
      code={demoCode}
      language="tsx"
      copyLabel="Copy button code"
      copiedLabel="Copied!"
      className={classes.demoContainer}
    />
  );
}
